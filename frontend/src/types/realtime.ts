import type { DashboardSnapshot } from './dashboard';

export type ConnectionStatus =
  | 'connecting'
  | 'connected'
  | 'reconnecting'
  | 'disconnected';

export type RealtimeChannel =
  | 'global-status'
  | 'factory-overview'
  | 'knitting'
  | 'linking-sewing'
  | 'finishing-packaging';

export type DashboardDelta = Partial<DashboardSnapshot>;

export interface RealtimeMessage<TPayload> {
  channel: RealtimeChannel;
  type: 'snapshot' | 'delta';
  payload: TPayload;
  timestamp: string;
}
