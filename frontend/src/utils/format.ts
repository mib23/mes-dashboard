export function formatNumber(value: number) {
  return new Intl.NumberFormat('zh-CN').format(Math.round(value));
}

export function formatPercent(value: number, digits = 1) {
  return `${value.toFixed(digits)}%`;
}

export function formatClock(totalSeconds: number) {
  const safeValue = Math.max(0, Math.floor(totalSeconds));
  const hours = String(Math.floor(safeValue / 3600)).padStart(2, '0');
  const minutes = String(Math.floor((safeValue % 3600) / 60)).padStart(2, '0');
  const seconds = String(safeValue % 60).padStart(2, '0');
  return `${hours}:${minutes}:${seconds}`;
}

export function formatEtaMinutes(minutes: number) {
  return `${Math.max(0, Math.round(minutes))} MIN`;
}

export function formatLocalTime(value: string) {
  return new Intl.DateTimeFormat('zh-CN', {
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    hour12: false,
  }).format(new Date(value));
}
