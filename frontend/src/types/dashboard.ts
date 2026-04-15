export type MachineStatus =
  | 'running'
  | 'standby'
  | 'warning'
  | 'downtime'
  | 'maintenance';

export interface DashboardMeta {
  currentTime: string;
  shiftName: string;
  lastUpdated: string;
  source: 'mock' | 'live';
}

export interface OrderRisk {
  id: string;
  customer: string;
  stage: string;
  etaMinutes: number;
  riskLevel: 'low' | 'medium' | 'high';
}

export interface WorkshopRanking {
  id: string;
  name: string;
  metricLabel: string;
  score: number;
  trend: number;
}

export interface QualityStage {
  name: string;
  yieldRate: number;
}

export interface FactoryOverviewData {
  planUnits: number;
  actualUnits: number;
  achievementRate: number;
  activeUnits: number;
  activeUnitsDelta: number;
  criticalDowntime: number;
  qualityYield: number;
  qualityStages: QualityStage[];
  equipmentRuntime: number;
  equipmentSignals: Array<{
    id: string;
    status: 'ok' | 'warn';
  }>;
  urgentOrders: OrderRisk[];
  workshopRankings: WorkshopRanking[];
}

export interface MachineCard {
  id: string;
  zone: string;
  efficiency: number;
  status: MachineStatus;
  faultLabel?: string;
}

export interface FaultAlert {
  id: string;
  machineId?: string;
  title: string;
  detail: string;
  durationSeconds: number;
  severity: 'medium' | 'high';
}

export interface ProductionProgressItem {
  name: string;
  actual: number;
  planned: number;
  progress: number;
}

export interface KnittingData {
  availability: number;
  performance: number;
  qualityRate: number;
  oee: number;
  totalFloorOutput: number;
  targetOutput: number;
  shiftTimeRemainingSeconds: number;
  progressItems: ProductionProgressItem[];
  activeFaults: FaultAlert[];
  machines: MachineCard[];
}

export interface TeamEfficiency {
  id: string;
  name: string;
  efficiency: number;
  actual: number;
  target: number;
  trend: 'up' | 'flat' | 'down';
}

export interface WipStage {
  id: string;
  name: string;
  units: number;
  status: 'normal' | 'warning' | 'critical';
}

export interface QualityDefect {
  id: string;
  name: string;
  line: string;
  defectRate: number;
  severity: 'normal' | 'critical';
}

export interface Performer {
  id: string;
  name: string;
  role: string;
  output: number;
  avatarSeed: string;
}

export interface LinkingSewingData {
  shiftClockSeconds: number;
  totalFloorOutput: number;
  teamEfficiencies: TeamEfficiency[];
  wipStages: WipStage[];
  bottleneckStageId: string;
  qualityAlerts: QualityDefect[];
  performers: Performer[];
  activeMachines: number;
  totalMachines: number;
  attendanceRate: number;
  hourlyTargetDelta: number;
}

export interface FinishingMachine {
  id: string;
  label: string;
  type: 'wash' | 'dry';
  status: MachineStatus;
  remainingSeconds: number;
  temperature: number;
  rpm?: number;
  airflow?: 'optimal' | 'reduced' | 'high';
  alertText?: string;
}

export interface BatchStreamItem {
  id: string;
  batchNo: string;
  station: string;
  progressUnits: number;
  targetUnits: number;
  progress: number;
  etaMinutes: number;
  color: 'primary' | 'secondary' | 'error';
}

export interface KitOrder {
  id: string;
  label: string;
  readySegments: number;
  totalSegments: number;
}

export interface ShippingDock {
  id: string;
  label: string;
  carrier: string;
  status: 'active' | 'waiting' | 'blocked';
}

export interface FinishingPackagingData {
  localTime: string;
  activeBottleneck: string;
  outboundReadiness: number;
  totalPackagedUnits: number;
  packagedTargetUnits: number;
  avgWashTemp: number;
  orderKitRate: number;
  completedOrders: number;
  totalOrders: number;
  machines: FinishingMachine[];
  batchStream: BatchStreamItem[];
  kitOrders: KitOrder[];
  shippingDock: ShippingDock;
}

export interface DashboardSnapshot {
  meta: DashboardMeta;
  factoryOverview: FactoryOverviewData;
  knitting: KnittingData;
  linkingSewing: LinkingSewingData;
  finishingPackaging: FinishingPackagingData;
}
