import React from 'react';

const FactoryOverview: React.FC = () => {
  return (
    <div className="bg-background text-on-surface font-body h-screen flex flex-col overflow-hidden">
      {/* Non-Interactive Header */}
      <header className="flex-shrink-0 flex items-center justify-between px-10 h-24 bg-[#0d1322]/80 backdrop-blur-md border-b border-outline-variant/20">
        <div className="flex flex-col">
          <h1 className="text-3xl font-black text-[#38bdf8] tracking-[0.2em] uppercase font-headline">KINETIC COMMAND</h1>
          <p className="font-label text-xs tracking-[0.4em] text-secondary">GLOBAL INTELLIGENCE HUD // SYSTEM ACTIVE</p>
        </div>
        <div className="flex items-center gap-16">
          <div className="text-right">
            <p className="text-xs font-label text-outline uppercase tracking-widest">System Status</p>
            <p className="text-secondary font-bold text-base">NOMINAL - ALL SYSTEMS GO</p>
          </div>
          <div className="text-right">
            <p className="text-xs font-label text-outline uppercase tracking-widest">Local Time</p>
            <p className="text-on-surface font-bold text-base tabular-nums">14:42:08 UTC</p>
          </div>
        </div>
      </header>

      {/* Main Content (Full Height, No Scroll) */}
      <main className="flex-1 p-8 overflow-hidden grid grid-rows-[auto_1fr_auto] gap-6">
        {/* Hero Section: Global KPI */}
        <section className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          <div className="lg:col-span-3 glass-panel p-8 rounded-xl relative overflow-hidden flex flex-col justify-center">
            <div className="flex justify-between items-start mb-6">
              <div>
                <span className="font-label text-sm tracking-[0.2em] text-primary uppercase">Production Performance</span>
                <h2 className="text-5xl font-black font-headline mt-1 uppercase tracking-tight">Daily Output</h2>
              </div>
              <div className="text-right">
                <span className="font-label text-sm tracking-[0.2em] text-secondary uppercase">Achievement Rate</span>
                <p className="text-6xl font-black text-secondary font-headline tabular-nums">94.2%</p>
              </div>
            </div>
            <div className="relative h-20 w-full bg-surface-container-lowest rounded-full overflow-hidden mb-4 border border-outline-variant/30">
              <div className="absolute inset-0 segmented-track opacity-30"></div>
              <div className="absolute h-full bg-gradient-to-r from-primary via-primary-container to-secondary w-[94.2%] transition-all duration-1000 flex items-center justify-end pr-4">
                <div className="w-1.5 h-10 bg-white/60 rounded-full animate-pulse"></div>
              </div>
            </div>
            <div className="flex justify-between font-label text-base text-outline font-medium tracking-widest">
              <span>0 UNITS</span>
              <span className="text-primary-fixed">8,478 / 9,000 UNITS</span>
              <span>DAILY TARGET</span>
            </div>
            {/* Background decorative element */}
            <div className="absolute -right-20 -bottom-20 w-80 h-80 bg-primary/5 rounded-full blur-[100px]"></div>
          </div>
          
          <div className="grid grid-cols-1 gap-4">
            <div className="bg-surface-container-low p-6 rounded-xl border border-primary/20 flex flex-col justify-center">
              <span className="font-label text-xs tracking-[0.2em] text-outline uppercase mb-2">Active Units</span>
              <div className="flex justify-between items-baseline">
                <span className="text-5xl font-black text-on-surface font-headline">142</span>
                <span className="text-secondary text-sm font-label flex items-center gap-1">
                  <span className="material-symbols-outlined text-sm">arrow_upward</span> 12
                </span>
              </div>
            </div>
            <div className="bg-surface-container-low p-6 rounded-xl border border-error/20 flex flex-col justify-center">
              <span className="font-label text-xs tracking-[0.2em] text-outline uppercase mb-2">Critical Downtime</span>
              <div className="flex justify-between items-baseline">
                <span className="text-5xl font-black text-error font-headline">04</span>
                <span className="font-label text-[10px] text-error/80 uppercase font-bold tracking-widest">OFFLINE</span>
              </div>
            </div>
          </div>
        </section>

        {/* Mid Section Bento Grid */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-6 min-h-0">
          {/* Quality Control Section */}
          <div className="lg:col-span-5 bg-surface-container p-6 rounded-xl border border-outline-variant/10 flex flex-col">
            <div className="flex justify-between items-center mb-6">
              <div className="flex items-center gap-3">
                <span className="material-symbols-outlined text-primary text-2xl">verified</span>
                <h3 className="font-headline text-xl font-black uppercase tracking-tight">Quality Yield</h3>
              </div>
              <div className="flex gap-4">
                <div className="text-right">
                  <p className="font-label text-[10px] text-outline uppercase tracking-widest">Yield</p>
                  <p className="text-xl font-black text-secondary font-headline">98.4%</p>
                </div>
              </div>
            </div>
            
            <div className="flex-1 grid grid-cols-4 gap-4 items-end">
              <div className="flex flex-col h-full justify-end items-center gap-2">
                <div className="w-full bg-surface-container-highest rounded-t relative overflow-hidden h-[98%]">
                  <div className="absolute bottom-0 w-full bg-secondary h-[98%]"></div>
                  <div className="absolute top-2 w-full text-center text-[10px] font-black font-label text-on-surface">98%</div>
                </div>
                <span className="font-label text-[10px] text-outline font-bold uppercase tracking-tight">Cut</span>
              </div>
              <div className="flex flex-col h-full justify-end items-center gap-2">
                <div className="w-full bg-surface-container-highest rounded-t relative overflow-hidden h-[95%]">
                  <div className="absolute bottom-0 w-full bg-secondary h-[95%]"></div>
                  <div className="absolute top-2 w-full text-center text-[10px] font-black font-label text-on-surface">95%</div>
                </div>
                <span className="font-label text-[10px] text-outline font-bold uppercase tracking-tight">Sew A</span>
              </div>
              <div className="flex flex-col h-full justify-end items-center gap-2">
                <div className="w-full bg-surface-container-highest rounded-t relative overflow-hidden h-[94%]">
                  <div className="absolute bottom-0 w-full bg-secondary h-[94%]"></div>
                  <div className="absolute top-2 w-full text-center text-[10px] font-black font-label text-on-surface">94%</div>
                </div>
                <span className="font-label text-[10px] text-outline font-bold uppercase tracking-tight">Sew B</span>
              </div>
              <div className="flex flex-col h-full justify-end items-center gap-2">
                <div className="w-full bg-surface-container-highest rounded-t relative overflow-hidden h-[99%]">
                  <div className="absolute bottom-0 w-full bg-secondary h-[99%]"></div>
                  <div className="absolute top-2 w-full text-center text-[10px] font-black font-label text-on-surface">99%</div>
                </div>
                <span className="font-label text-[10px] text-outline font-bold uppercase tracking-tight">Fin</span>
              </div>
            </div>
          </div>

          {/* Equipment Monitoring */}
          <div className="lg:col-span-4 bg-surface-container p-6 rounded-xl border border-outline-variant/10 flex flex-col justify-between">
            <h3 className="font-headline text-xl font-black mb-6 uppercase tracking-tight flex items-center gap-3">
              <span className="material-symbols-outlined text-primary text-2xl">settings_input_component</span>
              Equipment
            </h3>
            <div className="space-y-6">
              <div className="flex flex-col gap-2">
                <p className="font-label text-[10px] text-outline uppercase tracking-[0.3em]">Runtime</p>
                <div className="flex items-baseline gap-3">
                  <span className="text-4xl font-black text-on-surface font-headline">92.8%</span>
                  <span className="text-secondary font-black font-label text-[10px] tracking-widest">ONLINE</span>
                </div>
                <div className="w-full h-1.5 bg-surface-container-highest rounded-full">
                  <div className="h-full bg-secondary w-[92.8%] shadow-[0_0_10px_rgba(78,222,163,0.5)]"></div>
                </div>
              </div>
              <div className="grid grid-cols-3 gap-3">
                <div className="p-3 bg-surface-container-low rounded border border-outline-variant/20 text-center">
                  <p className="font-label text-[8px] text-outline uppercase mb-1">L01</p>
                  <p className="text-secondary font-black text-xs">OK</p>
                </div>
                <div className="p-3 bg-surface-container-low rounded border border-error/20 text-center">
                  <p className="font-label text-[8px] text-outline uppercase mb-1">L02</p>
                  <p className="text-error font-black text-xs">WARN</p>
                </div>
                <div className="p-3 bg-surface-container-low rounded border border-outline-variant/20 text-center">
                  <p className="font-label text-[8px] text-outline uppercase mb-1">L03</p>
                  <p className="text-secondary font-black text-xs">OK</p>
                </div>
              </div>
            </div>
          </div>

          {/* Urgent Dispatch (Auto Scrolling) */}
          <div className="lg:col-span-3 bg-surface-container-low p-6 rounded-xl border border-outline-variant/20 flex flex-col h-full overflow-hidden">
            <div className="flex items-center gap-3 mb-4">
              <span className="material-symbols-outlined text-error text-2xl">bolt</span>
              <h3 className="font-headline text-lg font-black uppercase tracking-tight">Urgent</h3>
            </div>
            <div className="scroll-container flex-1">
              <div className="scroll-content space-y-3">
                <div className="p-3 bg-surface-container rounded border-l-4 border-error flex justify-between items-center">
                  <div className="overflow-hidden">
                    <p className="font-headline font-black text-sm truncate">ORD-88291</p>
                    <p className="font-label text-[8px] text-outline truncate">LUXE APPAREL</p>
                  </div>
                  <div className="text-right">
                    <span className="px-1.5 py-0.5 bg-error/10 text-error rounded font-label text-[8px] font-black uppercase">Sewing</span>
                  </div>
                </div>
                <div className="p-3 bg-surface-container rounded border-l-4 border-error flex justify-between items-center">
                  <div className="overflow-hidden">
                    <p className="font-headline font-black text-sm truncate">ORD-88304</p>
                    <p className="font-label text-[8px] text-outline truncate">URBAN WEAR</p>
                  </div>
                  <div className="text-right">
                    <span className="px-1.5 py-0.5 bg-tertiary-container/10 text-tertiary-container rounded font-label text-[8px] font-black uppercase">Cutting</span>
                  </div>
                </div>
                <div className="p-3 bg-surface-container rounded border-l-4 border-secondary flex justify-between items-center">
                  <div className="overflow-hidden">
                    <p className="font-headline font-black text-sm truncate">ORD-88255</p>
                    <p className="font-label text-[8px] text-outline truncate">FAST CO</p>
                  </div>
                  <div className="text-right">
                    <span className="px-1.5 py-0.5 bg-secondary/10 text-secondary rounded font-label text-[8px] font-black uppercase">Finishing</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Bottom Section */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-6 min-h-0">
          {/* OEE Leaderboard (Auto Scrolling) */}
          <div className="lg:col-span-6 bg-surface-container-high p-6 rounded-xl status-glow-success border border-secondary/20 flex flex-col h-full overflow-hidden">
            <div className="flex justify-between items-center mb-6">
              <h3 className="font-headline text-xl font-black uppercase tracking-tight flex items-center gap-3">
                <span className="material-symbols-outlined text-secondary text-2xl">leaderboard</span>
                OEE Rankings
              </h3>
              <span className="font-label text-[10px] text-secondary border border-secondary/40 px-2 py-1 rounded-full font-black tracking-widest">LIVE</span>
            </div>
            <div className="scroll-container flex-1">
              <div className="scroll-content space-y-6">
                <div className="flex items-center gap-4">
                  <span className="text-2xl font-black text-outline/30 font-headline italic">01</span>
                  <div className="flex-1">
                    <div className="flex justify-between items-end mb-1">
                      <span className="font-headline font-black text-base uppercase">Delta</span>
                      <span className="font-label text-base font-black text-secondary">92.4%</span>
                    </div>
                    <div className="w-full h-2 bg-surface-container-highest rounded-full overflow-hidden">
                      <div className="h-full bg-secondary w-[92.4%] shadow-[0_0_10px_rgba(78,222,163,0.3)]"></div>
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <span className="text-2xl font-black text-outline/30 font-headline italic">02</span>
                  <div className="flex-1">
                    <div className="flex justify-between items-end mb-1">
                      <span className="font-headline font-black text-base uppercase">Gamma</span>
                      <span className="font-label text-base font-black text-primary">88.1%</span>
                    </div>
                    <div className="w-full h-2 bg-surface-container-highest rounded-full overflow-hidden">
                      <div className="h-full bg-primary w-[88.1%] shadow-[0_0_10px_rgba(142,213,255,0.3)]"></div>
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <span className="text-2xl font-black text-outline/30 font-headline italic">03</span>
                  <div className="flex-1">
                    <div className="flex justify-between items-end mb-1">
                      <span className="font-headline font-black text-base uppercase">Alpha</span>
                      <span className="font-label text-base font-black text-primary">85.6%</span>
                    </div>
                    <div className="w-full h-2 bg-surface-container-highest rounded-full overflow-hidden">
                      <div className="h-full bg-primary w-[85.6%] shadow-[0_0_10px_rgba(142,213,255,0.3)]"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Map Visualization */}
          <div className="lg:col-span-6 bg-surface-container p-6 rounded-xl relative overflow-hidden h-64 border border-outline-variant/10">
            <img className="absolute inset-0 w-full h-full object-cover opacity-20 grayscale saturate-0" alt="high-tech industrial floor plan" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBNaY87X3cb1_sbQ56vfXuO-bxGLSGamZwxZ-gVe-TmPfZO1oJaflrSLwmWKS3bJPhx9TRyqi4fJdnYr8pVWy8Ge12FQ2PgSNcOW0WH1U-lX3RGMtOV0ALX0QhKxTTmZmLyAXaxuwvL57FDexmvLrjM-QEd_BvOXEWYi1Tdr5-ygw37P4-6jyVoMF2Y4Fwx9VkExAeg-334VuClqIWlM1ftf-wIMq5vUoHNhSdKtpskPZJLvYlRIwVVtEoVdSmzVo2YTmAH2DxBipA"/>
            <div className="absolute inset-0 bg-gradient-to-t from-surface-container via-surface-container/10 to-transparent"></div>
            <div className="relative z-10 flex flex-col justify-end h-full">
              <div className="flex items-center gap-3 text-primary font-label uppercase tracking-[0.4em] text-[10px] font-black mb-1">
                <span className="material-symbols-outlined text-base">location_on</span>
                Real-time Visualization
              </div>
              <h4 className="text-3xl font-black font-headline uppercase tracking-tight mb-4">Digital Twin</h4>
              <div className="flex gap-6">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-secondary shadow-[0_0_8px_rgba(78,222,163,0.8)]"></div>
                  <span className="font-label text-[9px] text-outline font-black uppercase tracking-widest">Active</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-error shadow-[0_0_8px_rgba(255,180,171,0.8)]"></div>
                  <span className="font-label text-[9px] text-outline font-black uppercase tracking-widest">Issues</span>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default FactoryOverview;