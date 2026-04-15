import { runtimeConfig } from '../../config/runtime';
import type { DashboardSnapshot } from '../../types/dashboard';
import type { ConnectionStatus, DashboardDelta, RealtimeChannel, RealtimeMessage } from '../../types/realtime';
import { createLiveSocketClient } from './liveSocketClient';
import { createMockSocketClient } from './mockSocketClient';

export type RealtimeHandler<TPayload = DashboardSnapshot | DashboardDelta> = (
  message: RealtimeMessage<TPayload>,
) => void;

export interface RealtimeClient {
  connect(): void;
  disconnect(): void;
  getSnapshot(): DashboardSnapshot;
  subscribe(channel: RealtimeChannel, handler: RealtimeHandler): () => void;
  onStatusChange(handler: (status: ConnectionStatus) => void): () => void;
}

let clientInstance: RealtimeClient | null = null;

export function getRealtimeClient() {
  if (!clientInstance) {
    clientInstance =
      runtimeConfig.realtimeMode === 'mock-realtime' ? createMockSocketClient() : createLiveSocketClient();
  }

  return clientInstance;
}
