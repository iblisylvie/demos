# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a **研发进度可视面板** (R&D Progress Visualization Dashboard) - a React-based web application for displaying fashion design review reports and project progress.

## Architecture

### Runtime-Compiled React Application

This project uses an unconventional architecture where React code is compiled and executed at runtime in the browser:

1. **Source Code Location**: The main React application code lives in `研发进度初始版.txt` (a text file containing JSX/React code)
2. **Entry Points**: `index.html` and `preview.html` are identical entry points that:
   - Fetch `研发进度初始版.txt` via HTTP request
   - Transform ES6 imports to use global `React` object (`const { useState, useRef, useEffect } = React`)
   - Compile JSX using Babel standalone at runtime
   - Mount the app to the DOM
3. **CDN Dependencies**: React 18, ReactDOM, Babel standalone, and Tailwind CSS are loaded from unpkg CDN

### Data Structure

The application manages two main data types:
- **Project List** (`projectsData`): Overview of review projects with status, deadlines, and thumbnails
- **Report Details** (`initialReportData`): Detailed SKU-level review data including ratings, comments, regional rankings, and AI summaries

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
| `研发进度初始版.txt` | Main React application source (JSX code) |
| `index.html` | Entry point that loads and compiles the React code |
| `vercel.json` | Vercel configuration (enables clean URLs) |

## Important Notes

- **No package.json**: This project has no npm dependencies; everything is loaded via CDN
- **No build step**: Changes to `研发进度初始版.txt` are reflected immediately on page reload
- **Transform rules**: The HTML entry points perform regex transforms on the source code:
  - `import React, { useState, useRef, useEffect } from "react"` → `const { useState, useRef, useEffect } = React`
  - `export default function App()` → `function App()`
- When modifying `研发进度初始版.txt`, maintain these export/import patterns so the runtime transformation continues to work
