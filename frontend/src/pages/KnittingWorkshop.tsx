import React from 'react';

const KnittingWorkshop: React.FC = () => {
  return (
    <div className="bg-background text-on-surface font-body overflow-hidden">
      <main className="w-full h-screen p-8 flex flex-col gap-6 bg-surface-container-lowest">
        {/* Top Header Bar (High Contrast) */}
        <header className="flex items-center justify-between border-b border-outline-variant/30 pb-4 shrink-0">
          <div className="flex items-center gap-6">
            <span className="text-4xl font-black text-[#38bdf8] tracking-widest uppercase">KINETIC COMMAND</span>
            <div className="h-10 w-px bg-outline-variant/40"></div>
            <div className="flex flex-col">
              <span className="text-xs font-label uppercase tracking-[0.2em] text-on-surface-variant font-bold">Production Floor Overview</span>
              <span className="text-lg font-black text-secondary flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-secondary animate-pulse"></span>
                LIVE BROADCAST
              </span>
            </div>
          </div>
          <div className="flex items-center gap-10">
            <div className="text-right">
              <p className="text-[10px] font-label font-bold text-on-surface-variant uppercase tracking-widest">System Status</p>
              <p className="text-xl font-black text-secondary">OPERATIONAL</p>
            </div>
            <div className="text-right">
              <p className="text-[10px] font-label font-bold text-on-surface-variant uppercase tracking-widest">Shift Time Remaining</p>
              <p className="text-xl font-black tabular-nums">03:42:15</p>
            </div>
          </div>
        </header>

        {/* Mid Section: Performance and Alerts */}
        <div className="grid grid-cols-12 gap-6 h-[55%] min-h-0 shrink-0">
          {/* Left Column: Metrics */}
          <div className="col-span-8 flex flex-col gap-6 min-h-0">
            <section className="grid grid-cols-3 gap-6 shrink-0">
              <div className="glass-card p-6 rounded-xl flex flex-col justify-between glow-primary border border-primary/30">
                <div className="flex items-center justify-between mb-2">
                  <span className="font-label text-xs uppercase tracking-widest text-primary font-bold">Availability</span>
                  <span className="material-symbols-outlined text-primary-container">timer</span>
                </div>
                <div className="flex items-baseline gap-1">
                  <span className="text-6xl font-black tracking-tighter text-on-surface">94.2</span>
                  <span className="text-xl font-bold text-primary-container">%</span>
                </div>
                <div className="mt-4 h-2.5 w-full bg-surface-container-highest rounded-full overflow-hidden">
                  <div className="h-full bg-primary-container w-[94.2%]"></div>
                </div>
              </div>

              <div className="glass-card p-6 rounded-xl flex flex-col justify-between glow-secondary border border-secondary/30">
                <div className="flex items-center justify-between mb-2">
                  <span className="font-label text-xs uppercase tracking-widest text-secondary font-bold">Performance</span>
                  <span className="material-symbols-outlined text-secondary">bolt</span>
                </div>
                <div className="flex items-baseline gap-1">
                  <span className="text-6xl font-black tracking-tighter text-on-surface">88.5</span>
                  <span className="text-xl font-bold text-secondary">%</span>
                </div>
                <div className="mt-4 h-2.5 w-full bg-surface-container-highest rounded-full overflow-hidden">
                  <div className="h-full bg-secondary w-[88.5%]"></div>
                </div>
              </div>

              <div className="glass-card p-6 rounded-xl flex flex-col justify-between border border-on-surface-variant/30">
                <div className="flex items-center justify-between mb-2">
                  <span className="font-label text-xs uppercase tracking-widest text-on-surface-variant font-bold">Quality Rate</span>
                  <span className="material-symbols-outlined text-on-surface-variant">verified</span>
                </div>
                <div className="flex items-baseline gap-1">
                  <span className="text-6xl font-black tracking-tighter text-on-surface">99.1</span>
                  <span className="text-xl font-bold text-on-surface-variant">%</span>
                </div>
                <div className="mt-4 h-2.5 w-full bg-surface-container-highest rounded-full overflow-hidden">
                  <div className="h-full bg-on-surface-variant w-[99.1%]"></div>
                </div>
              </div>
            </section>

            {/* Production Progress Detail */}
            <section className="flex-1 min-h-0 bg-surface-container-low rounded-xl p-6 border border-outline-variant/20 flex flex-col">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-black tracking-tight uppercase">Production Progress <span className="text-primary-container ml-2">Detail</span></h2>
                <div className="flex gap-6">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-sm bg-primary-container"></div>
                    <span className="text-[10px] font-label font-bold tracking-widest">ACTUAL</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-sm bg-surface-container-highest"></div>
                    <span className="text-[10px] font-label font-bold tracking-widest">PLANNED</span>
                  </div>
                </div>
              </div>

              <div className="flex-1 flex flex-col justify-around gap-4 overflow-hidden">
                <div className="space-y-3">
                  <div className="flex justify-between items-end">
                    <span className="font-label text-base tracking-[0.15em] font-bold uppercase">Front Panels</span>
                    <span className="text-xl font-black">1,420 / 1,800 <span className="text-primary-container ml-2">78%</span></span>
                  </div>
                  <div className="h-8 w-full bg-surface-container-highest rounded-lg flex overflow-hidden p-1 border border-outline-variant/10">
                    <div className="h-full bg-primary-container rounded" style={{ width: '78%' }}></div>
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="flex justify-between items-end">
                    <span className="font-label text-base tracking-[0.15em] font-bold uppercase">Back Panels</span>
                    <span className="text-xl font-black">1,380 / 1,800 <span className="text-primary-container ml-2">76%</span></span>
                  </div>
                  <div className="h-8 w-full bg-surface-container-highest rounded-lg flex overflow-hidden p-1 border border-outline-variant/10">
                    <div className="h-full bg-primary-container rounded" style={{ width: '76%' }}></div>
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="flex justify-between items-end">
                    <span className="font-label text-base tracking-[0.15em] font-bold uppercase">Sleeve Sets</span>
                    <span className="text-xl font-black">1,480 / 1,900 <span className="text-secondary ml-2">82%</span></span>
                  </div>
                  <div className="h-8 w-full bg-surface-container-highest rounded-lg flex overflow-hidden p-1 border border-outline-variant/10">
                    <div className="h-full bg-secondary rounded" style={{ width: '82%' }}></div>
                  </div>
                </div>
              </div>
            </section>
          </div>

          {/* Right Column: Output & Faults */}
          <div className="col-span-4 flex flex-col gap-6 min-h-0">
            <section className="bg-surface-container p-6 rounded-xl border border-outline-variant/20 shrink-0">
              <h3 className="font-label text-xs font-black tracking-[0.2em] text-on-surface-variant uppercase mb-4 text-center">Total Floor Output</h3>
              <div className="flex flex-col items-center justify-center">
                <div className="relative w-44 h-44 flex items-center justify-center">
                  <svg className="w-full h-full transform -rotate-90">
                    <circle className="text-surface-container-highest" cx="88" cy="88" fill="transparent" r="80" stroke="currentColor" strokeWidth="12"></circle>
                    <circle className="text-primary-container" cx="88" cy="88" fill="transparent" r="80" stroke="currentColor" strokeDasharray="502.65" strokeDashoffset="125.66" strokeWidth="12"></circle>
                  </svg>
                  <div className="absolute inset-0 flex flex-col items-center justify-center">
                    <span className="text-4xl font-black">4,280</span>
                    <span className="text-[10px] font-label font-bold text-on-surface-variant uppercase tracking-widest mt-1">Pieces / Shift</span>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4 w-full mt-4">
                  <div className="text-center">
                    <p className="text-[10px] font-label font-bold text-on-surface-variant uppercase mb-1">Target</p>
                    <p className="text-xl font-black">5,500</p>
                  </div>
                  <div className="text-center border-l border-outline-variant/30">
                    <p className="text-[10px] font-label font-bold text-on-surface-variant uppercase mb-1">Actual</p>
                    <p className="text-xl font-black text-secondary">4,280</p>
                  </div>
                </div>
              </div>
            </section>

            <section className="flex-1 bg-surface-container-high rounded-xl p-6 border-l-[12px] border-error overflow-hidden flex flex-col">
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-label text-xs font-black tracking-[0.2em] text-error uppercase">Active Faults</h3>
                <span className="material-symbols-outlined text-error text-2xl animate-pulse" style={{ fontVariationSettings: "'FILL' 1" }}>warning</span>
              </div>
              <div className="space-y-4 overflow-hidden">
                <div className="flex gap-4 items-start pb-4 border-b border-outline-variant/30">
                  <span className="material-symbols-outlined text-error text-3xl">error</span>
                  <div>
                    <p className="text-base font-black">Yarn Breakage: M-042</p>
                    <p className="text-xs text-on-surface-variant font-medium">Line 04 stopped. Action required.</p>
                    <p className="text-[10px] font-label mt-1 text-error font-black uppercase">Downtime: 03m 12s</p>
                  </div>
                </div>
                <div className="flex gap-4 items-start">
                  <span className="material-symbols-outlined text-error text-3xl">priority_high</span>
                  <div>
                    <p className="text-base font-black">Needle Drop: M-009</p>
                    <p className="text-xs text-on-surface-variant font-medium">Sensors detected drop in Line 01.</p>
                    <p className="text-[10px] font-label mt-1 text-error font-black uppercase">Downtime: 12m 45s</p>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>

        {/* Bottom Section: Machine Status Grid (With Auto-Scroll) */}
        <section className="flex-1 min-h-0 flex flex-col gap-4 overflow-hidden mt-6">
          <div className="flex items-center justify-between shrink-0">
            <h2 className="text-xl font-black tracking-tight uppercase">Machine Status <span className="text-primary-container ml-2">Grid</span></h2>
            <div className="flex gap-8">
              <span className="flex items-center gap-2 text-[10px] font-label font-black tracking-widest"><div className="w-3 h-3 rounded-full bg-secondary shadow-[0_0_10px_rgba(78,222,163,0.8)]"></div> RUNNING</span>
              <span className="flex items-center gap-2 text-[10px] font-label font-black tracking-widest"><div className="w-3 h-3 rounded-full bg-tertiary-fixed-dim"></div> STANDBY</span>
              <span className="flex items-center gap-2 text-[10px] font-label font-black tracking-widest"><div className="w-3 h-3 rounded-full bg-error shadow-[0_0_10px_rgba(255,180,171,0.8)]"></div> DOWNTIME</span>
            </div>
          </div>
          
          <div className="flex-1 overflow-hidden relative scroll-container">
            <div className="scroll-content absolute w-full space-y-4">
              <div className="grid grid-cols-8 gap-4">
                <div className="bg-surface-container-high p-5 rounded-xl border-t-4 border-secondary">
                  <span className="text-[10px] font-bold opacity-60">M-001</span>
                  <div className="mt-2 text-3xl font-black">98%</div>
                  <div className="mt-1 text-[10px] font-label font-black text-secondary uppercase tracking-widest">Stable</div>
                </div>
                <div className="bg-surface-container-high p-5 rounded-xl border-t-4 border-secondary">
                  <span className="text-[10px] font-bold opacity-60">M-002</span>
                  <div className="mt-2 text-3xl font-black">96%</div>
                  <div className="mt-1 text-[10px] font-label font-black text-secondary uppercase tracking-widest">Stable</div>
                </div>
                <div className="bg-surface-container-high p-5 rounded-xl border-t-4 border-error">
                  <span className="text-[10px] font-bold opacity-60 text-error/80">M-003</span>
                  <div className="mt-2 text-3xl font-black text-error">STOP</div>
                  <div className="mt-1 text-[10px] font-label font-black text-error uppercase tracking-widest">Yarn Break</div>
                </div>
                <div className="bg-surface-container-high p-5 rounded-xl border-t-4 border-secondary">
                  <span className="text-[10px] font-bold opacity-60">M-004</span>
                  <div className="mt-2 text-3xl font-black">99%</div>
                  <div className="mt-1 text-[10px] font-label font-black text-secondary uppercase tracking-widest">Stable</div>
                </div>
                <div className="bg-surface-container-high p-5 rounded-xl border-t-4 border-tertiary-fixed-dim">
                  <span className="text-[10px] font-bold opacity-60">M-005</span>
                  <div className="mt-2 text-3xl font-black text-tertiary-fixed-dim">IDLE</div>
                  <div className="mt-1 text-[10px] font-label font-black text-tertiary-fixed-dim uppercase tracking-widest">Standby</div>
                </div>
                <div className="bg-surface-container-high p-5 rounded-xl border-t-4 border-secondary">
                  <span className="text-[10px] font-bold opacity-60">M-006</span>
                  <div className="mt-2 text-3xl font-black">95%</div>
                  <div className="mt-1 text-[10px] font-label font-black text-secondary uppercase tracking-widest">Stable</div>
                </div>
                <div className="bg-surface-container-high p-5 rounded-xl border-t-4 border-secondary">
                  <span className="text-[10px] font-bold opacity-60">M-007</span>
                  <div className="mt-2 text-3xl font-black">97%</div>
                  <div className="mt-1 text-[10px] font-label font-black text-secondary uppercase tracking-widest">Stable</div>
                </div>
                <div className="bg-surface-container-high p-5 rounded-xl border-t-4 border-secondary">
                  <span className="text-[10px] font-bold opacity-60">M-008</span>
                  <div className="mt-2 text-3xl font-black">98%</div>
                  <div className="mt-1 text-[10px] font-label font-black text-secondary uppercase tracking-widest">Stable</div>
                </div>
              </div>

              <div className="grid grid-cols-8 gap-4">
                <div className="bg-surface-container-high p-5 rounded-xl border-t-4 border-secondary">
                  <span className="text-[10px] font-bold opacity-60">M-009</span>
                  <div className="mt-2 text-3xl font-black text-error">STOP</div>
                  <div className="mt-1 text-[10px] font-label font-black text-error uppercase tracking-widest">Needle</div>
                </div>
                <div className="bg-surface-container-high p-5 rounded-xl border-t-4 border-secondary">
                  <span className="text-[10px] font-bold opacity-60">M-010</span>
                  <div className="mt-2 text-3xl font-black">94%</div>
                  <div className="mt-1 text-[10px] font-label font-black text-secondary uppercase tracking-widest">Stable</div>
                </div>
                <div className="bg-surface-container-high p-5 rounded-xl border-t-4 border-secondary">
                  <span className="text-[10px] font-bold opacity-60">M-011</span>
                  <div className="mt-2 text-3xl font-black">99%</div>
                  <div className="mt-1 text-[10px] font-label font-black text-secondary uppercase tracking-widest">Stable</div>
                </div>
                <div className="bg-surface-container-high p-5 rounded-xl border-t-4 border-secondary">
                  <span className="text-[10px] font-bold opacity-60">M-012</span>
                  <div className="mt-2 text-3xl font-black">98%</div>
                  <div className="mt-1 text-[10px] font-label font-black text-secondary uppercase tracking-widest">Stable</div>
                </div>
                <div className="bg-surface-container-high p-5 rounded-xl border-t-4 border-secondary">
                  <span className="text-[10px] font-bold opacity-60">M-013</span>
                  <div className="mt-2 text-3xl font-black">92%</div>
                  <div className="mt-1 text-[10px] font-label font-black text-secondary uppercase tracking-widest">Stable</div>
                </div>
                <div className="bg-surface-container-high p-5 rounded-xl border-t-4 border-tertiary-fixed-dim">
                  <span className="text-[10px] font-bold opacity-60">M-014</span>
                  <div className="mt-2 text-3xl font-black text-tertiary-fixed-dim">IDLE</div>
                  <div className="mt-1 text-[10px] font-label font-black text-tertiary-fixed-dim uppercase tracking-widest">Standby</div>
                </div>
                <div className="bg-surface-container-high p-5 rounded-xl border-t-4 border-secondary">
                  <span className="text-[10px] font-bold opacity-60">M-015</span>
                  <div className="mt-2 text-3xl font-black">96%</div>
                  <div className="mt-1 text-[10px] font-label font-black text-secondary uppercase tracking-widest">Stable</div>
                </div>
                <div className="bg-surface-container-high p-5 rounded-xl border-t-4 border-secondary">
                  <span className="text-[10px] font-bold opacity-60">M-016</span>
                  <div className="mt-2 text-3xl font-black">98%</div>
                  <div className="mt-1 text-[10px] font-label font-black text-secondary uppercase tracking-widest">Stable</div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default KnittingWorkshop;