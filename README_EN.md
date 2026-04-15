# MES Dashboard Showcase

[中文版](./README.md)

A portfolio-grade MES dashboard project built for manufacturing scenarios, designed to showcase my strengths in `industrial visualization`, `realtime dashboard architecture`, `large-screen adaptation`, and `React frontend delivery`.

This is not just a static UI mock. It is a multi-screen manufacturing dashboard prototype that can already be demonstrated with dynamic simulated data across four core production views.

## Why This Project Stands Out

- Business-focused: built around real manufacturing workflows, not a generic admin theme
- Four dedicated big-screen views: aligned with actual factory roles and operations
- Dynamic mock data: no longer a static concept demo
- High-fidelity state linkage: machine failures, output, WIP bottlenecks, and order readiness influence each other
- TV / large-screen adaptation: scales from a `1920x1080` design base for showroom, TV, and factory display use
- Clean frontend architecture: typed models, store, mock engine, and realtime abstraction ready for live integration

## Project Positioning

- A manufacturing dashboard frontend showcase
- A factory production monitoring prototype
- A visualization sample for MES / ERP / IoT scenarios
- Suitable as a demo, PoC, MVP, or the frontend base of a larger production system
- Ready to evolve into a live API / WebSocket-driven realtime dashboard

## Screen Gallery

### 1. Factory Overview Screen

Built for management-level visibility: production achievement rate, equipment runtime, quality yield, urgent orders, and workshop rankings.

![Factory Overview Screen](./原型/factory_overview_tv_display_auto_scroll/screen.png)

### 2. Knitting Workshop Screen

Focused on equipment-heavy operations: OEE, production progress, fault alerts, and machine grid status.

![Knitting Workshop Screen](./原型/knitting_workshop_tv_display_auto_scroll/screen.png)

### 3. Linking & Sewing Workshop Screen

Focused on labor-intensive processes: WIP bottlenecks, quality alerts, team efficiency, and worker leaderboard.

![Linking & Sewing Workshop Screen](./原型/linking_sewing_tv_display_auto_scroll/screen.png)

### 4. Finishing & Packaging Screen

Focused on washing, drying, packaging, and shipping readiness with machine status, batch progress, kit completion, and dock activity.

![Finishing & Packaging Screen](./原型/finishing_packaging_tv_display_auto_scroll/screen.png)

## Implemented Features

### Dynamic Mock Realtime Flow

- Local mock realtime stream to simulate live production conditions
- A shared “factory world state” powers all screens
- Business state advances continuously over time
- Connection states include connecting, connected, reconnecting, and offline snapshot mode

### Linked Business Logic

- Knitting machine downtime reduces OEE and factory achievement rate
- Upstream production impacts downstream WIP accumulation
- Quality issues influence team efficiency and alert severity
- Finishing line warnings affect batch ETA, order kit rate, and shipping readiness

### Frontend Architecture

- `types/`: domain models and realtime protocol types
- `mock/engine/`: world state, rule engine, and ticking logic
- `services/realtime/`: mock and future live realtime adapters
- `store/`: Zustand global state
- `hooks/`: connection handling and realtime bootstrapping
- `pages/`: four screen-level dashboards
- `components/ScreenAdapter.tsx`: large-screen scaling adapter

## Tech Stack

```text
React 19
TypeScript
Vite
Tailwind CSS v4
Zustand
ECharts
Mock Realtime Engine
Large-Screen Responsive Adapter
```

## Technical Value

### 1. More Than a Static UI

This project demonstrates end-to-end frontend thinking:

- translating business workflows into usable dashboard structures
- designing information-dense screens for real viewing distance
- preparing a realtime-ready frontend architecture
- solving layout, screen scaling, and long-running display concerns

### 2. Ready for Further Engineering

The project already includes:

- presentable UI
- dynamic simulated data
- structured data models
- realtime abstraction for future live integration
- screen separation aligned with manufacturing operations

This makes it a strong foundation for a production-oriented extension.

## Local Setup

### 1. Install dependencies

```bash
cd frontend
npm install
```

### 2. Start development server

```bash
npm run dev
```

### 3. Build for production

```bash
npm run build
```

### 4. Run lint

```bash
npm run lint
```

## Project Structure

```text
mes-dashboard/
├─ docs/
├─ frontend/
│  ├─ src/
│  │  ├─ components/
│  │  ├─ config/
│  │  ├─ hooks/
│  │  ├─ mock/
│  │  ├─ pages/
│  │  ├─ services/
│  │  ├─ store/
│  │  ├─ types/
│  │  └─ utils/
├─ 原型/
│  ├─ factory_overview_tv_display_auto_scroll/
│  ├─ knitting_workshop_tv_display_auto_scroll/
│  ├─ linking_sewing_tv_display_auto_scroll/
│  └─ finishing_packaging_tv_display_auto_scroll/
```

## Next Steps

- evolve the current demo into a production-ready system
- connect live MES / ERP / IoT data sources
- add backend aggregation, caching, and alerting capabilities
- introduce auth, role-based routing, and deployment setup
- expand trend analysis, alarm center, and historical drill-down
- introduce multilingual support, permissions, theming, and deployment workflow
- further improve long-running dashboard stability and TV-device compatibility
