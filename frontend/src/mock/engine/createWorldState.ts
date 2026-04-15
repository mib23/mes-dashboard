import type { DashboardSnapshot } from '../../types/dashboard';
import { factoryQualityStagesSeed, factoryUrgentOrdersSeed, workshopRankingSeed } from '../seeds/factorySeed';
import { finishingBatchSeed, finishingKitSeed, finishingMachinesSeed } from '../seeds/finishingSeed';
import { knittingFaultSeed, knittingMachinesSeed, knittingProgressSeed } from '../seeds/knittingSeed';
import { linkingPerformerSeed, linkingQualitySeed, linkingTeamSeed, linkingWipSeed } from '../seeds/linkingSeed';

export function createWorldState(): DashboardSnapshot {
  const now = new Date();

  return {
    meta: {
      currentTime: now.toISOString(),
      shiftName: 'A 班',
      lastUpdated: now.toISOString(),
      source: 'mock',
    },
    factoryOverview: {
      planUnits: 9000,
      actualUnits: 8478,
      achievementRate: 94.2,
      activeUnits: 142,
      activeUnitsDelta: 12,
      criticalDowntime: 4,
      qualityYield: 98.1,
      qualityStages: factoryQualityStagesSeed.map((item) => ({ ...item })),
      equipmentRuntime: 92.8,
      equipmentSignals: [
        { id: 'L01', status: 'ok' },
        { id: 'L02', status: 'warn' },
        { id: 'L03', status: 'ok' },
      ],
      urgentOrders: factoryUrgentOrdersSeed.map((item) => ({ ...item })),
      workshopRankings: workshopRankingSeed.map((item) => ({ ...item })),
    },
    knitting: {
      availability: 94.2,
      performance: 88.5,
      qualityRate: 99.1,
      oee: 82.6,
      totalFloorOutput: 4280,
      targetOutput: 5500,
      shiftTimeRemainingSeconds: 3 * 3600 + 42 * 60 + 15,
      progressItems: knittingProgressSeed.map((item) => ({ ...item })),
      activeFaults: knittingFaultSeed.map((item) => ({ ...item })),
      machines: knittingMachinesSeed.map((item) => ({ ...item })),
    },
    linkingSewing: {
      shiftClockSeconds: 3 * 3600 + 14 * 60 + 22,
      totalFloorOutput: 4822,
      teamEfficiencies: linkingTeamSeed.map((item) => ({ ...item })),
      wipStages: linkingWipSeed.map((item) => ({ ...item })),
      bottleneckStageId: 'sleeve-attach',
      qualityAlerts: linkingQualitySeed.map((item) => ({ ...item })),
      performers: linkingPerformerSeed.map((item) => ({ ...item })),
      activeMachines: 142,
      totalMachines: 150,
      attendanceRate: 97.6,
      hourlyTargetDelta: 120,
    },
    finishingPackaging: {
      localTime: now.toISOString(),
      activeBottleneck: 'Washing Line 02',
      outboundReadiness: 88,
      totalPackagedUnits: 4290,
      packagedTargetUnits: 6000,
      avgWashTemp: 62.4,
      orderKitRate: 94,
      completedOrders: 12,
      totalOrders: 14,
      machines: finishingMachinesSeed.map((item) => ({ ...item })),
      batchStream: finishingBatchSeed.map((item) => ({ ...item })),
      kitOrders: finishingKitSeed.map((item) => ({ ...item })),
      shippingDock: {
        id: 'dock-01',
        label: 'Dock 01 - LOADING',
        carrier: 'DHL Express',
        status: 'active',
      },
    },
  };
}
