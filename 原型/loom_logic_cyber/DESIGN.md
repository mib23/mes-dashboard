# Manufacturing Intelligence Design System: Operational Excellence

## 1. Overview & Creative North Star
**Creative North Star: The Kinetic Command Center**
This design system moves beyond the "static dashboard" and transforms the clothing factory MES (Manufacturing Execution System) into a high-fidelity, kinetic cockpit. By merging industrial-grade reliability with a futuristic, data-dense aesthetic, we aim to provide floor managers with immediate "glance-and-act" clarity.

The experience breaks the traditional "box-and-line" template by using **Atmospheric Depth**. We utilize a hierarchy of glowing data points and layered glass surfaces to create a sense of three-dimensional space. This isn't just a UI; it is a digital twin of the factory floor, where the most critical metrics radiate light, demanding attention through luminance rather than clutter.

---

## 2. Colors: The Luminescent Grid
Our palette is rooted in the deep void of the factory’s digital infrastructure, using light as a functional tool to indicate status and priority.

### The Palette
- **Core Background:** `surface` (#0d1322) – A deep, light-absorbing navy that provides the canvas for high-contrast monitoring.
- **Primary Kinetic:** `primary_container` (#38bdf8) – Cyber Blue. Use this for active machine states and primary navigational focus.
- **Status - Success/Running:** `secondary` (#4edea3) – Emerald Green. This color should feel like a "heartbeat" on the floor.
- **Status - Alert/Failure:** `error` (#ffb4ab) – A high-visibility red reserved strictly for downtime and critical bottlenecks.
- **Status - Warning/Standby:** `tertiary_fixed_dim` (#ffb3ad) – A warm tone to signal caution without the urgency of a full stop.

### Visual Rules
*   **The "No-Line" Rule:** 1px solid borders are strictly prohibited for sectioning. Separation between the "Cutting Area" and "Sewing Line" data must be achieved via background shifts—moving from `surface` to `surface_container_low` (#151b2b).
*   **Surface Hierarchy & Nesting:** Use `surface_container` tiers to create "Z-axis" depth. A machine status card (`surface_container_high`) should sit atop a production line group (`surface_container_low`), creating a natural "lift" that guides the eye.
*   **The "Glass & Gradient" Rule:** Main KPIs must use Glassmorphism. Use `surface_bright` at 40% opacity with a `20px` backdrop-blur. Apply a subtle linear gradient from `primary` (#8ed5ff) to `primary_container` (#38bdf8) at 10% opacity to give cards a "powered-on" energy.

---

## 3. Typography: Long-Range Clarity
To meet the requirement of 15-meter visibility, we employ a radical typography scale. We pair **Inter** for high-density data with **Space Grotesk** for technical labels to evoke a precise, engineered feel.

*   **The Hero Metric (Display-LG):** `3.5rem` / Bold. Used for the "Total Output" or "Line Efficiency %." This must be visible from the factory floor entrance.
*   **The Operational Headline (Headline-LG):** `2rem` / Semi-Bold. Used for Section Titles (e.g., "Line 04 - Active").
*   **The Technical Label (Label-MD):** `0.75rem` / **Space Grotesk** / All Caps. Used for metadata like machine IDs or timestamped logs.

**Editorial Note:** Typography should never be "middle-of-the-road." Either it is massive and authoritative or small and technical. This contrast creates an intentional, high-end industrial hierarchy.

---

## 4. Elevation & Depth: Tonal Layering
In a dark MES environment, traditional shadows are replaced by **Luminance and Tonal Stacking**.

*   **The Layering Principle:** Instead of shadows, use `surface_container_lowest` (#080e1d) for the "well" of the dashboard, and `surface_container_highest` (#2f3445) for interactive modules.
*   **Ambient Glow:** For "Running" states, apply an ambient outer glow rather than a shadow. Use `secondary` (#4edea3) at 12% opacity with a `32px` blur. This simulates the glow of an industrial LED indicator.
*   **The "Ghost Border" Fallback:** If a container requires a boundary (e.g., in high-density tables), use the `outline_variant` token at 15% opacity. It should be felt, not seen.

---

## 5. Components: Industrial Primitives

### Neon-Glow Charts
Charts must avoid solid fills. Use stroke-only line charts with the `primary` color and a secondary "glow" stroke underneath (4px blur). Data points should use `primary_fixed` (#c4e7ff) to "pop" against the dark background.

### Digital Gauges
Gauges are semi-circular, utilizing a "segmented" look rather than a smooth arc. Use `surface_container_highest` for the empty track and `primary_container` for the fill. The center of the gauge should utilize `display-md` typography for the real-time value.

### Glassmorphism Action Cards
Cards for individual machine units.
- **Background:** `surface_variant` at 60% opacity.
- **Blur:** 16px.
- **Top Edge:** 1px "Light Leak" border using `primary_fixed` at 20% opacity to simulate overhead lighting.

### High-Contrast Tables
- **Header:** `surface_container_high` with `label-sm` (Space Grotesk).
- **Rows:** No dividers. Use a `4px` vertical gap between rows. On hover, the row should shift to `surface_bright`.
- **Status Cells:** Use a "Status Pill" with `0.25rem` (sm) roundedness.

### Interactive Buttons
- **Primary:** Gradient fill (`primary` to `primary_container`). No border.
- **Tertiary/Ghost:** `outline` token text with no background. High-contrast on hover.

---

## 6. Do's and Don'ts

### Do
*   **Do** use extreme scale for critical numbers. If a line stops, the "DOWNTIME" clock should be the largest element on the screen.
*   **Do** use color sparingly. If everything is "Cyber Blue," nothing is important. Keep the UI 90% monochromatic and 10% high-chroma accent.
*   **Do** use `0.375rem` (md) roundedness for a modern, yet structured industrial feel.

### Don't
*   **Don't** use 100% white (#FFFFFF). Use `on_surface` (#dde2f8) to prevent eye strain during long night shifts.
*   **Don't** use standard "drop shadows." They look muddy on deep navy backgrounds. Use tonal shifts or glows.
*   **Don't** use scrollbars where possible. Design for fixed-height "at-a-glance" views to ensure floor workers don't have to interact with the screen to see the full picture.