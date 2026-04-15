import React from 'react'
import { ScreenAdapter } from '../components/ScreenAdapter'
import { useConnectionStatus } from '../hooks/useConnectionStatus'
import { useDashboardStore } from '../store/useDashboardStore'
import { formatClock, formatNumber, formatPercent } from '../utils/format'
import { getMachineStatusPresentation } from '../utils/status'

const KnittingWorkshop: React.FC = () => {
  const { knitting, meta } = useDashboardStore((state) => state.snapshot)
  const connection = useConnectionStatus()
  const outputRate = Math.min(
    (knitting.totalFloorOutput / knitting.targetOutput) * 100,
    100,
  )

  return (
    <ScreenAdapter>
      <div className="bg-background text-on-surface font-body overflow-hidden h-full w-full">
        <main className="w-full h-full p-8 flex flex-col gap-6 bg-surface-container-lowest">
        <header className="flex items-center justify-between border-b border-outline-variant/30 pb-4 shrink-0">
          <div className="flex items-center gap-6">
            <span className="text-4xl font-black text-primary-container tracking-widest uppercase">
              KNITTING LIVE
            </span>
            <div className="h-10 w-px bg-outline-variant/40"></div>
            <div>
              <p className="text-xs font-label uppercase tracking-[0.2em] text-on-surface-variant font-bold">
                编织车间大屏
              </p>
              <p className="text-lg font-black text-secondary">
                {connection.label}
              </p>
            </div>
          </div>
          <div className="flex items-center gap-10">
            <div className="text-right">
              <p className="text-[10px] font-label uppercase tracking-widest text-on-surface-variant">
                班次
              </p>
              <p className="text-xl font-black">{meta.shiftName}</p>
            </div>
            <div className="text-right">
              <p className="text-[10px] font-label uppercase tracking-widest text-on-surface-variant">
                剩余工时
              </p>
              <p className="text-xl font-black tabular-nums">
                {formatClock(knitting.shiftTimeRemainingSeconds)}
              </p>
            </div>
          </div>
        </header>

        <div className="grid grid-cols-12 gap-6 h-[55%] min-h-0 shrink-0">
          <div className="col-span-8 flex flex-col gap-6 min-h-0">
            <section className="grid grid-cols-4 gap-6 shrink-0">
              {[
                {
                  label: 'Availability',
                  value: knitting.availability,
                  accentClass: 'text-primary-container',
                },
                {
                  label: 'Performance',
                  value: knitting.performance,
                  accentClass: 'text-secondary',
                },
                {
                  label: 'Quality Rate',
                  value: knitting.qualityRate,
                  accentClass: 'text-on-surface-variant',
                },
                {
                  label: 'OEE',
                  value: knitting.oee,
                  accentClass: 'text-secondary',
                },
              ].map((item) => (
                <div
                  key={item.label}
                  className="glass-card p-6 rounded-xl border border-outline-variant/20"
                >
                  <p className="font-label text-xs uppercase tracking-widest text-outline font-bold">
                    {item.label}
                  </p>
                  <div className="mt-3 flex items-baseline gap-1">
                    <span className="text-6xl font-black tracking-tighter text-on-surface">
                      {item.value.toFixed(1)}
                    </span>
                    <span className={`text-xl font-bold ${item.accentClass}`}>
                      %
                    </span>
                  </div>
                  <div className="mt-4 h-2.5 rounded-full bg-surface-container-highest overflow-hidden">
                    <div
                      className="h-full bg-primary-container transition-all duration-1000"
                      style={{ width: `${item.value}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </section>

            <section className="flex-1 min-h-0 bg-surface-container-low rounded-xl p-6 border border-outline-variant/20 flex flex-col">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-black tracking-tight uppercase">
                  Production Progress Detail
                </h2>
                <span className="text-xs font-label uppercase tracking-widest text-outline">
                  实时联动上游供给
                </span>
              </div>

              <div className="flex-1 flex flex-col justify-around gap-5">
                {knitting.progressItems.map((item) => (
                  <div key={item.name} className="space-y-3">
                    <div className="flex justify-between items-end">
                      <span className="font-label text-base tracking-[0.15em] font-bold uppercase">
                        {item.name}
                      </span>
                      <span className="text-xl font-black">
                        {formatNumber(item.actual)} /{' '}
                        {formatNumber(item.planned)}
                        <span className="text-primary-container ml-2">
                          {formatPercent(item.progress, 0)}
                        </span>
                      </span>
                    </div>
                    <div className="h-8 w-full bg-surface-container-highest rounded-lg flex overflow-hidden p-1 border border-outline-variant/10">
                      <div
                        className="h-full bg-primary-container rounded transition-all duration-1000"
                        style={{ width: `${item.progress}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          </div>

          <div className="col-span-4 flex flex-col gap-6 min-h-0">
            <section className="bg-surface-container p-6 rounded-xl border border-outline-variant/20 shrink-0">
              <h3 className="font-label text-xs font-black tracking-[0.2em] text-on-surface-variant uppercase mb-4 text-center">
                Total Floor Output
              </h3>
              <div className="flex flex-col items-center">
                <div className="relative w-44 h-44 flex items-center justify-center">
                  <svg className="w-full h-full -rotate-90">
                    <circle
                      className="text-surface-container-highest"
                      cx="88"
                      cy="88"
                      fill="transparent"
                      r="80"
                      stroke="currentColor"
                      strokeWidth="12"
                    ></circle>
                    <circle
                      className="text-primary-container transition-all duration-1000"
                      cx="88"
                      cy="88"
                      fill="transparent"
                      r="80"
                      stroke="currentColor"
                      strokeWidth="12"
                      strokeDasharray="502.65"
                      strokeDashoffset={502.65 - (502.65 * outputRate) / 100}
                    ></circle>
                  </svg>
                  <div className="absolute inset-0 flex flex-col items-center justify-center">
                    <span className="text-4xl font-black">
                      {formatNumber(knitting.totalFloorOutput)}
                    </span>
                    <span className="text-[10px] font-label font-bold text-on-surface-variant uppercase tracking-widest mt-1">
                      Pieces / Shift
                    </span>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4 w-full mt-4">
                  <div className="text-center">
                    <p className="text-[10px] font-label font-bold text-on-surface-variant uppercase mb-1">
                      Target
                    </p>
                    <p className="text-xl font-black">
                      {formatNumber(knitting.targetOutput)}
                    </p>
                  </div>
                  <div className="text-center border-l border-outline-variant/30">
                    <p className="text-[10px] font-label font-bold text-on-surface-variant uppercase mb-1">
                      Actual
                    </p>
                    <p className="text-xl font-black text-secondary">
                      {formatNumber(knitting.totalFloorOutput)}
                    </p>
                  </div>
                </div>
              </div>
            </section>

            <section className="flex-1 bg-surface-container-high rounded-xl p-6 border-l-[12px] border-error overflow-hidden flex flex-col">
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-label text-xs font-black tracking-[0.2em] text-error uppercase">
                  Active Faults
                </h3>
                <span className="material-symbols-outlined text-error text-2xl animate-pulse">
                  warning
                </span>
              </div>
              <div className="space-y-4 overflow-hidden">
                {knitting.activeFaults.map((fault, index) => (
                  <div
                    key={fault.id}
                    className={`${index < knitting.activeFaults.length - 1 ? 'border-b border-outline-variant/30 pb-4' : ''} flex gap-4 items-start`}
                  >
                    <span className="material-symbols-outlined text-error text-3xl">
                      {fault.severity === 'high' ? 'error' : 'priority_high'}
                    </span>
                    <div>
                      <p className="text-base font-black">
                        {fault.title}
                        {fault.machineId ? `: ${fault.machineId}` : ''}
                      </p>
                      <p className="text-xs text-on-surface-variant font-medium">
                        {fault.detail}
                      </p>
                      <p className="text-[10px] font-label mt-1 text-error font-black uppercase">
                        Downtime: {formatClock(fault.durationSeconds)}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          </div>
        </div>

        <section className="flex-1 min-h-0 flex flex-col gap-4 overflow-hidden">
          <div className="flex items-center justify-between shrink-0">
            <h2 className="text-xl font-black tracking-tight uppercase">
              Machine Status Grid
            </h2>
            <div className="flex gap-8 text-[10px] font-label font-black tracking-widest">
              <span className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-secondary"></div>RUNNING
              </span>
              <span className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-primary"></div>STANDBY
              </span>
              <span className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-error"></div>ALERT
              </span>
            </div>
          </div>

          <div className="flex-1 overflow-hidden relative scroll-container">
            <div className="scroll-content absolute w-full space-y-4">
              <div className="grid grid-cols-8 gap-4">
                {knitting.machines.map((machine) => {
                  const status = getMachineStatusPresentation(machine.status)
                  return (
                    <div
                      key={machine.id}
                      className={`bg-surface-container-high p-4 rounded-xl border-t-4 ${status.accentClass}`}
                    >
                      <div className="flex items-start justify-between">
                        <span className="text-[10px] font-bold opacity-60">
                          {machine.id}
                        </span>
                        <span className="text-[10px] font-label uppercase tracking-widest opacity-80">
                          {machine.zone}
                        </span>
                      </div>
                      <div className="mt-3 text-3xl font-black">
                        {machine.status === 'running' ||
                        machine.status === 'standby'
                          ? `${machine.efficiency.toFixed(0)}%`
                          : status.label}
                      </div>
                      <div className="mt-1 text-[10px] font-label font-black uppercase tracking-widest">
                        {machine.faultLabel ?? status.label}
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>
          </div>
        </section>
        </main>
      </div>
    </ScreenAdapter>
  )
}

export default KnittingWorkshop
