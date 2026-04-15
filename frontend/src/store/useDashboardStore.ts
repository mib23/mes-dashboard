import { create } from 'zustand';
import { createWorldState } from '../mock/engine/createWorldState';
import type { DashboardSnapshot } from '../types/dashboard';
import type { ConnectionStatus, DashboardDelta } from '../types/realtime';

interface DashboardStore {
  snapshot: DashboardSnapshot;
  connectionStatus: ConnectionStatus;
  replaceSnapshot: (nextSnapshot: Partial<DashboardSnapshot>) => void;
  applyDelta: (delta: DashboardDelta) => void;
  setConnectionStatus: (status: ConnectionStatus) => void;
}

const initialSnapshot = createWorldState();

export const useDashboardStore = create<DashboardStore>((set) => ({
  snapshot: initialSnapshot,
  connectionStatus: 'connecting',
  replaceSnapshot: (nextSnapshot) =>
    set((state) => ({
      snapshot: {
        ...state.snapshot,
        ...nextSnapshot,
      },
    })),
  applyDelta: (delta) =>
    set((state) => ({
      snapshot: {
        ...state.snapshot,
        ...delta,
      },
    })),
  setConnectionStatus: (connectionStatus) => set({ connectionStatus }),
}));
