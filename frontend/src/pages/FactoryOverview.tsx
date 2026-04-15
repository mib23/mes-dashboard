import React from 'react'
import { ScreenAdapter } from '../components/ScreenAdapter'
import { useConnectionStatus } from '../hooks/useConnectionStatus'
import { useDashboardStore } from '../store/useDashboardStore'
import { formatLocalTime, formatNumber, formatPercent } from '../utils/format'
import { getRiskBadgeClass } from '../utils/status'

const FactoryOverview: React.FC = () => {
  const { factoryOverview, meta } = useDashboardStore((state) => state.snapshot)
  const connection = useConnectionStatus()
  const progressWidth = `${Math.min(factoryOverview.achievementRate, 100)}%`

  return (
    <ScreenAdapter>
      <div className="bg-background text-on-surface font-body h-full w-full flex flex-col overflow-hidden">
        <header className="flex items-center justify-between px-8 py-5 border-b border-outline-variant/20 bg-[#0d1322]/80 backdrop-blur-md">
          <div>
            <p className="font-label text-[10px] uppercase tracking-[0.4em] text-primary">
              Factory Command Center
            </p>
            <h1 className="text-3xl font-black tracking-[0.15em] text-primary-fixed uppercase">
              工厂总大屏
            </h1>
          </div>
          <div className="flex items-center gap-6">
            <div
              className={`px-4 py-2 rounded-full text-xs font-black tracking-widest ${connection.badgeClass}`}
            >
              {connection.label}
            </div>
            <div className="text-right">
              <p className="text-[10px] font-label text-outline uppercase tracking-widest">
                当前班次
              </p>
              <p className="text-lg font-black">{meta.shiftName}</p>
            </div>
            <div className="text-right">
              <p className="text-[10px] font-label text-outline uppercase tracking-widest">
                本地时间
              </p>
              <p className="text-lg font-black tabular-nums">
                {formatLocalTime(meta.currentTime)}
              </p>
            </div>
          </div>
        </header>

        <main className="flex-1 p-5 grid grid-rows-[auto_minmax(0,1fr)_minmax(0,280px)] gap-4 overflow-hidden">
          <section className="grid grid-cols-4 gap-4">
            <div className="col-span-3 glass-panel rounded-xl p-6 relative overflow-hidden">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="font-label text-sm uppercase tracking-[0.25em] text-primary">
                    Production Performance
                  </p>
                  <h2 className="text-4xl font-black font-headline uppercase tracking-tight mt-1">
                    Daily Output
                  </h2>
                </div>
                <div className="text-right">
                  <p className="font-label text-sm uppercase tracking-[0.2em] text-secondary">
                    Achievement Rate
                  </p>
                  <p className="text-5xl font-black text-secondary font-headline">
                    {formatPercent(factoryOverview.achievementRate)}
                  </p>
                </div>
              </div>
              <div className="mt-5 h-16 rounded-full border border-outline-variant/30 overflow-hidden relative bg-surface-container-lowest">
                <div className="absolute inset-0 segmented-track opacity-30"></div>
                <div
                  className="absolute inset-y-0 left-0 bg-gradient-to-r from-primary via-primary-container to-secondary transition-all duration-1000 flex items-center justify-end pr-4"
                  style={{ width: progressWidth }}
                >
                  <div className="w-1.5 h-9 rounded-full bg-white/60 animate-pulse"></div>
                </div>
              </div>
              <div className="mt-3 flex justify-between font-label text-sm text-outline tracking-widest">
                <span>0 PCS</span>
                <span className="text-primary-fixed">
                  {formatNumber(factoryOverview.actualUnits)} /{' '}
                  {formatNumber(factoryOverview.planUnits)} PCS
                </span>
                <span>DAILY TARGET</span>
              </div>
              <div className="absolute -bottom-20 -right-12 w-72 h-72 rounded-full bg-primary/5 blur-[100px]"></div>
            </div>

            <div className="grid grid-rows-2 gap-4">
              <div className="bg-surface-container-low rounded-xl p-5 border border-primary/20">
                <p className="font-label text-xs uppercase tracking-[0.2em] text-outline">
                  Active Units
                </p>
                <div className="mt-3 flex items-end justify-between">
                  <span className="text-4xl font-black font-headline">
                    {formatNumber(factoryOverview.activeUnits)}
                  </span>
                  <span className="text-secondary font-black">
                    {factoryOverview.activeUnitsDelta >= 0 ? '+' : ''}
                    {factoryOverview.activeUnitsDelta}
                  </span>
                </div>
              </div>
              <div className="bg-surface-container-low rounded-xl p-5 border border-error/20">
                <p className="font-label text-xs uppercase tracking-[0.2em] text-outline">
                  Critical Downtime
                </p>
                <div className="mt-3 flex items-end justify-between">
                  <span className="text-4xl font-black font-headline text-error">
                    {factoryOverview.criticalDowntime}
                  </span>
                  <span className="font-label text-[10px] uppercase tracking-[0.2em] text-error">
                    LIVE
                  </span>
                </div>
              </div>
            </div>
          </section>

          <section className="grid grid-cols-12 gap-4 min-h-0 overflow-hidden">
            <div className="col-span-5 bg-surface-container rounded-xl p-5 border border-outline-variant/10 flex flex-col">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-black uppercase tracking-tight">
                  Quality Yield
                </h3>
                <span className="text-2xl font-black text-secondary">
                  {formatPercent(factoryOverview.qualityYield)}
                </span>
              </div>
              <div className="flex-1 grid grid-cols-4 gap-3 items-end">
                {factoryOverview.qualityStages.map((item) => (
                  <div
                    key={item.name}
                    className="flex flex-col items-center gap-2"
                  >
                    <div className="w-full h-48 rounded-t bg-surface-container-highest overflow-hidden relative">
                      <div
                        className="absolute bottom-0 left-0 right-0 bg-secondary transition-all duration-1000"
                        style={{ height: `${item.yieldRate}%` }}
                      />
                      <div className="absolute inset-x-0 top-2 text-center text-[10px] font-black">
                        {formatPercent(item.yieldRate, 0)}
                      </div>
                    </div>
                    <span className="text-[10px] font-label uppercase tracking-widest text-outline">
                      {item.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="col-span-4 bg-surface-container rounded-xl p-5 border border-outline-variant/10 flex flex-col gap-5">
              <div>
                <p className="font-label text-[10px] uppercase tracking-[0.3em] text-outline">
                  Equipment Runtime
                </p>
                <div className="mt-2 flex items-end gap-3">
                  <span className="text-4xl font-black font-headline">
                    {formatPercent(factoryOverview.equipmentRuntime)}
                  </span>
                  <span className="text-secondary text-sm font-black">
                    RUNNING
                  </span>
                </div>
                <div className="mt-3 h-2 rounded-full bg-surface-container-highest overflow-hidden">
                  <div
                    className="h-full bg-secondary transition-all duration-1000"
                    style={{ width: `${factoryOverview.equipmentRuntime}%` }}
                  />
                </div>
              </div>
              <div className="grid grid-cols-3 gap-3">
                {factoryOverview.equipmentSignals.map((signal) => (
                  <div
                    key={signal.id}
                    className={`rounded-lg p-3 text-center border ${
                      signal.status === 'ok'
                        ? 'border-secondary/20 bg-secondary/5'
                        : 'border-error/20 bg-error/5'
                    }`}
                  >
                    <p className="text-[10px] font-label uppercase tracking-widest text-outline">
                      {signal.id}
                    </p>
                    <p
                      className={`mt-2 text-sm font-black ${signal.status === 'ok' ? 'text-secondary' : 'text-error'}`}
                    >
                      {signal.status === 'ok' ? 'OK' : 'WARN'}
                    </p>
                  </div>
                ))}
              </div>
              <div className="rounded-xl bg-surface-container-low p-4 border border-outline-variant/20">
                <p className="font-label text-[10px] uppercase tracking-[0.3em] text-outline">
                  System Summary
                </p>
                <p className="mt-3 text-sm leading-6 text-on-surface-variant">
                  全厂产量、设备状态、齐套进度与急单风险由统一模拟流驱动，编织停机将同步影响后续工序节奏。
                </p>
              </div>
            </div>

            <div className="col-span-3 bg-surface-container-low rounded-xl p-5 border border-outline-variant/20 flex flex-col overflow-hidden">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-black uppercase tracking-tight">
                  Urgent Orders
                </h3>
                <span className="text-xs font-label uppercase tracking-widest text-error">
                  Top 5
                </span>
              </div>
              <div className="scroll-container flex-1">
                <div className="scroll-content space-y-3">
                  {factoryOverview.urgentOrders.map((order) => (
                    <div
                      key={order.id}
                      className="rounded-xl bg-surface-container p-3 border-l-4 border-error flex items-center justify-between"
                    >
                      <div className="min-w-0">
                        <p className="font-black truncate">{order.id}</p>
                        <p className="text-[10px] font-label uppercase tracking-widest text-outline truncate">
                          {order.customer}
                        </p>
                      </div>
                      <div className="text-right">
                        <span
                          className={`px-2 py-1 rounded-full text-[10px] font-black uppercase ${getRiskBadgeClass(order.riskLevel)}`}
                        >
                          {order.stage}
                        </span>
                        <p className="mt-1 text-[10px] font-label uppercase tracking-widest text-outline">
                          ETA {order.etaMinutes} MIN
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          <section className="grid grid-cols-12 gap-4 min-h-0 overflow-hidden">
            <div className="col-span-6 bg-surface-container-high rounded-xl p-4 border border-secondary/20 flex flex-col min-h-0">
              <div className="flex items-center justify-between mb-3">
                <h3 className="text-base font-black uppercase tracking-tight">
                  Workshop Rankings
                </h3>
                <span className="px-2 py-1 rounded-full border border-secondary/30 text-secondary text-[10px] font-black tracking-widest">
                  LIVE
                </span>
              </div>
              <div className="space-y-3 min-h-0">
                {factoryOverview.workshopRankings.map((item, index) => (
                  <div key={item.id} className="flex items-center gap-4">
                    <span className="text-xl font-black italic text-outline/40">
                      {String(index + 1).padStart(2, '0')}
                    </span>
                    <div className="flex-1">
                      <div className="flex items-end justify-between">
                        <div>
                          <p className="font-black">{item.name}</p>
                          <p className="text-[10px] font-label uppercase tracking-widest text-outline">
                            {item.metricLabel}
                          </p>
                        </div>
                        <div className="text-right">
                          <p className="font-black text-secondary">
                            {formatPercent(item.score)}
                          </p>
                          <p
                            className={`text-[10px] font-label tracking-widest ${item.trend >= 0 ? 'text-secondary' : 'text-error'}`}
                          >
                            {item.trend >= 0 ? '+' : ''}
                            {item.trend.toFixed(1)}
                          </p>
                        </div>
                      </div>
                      <div className="mt-1.5 h-2 rounded-full bg-surface-container-highest overflow-hidden">
                        <div
                          className="h-full bg-secondary transition-all duration-1000"
                          style={{ width: `${item.score}%` }}
                        />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="col-span-6 bg-surface-container rounded-xl p-4 border border-outline-variant/10 flex flex-col gap-4 min-h-0 overflow-hidden">
              <div>
                <p className="font-label text-[10px] uppercase tracking-[0.35em] text-primary">
                  Digital Twin Snapshot
                </p>
                <h3 className="mt-2 text-2xl font-black uppercase tracking-tight">
                  实时生产联动
                </h3>
                <p className="mt-2 max-w-2xl text-sm text-on-surface-variant leading-6">
                  当前大屏模拟流以统一工厂世界状态运行，编织端机台故障、套口瓶颈、后整设备预警都会传导到总览指标与急单风险列表。
                </p>
              </div>
              <div className="grid grid-cols-3 gap-3">
                <div className="rounded-xl bg-surface-container-low p-3 border border-outline-variant/20">
                  <p className="text-[10px] font-label uppercase tracking-widest text-outline">
                    Quality Yield
                  </p>
                  <p className="mt-1.5 text-2xl font-black text-secondary">
                    {formatPercent(factoryOverview.qualityYield)}
                  </p>
                </div>
                <div className="rounded-xl bg-surface-container-low p-3 border border-outline-variant/20">
                  <p className="text-[10px] font-label uppercase tracking-widest text-outline">
                    Equipment Runtime
                  </p>
                  <p className="mt-1.5 text-2xl font-black text-primary">
                    {formatPercent(factoryOverview.equipmentRuntime)}
                  </p>
                </div>
                <div className="rounded-xl bg-surface-container-low p-3 border border-outline-variant/20">
                  <p className="text-[10px] font-label uppercase tracking-widest text-outline">
                    Updated
                  </p>
                  <p className="mt-1.5 text-2xl font-black tabular-nums">
                    {formatLocalTime(meta.lastUpdated)}
                  </p>
                </div>
              </div>
            </div>
          </section>
        </main>
      </div>
    </ScreenAdapter>
  )
}

export default FactoryOverview
