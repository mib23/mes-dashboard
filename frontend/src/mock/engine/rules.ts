import type {
  DashboardSnapshot,
  FaultAlert,
  MachineCard,
  WorkshopRanking,
} from '../../types/dashboard';
import { chance, clamp, pickOne, randomBetween, randomInt } from './random';

function round(value: number, digits = 1) {
  const factor = 10 ** digits;
  return Math.round(value * factor) / factor;
}

function rotateMachineState(machine: MachineCard) {
  if (machine.status === 'downtime' && chance(0.22)) {
    machine.status = 'standby';
    machine.faultLabel = undefined;
    machine.efficiency = 84 + randomBetween(0, 6);
    return;
  }

  if (machine.status === 'warning' && chance(0.3)) {
    machine.status = 'running';
    machine.faultLabel = undefined;
    machine.efficiency = 90 + randomBetween(0, 6);
    return;
  }

  if (machine.status === 'standby' && chance(0.28)) {
    machine.status = 'running';
    machine.efficiency = 88 + randomBetween(0, 8);
    return;
  }

  if (machine.status === 'running' && chance(0.04)) {
    machine.status = chance(0.55) ? 'warning' : 'downtime';
    machine.faultLabel = machine.status === 'warning' ? '预警' : pickOne(['断纱', '漏针', '保养']);
    machine.efficiency = randomBetween(50, 82);
    return;
  }

  if (machine.status === 'running') {
    machine.efficiency = clamp(machine.efficiency + randomBetween(-1.5, 1.5), 90, 99.4);
  }

  if (machine.status === 'standby') {
    machine.efficiency = clamp(machine.efficiency + randomBetween(-1, 1), 72, 86);
  }
}

function buildKnittingFaults(machines: MachineCard[]): FaultAlert[] {
  const faults = machines
    .filter((machine) => machine.status === 'downtime' || machine.status === 'warning')
    .slice(0, 3)
    .map<FaultAlert>((machine, index) => ({
      id: `fault-${machine.id}`,
      machineId: machine.id,
      title: machine.status === 'downtime' ? (machine.faultLabel ?? '停机报警') : '质量预警',
      detail:
        machine.status === 'downtime'
          ? `${machine.id} 已停机，等待处理。`
          : `${machine.id} 监测到指标波动，需要值机员复核。`,
      durationSeconds: randomInt(90, 960) + index * 11,
      severity: machine.status === 'downtime' ? 'high' : 'medium',
    }));

  return faults.length > 0
    ? faults
    : [
        {
          id: 'fault-none',
          title: '当前无高优先级故障',
          detail: '主要机区保持稳定，系统转入巡检态。',
          durationSeconds: 0,
          severity: 'medium',
        },
      ];
}

function updateKnitting(state: DashboardSnapshot) {
  state.knitting.shiftTimeRemainingSeconds = Math.max(0, state.knitting.shiftTimeRemainingSeconds - 1);

  if (chance(0.3)) {
    rotateMachineState(pickOne(state.knitting.machines));
  }

  const runningCount = state.knitting.machines.filter((item) => item.status === 'running').length;
  const downtimeCount = state.knitting.machines.filter((item) => item.status === 'downtime').length;
  const warningCount = state.knitting.machines.filter((item) => item.status === 'warning').length;

  const throughputFactor = runningCount / state.knitting.machines.length;
  const yieldPressure = clamp(1 - (warningCount * 0.012 + downtimeCount * 0.02), 0.88, 1);
  const shiftIncrement = round(randomBetween(18, 28) * throughputFactor * yieldPressure, 0);

  for (const item of state.knitting.progressItems) {
    const sectionGain = Math.max(0, Math.round(shiftIncrement * randomBetween(0.28, 0.38)));
    item.actual = Math.min(item.planned, item.actual + sectionGain);
    item.progress = round((item.actual / item.planned) * 100);
  }

  state.knitting.totalFloorOutput += shiftIncrement;
  state.knitting.availability = round(clamp((runningCount / state.knitting.machines.length) * 100, 72, 99.2));
  state.knitting.performance = round(clamp(84 + throughputFactor * 11 - downtimeCount * 0.8, 70, 97));
  state.knitting.qualityRate = round(clamp(99.4 - warningCount * 0.45 - downtimeCount * 0.2, 93.5, 99.6));
  state.knitting.oee = round(
    (state.knitting.availability * state.knitting.performance * state.knitting.qualityRate) / 10000,
  );
  state.knitting.activeFaults = buildKnittingFaults(state.knitting.machines);

  return { runningCount, downtimeCount, warningCount, shiftIncrement };
}

function updateLinking(state: DashboardSnapshot, knittingShiftIncrement: number, downtimeCount: number) {
  state.linkingSewing.shiftClockSeconds = Math.max(0, state.linkingSewing.shiftClockSeconds - 1);

  const incomingLoad = knittingShiftIncrement * randomBetween(0.88, 1.02);
  const baseCapacity = 18 + state.linkingSewing.teamEfficiencies.reduce((sum, team) => sum + team.efficiency, 0) / 16;
  const qualityPenalty = state.linkingSewing.qualityAlerts.reduce((sum, item) => sum + item.defectRate, 0) / 16;
  const outputGain = Math.max(10, Math.round(baseCapacity - qualityPenalty - downtimeCount * 2));

  state.linkingSewing.totalFloorOutput += outputGain;

  for (const team of state.linkingSewing.teamEfficiencies) {
    const delta = randomBetween(-1.2, 1.2) - downtimeCount * 0.15;
    team.efficiency = round(clamp(team.efficiency + delta, 60, 99));
    team.actual += Math.max(4, Math.round(outputGain * randomBetween(0.24, 0.38)));
  }

  const stages = state.linkingSewing.wipStages;
  stages[0].units = Math.max(18, Math.round(stages[0].units + incomingLoad * 0.14 - outputGain * 0.16));
  stages[1].units = Math.max(28, Math.round(stages[1].units + incomingLoad * 0.22 - outputGain * 0.1 + downtimeCount * 2));
  stages[2].units = Math.max(10, Math.round(stages[2].units + incomingLoad * 0.08 - outputGain * 0.18));

  const bottleneck = stages.reduce((max, current) => (current.units > max.units ? current : max), stages[0]);
  state.linkingSewing.bottleneckStageId = bottleneck.id;

  for (const stage of stages) {
    stage.status = stage.id === bottleneck.id ? 'critical' : stage.units > 80 ? 'warning' : 'normal';
  }

  for (const defect of state.linkingSewing.qualityAlerts) {
    defect.defectRate = round(clamp(defect.defectRate + randomBetween(-0.4, 0.5) + downtimeCount * 0.03, 1.2, 16.5));
    defect.severity = defect.defectRate > 8 ? 'critical' : 'normal';
  }

  state.linkingSewing.performers = state.linkingSewing.performers
    .map((performer) => ({
      ...performer,
      output: performer.output + randomInt(2, 9),
    }))
    .sort((left, right) => right.output - left.output);

  state.linkingSewing.attendanceRate = round(clamp(97 + randomBetween(-0.4, 0.3), 95.8, 99));
  state.linkingSewing.activeMachines = Math.max(132, 150 - downtimeCount - randomInt(1, 4));
  state.linkingSewing.hourlyTargetDelta = Math.round(
    clamp(state.linkingSewing.hourlyTargetDelta + randomBetween(-16, 20) - downtimeCount * 4, -220, 260),
  );
}

function updateFinishing(state: DashboardSnapshot, downtimeCount: number) {
  let warningMachine = false;

  for (const machine of state.finishingPackaging.machines) {
    if (machine.status === 'running') {
      machine.remainingSeconds = Math.max(0, machine.remainingSeconds - randomInt(8, 18));
      machine.temperature = round(clamp(machine.temperature + randomBetween(-0.5, 0.5), 42, 66));
      if (typeof machine.rpm === 'number') {
        machine.rpm = Math.round(clamp(machine.rpm + randomBetween(-30, 25), 900, 1280));
      }
      if (machine.remainingSeconds === 0) {
        machine.remainingSeconds = machine.type === 'wash' ? randomInt(9, 16) * 60 : randomInt(6, 10) * 60;
      }
      if (chance(0.03) && machine.id !== 'DRY_UNIT_01') {
        machine.status = 'warning';
        machine.alertText = '温控偏差，等待复核';
      }
    } else if (machine.status === 'warning') {
      warningMachine = true;
      machine.temperature = round(clamp(machine.temperature + randomBetween(-1, 1), 40, 68));
      if (chance(0.22)) {
        machine.status = 'running';
        machine.alertText = undefined;
        machine.remainingSeconds = machine.type === 'wash' ? randomInt(8, 14) * 60 : randomInt(5, 9) * 60;
      }
    }
  }

  const throughputPenalty = warningMachine ? 0.78 : 1;
  const packagingGain = Math.round(randomBetween(12, 24) * throughputPenalty * (1 - downtimeCount * 0.015));

  state.finishingPackaging.totalPackagedUnits += Math.max(8, packagingGain);
  state.finishingPackaging.avgWashTemp = round(
    state.finishingPackaging.machines
      .filter((machine) => machine.type === 'wash')
      .reduce((sum, machine, _, machines) => sum + machine.temperature / machines.length, 0),
  );

  for (const batch of state.finishingPackaging.batchStream) {
    const batchGain = Math.max(1, Math.round(packagingGain * randomBetween(0.18, 0.36)));
    batch.progressUnits = Math.min(batch.targetUnits, batch.progressUnits + batchGain);
    batch.progress = round((batch.progressUnits / batch.targetUnits) * 100);
    batch.etaMinutes = Math.max(8, Math.round(batch.etaMinutes + randomBetween(-3, 2) + (warningMachine ? 3 : -1)));

    if (batch.progressUnits >= batch.targetUnits) {
      batch.progressUnits = Math.round(batch.targetUnits * randomBetween(0.35, 0.55));
      batch.progress = round((batch.progressUnits / batch.targetUnits) * 100);
      batch.etaMinutes = randomInt(18, 50);
    }
  }

  for (const order of state.finishingPackaging.kitOrders) {
    if (chance(0.2)) {
      order.readySegments = Math.round(clamp(order.readySegments + randomBetween(-0.4, 0.9), 1, order.totalSegments));
    }
  }

  const completionRatio =
    state.finishingPackaging.kitOrders.reduce((sum, item) => sum + item.readySegments / item.totalSegments, 0) /
    state.finishingPackaging.kitOrders.length;

  state.finishingPackaging.orderKitRate = round(completionRatio * 100);
  state.finishingPackaging.completedOrders = Math.round((state.finishingPackaging.orderKitRate / 100) * state.finishingPackaging.totalOrders);
  state.finishingPackaging.outboundReadiness = round(
    clamp(state.finishingPackaging.orderKitRate - (warningMachine ? 6 : 0) + randomBetween(-1.5, 2), 72, 98),
  );
  state.finishingPackaging.activeBottleneck = warningMachine ? 'Washing Line 02' : 'Packaging Line 01';
  state.finishingPackaging.shippingDock.status =
    state.finishingPackaging.orderKitRate > 92 ? 'active' : state.finishingPackaging.orderKitRate > 80 ? 'waiting' : 'blocked';
  state.finishingPackaging.localTime = state.meta.currentTime;
}

function updateFactoryOverview(state: DashboardSnapshot, knittingStats: { runningCount: number; downtimeCount: number }) {
  const factoryActual = state.knitting.totalFloorOutput + state.linkingSewing.totalFloorOutput + state.finishingPackaging.totalPackagedUnits;
  state.factoryOverview.actualUnits = Math.round(factoryActual / 1.6);
  state.factoryOverview.achievementRate = round((state.factoryOverview.actualUnits / state.factoryOverview.planUnits) * 100);
  state.factoryOverview.activeUnits = state.knitting.machines.length + state.linkingSewing.activeMachines;
  state.factoryOverview.activeUnitsDelta = Math.round(randomBetween(-3, 16));
  state.factoryOverview.criticalDowntime = knittingStats.downtimeCount + state.finishingPackaging.machines.filter((item) => item.status === 'warning').length;
  state.factoryOverview.equipmentRuntime = round(
    clamp((knittingStats.runningCount / state.knitting.machines.length) * 100 + randomBetween(-1.5, 1.5), 75, 98),
  );

  state.factoryOverview.qualityStages[0].yieldRate = state.knitting.qualityRate;
  state.factoryOverview.qualityStages[1].yieldRate = round(state.linkingSewing.teamEfficiencies[0].efficiency + 3.5);
  state.factoryOverview.qualityStages[2].yieldRate = round(100 - state.linkingSewing.qualityAlerts[0].defectRate * 0.7);
  state.factoryOverview.qualityStages[3].yieldRate = round(state.finishingPackaging.outboundReadiness + 7.2);
  state.factoryOverview.qualityYield = round(
    state.factoryOverview.qualityStages.reduce((sum, item) => sum + item.yieldRate, 0) /
      state.factoryOverview.qualityStages.length,
  );

  state.factoryOverview.equipmentSignals = [
    { id: 'L01', status: state.knitting.oee > 84 ? 'ok' : 'warn' },
    { id: 'L02', status: state.linkingSewing.hourlyTargetDelta >= 0 ? 'ok' : 'warn' },
    { id: 'L03', status: state.finishingPackaging.outboundReadiness > 84 ? 'ok' : 'warn' },
  ];

  for (const order of state.factoryOverview.urgentOrders) {
    order.etaMinutes = Math.max(18, Math.round(order.etaMinutes + randomBetween(-4, 5) + knittingStats.downtimeCount));
    order.riskLevel = order.etaMinutes > 100 ? 'high' : order.etaMinutes > 70 ? 'medium' : 'low';
  }

  const rankings: WorkshopRanking[] = [
    {
      id: 'wk-knitting',
      name: '编织车间',
      metricLabel: 'OEE',
      score: state.knitting.oee,
      trend: round(randomBetween(-1.5, 1.5)),
    },
    {
      id: 'wk-linking',
      name: '套口缝合',
      metricLabel: '人均产能',
      score: round(state.linkingSewing.teamEfficiencies.reduce((sum, item) => sum + item.efficiency, 0) / state.linkingSewing.teamEfficiencies.length),
      trend: round(randomBetween(-1.2, 1.2)),
    },
    {
      id: 'wk-finishing',
      name: '后整包装',
      metricLabel: '齐套率',
      score: state.finishingPackaging.orderKitRate,
      trend: round(randomBetween(-1, 1.4)),
    },
  ].sort((left, right) => right.score - left.score);

  state.factoryOverview.workshopRankings = rankings;
}

export function applyWorldRules(state: DashboardSnapshot) {
  const now = new Date(new Date(state.meta.currentTime).getTime() + 1000);
  state.meta.currentTime = now.toISOString();
  state.meta.lastUpdated = now.toISOString();

  const knittingStats = updateKnitting(state);
  updateLinking(state, knittingStats.shiftIncrement, knittingStats.downtimeCount);
  updateFinishing(state, knittingStats.downtimeCount);
  updateFactoryOverview(state, knittingStats);
}
