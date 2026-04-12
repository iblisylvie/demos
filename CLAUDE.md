# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a **研发进度可视面板** (R&D Progress Visualization Dashboard) - a React-based web application for displaying fashion design review reports and project progress.

## Architecture

### Runtime-Compiled React Application

This project uses an unconventional architecture where React code is compiled and executed at runtime in the browser:

1. **Source Code Location**: The main React application code lives in `app.jsx`
2. **Entry Points**: `index.html` is the entry point that:
   - Fetch `app.jsx` via HTTP request
   - Transform ES6 imports to use global `React` object (`const { useState, useRef, useEffect } = React`)
   - Compile JSX using Babel standalone at runtime
   - Mount the app to the DOM
3. **CDN Dependencies**: React 18, ReactDOM, Babel standalone, and Tailwind CSS are loaded from unpkg CDN

### Data Structure

The application manages two main data types:
- **R&D Style Data** (`rdStylesData` / `window.__RD_DATA__`): SKU-level review data loaded at runtime from `rd_data.json`. Includes style code, category, status, designer info, images, and timeline.
- **Efficiency Data** (`DESIGNERS`): Mock data for the designer efficiency dashboard.

### Runtime Data Loading

`index.html` fetches `./rd_data.json` before compiling `app.jsx` and assigns it to `window.__RD_DATA__`. Inside `app.jsx`, `rdStylesData` is initialized as `window.__RD_DATA__ || []`. To refresh data after editing the xlsx, run `node convert_xlsx.js`.

## Development Commands

### Local Development

Since this is a static site with no build step, use any static file server:

```bash
# Using Python
python3 -m http.server 8080

# Using Node.js (npx serve)
npx serve -p 8080

# Using Vercel CLI
vercel dev
```

Then open `http://localhost:8080` to view the application.

### Deployment

```bash
# Deploy to Vercel
vercel --prod
```

## File Structure

| File | Purpose |
|------|---------|
| `app.jsx` | Main React application source (JSX code) |
| `index.html` | Entry point that loads and compiles the React code |
| `rd_data.json` | Runtime R&D style data, loaded into `window.__RD_DATA__` |
| `研发进度款式数据.xlsx` | Source of truth for style data |
| `convert_xlsx.js` | Node script to convert xlsx → `rd_data.json` |
| `fix-icons.js` | Node script to download lucide icons and inline them as SVG components |
| `vercel.json` | Vercel configuration (enables clean URLs) |

## Important Notes

- **Browser has no build step or npm dependencies**: React, Babel, and Tailwind are loaded via CDN. Changes to `app.jsx` are reflected on page reload.
- **Local utility scripts may install Node packages**: `convert_xlsx.js` and `fix-icons.js` can install packages like `xlsx` into `node_modules`, but these should not be committed.
- **Never load ESM-only libraries via CDN `<script>`**: Libraries like `lucide-react` have no UMD build and will throw `ReferenceError`, causing React to unmount a blank page. Always inline icons as SVG components (use `fix-icons.js` if needed).
- **Transform rules**: The HTML entry points perform regex transforms on the source code:
  - `import React, { useState, useRef, useEffect } from "react"` → `const { useState, useRef, useEffect } = React`
  - `export default function App()` → `function App()`
- When modifying `app.jsx`, maintain these export/import patterns so the runtime transformation continues to work
