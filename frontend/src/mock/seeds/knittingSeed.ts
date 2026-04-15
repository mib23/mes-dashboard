import type { FaultAlert, MachineCard, ProductionProgressItem } from '../../types/dashboard';

export const knittingProgressSeed: ProductionProgressItem[] = [
  { name: '前片', actual: 1420, planned: 1800, progress: 78.9 },
  { name: '后片', actual: 1380, planned: 1800, progress: 76.7 },
  { name: '袖子', actual: 1480, planned: 1900, progress: 77.9 },
];

export const knittingFaultSeed: FaultAlert[] = [
  {
    id: 'fault-yarn-042',
    machineId: 'M-042',
    title: '断纱报警',
    detail: '04 机区横机停机，等待值机员处理。',
    durationSeconds: 192,
    severity: 'high',
  },
  {
    id: 'fault-needle-009',
    machineId: 'M-009',
    title: '漏针预警',
    detail: '01 机区传感器检测到漏针趋势，需复检。',
    durationSeconds: 765,
    severity: 'medium',
  },
];

export const knittingMachinesSeed: MachineCard[] = [
  'M-001', 'M-002', 'M-003', 'M-004', 'M-005', 'M-006', 'M-007', 'M-008',
  'M-009', 'M-010', 'M-011', 'M-012', 'M-013', 'M-014', 'M-015', 'M-016',
].map((id, index) => ({
  id,
  zone: `Z${Math.floor(index / 4) + 1}`,
  efficiency: 92 + (index % 5) * 1.5,
  status: index === 2 || index === 8 ? 'downtime' : index === 4 || index === 13 ? 'standby' : 'running',
  faultLabel: index === 2 ? '断纱' : index === 8 ? '漏针' : undefined,
}));
