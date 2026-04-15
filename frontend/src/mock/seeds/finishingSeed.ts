import type { BatchStreamItem, FinishingMachine, KitOrder } from '../../types/dashboard';

export const finishingMachinesSeed: FinishingMachine[] = [
  {
    id: 'WASH_UNIT_01',
    label: 'WASH_UNIT_01',
    type: 'wash',
    status: 'running',
    remainingSeconds: 14 * 60 + 22,
    temperature: 64.2,
    rpm: 1200,
  },
  {
    id: 'WASH_UNIT_02',
    label: 'WASH_UNIT_02',
    type: 'wash',
    status: 'warning',
    remainingSeconds: 0,
    temperature: 58.1,
    rpm: 0,
    alertText: '阀门堵塞，维修中',
  },
  {
    id: 'DRY_UNIT_01',
    label: 'DRY_UNIT_01',
    type: 'dry',
    status: 'running',
    remainingSeconds: 8 * 60 + 45,
    temperature: 45,
    airflow: 'optimal',
  },
];

export const finishingBatchSeed: BatchStreamItem[] = [
  { id: 'batch-1', batchNo: 'BATCH_2023_XL_NAVY', station: '整烫工位 04', progressUnits: 142, targetUnits: 200, progress: 71, etaMinutes: 22, color: 'secondary' },
  { id: 'batch-2', batchNo: 'BATCH_2023_SM_WHITE', station: '包装线 01', progressUnits: 88, targetUnits: 150, progress: 58.7, etaMinutes: 45, color: 'primary' },
  { id: 'batch-3', batchNo: 'BATCH_2023_M_CHARCOAL', station: '包装线 02', progressUnits: 63, targetUnits: 120, progress: 52.5, etaMinutes: 36, color: 'error' },
];

export const finishingKitSeed: KitOrder[] = [
  { id: 'kit-8821', label: 'Order #8821 - Winter', readySegments: 4, totalSegments: 4 },
  { id: 'kit-8824', label: 'Order #8824 - Street', readySegments: 3, totalSegments: 4 },
  { id: 'kit-8827', label: 'Order #8827 - Gear', readySegments: 1, totalSegments: 4 },
];
