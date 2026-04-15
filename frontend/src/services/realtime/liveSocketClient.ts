import { createWorldState } from '../../mock/engine/createWorldState';
import type { ConnectionStatus } from '../../types/realtime';
import type { RealtimeClient } from './realtimeClient';

export function createLiveSocketClient(): RealtimeClient {
  let status: ConnectionStatus = 'disconnected';
  const snapshot = createWorldState();
  const statusListeners = new Set<(status: ConnectionStatus) => void>();

  const emitStatus = (nextStatus: ConnectionStatus) => {
    status = nextStatus;
    statusListeners.forEach((handler) => handler(nextStatus));
  };

  return {
    connect() {
      emitStatus('disconnected');
    },
    disconnect() {
      emitStatus('disconnected');
    },
    getSnapshot() {
      return structuredClone(snapshot);
    },
    subscribe() {
      return () => undefined;
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
