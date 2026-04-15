import React from 'react'
import { ScreenAdapter } from '../components/ScreenAdapter'
import { useConnectionStatus } from '../hooks/useConnectionStatus'
import { useDashboardStore } from '../store/useDashboardStore'
import { formatClock, formatNumber, formatPercent } from '../utils/format'

const trendIconMap = {
  up: 'trending_up',
  flat: 'trending_flat',
  down: 'trending_down',
} as const

const LinkingSewing: React.FC = () => {
  const { linkingSewing } = useDashboardStore((state) => state.snapshot)
  const connection = useConnectionStatus()

  return (
    <ScreenAdapter>
      <div className="bg-surface-container-lowest h-full w-full p-8 flex flex-col gap-6 overflow-hidden">
        <header className="flex justify-between items-end">
        <div className="flex items-center gap-8">
          <span className="text-4xl font-black text-primary tracking-tighter uppercase font-headline">
            LINKING LIVE
          </span>
          <div className="h-14 w-px bg-outline/20"></div>
          <div>
            <p className="text-[0.75rem] font-label uppercase tracking-[0.4em] text-primary/70 mb-1">
              Live Workshop Status
            </p>
            <h1 className="text-3xl font-bold tracking-tight text-on-surface">
              套口与缝合车间
            </h1>
          </div>
        </div>
        <div className="flex items-end gap-12">
          <div className="text-right">
            <p className="text-[0.75rem] font-label uppercase tracking-widest text-outline mb-1">
              Realtime Status
            </p>
            <p className="text-xl font-black text-secondary">
              {connection.label}
            </p>
          </div>
          <div className="h-16 w-px bg-outline/20"></div>
          <div className="text-right">
            <p className="text-[0.75rem] font-label uppercase tracking-widest text-outline mb-1">
              Shift A Clock
            </p>
            <p className="text-5xl font-black text-on-surface tabular-nums">
              {formatClock(linkingSewing.shiftClockSeconds)}
            </p>
          </div>
          <div className="text-right">
            <p className="text-[0.75rem] font-label uppercase tracking-widest text-outline mb-1">
              Total Floor Output
            </p>
            <p className="text-6xl font-black text-on-surface tracking-tighter">
              {formatNumber(linkingSewing.totalFloorOutput)}{' '}
              <span className="text-xl font-normal text-secondary">PCS</span>
            </p>
          </div>
        </div>
      </header>

        <div className="grid grid-cols-12 gap-6 flex-1 min-h-0">
        <div className="col-span-8 flex flex-col gap-6 min-h-0">
          <section className="grid grid-cols-3 gap-6 shrink-0">
            {linkingSewing.teamEfficiencies.map((team) => (
              <div
                key={team.id}
                className="glass-panel p-6 rounded-xl flex flex-col justify-between"
              >
                <p className="text-[0.7rem] font-label uppercase tracking-[0.2em] text-outline mb-4">
                  {team.name}
                </p>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-5xl font-black text-on-surface">
                    {formatPercent(team.efficiency, 0)}
                  </span>
                  <span
                    className={`material-symbols-outlined text-4xl ${
                      team.trend === 'up'
                        ? 'text-secondary'
                        : team.trend === 'flat'
                          ? 'text-primary'
                          : 'text-error'
                    }`}
                  >
                    {trendIconMap[team.trend]}
                  </span>
                </div>
                <div>
                  <div className="w-full h-2 bg-surface-container rounded-full overflow-hidden">
                    <div
                      className="h-full bg-secondary transition-all duration-1000"
                      style={{ width: `${team.efficiency}%` }}
                    ></div>
                  </div>
                  <div className="flex justify-between mt-3 text-[0.65rem] font-bold uppercase tracking-widest">
                    <span className="text-outline">
                      Actual: {formatNumber(team.actual)}
                    </span>
                    <span className="text-primary">
                      Target: {formatNumber(team.target)}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </section>

          <section className="flex-1 glass-panel rounded-xl p-8 flex flex-col min-h-0 overflow-hidden">
            <div className="flex justify-between items-center mb-10">
              <h3 className="text-lg font-bold uppercase tracking-[0.2em] font-label">
                WIP Flow Bottleneck Analysis
              </h3>
              <div className="flex items-center gap-3 bg-error-container/40 border border-error/30 text-error px-4 py-1.5 rounded-md">
                <span className="material-symbols-outlined text-xl fill animate-pulse">
                  report
                </span>
                <span className="text-[0.7rem] uppercase font-black tracking-widest">
                  当前瓶颈：
                  {
                    linkingSewing.wipStages.find(
                      (stage) => stage.id === linkingSewing.bottleneckStageId,
                    )?.name
                  }
                </span>
              </div>
            </div>
            <div className="flex-1 flex items-center justify-center">
              <div className="w-full flex items-center justify-between gap-6">
                {linkingSewing.wipStages.map((stage, index) => {
                  const isBottleneck =
                    stage.id === linkingSewing.bottleneckStageId
                  return (
                    <React.Fragment key={stage.id}>
                      <div className="flex flex-col items-center gap-4 flex-1">
                        <div
                          className={`rounded-full flex flex-col items-center justify-center font-black ${
                            isBottleneck
                              ? 'w-40 h-40 bg-error-container/40 border-4 border-error text-white glow-error animate-pulse'
                              : 'w-24 h-24 bg-surface-container-high border-2 border-primary-container/20 text-on-surface'
                          }`}
                        >
                          <span
                            className={isBottleneck ? 'text-6xl' : 'text-3xl'}
                          >
                            {stage.units}
                          </span>
                          <span className="text-[0.6rem] uppercase tracking-widest opacity-80">
                            WIP
                          </span>
                        </div>
                        <span
                          className={`text-[0.75rem] font-label uppercase tracking-[0.2em] ${isBottleneck ? 'text-error font-black' : 'text-outline'}`}
                        >
                          {stage.name}
                        </span>
                      </div>
                      {index < linkingSewing.wipStages.length - 1 ? (
                        <div className="flex-1 h-1 bg-surface-container relative">
                          <div
                            className={`absolute inset-y-0 left-0 ${isBottleneck ? 'bg-error' : 'bg-secondary/20'}`}
                            style={{
                              width: `${Math.min(stage.units / 2, 100)}%`,
                            }}
                          ></div>
                        </div>
                      ) : null}
                    </React.Fragment>
                  )
                })}
              </div>
            </div>
          </section>
        </div>

        <aside className="col-span-4 flex flex-col gap-6 min-h-0 overflow-hidden">
          <div className="glass-panel p-6 rounded-xl border-l-8 border-error shrink-0">
            <div className="flex items-center gap-3 mb-6 text-error">
              <span className="material-symbols-outlined text-3xl">
                warning
              </span>
              <h3 className="text-sm font-black uppercase tracking-[0.15em] font-label">
                Quality Alerts
              </h3>
            </div>
            <div className="space-y-4">
              {linkingSewing.qualityAlerts.map((alert) => (
                <div
                  key={alert.id}
                  className={`flex justify-between items-center p-4 rounded-lg border ${
                    alert.severity === 'critical'
                      ? 'bg-surface-container-high/50 border-error/20'
                      : 'bg-surface-container-low/50 border-outline-variant/20'
                  }`}
                >
                  <div>
                    <p className="text-sm font-bold text-on-surface">
                      {alert.name}
                    </p>
                    <p className="text-[0.6rem] text-outline uppercase tracking-widest">
                      {alert.line}
                    </p>
                  </div>
                  <span
                    className={`font-black text-2xl ${alert.severity === 'critical' ? 'text-error' : 'text-on-surface'}`}
                  >
                    {formatPercent(alert.defectRate)}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="glass-panel p-6 rounded-xl flex-1 flex flex-col min-h-0">
            <h3 className="text-[0.7rem] font-bold uppercase tracking-[0.3em] font-label text-outline mb-6">
              Shift A - Top Performers
            </h3>
            <div className="flex-1 overflow-hidden relative">
              <div className="space-y-6 auto-scroll-content">
                {linkingSewing.performers.map((performer, index) => (
                  <div key={performer.id} className="flex items-center gap-5">
                    <div className="relative">
                      <div
                        className={`w-14 h-14 rounded-full border-2 flex items-center justify-center font-black ${index === 0 ? 'border-secondary text-secondary' : 'border-outline-variant text-on-surface'}`}
                      >
                        {performer.avatarSeed}
                      </div>
                      <span
                        className={`absolute -top-1 -right-1 text-[0.6rem] font-black px-1.5 py-0.5 rounded-full ${index === 0 ? 'bg-secondary text-on-secondary' : 'bg-surface-container-highest text-on-surface'}`}
                      >
                        {index + 1}
                      </span>
                    </div>
                    <div className="flex-1">
                      <p className="text-base font-bold text-on-surface">
                        {performer.name}
                      </p>
                      <p className="text-[0.6rem] text-outline uppercase font-label">
                        {performer.role}
                      </p>
                    </div>
                    <p
                      className={`text-2xl font-black ${index === 0 ? 'text-secondary' : 'text-on-surface'}`}
                    >
                      {formatNumber(performer.output)}{' '}
                      <span className="text-[0.6rem] font-normal uppercase opacity-70">
                        pcs
                      </span>
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </aside>
      </div>

        <footer className="grid grid-cols-3 gap-6 shrink-0">
        <div className="glass-panel p-5 rounded-xl flex items-center gap-6 border-b-4 border-secondary/30">
          <div className="p-4 rounded-xl bg-secondary/10 border border-secondary/20">
            <span className="material-symbols-outlined text-secondary text-3xl">
              power
            </span>
          </div>
          <div>
            <p className="text-[0.65rem] font-label uppercase tracking-[0.2em] text-outline mb-1">
              Active Machines
            </p>
            <p className="text-3xl font-black text-on-surface">
              {linkingSewing.activeMachines}/{linkingSewing.totalMachines}
            </p>
          </div>
        </div>
        <div className="glass-panel p-5 rounded-xl flex items-center gap-6 border-b-4 border-primary-container/30">
          <div className="p-4 rounded-xl bg-primary-container/10 border border-primary-container/20">
            <span className="material-symbols-outlined text-primary-container text-3xl">
              person_pin_circle
            </span>
          </div>
          <div>
            <p className="text-[0.65rem] font-label uppercase tracking-[0.2em] text-outline mb-1">
              Labor Attendance
            </p>
            <p className="text-3xl font-black text-on-surface">
              {formatPercent(linkingSewing.attendanceRate)}
            </p>
          </div>
        </div>
        <div className="glass-panel p-5 rounded-xl flex items-center gap-6 border-b-4 border-tertiary-container/30">
          <div className="p-4 rounded-xl bg-tertiary-container/10 border border-tertiary-container/20">
            <span className="material-symbols-outlined text-tertiary-container text-3xl">
              inventory_2
            </span>
          </div>
          <div>
            <p className="text-[0.65rem] font-label uppercase tracking-[0.2em] text-outline mb-1">
              Hourly Target Status
            </p>
            <p className="text-3xl font-black text-on-surface">
              {linkingSewing.hourlyTargetDelta >= 0 ? 'Ahead' : 'Behind'}{' '}
              <span
                className={`text-sm font-bold ml-1 ${linkingSewing.hourlyTargetDelta >= 0 ? 'text-tertiary-container' : 'text-error'}`}
              >
                {linkingSewing.hourlyTargetDelta >= 0 ? '+' : ''}
                {formatNumber(linkingSewing.hourlyTargetDelta)} PCS
              </span>
            </p>
          </div>
        </div>
        </footer>
      </div>
    </ScreenAdapter>
  )
}

export default LinkingSewing
