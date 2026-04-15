import type { DashboardSnapshot } from '../../types/dashboard';
import type { ConnectionStatus, RealtimeChannel, RealtimeMessage } from '../../types/realtime';
import { TickEngine } from '../../mock/engine/tickEngine';
import type { RealtimeClient, RealtimeHandler } from './realtimeClient';

function buildMessage(
  channel: RealtimeChannel,
  snapshot: DashboardSnapshot,
): RealtimeMessage<DashboardSnapshot | Partial<DashboardSnapshot>> {
  const timestamp = snapshot.meta.lastUpdated;

  switch (channel) {
    case 'factory-overview':
      return {
        channel,
        type: 'snapshot',
        payload: { meta: snapshot.meta, factoryOverview: snapshot.factoryOverview },
        timestamp,
      };
    case 'knitting':
      return {
        channel,
        type: 'snapshot',
        payload: { meta: snapshot.meta, knitting: snapshot.knitting },
        timestamp,
      };
    case 'linking-sewing':
      return {
        channel,
        type: 'snapshot',
        payload: { meta: snapshot.meta, linkingSewing: snapshot.linkingSewing },
        timestamp,
      };
    case 'finishing-packaging':
      return {
        channel,
        type: 'snapshot',
        payload: { meta: snapshot.meta, finishingPackaging: snapshot.finishingPackaging },
        timestamp,
      };
    case 'global-status':
    default:
      return {
        channel: 'global-status',
        type: 'snapshot',
        payload: { meta: snapshot.meta },
        timestamp,
      };
  }
}

export function createMockSocketClient(): RealtimeClient {
  const engine = new TickEngine();
  const listeners = new Map<RealtimeChannel, Set<RealtimeHandler>>();
  const statusListeners = new Set<(status: ConnectionStatus) => void>();

  let status: ConnectionStatus = 'disconnected';
  let tickTimer: number | null = null;
  let reconnectTimer: number | null = null;
  let tickCount = 0;

  const emitStatus = (nextStatus: ConnectionStatus) => {
    status = nextStatus;
    statusListeners.forEach((handler) => handler(nextStatus));
  };

  const emitSnapshot = (snapshot: DashboardSnapshot) => {
    const channels: RealtimeChannel[] = [
      'global-status',
      'factory-overview',
      'knitting',
      'linking-sewing',
      'finishing-packaging',
    ];

    for (const channel of channels) {
      const message = buildMessage(channel, snapshot);
      listeners.get(channel)?.forEach((handler) => handler(message));
    }
  };

  const startStreaming = () => {
    if (tickTimer !== null) {
      return;
    }

    const initialSnapshot = engine.getSnapshot();
    emitSnapshot(initialSnapshot);

    tickTimer = window.setInterval(() => {
      tickCount += 1;

      if (tickCount % 45 === 0) {
        if (tickTimer !== null) {
          window.clearInterval(tickTimer);
          tickTimer = null;
        }
        emitStatus('reconnecting');
        reconnectTimer = window.setTimeout(() => {
          reconnectTimer = null;
          emitStatus('connected');
          emitSnapshot(engine.getSnapshot());
          startStreaming();
        }, 2200);
        return;
      }

      const snapshot = engine.tick();
      emitSnapshot(snapshot);
    }, 1000);
  };

  return {
    connect() {
      if (status === 'connected' || status === 'connecting') {
        return;
      }

      emitStatus('connecting');
      window.setTimeout(() => {
        emitStatus('connected');
        startStreaming();
      }, 500);
    },
    disconnect() {
      if (tickTimer !== null) {
        window.clearInterval(tickTimer);
        tickTimer = null;
      }
      if (reconnectTimer !== null) {
        window.clearTimeout(reconnectTimer);
        reconnectTimer = null;
      }
      emitStatus('disconnected');
    },
    getSnapshot() {
      return engine.getSnapshot();
    },
    subscribe(channel, handler) {
      const nextHandlers = listeners.get(channel) ?? new Set<RealtimeHandler>();
      nextHandlers.add(handler);
      listeners.set(channel, nextHandlers);

      return () => {
        nextHandlers.delete(handler);
        if (nextHandlers.size === 0) {
          listeners.delete(channel);
        }
      };
    },
    onStatusChange(handler) {
      statusListeners.add(handler);
      handler(status);

      return () => {
        statusListeners.delete(handler);
      };
    },
  };
}
