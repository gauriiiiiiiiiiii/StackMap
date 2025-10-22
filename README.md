# 🌌 StackMap: Interactive Tech Stack Visualizer
> A Dynamic Force-Directed Visualization of Modern Technology Stacks built with React, TypeScript, and D3.js
---
## Quick Glimpse 🚀
- **Interactive Visuals:** D3.js force simulation brings tech to life.
- **React + TypeScript:** Modern, robust, and scalable.
- **Tailwind CSS:** Sleek, responsive, & stylish.
- **Vite Build:** Fast and efficient development.
---
## Features ✨

### Visualization 🎯
- *Universe View*: 6 major tech categories with force-directed layout
- **Tool View**: Detailed tools with custom SVG icons
- **Detail Panel**: Comprehensive tool information
- **SDLC Modal**: Development lifecycle visualization

### Technical Stack ⚙️
- React + TypeScript for robust development
- D3.js for force-directed visualization
- Tailwind CSS for styling
- Vite for fast builds
---
## Project Structure 📁
```
/
├── App.tsx             # Main application logic
├── index.tsx           # React entry point
├── types.ts            # TypeScript definitions
├── components/
│   ├── Canvas.tsx      # D3 visualization
│   ├── Node.tsx        # Node rendering
│   ├── ProjectModal.tsx# Tool details
│   ├── LifecycleModal.tsx # SDLC view
│   └── icons/          # 40+ SVG icons
└── data/
    ├── techData.ts     # Tools data
    └── lifecycleData.ts# SDLC data
```
---

## Overview 🧭

What this repo is:
- StackMap: interactive tech-stack visualizer
- Built with: React + TypeScript + D3.js
- Purpose: show categories and tools as nodes with force-directed layout
- Key interactions: click/scroll to zoom, modals for details, layer navigation

 README shows:
- Capture design decisions
- Explain tech choices and testing suggestions
- Provide quick-run steps and verification notes

## Design 🧩

High-level architecture :
- Canvas component: manages D3 force simulation and camera transform
- Node component: renders icon, label, and handles node interactions
- Modals: `ProjectModal` & `LifecycleModal` show details on demand
- Sidebar: visited-layers navigation and Home button

Design principles :
- Separation of concerns: D3 handles physics, React handles UI state
- Composition: small focused components for maintainability
- Smooth animations: D3 + CSS transforms for GPU-acceleration
- Responsive: Tailwind utilities for layout and spacing

UX at-a-glance:
- Zoom in: left-click or mouse wheel up on a node
- Zoom out: mouse wheel down or right-click to go back
- Home: return to top-level layer
- Layer bubbles: jump to previously visited layers

## Tech Choices ⚙️

Core libs:
- React — declarative UI
- TypeScript — typing and safer refactors
- D3.js — force simulation & animations
- Vite — dev server & build
- Tailwind CSS — utility styling

Why:
- React + D3: keep simulation performant while React manages UI
- TypeScript: fewer runtime surprises, better DX
- Vite: quick iteration on animations and UI

## Tests ✅

Status:
- No automated tests included by default

Quick setup :

1) Install test deps:

```bash
npm install --save-dev jest @testing-library/react @testing-library/jest-dom @types/jest ts-jest
```

2) Add script to `package.json`:

```json
"scripts": {
    "test": "jest"
}
```

Test ideas :
- Mount `Canvas` and assert no errors
- Mock D3 and assert nodes render for sample `techData`
- Snapshot `Node` and modal UI

Manual verification :
1) Install & run dev server:

```bash
npm install
npm run dev
```

2) Verify in browser :

- Nodes display and respond to clicks
- Modals show correct info
- Zoom transitions are smooth
---

## Original Challenge (context)

- Goal: build a multi-layered interactive canvas with smooth zoom transitions
- Requirements:
    - Zoom in/out between layers using click and wheel
    - Home button to return to top-level
    - Vertical layer-bubble navigation to jump between visited layers

- Use this README to map the implementation to the challenge requirements
