import { useEffect } from 'react';
import { getRealtimeClient } from '../services/realtime/realtimeClient';
import { useDashboardStore } from '../store/useDashboardStore';

let started = false;
let mountCount = 0;
let stopHandles: Array<() => void> = [];
let teardownTimer: number | null = null;

function startRealtimeStream() {
  if (started) {
    return;
  }

  const client = getRealtimeClient();
  const store = useDashboardStore.getState();

  store.replaceSnapshot(client.getSnapshot());

  stopHandles = [
    client.onStatusChange((status) => {
      useDashboardStore.getState().setConnectionStatus(status);
    }),
    client.subscribe('global-status', (message) => {
      useDashboardStore.getState().replaceSnapshot(message.payload);
    }),
    client.subscribe('factory-overview', (message) => {
      useDashboardStore.getState().replaceSnapshot(message.payload);
    }),
    client.subscribe('knitting', (message) => {
      useDashboardStore.getState().replaceSnapshot(message.payload);
    }),
    client.subscribe('linking-sewing', (message) => {
      useDashboardStore.getState().replaceSnapshot(message.payload);
    }),
    client.subscribe('finishing-packaging', (message) => {
      useDashboardStore.getState().replaceSnapshot(message.payload);
    }),
  ];

  client.connect();
  started = true;
}

function stopRealtimeStream() {
  if (!started) {
    return;
  }

  stopHandles.forEach((stop) => stop());
  stopHandles = [];
  getRealtimeClient().disconnect();
  started = false;
}

export function useRealtimeDashboard() {
  useEffect(() => {
    mountCount += 1;
    if (teardownTimer !== null) {
      window.clearTimeout(teardownTimer);
      teardownTimer = null;
    }

    startRealtimeStream();

    return () => {
      mountCount -= 1;
      if (mountCount > 0) {
        return;
      }

      teardownTimer = window.setTimeout(() => {
        if (mountCount === 0) {
          stopRealtimeStream();
        }
        teardownTimer = null;
      }, 120);
    };
  }, []);
}
