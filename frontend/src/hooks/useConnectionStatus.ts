import { useMemo } from 'react';
import { useDashboardStore } from '../store/useDashboardStore';
import { getConnectionPresentation } from '../utils/status';

export function useConnectionStatus() {
  const connectionStatus = useDashboardStore((state) => state.connectionStatus);

  return useMemo(() => getConnectionPresentation(connectionStatus), [connectionStatus]);
}
