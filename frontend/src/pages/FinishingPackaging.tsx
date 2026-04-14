import React from 'react'

const FinishingPackaging: React.FC = () => {
  return (
    <div className="bg-background text-on-surface font-body overflow-hidden">
      <main className="w-full h-screen p-8 flex flex-col gap-8">
        {/* Passive Top Header */}
        <header className="flex justify-between items-center border-b border-outline-variant/30 pb-4 shrink-0">
          <div className="flex items-center gap-8">
            <span className="text-3xl font-black text-[#38bdf8] tracking-widest uppercase">
              KINETIC COMMAND
            </span>
            <div className="h-10 w-[2px] bg-outline-variant/30"></div>
            <div className="flex flex-col">
              <span className="text-primary-container text-xs font-label tracking-[0.4em] uppercase">
                Operations Monitor
              </span>
              <h1 className="text-4xl font-black font-headline uppercase">
                Finishing &amp; Packaging
              </h1>
            </div>
          </div>
          <div className="flex items-center gap-8">
            <div className="text-right">
              <div className="text-outline font-label text-xs tracking-widest uppercase">
                Factory Local Time
              </div>
              <div className="text-3xl font-bold font-label tabular-nums">
                14:42:08
              </div>
            </div>
            <div className="glass-panel px-6 py-3 rounded-xl flex items-center gap-4 border-l-4 border-error">
              <div className="text-right">
                <div className="font-label text-xs text-outline uppercase tracking-widest">
                  Active Bottleneck
                </div>
                <div className="text-error text-xl font-black uppercase">
                  Washing Line 02
                </div>
              </div>
              <span className="material-symbols-outlined text-error text-3xl">
                warning
              </span>
            </div>
          </div>
        </header>

        {/* KPI Row */}
        <div className="grid grid-cols-4 gap-6 shrink-0">
          <div className="glass-panel p-6 rounded-2xl border-l-8 border-primary">
            <div className="font-label text-xs tracking-[0.2em] text-outline uppercase font-bold">
              Outbound Readiness
            </div>
            <div className="text-6xl font-black font-headline mt-2">
              88<span className="text-3xl text-primary font-bold">%</span>
            </div>
            <div className="mt-2 flex items-center gap-2 text-secondary text-sm font-bold">
              <span className="material-symbols-outlined text-xl">
                trending_up
              </span>
              <span>+4.2% SHIFT TREND</span>
            </div>
          </div>
          <div className="glass-panel p-6 rounded-2xl border-l-8 border-secondary">
            <div className="font-label text-xs tracking-[0.2em] text-outline uppercase font-bold">
              Total Packaged Units
            </div>
            <div className="text-6xl font-black font-headline mt-2 tabular-nums">
              4,290
            </div>
            <div className="mt-4 w-full bg-surface-container-highest h-2 rounded-full overflow-hidden">
              <div className="bg-secondary h-full w-[72%]"></div>
            </div>
            <div className="mt-2 text-xs font-label text-outline uppercase tracking-widest font-bold">
              Target: 6,000
            </div>
          </div>
          <div className="glass-panel p-6 rounded-2xl border-l-8 border-secondary-fixed-dim">
            <div className="font-label text-xs tracking-[0.2em] text-outline uppercase font-bold">
              Avg Wash Temp
            </div>
            <div className="text-6xl font-black font-headline mt-2 text-secondary-fixed-dim tabular-nums">
              62.4<span className="text-3xl">º</span>
            </div>
            <div className="mt-2 flex items-center gap-2 text-outline text-sm font-bold">
              <span className="material-symbols-outlined text-xl">
                thermostat
              </span>
              <span>NOMINAL: 60-65ºC</span>
            </div>
          </div>
          <div className="glass-panel p-6 rounded-2xl border-l-8 border-primary-fixed-dim">
            <div className="font-label text-xs tracking-[0.2em] text-outline uppercase font-bold">
              Order Kit Rate
            </div>
            <div className="text-6xl font-black font-headline mt-2 text-primary-fixed-dim">
              94<span className="text-3xl font-bold">%</span>
            </div>
            <div className="mt-2 flex items-center gap-2 text-secondary text-sm font-bold">
              <span className="material-symbols-outlined text-xl">
                done_all
              </span>
              <span>12/14 COMPLETE</span>
            </div>
          </div>
        </div>

        {/* Secondary Monitoring Grid */}
        <div className="grid grid-cols-12 gap-8 flex-1 overflow-hidden">
          {/* Machine Bay: Left Side */}
          <div className="col-span-8 flex flex-col gap-8 overflow-hidden">
            {/* Industrial Washing Bay */}
            <div className="bg-surface-container-low p-6 rounded-2xl border border-outline-variant/10 shrink-0">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-black font-headline uppercase tracking-tight flex items-center gap-4">
                  <span className="material-symbols-outlined text-primary text-3xl">
                    water_drop
                  </span>
                  Industrial Washing &amp; Drying Bay
                </h2>
                <div className="flex gap-6">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-secondary ambient-glow-success"></div>
                    <span className="text-sm font-bold font-label uppercase">
                      Running
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-error animate-pulse"></div>
                    <span className="text-sm font-bold font-label uppercase">
                      Stalled
                    </span>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-3 gap-6">
                {/* Machine Card 01 */}
                <div className="glass-panel p-4 rounded-xl border-t-4 border-secondary flex flex-col">
                  <div className="flex justify-between text-sm font-bold font-label text-outline mb-2">
                    <span>WASH_UNIT_01</span>
                    <span className="text-secondary">ACTIVE</span>
                  </div>
                  <div className="flex justify-center py-2">
                    <div className="relative w-32 h-32 flex items-center justify-center">
                      <svg className="w-full h-full -rotate-90">
                        <circle
                          className="text-surface-container-highest"
                          cx="64"
                          cy="64"
                          fill="transparent"
                          r="58"
                          stroke="currentColor"
                          strokeWidth="8"
                        ></circle>
                        <circle
                          className="text-secondary transition-all duration-1000 segmented-arc"
                          cx="64"
                          cy="64"
                          fill="transparent"
                          r="58"
                          stroke="currentColor"
                          strokeDasharray="364"
                          strokeDashoffset="100"
                          strokeWidth="8"
                        ></circle>
                      </svg>
                      <div className="absolute inset-0 flex flex-col items-center justify-center">
                        <span className="text-2xl font-black tabular-nums">
                          14:22
                        </span>
                        <span className="text-[10px] font-label text-outline uppercase tracking-widest">
                          Rem
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-2 mt-2">
                    <div className="bg-surface-container-highest/30 p-2 rounded-lg text-center">
                      <div className="text-[10px] font-label text-outline uppercase">
                        Temp
                      </div>
                      <div className="text-lg font-bold">64.2ºC</div>
                    </div>
                    <div className="bg-surface-container-highest/30 p-2 rounded-lg text-center">
                      <div className="text-[10px] font-label text-outline uppercase">
                        RPM
                      </div>
                      <div className="text-lg font-bold">1,200</div>
                    </div>
                  </div>
                </div>

                {/* Machine Card 02 (Alarm) */}
                <div className="bg-error/10 p-4 rounded-xl border-t-4 border-error flex flex-col justify-center items-center text-center">
                  <div className="text-sm font-bold font-label text-error mb-2">
                    WASH_UNIT_02
                  </div>
                  <div className="w-16 h-16 bg-error/20 rounded-full flex items-center justify-center mb-3 animate-pulse">
                    <span className="material-symbols-outlined text-error text-3xl">
                      error
                    </span>
                  </div>
                  <div className="text-sm font-black text-error leading-tight uppercase px-2">
                    VALVE OBSTRUCTION DETECTED
                  </div>
                  <div className="mt-3 text-[10px] font-label text-outline uppercase tracking-widest">
                    MAINTENANCE DISPATCHED
                  </div>
                </div>

                {/* Machine Card 03 (Dryer) */}
                <div className="glass-panel p-4 rounded-xl border-t-4 border-primary-container flex flex-col">
                  <div className="flex justify-between text-sm font-bold font-label text-outline mb-2">
                    <span>DRY_UNIT_01</span>
                    <span className="text-primary-container">DRYING</span>
                  </div>
                  <div className="flex justify-center py-2">
                    <div className="relative w-32 h-32 flex items-center justify-center">
                      <svg className="w-full h-full -rotate-90">
                        <circle
                          className="text-surface-container-highest"
                          cx="64"
                          cy="64"
                          fill="transparent"
                          r="58"
                          stroke="currentColor"
                          strokeWidth="8"
                        ></circle>
                        <circle
                          className="text-primary-container transition-all duration-1000 segmented-arc"
                          cx="64"
                          cy="64"
                          fill="transparent"
                          r="58"
                          stroke="currentColor"
                          strokeDasharray="364"
                          strokeDashoffset="200"
                          strokeWidth="8"
                        ></circle>
                      </svg>
                      <div className="absolute inset-0 flex flex-col items-center justify-center">
                        <span className="text-2xl font-black tabular-nums">
                          08:45
                        </span>
                        <span className="text-[10px] font-label text-outline uppercase tracking-widest">
                          Rem
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-2 mt-2">
                    <div className="bg-surface-container-highest/30 p-2 rounded-lg text-center">
                      <div className="text-[10px] font-label text-outline uppercase">
                        Temp
                      </div>
                      <div className="text-lg font-bold">45.0ºC</div>
                    </div>
                    <div className="bg-surface-container-highest/30 p-2 rounded-lg text-center">
                      <div className="text-[10px] font-label text-outline uppercase">
                        Airflow
                      </div>
                      <div className="text-sm font-bold uppercase text-primary-container">
                        Optimal
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Process Stream: Packaging & Finishing */}
            <div className="bg-surface-container-low p-6 rounded-2xl border border-outline-variant/10 flex-1 flex flex-col overflow-hidden">
              <h2 className="text-2xl font-black font-headline uppercase tracking-tight flex items-center gap-4 mb-4 shrink-0">
                <span className="material-symbols-outlined text-primary text-3xl">
                  inventory
                </span>
                Packaging &amp; Finishing Stream
              </h2>
              <div className="auto-scroll-container flex-1">
                <div className="auto-scroll-content space-y-4">
                  {/* Stream Item 01 */}
                  <div className="grid grid-cols-12 gap-6 items-center p-5 bg-surface-container rounded-xl border-l-4 border-secondary">
                    <div className="col-span-4">
                      <div className="text-xl font-black uppercase tracking-wide">
                        BATCH_2023_XL_NAVY
                      </div>
                      <div className="text-sm text-outline font-label uppercase">
                        Ironing Station 04
                      </div>
                    </div>
                    <div className="col-span-5">
                      <div className="flex justify-between text-xs font-bold mb-2">
                        <span className="text-outline uppercase">
                          Progress: 142 / 200 UNITS
                        </span>
                        <span className="text-secondary text-base">71%</span>
                      </div>
                      <div className="h-3 w-full bg-surface-container-highest rounded-full overflow-hidden">
                        <div className="bg-secondary h-full w-[71%]"></div>
                      </div>
                    </div>
                    <div className="col-span-3 text-right">
                      <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/10 text-secondary text-base font-black">
                        <span className="material-symbols-outlined text-xl">
                          timer
                        </span>
                        ETA: 22 MIN
                      </div>
                    </div>
                  </div>

                  {/* Stream Item 02 */}
                  <div className="grid grid-cols-12 gap-6 items-center p-5 bg-surface-container rounded-xl border-l-4 border-primary">
                    <div className="col-span-4">
                      <div className="text-xl font-black uppercase tracking-wide">
                        BATCH_2023_SM_WHITE
                      </div>
                      <div className="text-sm text-outline font-label uppercase">
                        Packaging Line 01
                      </div>
                    </div>
                    <div className="col-span-5">
                      <div className="flex justify-between text-xs font-bold mb-2">
                        <span className="text-outline uppercase">
                          Progress: 88 / 150 UNITS
                        </span>
                        <span className="text-primary text-base">58%</span>
                      </div>
                      <div className="h-3 w-full bg-surface-container-highest rounded-full overflow-hidden">
                        <div className="bg-primary h-full w-[58%]"></div>
                      </div>
                    </div>
                    <div className="col-span-3 text-right">
                      <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-base font-black">
                        <span className="material-symbols-outlined text-xl">
                          timer
                        </span>
                        ETA: 45 MIN
                      </div>
                    </div>
                  </div>

                  {/* Duplicate for Seamless Scroll Loop */}
                  <div className="grid grid-cols-12 gap-6 items-center p-5 bg-surface-container rounded-xl border-l-4 border-secondary">
                    <div className="col-span-4">
                      <div className="text-xl font-black uppercase tracking-wide">
                        BATCH_2023_XL_NAVY
                      </div>
                      <div className="text-sm text-outline font-label uppercase">
                        Ironing Station 04
                      </div>
                    </div>
                    <div className="col-span-5">
                      <div className="flex justify-between text-xs font-bold mb-2">
                        <span className="text-outline uppercase">
                          Progress: 142 / 200 UNITS
                        </span>
                        <span className="text-secondary text-base">71%</span>
                      </div>
                      <div className="h-3 w-full bg-surface-container-highest rounded-full overflow-hidden">
                        <div className="bg-secondary h-full w-[71%]"></div>
                      </div>
                    </div>
                    <div className="col-span-3 text-right">
                      <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/10 text-secondary text-base font-black">
                        <span className="material-symbols-outlined text-xl">
                          timer
                        </span>
                        ETA: 22 MIN
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Logistics Column: Right Side */}
          <div className="col-span-4 flex flex-col gap-8 overflow-hidden">
            {/* Completion Matrix */}
            <div className="bg-surface-container-low p-6 rounded-2xl border border-outline-variant/10 flex-1 flex flex-col overflow-hidden">
              <h2 className="text-lg font-bold font-label uppercase tracking-[0.3em] mb-4 text-outline shrink-0">
                Kit Completion Status
              </h2>
              <div className="auto-scroll-container flex-1">
                <div className="auto-scroll-content space-y-8 py-2">
                  <div>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-base font-black uppercase">
                        Order #8821 - Winter
                      </span>
                      <span className="text-base text-secondary font-black">
                        COMPLETE
                      </span>
                    </div>
                    <div className="grid grid-cols-4 gap-2">
                      <div className="h-2 bg-secondary rounded-full"></div>
                      <div className="h-2 bg-secondary rounded-full"></div>
                      <div className="h-2 bg-secondary rounded-full"></div>
                      <div className="h-2 bg-secondary rounded-full"></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-base font-black uppercase">
                        Order #8824 - Street
                      </span>
                      <span className="text-base text-primary font-black">
                        3/4 READY
                      </span>
                    </div>
                    <div className="grid grid-cols-4 gap-2">
                      <div className="h-2 bg-primary rounded-full"></div>
                      <div className="h-2 bg-primary rounded-full"></div>
                      <div className="h-2 bg-primary rounded-full"></div>
                      <div className="h-2 bg-surface-container-highest rounded-full"></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-base font-black uppercase">
                        Order #8827 - Gear
                      </span>
                      <span className="text-base text-tertiary font-black">
                        1/4 READY
                      </span>
                    </div>
                    <div className="grid grid-cols-4 gap-2">
                      <div className="h-2 bg-tertiary-fixed-dim rounded-full"></div>
                      <div className="h-2 bg-surface-container-highest rounded-full"></div>
                      <div className="h-2 bg-surface-container-highest rounded-full"></div>
                      <div className="h-2 bg-surface-container-highest rounded-full"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Shipping Status & Map */}
            <div className="bg-surface-container-low p-6 rounded-2xl border border-outline-variant/10 shrink-0">
              <h2 className="text-lg font-bold font-label uppercase tracking-[0.3em] mb-4 text-outline">
                Shipping Dock
              </h2>
              <div className="space-y-4">
                <div className="p-4 bg-surface-container rounded-xl flex items-center justify-between border-r-4 border-secondary">
                  <div className="flex items-center gap-4">
                    <span className="material-symbols-outlined text-secondary text-3xl">
                      local_shipping
                    </span>
                    <div>
                      <div className="text-lg font-black uppercase">
                        Dock 01 - LOADING
                      </div>
                      <div className="text-xs text-outline font-bold uppercase">
                        Carrier: DHL Express
                      </div>
                    </div>
                  </div>
                  <div className="text-base font-black text-secondary">
                    ACTIVE
                  </div>
                </div>
              </div>

              {/* Layout Map Visual */}
              <div className="mt-6">
                <div className="relative aspect-video bg-surface-container-highest rounded-xl overflow-hidden p-2 grid grid-cols-4 grid-rows-3 gap-1">
                  <div className="bg-secondary/60 border border-secondary rounded flex items-center justify-center font-black text-xs">
                    S1
                  </div>
                  <div className="bg-secondary/60 border border-secondary rounded flex items-center justify-center font-black text-xs">
                    S2
                  </div>
                  <div className="bg-primary/60 border border-primary rounded flex items-center justify-center font-black text-xs">
                    P1
                  </div>
                  <div className="bg-primary/60 border border-primary rounded flex items-center justify-center font-black text-xs">
                    P2
                  </div>
                  <div className="bg-secondary/60 border border-secondary rounded flex items-center justify-center font-black text-xs">
                    S3
                  </div>
                  <div className="bg-secondary/20 border border-secondary/30 rounded"></div>
                  <div className="bg-primary/60 border border-primary rounded flex items-center justify-center font-black text-xs">
                    P3
                  </div>
                  <div className="bg-primary/20 border border-primary/30 rounded"></div>
                  <div className="col-span-2 bg-surface-container rounded"></div>
                  <div className="col-span-2 bg-error/30 border border-error/50 rounded flex items-center justify-center font-black text-error text-[10px] uppercase tracking-widest">
                    QA Reject
                  </div>
                </div>
                <div className="mt-2 flex justify-between items-center text-[10px] font-label text-outline uppercase font-bold tracking-[0.2em]">
                  <span>Sector Alpha-4</span>
                  <div className="flex items-center gap-1">
                    <div className="w-1.5 h-1.5 rounded-full bg-secondary animate-pulse"></div>
                    <span>Live Visual Feed</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Passive Footer Bar */}
        <footer className="flex justify-between items-center border-t border-outline-variant/30 pt-4 shrink-0">
          <div className="flex gap-10">
            <div className="flex items-center gap-2">
              <span className="material-symbols-outlined text-secondary text-xl">
                check_circle
              </span>
              <span className="text-sm font-bold font-label uppercase tracking-widest">
                All Primary Systems Operational
              </span>
            </div>
            <div className="flex items-center gap-2">
              <span className="material-symbols-outlined text-outline text-xl">
                database
              </span>
              <span className="text-sm font-bold font-label uppercase tracking-widest">
                Network Latency: 24ms
              </span>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <div className="px-4 py-1 bg-surface-container-high rounded text-outline text-xs font-black uppercase tracking-[0.2em]">
              Shift A-1 Monitor
            </div>
            <div className="px-4 py-1 bg-primary/20 border border-primary/40 rounded text-primary text-xs font-black uppercase tracking-[0.2em]">
              Live Data Stream Active
            </div>
          </div>
        </footer>
      </main>
    </div>
  )
}

export default FinishingPackaging
