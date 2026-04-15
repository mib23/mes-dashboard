import React from 'react';
import { ScreenAdapter } from '../components/ScreenAdapter';
import { useConnectionStatus } from '../hooks/useConnectionStatus';
import { useDashboardStore } from '../store/useDashboardStore';
import { formatClock, formatEtaMinutes, formatLocalTime, formatNumber, formatPercent } from '../utils/format';
import { getMachineStatusPresentation } from '../utils/status';

const FinishingPackaging: React.FC = () => {
  const { finishingPackaging } = useDashboardStore((state) => state.snapshot);
  const connection = useConnectionStatus();
  const packagedRate = Math.min((finishingPackaging.totalPackagedUnits / finishingPackaging.packagedTargetUnits) * 100, 100);

  return (
    <ScreenAdapter>
      <div className="bg-background text-on-surface font-body overflow-hidden h-full w-full">
        <main className="w-full h-full p-8 flex flex-col gap-8">
        <header className="flex justify-between items-center border-b border-outline-variant/30 pb-4 shrink-0">
          <div className="flex items-center gap-8">
            <span className="text-3xl font-black text-primary-container tracking-widest uppercase">FINISHING LIVE</span>
            <div className="h-10 w-[2px] bg-outline-variant/30"></div>
            <div className="flex flex-col">
              <span className="text-primary-container text-xs font-label tracking-[0.4em] uppercase">Operations Monitor</span>
              <h1 className="text-4xl font-black font-headline uppercase">后整与包装车间</h1>
            </div>
          </div>
          <div className="flex items-center gap-8">
            <div className="text-right">
              <div className="text-outline font-label text-xs tracking-widest uppercase">Factory Local Time</div>
              <div className="text-3xl font-bold font-label tabular-nums">{formatLocalTime(finishingPackaging.localTime)}</div>
            </div>
            <div className="glass-panel px-6 py-3 rounded-xl flex items-center gap-4 border-l-4 border-error">
              <div className="text-right">
                <div className="font-label text-xs text-outline uppercase tracking-widest">Active Bottleneck</div>
                <div className="text-error text-xl font-black uppercase">{finishingPackaging.activeBottleneck}</div>
              </div>
              <span className="material-symbols-outlined text-error text-3xl">warning</span>
            </div>
            <div className={`px-4 py-2 rounded-full text-xs font-black tracking-widest ${connection.badgeClass}`}>{connection.label}</div>
          </div>
        </header>

        <div className="grid grid-cols-4 gap-6 shrink-0">
          <div className="glass-panel p-6 rounded-2xl border-l-8 border-primary">
            <div className="font-label text-xs tracking-[0.2em] text-outline uppercase font-bold">Outbound Readiness</div>
            <div className="text-6xl font-black font-headline mt-2">
              {finishingPackaging.outboundReadiness.toFixed(0)}
              <span className="text-3xl text-primary font-bold">%</span>
            </div>
            <div className="mt-2 text-secondary text-sm font-bold">动态受设备预警和齐套率联动</div>
          </div>
          <div className="glass-panel p-6 rounded-2xl border-l-8 border-secondary">
            <div className="font-label text-xs tracking-[0.2em] text-outline uppercase font-bold">Total Packaged Units</div>
            <div className="text-6xl font-black font-headline mt-2 tabular-nums">{formatNumber(finishingPackaging.totalPackagedUnits)}</div>
            <div className="mt-4 w-full bg-surface-container-highest h-2 rounded-full overflow-hidden">
              <div className="bg-secondary h-full transition-all duration-1000" style={{ width: `${packagedRate}%` }}></div>
            </div>
            <div className="mt-2 text-xs font-label text-outline uppercase tracking-widest font-bold">
              Target: {formatNumber(finishingPackaging.packagedTargetUnits)}
            </div>
          </div>
          <div className="glass-panel p-6 rounded-2xl border-l-8 border-secondary-fixed-dim">
            <div className="font-label text-xs tracking-[0.2em] text-outline uppercase font-bold">Avg Wash Temp</div>
            <div className="text-6xl font-black font-headline mt-2 text-secondary-fixed-dim tabular-nums">
              {finishingPackaging.avgWashTemp.toFixed(1)}<span className="text-3xl">º</span>
            </div>
            <div className="mt-2 text-outline text-sm font-bold">NOMINAL: 60-65ºC</div>
          </div>
          <div className="glass-panel p-6 rounded-2xl border-l-8 border-primary-fixed-dim">
            <div className="font-label text-xs tracking-[0.2em] text-outline uppercase font-bold">Order Kit Rate</div>
            <div className="text-6xl font-black font-headline mt-2 text-primary-fixed-dim">
              {finishingPackaging.orderKitRate.toFixed(0)}<span className="text-3xl font-bold">%</span>
            </div>
            <div className="mt-2 text-secondary text-sm font-bold">
              {finishingPackaging.completedOrders}/{finishingPackaging.totalOrders} COMPLETE
            </div>
          </div>
        </div>

        <div className="grid grid-cols-12 gap-8 flex-1 overflow-hidden">
          <div className="col-span-8 flex flex-col gap-8 overflow-hidden">
            <div className="bg-surface-container-low p-6 rounded-2xl border border-outline-variant/10 shrink-0">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-black font-headline uppercase tracking-tight flex items-center gap-4">
                  <span className="material-symbols-outlined text-primary text-3xl">water_drop</span>
                  Industrial Washing &amp; Drying Bay
                </h2>
                <div className="flex gap-6">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-secondary"></div>
                    <span className="text-sm font-bold font-label uppercase">Running</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-error animate-pulse"></div>
                    <span className="text-sm font-bold font-label uppercase">Warning</span>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-3 gap-6">
                {finishingPackaging.machines.map((machine) => {
                  const status = getMachineStatusPresentation(machine.status);
                  const progressOffset = 364 - (364 * Math.min(machine.remainingSeconds / 960, 1));

                  return (
                    <div key={machine.id} className={`glass-panel p-4 rounded-xl border-t-4 ${status.accentClass} flex flex-col`}>
                      <div className="flex justify-between text-sm font-bold font-label text-outline mb-2">
                        <span>{machine.label}</span>
                        <span>{status.label}</span>
                      </div>
                      <div className="flex justify-center py-2">
                        <div className="relative w-32 h-32 flex items-center justify-center">
                          <svg className="w-full h-full -rotate-90">
                            <circle className="text-surface-container-highest" cx="64" cy="64" fill="transparent" r="58" stroke="currentColor" strokeWidth="8"></circle>
                            <circle
                              className="text-primary-container transition-all duration-1000 segmented-arc"
                              cx="64"
                              cy="64"
                              fill="transparent"
                              r="58"
                              stroke="currentColor"
                              strokeDasharray="364"
                              strokeDashoffset={progressOffset}
                              strokeWidth="8"
                            ></circle>
                          </svg>
                          <div className="absolute inset-0 flex flex-col items-center justify-center">
                            <span className="text-2xl font-black tabular-nums">{formatClock(machine.remainingSeconds)}</span>
                            <span className="text-[10px] font-label text-outline uppercase tracking-widest">Rem</span>
                          </div>
                        </div>
                      </div>
                      <div className="grid grid-cols-2 gap-2 mt-2">
                        <div className="bg-surface-container-highest/30 p-2 rounded-lg text-center">
                          <div className="text-[10px] font-label text-outline uppercase">Temp</div>
                          <div className="text-lg font-bold">{machine.temperature.toFixed(1)}ºC</div>
                        </div>
                        <div className="bg-surface-container-highest/30 p-2 rounded-lg text-center">
                          <div className="text-[10px] font-label text-outline uppercase">{machine.type === 'wash' ? 'RPM' : 'Airflow'}</div>
                          <div className="text-lg font-bold">{machine.type === 'wash' ? formatNumber(machine.rpm ?? 0) : machine.airflow?.toUpperCase()}</div>
                        </div>
                      </div>
                      {machine.alertText ? <div className="mt-3 text-center text-sm font-black text-error">{machine.alertText}</div> : null}
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="bg-surface-container-low p-6 rounded-2xl border border-outline-variant/10 flex-1 flex flex-col overflow-hidden">
              <h2 className="text-2xl font-black font-headline uppercase tracking-tight flex items-center gap-4 mb-4 shrink-0">
                <span className="material-symbols-outlined text-primary text-3xl">inventory</span>
                Packaging &amp; Finishing Stream
              </h2>
              <div className="auto-scroll-container flex-1">
                <div className="auto-scroll-content space-y-4">
                  {finishingPackaging.batchStream.map((batch) => (
                    <div
                      key={batch.id}
                      className={`grid grid-cols-12 gap-6 items-center p-5 bg-surface-container rounded-xl border-l-4 ${
                        batch.color === 'secondary' ? 'border-secondary' : batch.color === 'primary' ? 'border-primary' : 'border-error'
                      }`}
                    >
                      <div className="col-span-4">
                        <div className="text-xl font-black uppercase tracking-wide">{batch.batchNo}</div>
                        <div className="text-sm text-outline font-label uppercase">{batch.station}</div>
                      </div>
                      <div className="col-span-5">
                        <div className="flex justify-between text-xs font-bold mb-2">
                          <span className="text-outline uppercase">
                            Progress: {formatNumber(batch.progressUnits)} / {formatNumber(batch.targetUnits)} Units
                          </span>
                          <span className="text-secondary text-base">{formatPercent(batch.progress, 0)}</span>
                        </div>
                        <div className="h-3 w-full bg-surface-container-highest rounded-full overflow-hidden">
                          <div className="bg-secondary h-full transition-all duration-1000" style={{ width: `${batch.progress}%` }}></div>
                        </div>
                      </div>
                      <div className="col-span-3 text-right">
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/10 text-secondary text-base font-black">
                          <span className="material-symbols-outlined text-xl">timer</span>
                          ETA: {formatEtaMinutes(batch.etaMinutes)}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="col-span-4 flex flex-col gap-8 overflow-hidden">
            <div className="bg-surface-container-low p-6 rounded-2xl border border-outline-variant/10 flex-1 flex flex-col overflow-hidden">
              <h2 className="text-lg font-bold font-label uppercase tracking-[0.3em] mb-4 text-outline shrink-0">Kit Completion Status</h2>
              <div className="auto-scroll-container flex-1">
                <div className="auto-scroll-content space-y-8 py-2">
                  {finishingPackaging.kitOrders.map((order) => (
                    <div key={order.id}>
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-base font-black uppercase">{order.label}</span>
                        <span className={`text-base font-black ${order.readySegments === order.totalSegments ? 'text-secondary' : 'text-primary'}`}>
                          {order.readySegments === order.totalSegments ? 'COMPLETE' : `${order.readySegments}/${order.totalSegments} READY`}
                        </span>
                      </div>
                      <div className="grid grid-cols-4 gap-2">
                        {Array.from({ length: order.totalSegments }).map((_, index) => (
                          <div
                            key={`${order.id}-${index}`}
                            className={`h-2 rounded-full ${index < order.readySegments ? 'bg-secondary' : 'bg-surface-container-highest'}`}
                          ></div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="bg-surface-container-low p-6 rounded-2xl border border-outline-variant/10 shrink-0">
              <h2 className="text-lg font-bold font-label uppercase tracking-[0.3em] mb-4 text-outline">Shipping Dock</h2>
              <div className="space-y-4">
                <div className="p-4 bg-surface-container rounded-xl flex items-center justify-between border-r-4 border-secondary">
                  <div className="flex items-center gap-4">
                    <span className="material-symbols-outlined text-secondary text-3xl">local_shipping</span>
                    <div>
                      <div className="text-lg font-black uppercase">{finishingPackaging.shippingDock.label}</div>
                      <div className="text-xs text-outline font-bold uppercase">Carrier: {finishingPackaging.shippingDock.carrier}</div>
                    </div>
                  </div>
                  <div className={`text-base font-black ${finishingPackaging.shippingDock.status === 'active' ? 'text-secondary' : finishingPackaging.shippingDock.status === 'waiting' ? 'text-primary' : 'text-error'}`}>
                    {finishingPackaging.shippingDock.status.toUpperCase()}
                  </div>
                </div>
              </div>

              <div className="mt-6">
                <div className="relative aspect-video bg-surface-container-highest rounded-xl overflow-hidden p-2 grid grid-cols-4 grid-rows-3 gap-1">
                  <div className="bg-secondary/60 border border-secondary rounded flex items-center justify-center font-black text-xs">S1</div>
                  <div className="bg-secondary/60 border border-secondary rounded flex items-center justify-center font-black text-xs">S2</div>
                  <div className="bg-primary/60 border border-primary rounded flex items-center justify-center font-black text-xs">P1</div>
                  <div className="bg-primary/60 border border-primary rounded flex items-center justify-center font-black text-xs">P2</div>
                  <div className="bg-secondary/60 border border-secondary rounded flex items-center justify-center font-black text-xs">S3</div>
                  <div className="bg-secondary/20 border border-secondary/30 rounded"></div>
                  <div className="bg-primary/60 border border-primary rounded flex items-center justify-center font-black text-xs">P3</div>
                  <div className="bg-primary/20 border border-primary/30 rounded"></div>
                  <div className="col-span-2 bg-surface-container rounded"></div>
                  <div className="col-span-2 bg-error/30 border border-error/50 rounded flex items-center justify-center font-black text-error text-[10px] uppercase tracking-widest">
                    QA Reject
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <footer className="flex justify-between items-center border-t border-outline-variant/30 pt-4 shrink-0">
          <div className="flex gap-10">
            <div className="flex items-center gap-2">
              <span className="material-symbols-outlined text-secondary text-xl">check_circle</span>
              <span className="text-sm font-bold font-label uppercase tracking-widest">Primary Systems Under Simulation</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="material-symbols-outlined text-outline text-xl">database</span>
              <span className="text-sm font-bold font-label uppercase tracking-widest">Dynamic Mock Stream Active</span>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <div className="px-4 py-1 bg-surface-container-high rounded text-outline text-xs font-black uppercase tracking-[0.2em]">
              Shift A-1 Monitor
            </div>
            <div className="px-4 py-1 bg-primary/20 border border-primary/40 rounded text-primary text-xs font-black uppercase tracking-[0.2em]">
              Last Tick {formatLocalTime(finishingPackaging.localTime)}
            </div>
          </div>
        </footer>
        </main>
      </div>
    </ScreenAdapter>
  );
};

export default FinishingPackaging;
