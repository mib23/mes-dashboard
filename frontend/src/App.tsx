import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { useRealtimeDashboard } from './hooks/useRealtimeDashboard';
import FactoryOverview from './pages/FactoryOverview';
import KnittingWorkshop from './pages/KnittingWorkshop';
import LinkingSewing from './pages/LinkingSewing';
import FinishingPackaging from './pages/FinishingPackaging';

function RealtimeBootstrap() {
  useRealtimeDashboard();
  return null;
}

function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-background text-on-surface p-8">
      <h1 className="text-4xl font-black font-headline text-primary mb-8 tracking-widest uppercase">MES Dashboard Prototypes</h1>
      <div className="grid gap-6 w-full max-w-2xl">
        <Link to="/factory" className="glass-panel p-6 rounded-xl text-center hover:bg-surface-bright transition-colors border border-outline-variant">
          <h2 className="text-2xl font-bold">工厂总大屏</h2>
          <p className="text-outline mt-2 font-label">Factory Overview TV Display</p>
        </Link>
        <Link to="/knitting" className="glass-panel p-6 rounded-xl text-center hover:bg-surface-bright transition-colors border border-outline-variant">
          <h2 className="text-2xl font-bold">编织车间大屏</h2>
          <p className="text-outline mt-2 font-label">Knitting Workshop TV Display</p>
        </Link>
        <Link to="/linking" className="glass-panel p-6 rounded-xl text-center hover:bg-surface-bright transition-colors border border-outline-variant">
          <h2 className="text-2xl font-bold">套口与缝合车间大屏</h2>
          <p className="text-outline mt-2 font-label">Linking & Sewing TV Display</p>
        </Link>
        <Link to="/finishing" className="glass-panel p-6 rounded-xl text-center hover:bg-surface-bright transition-colors border border-outline-variant">
          <h2 className="text-2xl font-bold">后整车间大屏</h2>
          <p className="text-outline mt-2 font-label">Finishing & Packaging TV Display</p>
        </Link>
      </div>
    </div>
  );
}

function App() {
  return (
    <Router>
      <RealtimeBootstrap />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/factory" element={<FactoryOverview />} />
        <Route path="/knitting" element={<KnittingWorkshop />} />
        <Route path="/linking" element={<LinkingSewing />} />
        <Route path="/finishing" element={<FinishingPackaging />} />
      </Routes>
    </Router>
  );
}

export default App;
