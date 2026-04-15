import type { LinkingSewingData } from '../../types/dashboard';

export const linkingTeamSeed: LinkingSewingData['teamEfficiencies'] = [
  { id: 'team-linking', name: '套口效率', efficiency: 94, actual: 1420, target: 1510, trend: 'up' },
  { id: 'team-sewing', name: '缝合效率', efficiency: 82, actual: 2102, target: 2560, trend: 'flat' },
  { id: 'team-flat', name: '平缝效率', efficiency: 68, actual: 1300, target: 1912, trend: 'down' },
];

export const linkingWipSeed: LinkingSewingData['wipStages'] = [
  { id: 'collar-prep', name: '领口预备', units: 42, status: 'normal' },
  { id: 'sleeve-attach', name: '套袖', units: 218, status: 'critical' },
  { id: 'side-seam', name: '侧缝', units: 14, status: 'warning' },
];

export const linkingQualitySeed: LinkingSewingData['qualityAlerts'] = [
  { id: 'defect-skip-stitch', name: '跳线', line: '04 线 - 缝合', defectRate: 12.4, severity: 'critical' },
  { id: 'defect-needle-drop', name: '脱针', line: '01 线 - 套口', defectRate: 4.1, severity: 'normal' },
  { id: 'defect-loose', name: '漏套', line: '03 线 - 平缝', defectRate: 3.6, severity: 'normal' },
];

export const linkingPerformerSeed: LinkingSewingData['performers'] = [
  { id: 'perf-1', name: 'Elena Rodriguez', role: 'Master Sewer', output: 412, avatarSeed: 'ER' },
  { id: 'perf-2', name: 'Chen Wei', role: 'Linking Lead', output: 388, avatarSeed: 'CW' },
  { id: 'perf-3', name: 'Sarah J.', role: 'Flat Seam Ops', output: 355, avatarSeed: 'SJ' },
  { id: 'perf-4', name: 'Liu Fang', role: 'Needle Worker', output: 344, avatarSeed: 'LF' },
  { id: 'perf-5', name: 'Mina Park', role: 'Quality Sewer', output: 338, avatarSeed: 'MP' },
];
