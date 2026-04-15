import type { OrderRisk, QualityStage, WorkshopRanking } from '../../types/dashboard';

export const factoryUrgentOrdersSeed: OrderRisk[] = [
  { id: 'ORD-88291', customer: 'LUXE APPAREL', stage: '缝合', etaMinutes: 92, riskLevel: 'high' },
  { id: 'ORD-88304', customer: 'URBAN WEAR', stage: '裁片备料', etaMinutes: 130, riskLevel: 'medium' },
  { id: 'ORD-88255', customer: 'FAST CO', stage: '后整', etaMinutes: 58, riskLevel: 'low' },
  { id: 'ORD-88310', customer: 'NOVA KNIT', stage: '套袖', etaMinutes: 88, riskLevel: 'high' },
  { id: 'ORD-88312', customer: 'BLUE FIELD', stage: '包装', etaMinutes: 46, riskLevel: 'medium' },
];

export const factoryQualityStagesSeed: QualityStage[] = [
  { name: '编织', yieldRate: 98.4 },
  { name: '套口', yieldRate: 96.8 },
  { name: '缝合', yieldRate: 95.9 },
  { name: '后整', yieldRate: 98.9 },
];

export const workshopRankingSeed: WorkshopRanking[] = [
  { id: 'wk-knitting', name: '编织车间', metricLabel: 'OEE', score: 91.8, trend: 1.2 },
  { id: 'wk-linking', name: '套口缝合', metricLabel: '人均产能', score: 87.4, trend: -0.5 },
  { id: 'wk-finishing', name: '后整包装', metricLabel: '订单齐套率', score: 93.1, trend: 0.8 },
];
