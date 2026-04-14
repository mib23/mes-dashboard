import React from 'react';

const LinkingSewing: React.FC = () => {
  return (
    <div className="bg-surface-container-lowest h-screen w-screen p-8 flex flex-col gap-6 select-none cursor-none overflow-hidden">
      {/* TV Header: Highly Visible Branding & Core Totals */}
      <header className="flex justify-between items-end">
        <div className="flex items-center gap-8">
          <span className="text-4xl font-black text-primary tracking-tighter uppercase font-headline">KINETIC COMMAND</span>
          <div className="h-14 w-[1px] bg-outline/20"></div>
          <div>
            <p className="text-[0.75rem] font-label uppercase tracking-[0.4em] text-primary/70 mb-1">Live Workshop Status</p>
            <h1 className="text-3xl font-bold tracking-tight text-on-surface">Linking &amp; Sewing Workshop</h1>
          </div>
        </div>
        <div className="flex items-end gap-12">
          <div className="text-right">
            <p className="text-[0.75rem] font-label uppercase tracking-widest text-outline mb-1">Shift A Clock</p>
            <p className="text-5xl font-black text-on-surface tabular-nums">03:14:22</p>
          </div>
          <div className="h-16 w-[1px] bg-outline/20"></div>
          <div className="text-right">
            <p className="text-[0.75rem] font-label uppercase tracking-widest text-outline mb-1">Total Floor Output</p>
            <p className="text-6xl font-black text-on-surface tracking-tighter">4,822 <span className="text-xl font-normal text-secondary">PCS</span></p>
          </div>
        </div>
      </header>

      {/* Layout Grid */}
      <div className="grid grid-cols-12 gap-6 flex-1 min-h-0">
        {/* Left Column (8 units): Capacity and Flow */}
        <div className="col-span-8 flex flex-col gap-6 min-h-0">
          {/* Team Efficiency Cards */}
          <section className="grid grid-cols-3 gap-6 shrink-0">
            {/* Card 1 */}
            <div className="glass-panel p-6 rounded-xl glow-secondary flex flex-col justify-between">
              <p className="text-[0.7rem] font-label uppercase tracking-[0.2em] text-outline mb-4">Linking Efficiency</p>
              <div className="flex items-center justify-between mb-4">
                <span className="text-5xl font-black text-on-surface">94%</span>
                <span className="material-symbols-outlined text-secondary text-4xl">trending_up</span>
              </div>
              <div>
                <div className="w-full h-2 bg-surface-container rounded-full overflow-hidden">
                  <div className="h-full bg-secondary w-[94%] shadow-[0_0_8px_#4edea3]"></div>
                </div>
                <div className="flex justify-between mt-3 text-[0.65rem] font-bold uppercase tracking-widest">
                  <span className="text-outline">Actual: 1,420</span>
                  <span className="text-primary">Target: 1,510</span>
                </div>
              </div>
            </div>

            {/* Card 2 */}
            <div className="glass-panel p-6 rounded-xl flex flex-col justify-between">
              <p className="text-[0.7rem] font-label uppercase tracking-[0.2em] text-outline mb-4">Sewing Efficiency</p>
              <div className="flex items-center justify-between mb-4">
                <span className="text-5xl font-black text-on-surface">82%</span>
                <span className="material-symbols-outlined text-primary text-4xl">trending_flat</span>
              </div>
              <div>
                <div className="w-full h-2 bg-surface-container rounded-full overflow-hidden">
                  <div className="h-full bg-primary-container w-[82%]"></div>
                </div>
                <div className="flex justify-between mt-3 text-[0.65rem] font-bold uppercase tracking-widest">
                  <span className="text-outline">Actual: 2,102</span>
                  <span className="text-primary">Target: 2,560</span>
                </div>
              </div>
            </div>

            {/* Card 3 */}
            <div className="glass-panel p-6 rounded-xl flex flex-col justify-between">
              <p className="text-[0.7rem] font-label uppercase tracking-[0.2em] text-outline mb-4">Flat Seam Efficiency</p>
              <div className="flex items-center justify-between mb-4">
                <span className="text-5xl font-black text-on-surface">68%</span>
                <span className="material-symbols-outlined text-error text-4xl">trending_down</span>
              </div>
              <div>
                <div className="w-full h-2 bg-surface-container rounded-full overflow-hidden">
                  <div className="h-full bg-tertiary-container w-[68%]"></div>
                </div>
                <div className="flex justify-between mt-3 text-[0.65rem] font-bold uppercase tracking-widest">
                  <span className="text-outline">Actual: 1,300</span>
                  <span className="text-primary">Target: 1,912</span>
                </div>
              </div>
            </div>
          </section>

          {/* WIP Bottleneck Analysis */}
          <section className="flex-1 glass-panel rounded-xl p-8 flex flex-col min-h-0 overflow-hidden">
            <div className="flex justify-between items-center mb-10">
              <h3 className="text-lg font-bold uppercase tracking-[0.2em] font-label">WIP Flow Bottleneck Analysis</h3>
              <div className="flex items-center gap-3 bg-error-container/40 border border-error/30 text-error px-4 py-1.5 rounded-md">
                <span className="material-symbols-outlined text-xl fill animate-pulse">report</span>
                <span className="text-[0.7rem] uppercase font-black tracking-widest">Critical Delay</span>
              </div>
            </div>
            <div className="flex-1 flex items-center justify-center relative min-h-[320px]">
              {/* Flow Visualization */}
              <div className="w-full flex items-center justify-between px-16 relative">
                {/* Step 1 */}
                <div className="flex flex-col items-center gap-4 z-10">
                  <div className="w-24 h-24 rounded-full bg-surface-container-high border-2 border-primary-container/20 flex items-center justify-center text-on-surface text-2xl font-black">42</div>
                  <span className="text-[0.65rem] font-label uppercase tracking-widest text-outline">Collar Prep</span>
                </div>
                <div className="flex-1 h-1 bg-surface-container relative mx-2">
                  <div className="absolute inset-0 bg-secondary w-full opacity-10"></div>
                </div>

                {/* Step 2 - BOTTLENECK */}
                <div className="flex flex-col items-center gap-4 z-10">
                  <div className="w-40 h-40 rounded-full bg-error-container/40 border-4 border-error flex flex-col items-center justify-center text-white font-black glow-error animate-pulse">
                    <span className="text-6xl">218</span>
                    <span className="text-[0.6rem] uppercase tracking-tighter opacity-80">WIP units</span>
                  </div>
                  <span className="text-[0.75rem] font-label uppercase tracking-[0.2em] text-error font-black">Sleeve Attach</span>
                </div>
                <div className="flex-1 h-1 bg-surface-container relative mx-2">
                  <div className="absolute inset-0 bg-error w-[15%]"></div>
                </div>

                {/* Step 3 */}
                <div className="flex flex-col items-center gap-4 z-10 opacity-30">
                  <div className="w-24 h-24 rounded-full bg-surface-container-low border-2 border-outline-variant flex items-center justify-center text-on-surface text-2xl font-black">14</div>
                  <span className="text-[0.65rem] font-label uppercase tracking-widest text-outline">Side Seam</span>
                </div>
              </div>
            </div>
          </section>
        </div>

        {/* Right Column (4 units): Quality and Leaders */}
        <aside className="col-span-4 flex flex-col gap-6 min-h-0 overflow-hidden">
          {/* Quality Section */}
          <div className="glass-panel p-6 rounded-xl border-l-8 border-error shrink-0">
            <div className="flex items-center gap-3 mb-6 text-error">
              <span className="material-symbols-outlined text-3xl">warning</span>
              <h3 className="text-sm font-black uppercase tracking-[0.15em] font-label">Quality Alerts</h3>
            </div>
            <div className="space-y-4">
              <div className="flex justify-between items-center bg-surface-container-high/50 p-4 rounded-lg border border-error/20">
                <div>
                  <p className="text-sm font-bold text-on-surface">Skip stitch</p>
                  <p className="text-[0.6rem] text-outline uppercase tracking-widest">Line 04 - Sewing</p>
                </div>
                <span className="text-error font-black text-2xl">12.4%</span>
              </div>
              <div className="flex justify-between items-center bg-surface-container-low/50 p-4 rounded-lg border border-outline-variant/20">
                <div>
                  <p className="text-sm font-bold text-on-surface">Needle drop</p>
                  <p className="text-[0.6rem] text-outline uppercase tracking-widest">Line 01 - Linking</p>
                </div>
                <span className="text-on-surface font-black text-2xl">4.1%</span>
              </div>
            </div>
          </div>

          {/* Performance Leaderboard */}
          <div className="glass-panel p-6 rounded-xl flex-1 flex flex-col min-h-0">
            <h3 className="text-[0.7rem] font-bold uppercase tracking-[0.3em] font-label text-outline mb-6">Shift A - Top Performers</h3>
            <div className="flex-1 overflow-hidden relative">
              <div className="space-y-6 auto-scroll-container">
                <div className="flex items-center gap-5">
                  <div className="relative">
                    <img className="w-14 h-14 rounded-full object-cover border-2 border-secondary" alt="" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBltS2s6pXvGSjbT_8E5X4QI5rBjBxma0H9FcaoYVNcSi4hDOcf4yJHMCUqxLK1eX5fTqUKRPWl9lcVgsvKXQmegVbnYLvIHg9QF1ESmhvjIphroUUEFSnmdTrT0m53PhJr8QaWnMyaIpNhqpndBP4oJZdJbqCEt2rWfvImncdqAjY3i75NEcBixHoe8fclncDmQ78Idiq8Qcs29V-YFrhVHEsMEsXVpgClDx1RGbG8M-KjRsOEnpMNEQXnH-YqeOjOxrajd6X-uKs"/>
                    <span className="absolute -top-1 -right-1 bg-secondary text-on-secondary text-[0.6rem] font-black px-1.5 py-0.5 rounded-full">1</span>
                  </div>
                  <div className="flex-1">
                    <p className="text-base font-bold text-on-surface">Elena Rodriguez</p>
                    <p className="text-[0.6rem] text-outline uppercase font-label">Master Sewer</p>
                  </div>
                  <p className="text-2xl font-black text-secondary">412 <span className="text-[0.6rem] font-normal uppercase opacity-70">pcs</span></p>
                </div>
                <div className="flex items-center gap-5">
                  <div className="relative">
                    <img className="w-14 h-14 rounded-full object-cover border-2 border-outline-variant" alt="" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDjrFK9eX_0SPtVAB33bJN7vfd1ytApv3Ej-X854bFML6RIfwztjMwqu1FKoKbmL5Hxegds0RiHLbUDo-6XzXIzkGSmu4I2199BaPQ94-NK_8rnpQANz1nOSSDmSqIe9fpnLHb9pHyHOcLXdtJMSYSCKtd0SZ36QL-cw5Ot6rMSZeFirF_dQ-tIMzk8974SGYQPcvdgwrlxeZL2oAgT4jh62fYbQ1voNGoCSKILV8JgRoMSD8_lEKwlrTRsEh_Juit0oWM6ySfPakc"/>
                    <span className="absolute -top-1 -right-1 bg-surface-container-highest text-on-surface text-[0.6rem] font-black px-1.5 py-0.5 rounded-full">2</span>
                  </div>
                  <div className="flex-1">
                    <p className="text-base font-bold text-on-surface">Chen Wei</p>
                    <p className="text-[0.6rem] text-outline uppercase font-label">Linking Lead</p>
                  </div>
                  <p className="text-2xl font-black text-on-surface">388 <span className="text-[0.6rem] font-normal uppercase opacity-70">pcs</span></p>
                </div>
                <div className="flex items-center gap-5">
                  <div className="relative">
                    <img className="w-14 h-14 rounded-full object-cover border-2 border-outline-variant" alt="" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAkPk9AfZAKdEY6rG8qncky80CihRfjSgGAnaOU_J3I405Q0MueKuS2G00b6OorBZwBVjrgYgyo5yr5IrHkLnDtOTod5-2vEcnFzj0rAGu5OzXXrzJLYEq5R0a0sCuiipSDMUq1LZk96do33XmRJgvtysK_l0OPqMEuDl6JMKATDWvqwb5FBbUu2rZjLP_2EQncnJbQz-QiOyacwWxnOV7miG61fWfuc81he2MMeuJFodMOLlDvKCErAVDWutGQGME9q-em77rJMTk"/>
                    <span className="absolute -top-1 -right-1 bg-surface-container-highest text-on-surface text-[0.6rem] font-black px-1.5 py-0.5 rounded-full">3</span>
                  </div>
                  <div className="flex-1">
                    <p className="text-base font-bold text-on-surface">Sarah J.</p>
                    <p className="text-[0.6rem] text-outline uppercase font-label">Flat Seam Ops</p>
                  </div>
                  <p className="text-2xl font-black text-on-surface">355 <span className="text-[0.6rem] font-normal uppercase opacity-70">pcs</span></p>
                </div>
              </div>
            </div>
          </div>
        </aside>
      </div>

      {/* Footer Stats */}
      <footer className="grid grid-cols-3 gap-6 shrink-0">
        <div className="glass-panel p-5 rounded-xl flex items-center gap-6 border-b-4 border-secondary/30">
          <div className="p-4 rounded-xl bg-secondary/10 border border-secondary/20">
            <span className="material-symbols-outlined text-secondary text-3xl">power</span>
          </div>
          <div>
            <p className="text-[0.65rem] font-label uppercase tracking-[0.2em] text-outline mb-1">Active Machines</p>
            <p className="text-3xl font-black text-on-surface">142/150 <span className="text-sm font-bold text-secondary ml-1">94.6%</span></p>
          </div>
        </div>
        <div className="glass-panel p-5 rounded-xl flex items-center gap-6 border-b-4 border-primary-container/30">
          <div className="p-4 rounded-xl bg-primary-container/10 border border-primary-container/20">
            <span className="material-symbols-outlined text-primary-container text-3xl">person_pin_circle</span>
          </div>
          <div>
            <p className="text-[0.65rem] font-label uppercase tracking-[0.2em] text-outline mb-1">Labor Attendance</p>
            <p className="text-3xl font-black text-on-surface">97.6% <span className="text-sm font-bold text-primary-container ml-1">SHIFT A</span></p>
          </div>
        </div>
        <div className="glass-panel p-5 rounded-xl flex items-center gap-6 border-b-4 border-tertiary-container/30">
          <div className="p-4 rounded-xl bg-tertiary-container/10 border border-tertiary-container/20">
            <span className="material-symbols-outlined text-tertiary-container text-3xl">inventory_2</span>
          </div>
          <div>
            <p className="text-[0.65rem] font-label uppercase tracking-[0.2em] text-outline mb-1">Hourly Target Status</p>
            <p className="text-3xl font-black text-on-surface">Ahead <span className="text-sm font-bold text-tertiary-container ml-1">+120 PCS</span></p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LinkingSewing;