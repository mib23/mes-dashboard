import type { MachineStatus } from '../types/dashboard';
import type { ConnectionStatus } from '../types/realtime';

export function getConnectionPresentation(status: ConnectionStatus) {
  switch (status) {
    case 'connected':
      return {
        label: '在线（模拟流）',
        badgeClass: 'bg-secondary/15 text-secondary border border-secondary/30',
      };
    case 'connecting':
      return {
        label: '连接中',
        badgeClass: 'bg-primary/15 text-primary border border-primary/30',
      };
    case 'reconnecting':
      return {
        label: '断线重连中',
        badgeClass: 'bg-tertiary-container/15 text-tertiary-container border border-tertiary-container/30',
      };
    case 'disconnected':
    default:
      return {
        label: '离线（最近快照）',
        badgeClass: 'bg-error/10 text-error border border-error/20',
      };
  }
}

export function getMachineStatusPresentation(status: MachineStatus) {
  switch (status) {
    case 'running':
      return {
        label: '运行',
        accentClass: 'text-secondary border-secondary bg-secondary/10',
      };
    case 'standby':
      return {
        label: '待机',
        accentClass: 'text-primary border-primary bg-primary/10',
      };
    case 'warning':
      return {
        label: '预警',
        accentClass: 'text-tertiary-container border-tertiary-container bg-tertiary-container/10',
      };
    case 'maintenance':
      return {
        label: '保养',
        accentClass: 'text-outline border-outline bg-surface-container-high',
      };
    case 'downtime':
    default:
      return {
        label: '停机',
        accentClass: 'text-error border-error bg-error/10',
      };
  }
}

export function getRiskBadgeClass(level: 'low' | 'medium' | 'high') {
  if (level === 'high') {
    return 'bg-error/15 text-error';
  }
  if (level === 'medium') {
    return 'bg-primary/15 text-primary';
  }
  return 'bg-secondary/15 text-secondary';
}
