# UI Testing Platform — Architecture Status Report

> Updated: 2026-02-27 | Post-diagnostic marker replacement — full codebase audit

---

## 1. Project Overview

A **visual regression testing platform** that compares Figma master screens against real app screenshots. Triple-mode analysis engine: canvas-based pixel-by-pixel comparison (`PixelEngine.ts`), Claude Opus 4 AI-powered visual QA (`OpusQA.ts`), and 5-step structural validation (`DesignValidationEngine.ts`). Built with React 18, React Router v7, Tailwind CSS v4, Motion animation library. Data persisted to IndexedDB. Design follows Material Design 3 principles.

### Design Tokens
| Token | Value |
|-------|-------|
| Primary | `#2962FF` |
| Error | `#D32F2F` |
| Success | `#2E7D32` |
| Warning | `#E65100` |
| Font | Inter (Google Fonts) |
| Background | `#FAFAFA` |
| Foreground | `#1C1B1F` |
| Muted | `#79747E` |
| AI Accent | `#7B1FA2` (purple) |
| Structural Accent | `#0D9488` (teal) |

### Dependencies
```json
{
  "lucide-react": "0.487.0",
  "motion": "12.23.24",
  "react-router": "7.13.0",
  "react": "18.3.1",
  "react-dom": "18.3.1",
  "tailwindcss": "4.1.12",
  "vite": "6.3.5"
}
```

---

## 2. Complete File Inventory with Line Counts

### Entry & Routing
| File | Lines | Description |
|------|------:|-------------|
| `/src/app/App.tsx` | 8 | Root component — `<RouterProvider>` |
| `/src/app/routes.tsx` | 165 | Route definitions, `RootLayout`, `FeatureDetailRoute`, `TestingScreenRoute`, `NotFound` |

### Types
| File | Lines | Description |
|------|------:|-------------|
| `/src/app/types/index.ts` | 305 | All shared types, interfaces, constants (`MAX_SCALE=50`, `SEVERITY_COLORS`, `DEVICE_PRESETS`, `autoDetectDevice()`, etc.) |

### Context & Persistence
| File | Lines | Description |
|------|------:|-------------|
| `/src/app/context/ProjectContext.tsx` | 271 | React Context provider — all CRUD ops, tolerance cascade, IndexedDB hydration |
| `/src/app/context/persistence.ts` | 86 | IndexedDB read/write/clear for projects array |

### Engine Layer
| File | Lines | Description |
|------|------:|-------------|
| `/src/app/engine/PixelEngine.ts` | 899 | Canvas pixel comparison, region comparison, heatmap/diff generation, background image detection, flood-fill region detection, element offset analysis (blob matching), smart device scaling |
| `/src/app/engine/OpusQA.ts` | 335 | Claude Opus 4 AI visual QA — grid scan (6 overlapping cells), region analysis, mock mode (`OPUS_USE_MOCK = true`), Supabase Edge Function proxy, `configureOpus()` for live toggle |
| `/src/app/engine/DesignValidationEngine.ts` | 1026 | 5-step structural validation: normalization, Claude Vision component detection, layout graph (spatial relations), Procrustes constraint matching, scoring & report generation |

### Custom Hooks
| File | Lines | Description |
|------|------:|-------------|
| `/src/app/hooks/useAnalysisReducer.ts` | 156 | Reducer for analysis state machine (phase, selection, AI issues, scan engine, structural metadata) |
| `/src/app/hooks/useImageTransform.ts` | 208 | Per-screenshot zoom/pan/corner-resize transforms, wheel zoom, auto-fit |

### Screen Components
| File | Lines | Description |
|------|------:|-------------|
| `/src/app/components/SplashScreen.tsx` | 118 | Landing page with logo animation, auto-redirect to `/dashboard` if projects exist |
| `/src/app/components/ProjectCreation.tsx` | 276 | 3-step wizard: name -> devices -> tolerance |
| `/src/app/components/Dashboard.tsx` | 251 | Project grid with context menus, status aggregation, delete/duplicate |
| `/src/app/components/ProjectDetail.tsx` | 355 | Feature list, add feature form, project tolerance editor with cascade modal |
| `/src/app/components/FeatureDetail.tsx` | 581 | Device test list, add test modal (device type + name), feature tolerance, device filtering |
| `/src/app/components/TestingScreen.tsx` | 2064 | **Core testing overlay** — image upload, comparison orchestration, overlay/side-by-side views, results bar, 3-engine scan orchestration, diagnostic marker rendering, 9-zone auto-scan |

### Sub-Components (extracted from TestingScreen)
| File | Lines | Description |
|------|------:|-------------|
| `/src/app/components/TestingSidebar.tsx` | 650 | Left panel — master/screenshot upload zones, thumbnails, tested regions list, device preset dropdown (auto-detect + manual), settings (tolerance slider, comparison toggles, AI Mode Mock/Live toggle), measurements panel |
| `/src/app/components/TestingToolbar.tsx` | 229 | Top bar — view mode toggle (overlay/side-by-side), adjust button, 3-engine selector (Pixel/AI/Structural), zoom controls, overlay opacity slider |
| `/src/app/components/IssuesPanel.tsx` | 277 | Collapsible issues list below overlay — severity filtering, comment count badges, resolve toggle |

### Utility Components
| File | Lines | Description |
|------|------:|-------------|
| `/src/app/components/IssueSeverityMarker.tsx` | 646 | Teardrop pin markers — **TEMPORARILY UNUSED** (diagnostic red circles in TestingScreen replace it) |
| `/src/app/components/MeasureTool.tsx` | 504 | SVG measurement overlay lines + sidebar panel + `useMeasureTool` hook with start/update/finish/cancel |
| `/src/app/components/ToleranceEditor.tsx` | 246 | Tolerance slider (0-7) + badge display + cascade apply confirmation modal |
| `/src/app/components/InlineEdit.tsx` | 108 | Click-to-edit text component (used for project/feature/test names) |
| `/src/app/components/ErrorBoundary.tsx` | 61 | Class-based error boundary with retry button |

### Styles
| File | Lines | Description |
|------|------:|-------------|
| `/src/styles/index.css` | 3 | Import aggregator |
| `/src/styles/fonts.css` | 1 | Google Fonts import (Inter 300-800) |
| `/src/styles/tailwind.css` | 2 | Tailwind v4 `@import` |
| `/src/styles/theme.css` | 183 | CSS custom properties, MD3 design tokens, base typography |

### Protected / Scaffolded (Not Used)
| Path | Count | Status |
|------|------:|--------|
| `/src/app/components/ui/*.tsx` | ~47 files | Scaffolded shadcn/ui — **never imported, never used, do not delete** |
| `/src/app/components/figma/ImageWithFallback.tsx` | 1 file | System file — **do not modify** |

### Figma Imports (Unused Legacy)
| Path | Count | Status |
|------|------:|--------|
| `/src/imports/*.tsx`, `/src/imports/*.ts` | ~17 files | Legacy Figma frame imports — not referenced by current app |

### Config
| File | Description |
|------|-------------|
| `/package.json` | Dependencies, scripts |
| `/vite.config.ts` | Vite + React + Tailwind plugin |
| `/postcss.config.mjs` | PostCSS config |

### Total Active Source Lines
| Category | Lines |
|----------|------:|
| Components | **5,415** |
| Engine | **2,260** |
| Hooks | **364** |
| Context/State | **357** |
| Types | **305** |
| Routing | **173** |
| Styles | **189** |
| **TOTAL** | **~9,063** |

---

## 3. Data Model (3-Level Hierarchy)

```
Project (Level 1)
  id, title, devices: DeviceType[], globalTolerance: number
  features: Feature[] ->
    Feature (Level 2)
      id, title, toleranceOverride: number | null
      deviceTests: DeviceTest[] ->
        DeviceTest (Level 3)
          id, name, deviceType: DeviceType
          masterScreenUrl: string | null
          screenshotUrls: string[]
          toleranceOverride: number | null
          ignoreColor, ignoreFontRendering, structuralOnly, ignoreBackgroundImg: boolean
          status: "pending" | "pass" | "issues" | "not-tested"
          reports: ComparisonReport[]
```

### Cascading Tolerance Resolution
```
DeviceTest.toleranceOverride -> Feature.toleranceOverride -> Project.globalTolerance
```
Resolved by `getEffectiveTolerance()` in `ProjectContext.tsx`. Returns `{ value: number, source: "project" | "feature" | "device" }`.

---

## 4. Routing Map

| Path | Component | Description |
|------|-----------|-------------|
| `/` | `SplashScreen` | Landing; auto-redirects to `/dashboard` if projects exist |
| `/new-project` | `ProjectCreation` | 3-step project wizard |
| `/dashboard` | `Dashboard` | All projects grid |
| `/project/:projectId` | `ProjectDetail` | Features list for a project |
| `/project/:projectId/feature/:featureId` | `FeatureDetailRoute` | Device tests for a feature |
| `/project/:projectId/feature/:featureId/test/:testId` | `TestingScreenRoute` | Full comparison overlay |
| `*` | `NotFound` | 404 fallback |

All routes wrapped in `<ProjectProvider>` via `RootLayout`. `TestingScreenRoute` additionally wrapped in `<ErrorBoundary>`.

---

## 5. Analysis Pipeline

### Phase State Machine
```
idle -> ready (dimensions match)
     -> mismatch (dimensions differ)
     -> adjust (long-press overlay positioning)
     -> select (region selection drawing)
     -> anchor (anchor point placement -> grid scan or select)
     -> grid-scan (automated cell-by-cell, AI, or structural scan)
     -> comparing (active comparison running)
     -> results (report displayed)
```

### Triple Scan Engine (`scanEngine: "pixel" | "ai" | "structural"`)

**Pixel Engine** (`PixelEngine.ts` — 899 lines):
- `compareImages()` — full-image pixel comparison with optional smart scaling
- `compareRegion()` — sub-region comparison with transform-aware cropping
- `quickSanityCheck()` — 64x64 downsampled sanity gate (>=25% match required)
- `smartScaleScreenshot()` — DPR-aware scaling when device preset is selected
- `findRegions()` — flood-fill connected component detection (8x8 block grid)
- `classifySeverity()` — area ratio + density classification
- `analyzeElementOffsets()` — blob matching for margin/padding shift detection
- `buildBackgroundImgMask()` — 16x16 block photo detection for background image exclusion
- Tolerance mapping: `toleranceToThreshold()` -> `0=5`, `7=80`
- Output: diff image (red-tinted), heatmap (green->yellow->red), issue regions, element offsets

**AI Engine** (`OpusQA.ts` — 335 lines):
- Claude Opus 4 (`claude-opus-4-5-20250514`) via Supabase Edge Function proxy
- `runFullAnalysis()` — single-pass full image analysis
- `runDetailedScan()` — 6-cell overlapping grid scan with deduplication (4px proximity)
- `runRegionAnalysis()` — isolated region test
- `configureOpus()` — runtime toggle between mock/live modes
- Grid cells: TL(0,0), TC(25,0), TR(50,0), BL(0,50), BC(25,50), BR(50,50) — each 50x50% with overlap
- Mock mode: `OPUS_USE_MOCK = true` (default) — generates deterministic mock issues

**Structural Engine** (`DesignValidationEngine.ts` — 1026 lines):
- 5-step pipeline: Normalization -> Component Detection -> Layout Graph -> Constraint Matching -> Scoring
- Claude Vision for UI element detection (buttons, text, images, icons, cards, etc.)
- Spatial relationship graph: ABOVE, BELOW, LEFT_OF, RIGHT_OF, CONTAINS, CONTAINED_IN, CENTER_ALIGNED, OVERLAPS
- Procrustes alignment for aspect ratio differences >5%
- Hungarian-like greedy element matching (type + position + size scoring)
- Output: ValidationReport with layoutScore, elementMatches, constraintErrors
- Issue coordinates: grid-based layout (sqrt(n) columns, 10% padding) since ElementMatch doesn't expose actual element positions

### Device Preset System
- 11 presets: Auto-detect, iPhone SE/14/14PM, Samsung S24, iPad/iPadPro11/iPadAir5, Desktop1080p, MBP14/16, Manual
- `autoDetectDevice()` — tries all preset x DPR combinations (1x, 1.5x, 2x, 2.625x, 3x, 3.5x, 4x) with 5% tolerance, both portrait and landscape
- Smart scaling: when preset selected and dims differ, computes scale factor from DPR ratios
- Auto-compare on manual preset selection (150ms delay)

### 9-Zone Auto-Trigger Scan
- Fires automatically when: phase=results, matchPct<10%, autoDetectedPreset exists
- Divides image into 3x3 grid (9 zones), scans in spiral order: TR->MR->BR->BC->BL->ML->TL->TC->C
- 500ms delay after conditions met, single-fire guard via `zoneScanTriggered.current`

### Comparison Flow (handleFullCompare)
1. Quick sanity check -> block if <25% structural similarity
2. Detect identity transform vs. custom position
3. If identity: `compareImages()` full-image
4. If transformed: calculate overlap region -> `compareRegion()` on visible intersection
5. Store report at `deviceTest.reports[activeScreenshotIdx]`
6. Update device test status: any non-perfect -> "issues", all perfect -> "pass"

### Tolerance Auto-Rerun
- 300ms debounced `effectiveTolerance.value` changes trigger automatic `handleFullCompare()`
- Only fires when: report already exists, both images loaded, not mid-comparison
- Uses `toleranceAutoRef` to skip initial mount

---

## 6. Supabase Integration

| Component | Value |
|-----------|-------|
| Proxy URL | `https://woadmikcidskdtnmdhmo.supabase.co/functions/v1/quick-function` |
| Auth Token | `sb_publishable_TbbMBmyFOXYnB30CODmj9Q_9xlAAfcQ` |
| Model | `claude-opus-4-5-20250514` |
| Purpose | CORS proxy for Anthropic API calls (both OpusQA and DesignValidationEngine) |
| Status | Configured, mock mode active by default for OpusQA; DVE always calls live API |

---

## 7. Issue Marker System — Current State

### DIAGNOSTIC MODE (Active)
The `IssueSeverityMarker` component has **never been visually visible** in the browser despite multiple fix attempts. It has been temporarily replaced with **diagnostic red circles** (TestingScreen.tsx lines 1861-1938).

**Diagnostic implementation:**
- Container: `position: absolute`, `top: 0`, `left: 0`, `width: containerSize.w`, `height: containerSize.h`, `zIndex: 9999`
- Placed as sibling to `overlayAreaRef`, inside `div.relative` with `isolation: "isolate"`
- Each issue: 24x24 red circle with white border, severity-colored background
- Position: `left: X%`, `top: Y%` where X = `(issue.x + issue.width/2) / masterDims.w * 100`, Y = `(issue.y + issue.height/2) / masterDims.h * 100`
- `marginLeft: -12`, `marginTop: -12` to center on coordinate
- Clickable (`pointerEvents: "auto"`, `cursor: "pointer"`), sets `selectedIssueId` on click
- Console log: `[MARKER DIAG]` with issue count, dimensions, first issue coordinates

**Issue data sources (3 arrays merged):**
1. `activeReport?.issues` — pixel engine issues (full-image or region comparison)
2. `regionIssues` — issues from tested regions (grid scan / region scan)
3. `aiMappedIssues` — AI issues mapped to ComparisonIssue format (OpusQA)

**Condition gates:**
- `!isAdjustOrSelect` — hidden during adjust/select/anchor/grid-scan phases
- `containerSize.w > 0 && containerSize.h > 0` — container must have dimensions
- `allIssues.length > 0` — must have at least one issue
- `masterDims.w > 0 && masterDims.h > 0` — master image must be loaded

**IssueSeverityMarker.tsx** (646 lines) still exists and is imported (line 21) but NOT rendered. Import kept for restoration after diagnostic confirms positioning works.

---

## 8. Features — Working (41 confirmed)

| # | Feature | Component(s) | Notes |
|---|---------|-------------|-------|
| 1 | Project CRUD | Dashboard, ProjectContext | Create, inline rename, duplicate, delete |
| 2 | Feature CRUD | ProjectDetail, ProjectContext | Create, inline rename, delete |
| 3 | DeviceTest CRUD | FeatureDetail, ProjectContext | Create with device type + custom name, delete |
| 4 | Master image upload | TestingSidebar | Drag-drop or file picker, Replace + Delete on hover |
| 5 | Screenshot upload (multiple) | TestingSidebar | Multiple per test, Add button |
| 6 | Screenshot tab switching | TestingSidebar -> TestingScreen | Per-screenshot zoom/pan state preserved |
| 7 | Pixel comparison (full) | TestingScreen -> PixelEngine | Identity or transform-aware with smart scaling |
| 8 | Pixel comparison (region) | TestingScreen -> PixelEngine | Selection rectangle -> region crop |
| 9 | Grid scan (pixel) | TestingScreen -> PixelEngine | Auto-divide into 128px cells, test each |
| 10 | AI grid scan (mock) | TestingScreen -> OpusQA | 6-cell overlapping scan with progress UI |
| 11 | Structural validation | TestingScreen -> DesignValidationEngine | 5-step pipeline with layout graph + Procrustes |
| 12 | Sanity check | TestingScreen -> PixelEngine | 64x64 thumbnail comparison, blocks if <25% |
| 13 | Tolerance cascade | ProjectContext, ToleranceEditor | Project -> Feature -> Device override with cascade modal |
| 14 | Tolerance auto-rerun | TestingScreen | 300ms debounce when slider changes |
| 15 | Overlay mode | TestingScreen | Screenshot overlaid on master with opacity control |
| 16 | Side-by-side mode | TestingScreen | Both images in split view |
| 17 | Zoom/Pan | useImageTransform | Scroll wheel zoom, drag to pan, per-screenshot transforms |
| 18 | Corner resize | useImageTransform | Drag corners of screenshot overlay, proportional scaling |
| 19 | Auto-fit | useImageTransform | Scale screenshot to match master dimensions |
| 20 | Adjust mode | TestingScreen | Long-press to enter, drag to reposition overlay |
| 21 | Select mode | TestingScreen | Draw rectangle, "Run Test" button, region comparison |
| 22 | Anchor mode | TestingScreen | Place reference point -> choose Select Region or Grid Scan |
| 23 | Results bar | TestingScreen | Severity, match%, diff pixels, Re-run button (also structural layout score variant) |
| 24 | Diff image visualization | TestingScreen | Red-tinted diff pixels overlaid on master |
| 25 | Heatmap visualization | TestingScreen | Heat-colored magnitude map in separate panel |
| 26 | Issue detection (pixel) | PixelEngine | Flood-fill region detection with severity classification |
| 27 | Element offset detection | PixelEngine | Blob matching for margin/padding shifts |
| 28 | Background image exclusion | PixelEngine | 16x16 block variance + color richness detection |
| 29 | Issues panel | IssuesPanel | Collapsible list, severity colors, comment badges, resolve |
| 30 | Issue comments (in-memory) | TestingScreen | Figma-style comment threads (in-memory state) |
| 31 | Issue resolve toggle | TestingScreen | Mark issues as resolved (in-memory Set) |
| 32 | Measure tool | MeasureTool + TestingScreen | Click-drag SVG measurement lines with distance display |
| 33 | InlineEdit | InlineEdit | Click-to-edit for names across all screens |
| 34 | Export JSON | TestingScreen | Download report as JSON (omits image data) |
| 35 | IndexedDB persistence | ProjectContext + persistence.ts | Full project array with hydration guard, 300ms debounce |
| 36 | Error boundary | ErrorBoundary | Catches TestingScreen crashes with retry |
| 37 | Splash -> Dashboard redirect | SplashScreen | Auto-redirect when projects exist |
| 38 | Comparison toggles | TestingSidebar | ignoreColor, ignoreFontRendering, structuralOnly, ignoreBackgroundImg |
| 39 | Tested regions overlay | TestingScreen | Dashed purple borders with severity labels, removable |
| 40 | AI issues summary badge | TestingScreen | Purple bar showing AI issue counts by severity |
| 41 | Dimension status card | TestingScreen | Green/orange card showing dimension match/mismatch + "Run Analysis"/"Run Structural" button |
| 42 | Cancel scan | TestingScreen | Abort grid scan, AI scan, or zone scan mid-progress |
| 43 | Device preset selector | TestingSidebar | Dropdown with 11 presets, auto-detect display, manual dims input |
| 44 | Auto-detect device | types/index.ts | DPR-aware matching against all presets, both orientations |
| 45 | Smart scale comparison | PixelEngine | DPR-aware scaling when preset selected and dims differ |
| 46 | Auto-compare on preset change | TestingScreen | 150ms delayed rerun on manual preset selection |
| 47 | 9-zone auto-trigger scan | TestingScreen | Fires when matchPct<10% + autoDetected device present |
| 48 | AI Mode Mock/Live toggle | TestingSidebar | Switches `OPUS_USE_MOCK` via `configureOpus()` at runtime |
| 49 | 3-engine selector | TestingToolbar | Pixel (blue) / AI (purple) / Structural (teal) toggle |
| 50 | Structural results bar | TestingScreen | Teal results bar with layoutScore, matched/missing element counts |

---

## 9. Features — Broken / Under Investigation

| # | Feature | Component | Details |
|---|---------|-----------|---------|
| 1 | **Issue markers not visible** | TestingScreen | `IssueSeverityMarker` has never been visually visible. Currently replaced with diagnostic red circles (z-index 9999, plain inline styles). **Pending browser verification.** |

---

## 10. Features — Missing (Planned but Not Implemented)

| # | Feature | Target Component | Details |
|---|---------|-----------------|---------|
| 1 | **Master image RefreshCw button** | TestingSidebar | Currently only has "Replace" text button + X delete on hover overlay. Needs dedicated RefreshCw icon button alongside Trash2 icon. |
| 2 | **Screenshot RefreshCw (replace) button** | TestingSidebar | Screenshot thumbnails only have X delete button. Need RefreshCw icon to replace individual screenshots. |
| 3 | **Screenshot Trash2 (delete) icon** | TestingSidebar | Currently uses generic X icon — should be explicit Trash2 for visual consistency. |
| 4 | **Comment persistence** | TestingScreen -> ProjectContext | `issueComments` state is in-memory only — lost on page refresh. Not in `DeviceTest` data model. |
| 5 | **Resolved issues persistence** | TestingScreen -> ProjectContext | `resolvedIssues` Set is in-memory only — lost on navigation. |
| 6 | **Structural marker real positions** | TestingScreen -> DesignValidationEngine | ElementMatch doesn't expose actual element x/y coordinates — markers use grid layout (sqrt(n) columns) as placeholder. |
| 7 | **AI scan live mode end-to-end test** | OpusQA | Toggle exists but live API path never browser-tested. |

---

## 11. Known Issues & Technical Debt

### Critical
| # | Issue | Location | Details |
|---|-------|----------|---------|
| 1 | Issue markers never visible | TestingScreen.tsx:1861-1938 | See Section 7. Diagnostic red circles now replace IssueSeverityMarker. Awaiting browser test. |

### Moderate
| # | Issue | Location | Details |
|---|-------|----------|---------|
| 2 | Diagnostic console logging active | TestingScreen.tsx:1875-1884 | `[MARKER DIAG]` console.log fires when issues exist. Remove after confirming circles work. |
| 3 | Unused import | TestingScreen.tsx:21 | `import { IssueSeverityMarker }` — kept for restoration but not rendered. |
| 4 | Structural marker coordinates are grid-based | TestingScreen.tsx:568-595 | `handleStructuralValidation` uses `ceil(sqrt(n))` grid layout because `ElementMatch` only has `positionDeviation` (scalar), not actual element bounding boxes. |
| 5 | Anchor phase is visual-only | TestingScreen.tsx | Anchor point has no effect on comparison — purely a visual reference for user to then select region or run grid scan. |
| 6 | `RING_COLOR` duplicated | types/index.ts, IssueSeverityMarker.tsx | Constant defined in both locations. |
| 7 | `SEVERITY_COLORS` duplicated | types/index.ts, IssueSeverityMarker.tsx | Same constant defined in both files. |
| 8 | Type re-exports for backward compat | OpusQA.ts:12, PixelEngine.ts:4 | Multiple files re-export types from `types/index.ts`. |

### Minor
| # | Issue | Location | Details |
|---|-------|----------|---------|
| 9 | Legacy Figma imports unused | `/src/imports/` | ~17 files from earlier Figma frame imports — not referenced anywhere. |
| 10 | DVE always calls live API | DesignValidationEngine.ts | No mock mode — always calls Claude Vision. Could fail if proxy is down. |

---

## 12. Changes History (Reverse Chronological)

### Session 7 (Current — 2026-02-27)
- **Diagnostic marker replacement**: Replaced `IssueSeverityMarker` rendering with plain red circles (z-index 9999, inline styles only) to diagnose visibility issue
- **Full codebase audit**: Read all 9 core files completely, confirmed line counts
- **Architecture doc update**: This document updated to reflect current state

### Session 6 (Previous — 2026-02-27)
- **Removed dead `isMeasuring`/`onToggleMeasure` prop drilling** from TestingToolbar and TestingScreen (onCancelMeasure retained — used by "Adjust" button)
- **Added AI Mode Mock/Live toggle** to TestingSidebar Settings section — Live mode calls `configureOpus()` with proxy URL and token
- **Fixed structural marker positioning**: Replaced diagonal `positionDeviation`-based placement with even grid layout (`ceil(sqrt(n))` columns, 10% internal padding)

### Session 5 (Previous)
- **Architecture audit**: Full read-only codebase inspection for first status report generation
- **No code changes**: Documentation-only session

### Session 4
- **Removed floating overlay buttons** from adjust mode (align bar, run test, cancel, coordinate display, drag label)
- **Preserved**: Crosshair alignment guides, results bar "Re-run" button

### Session 3
- **Refactored TestingScreen.tsx**: Extracted `TestingSidebar.tsx`, `TestingToolbar.tsx`, `IssuesPanel.tsx`
- **Created `useAnalysisReducer.ts`** and **`useImageTransform.ts`** hooks
- **Centralized types** to `/src/app/types/index.ts`
- **Removed from toolbar**: "Select Region", "Measure", "Re-scan" buttons

### Session 2
- **Implemented OpusQA AI engine** with Supabase Edge Function proxy
- **Added dual scan engine** toggle (pixel vs AI)
- **Implemented IssueSeverityMarker component** (646 lines — teardrop pins with comment threads)
- **Added mock mode** for development

### Session 1 (Initial Build)
- **Core platform**: 3-level hierarchy, project/feature/device test CRUD
- **PixelEngine**: Full pixel comparison with diff/heatmap generation
- **IndexedDB persistence**, **overlay comparison**, **measure tool**, **tolerance cascade**
- **All screen components**: Splash, Dashboard, ProjectCreation, ProjectDetail, FeatureDetail, TestingScreen

---

## 13. Architectural Rules & Conventions

| Rule | Details |
|------|---------|
| `e.currentTarget` safety | Always capture into local variable before any async operation |
| `MAX_SCALE = 50` | Maximum zoom level for overlay |
| Data immutability | Data only disappears on explicit user deletion — never auto-pruned |
| `/src/app/components/ui/` | ~47 scaffolded files — never import from, never delete |
| `figma/ImageWithFallback.tsx` | Protected system file — do not modify |
| `react-router` package | Must use `react-router` (NOT `react-router-dom`) — v7 |
| Font imports | Only in `/src/styles/fonts.css` |
| Inline styles for font-weight | Tailwind `font-bold` etc. avoided; use `style={{ fontWeight: N }}` |
| Tolerance slider range | 0-7, maps to pixel threshold 5-80 |
| Debounce persistence | 300ms after any project state change |
| Hydration guard | `isHydrated` flag prevents saving empty array before load completes |

---

## 14. Component Dependency Graph

```
App.tsx
  +- routes.tsx
       +- ProjectProvider (context)
            +- SplashScreen
            +- ProjectCreation
            +- Dashboard
            +- ProjectDetail
            |    +- ToleranceEditor, InlineEdit
            +- FeatureDetail
            |    +- InlineEdit
            +- TestingScreenRoute
                 +- ErrorBoundary
                      +- TestingScreen
                           +- useAnalysisReducer (hook)
                           +- useImageTransform (hook)
                           +- TestingSidebar
                           |    +- ToleranceEditor
                           |    +- MeasureToolPanel
                           |    +- configureOpus (OpusQA)
                           +- TestingToolbar
                           +- IssuesPanel
                           +- [IssueSeverityMarker — imported but NOT rendered]
                           +- [Diagnostic red circles — inline rendering]
                           +- MeasureToolOverlay
                           +- PixelEngine (compareImages, compareRegion, quickSanityCheck)
                           +- OpusQA (runDetailedScan, runFullAnalysis, dataUrlToBase64)
                           +- DesignValidationEngine (validateDesign)
```

---

## 15. Next Steps (Priority Order)

1. **Browser-test diagnostic red circles** — Upload master + screenshot, run pixel comparison, check if red numbered circles appear on overlay. Check `[MARKER DIAG]` console output for coordinate values.
2. **If circles visible**: Restore `IssueSeverityMarker`, applying same positioning approach (z-index 9999, percentage-based left/top on sibling container).
3. **If circles NOT visible**: Problem is in DOM structure/stacking context, not in the marker component. Investigate: containerSize values, parent overflow, isolation wrapper, viewport clipping.
4. **Add RefreshCw + Trash2 buttons** to sidebar thumbnails.
5. **Fix structural marker coordinates** — When DVE is properly tested, extract actual element bounding boxes from `DetectedElement` data.
6. **Persist comments & resolved state** — Add to `DeviceTest` data model.
7. **End-to-end test remaining features** — AI live mode, structural validation, 9-zone auto-scan.
