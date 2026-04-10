const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

const icons = [
  { name: 'chevron-left', comp: 'ChevronLeft' },
  { name: 'chevron-down', comp: 'ChevronDown' },
  { name: 'arrow-down-wide-narrow', comp: 'ArrowDownWideNarrow' },
  { name: 'arrow-up-narrow-wide', comp: 'ArrowUpNarrowWide' },
  { name: 'check-circle-2', comp: 'CheckCircle2' },
  { name: 'x-circle', comp: 'XCircle' },
  { name: 'layout-grid', comp: 'LayoutGrid' },
  { name: 'trending-up', comp: 'TrendingUp' },
  { name: 'check', comp: 'Check' },
  { name: 'bar-chart-2', comp: 'BarChart2' },
  { name: 'target', comp: 'Target' },
  { name: 'alert-triangle', comp: 'AlertTriangle' },
  { name: 'clock', comp: 'Clock' },
  { name: 'briefcase', comp: 'Briefcase' },
  { name: 'activity', comp: 'Activity' },
  { name: 'table', comp: 'Table' },
  { name: 'refresh-ccw', comp: 'RefreshCcw' },
  { name: 'arrow-right', comp: 'ArrowRight' },
  { name: 'layers', comp: 'Layers' },
];

const tmpDir = path.resolve(__dirname, 'icon-tmp');
fs.mkdirSync(tmpDir, { recursive: true });

let generated = '';

for (const ic of icons) {
  const url = `https://unpkg.com/lucide-react@0.400.0/dist/esm/icons/${ic.name}.js`;
  const file = path.join(tmpDir, `${ic.name}.js`);
  execSync(`curl -sL "${url}" -o "${file}"`);
  let content = fs.readFileSync(file, 'utf-8');
  let match = content.match(/createLucideIcon\("[^"]+",\s*(\[[\s\S]*?\])\)\s*;/);
  if (!match) {
    const reexport = content.match(/export\s*\{\s*default\s*\}\s*from\s*['"]\.\/([^'"]+)['"]/);
    if (reexport) {
      const realName = reexport[1].replace(/\.js$/, '');
      const realUrl = `https://unpkg.com/lucide-react@0.400.0/dist/esm/icons/${realName}.js`;
      execSync(`curl -sL "${realUrl}" -o "${file}"`);
      content = fs.readFileSync(file, 'utf-8');
      match = content.match(/createLucideIcon\("[^"]+",\s*(\[[\s\S]*?\])\)\s*;/);
    }
  }
  if (!match) {
    console.error('Parse failed', ic.name);
    process.exit(1);
  }
  const data = eval(match[1]);
  const children = data.map(node => {
    if (typeof node === 'string') return node;
    const [tag, attrs] = node;
    const attrStr = Object.entries(attrs).map(([k, v]) => {
      if (k === 'class') k = 'className';
      if (typeof v === 'string') return `${k}="${v}"`;
      return `${k}={${JSON.stringify(v)}}`;
    }).join(' ');
    return `<${tag} ${attrStr} />`;
  }).join('');

  generated += `const ${ic.comp} = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    ${children}
  </svg>
);
`;
}

let appJsx = fs.readFileSync(path.resolve(__dirname, 'app.jsx'), 'utf-8');
appJsx = appJsx.replace(/import\s*\{[\s\S]*?\}\s*from\s*['"]lucide-react['"];?\s*/m, '');
appJsx = appJsx.replace(
  /^import React, \{ useState, useMemo, useRef, useEffect \} from "react";?\s*/m,
  `const { useState, useMemo, useRef, useEffect } = React;\n\n${generated}\n`
);

fs.writeFileSync(path.resolve(__dirname, 'app.jsx'), appJsx);
console.log('Updated app.jsx');
