import type { DashboardSnapshot } from '../../types/dashboard';
import { createWorldState } from './createWorldState';
import { applyWorldRules } from './rules';

export class TickEngine {
  private worldState: DashboardSnapshot = createWorldState();

  getSnapshot() {
    return structuredClone(this.worldState);
  }

  tick() {
    applyWorldRules(this.worldState);
    return this.getSnapshot();
  }

  reset() {
    this.worldState = createWorldState();
    return this.getSnapshot();
  }
}
