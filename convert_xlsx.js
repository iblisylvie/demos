const xlsx = require('xlsx');
const fs = require('fs');

const workbook = xlsx.readFile('./研发进度款式数据v7.xlsx');

function getCellText(cell) {
  if (!cell) return '';
  if (cell.l && cell.l.Target) return String(cell.l.Target).trim();
  if (cell.v) return String(cell.v).trim();
  if (cell.w) return String(cell.w).trim();
  if (cell.r) {
    const matches = cell.r.match(/<t>([^<]*)<\/t>/g);
    if (matches) return matches.map(m => m.replace(/<\/?t>/g, '')).join('');
  }
  return '';
}

function readSheetRows(sheet, skipSample = true) {
  const range = xlsx.utils.decode_range(sheet['!ref']);
  const rows = [];
  for (let R = 1; R <= range.e.r; ++R) {
    const row = [];
    for (let C = 0; C <= range.e.c; ++C) {
      const cell = sheet[xlsx.utils.encode_cell({ r: R, c: C })];
      row.push(getCellText(cell));
    }
    if (skipSample && row.some(cell => cell.includes('样例数据'))) continue;
    if (row[0]) rows.push(row);
  }
  return rows;
}

function readFixedSheetRows(sheet) {
  const range = xlsx.utils.decode_range(sheet['!ref']);
  const rows = [];
  for (let R = 0; R <= range.e.r; ++R) {
    const row = [];
    for (let C = 0; C <= range.e.c; ++C) {
      const cell = sheet[xlsx.utils.encode_cell({ r: R, c: C })];
      row.push(getCellText(cell));
    }
    rows.push(row);
  }
  return rows;
}

const CATEGORY_MAP = {
  'T恤': '上衣',
  '衬衫': '上衣',
  '西装': '外套',
  '裤装': '下装',
  '半身裙': '下装',
  '连衣裙': '连衣裙',
  '配饰': '配饰',
};

const CATEGORIES = ['上衣', '外套', '下装', '连衣裙', '配饰'];
const BASE_DATE = new Date('2026-06-01');

function parseDate(val) {
  if (!val) return null;
  if (val instanceof Date) {
    const y = val.getFullYear();
    const m = val.getMonth() + 1;
    const d = val.getDate();
    const fixed = new Date(`${y}-${String(m).padStart(2, '0')}-${String(d).padStart(2, '0')}T00:00:00`);
    return isNaN(fixed) ? null : fixed;
  }
  const s = String(val).trim();
  const parts = s.split('.');
  if (parts.length !== 3) return null;
  const [y, m, d] = parts;
  const fixed = new Date(`${y}-${String(m).padStart(2, '0')}-${String(d).padStart(2, '0')}T00:00:00`);
  return isNaN(fixed) ? null : fixed;
}

function formatDate(d) {
  if (!d) return '';
  const y = d.getFullYear();
  const m = String(d.getMonth() + 1).padStart(2, '0');
  const day = String(d.getDate()).padStart(2, '0');
  return `${y}.${m}.${day}`;
}

// ----------------------
// 1. 读取主表款式数据
// ----------------------
const mainSheet = workbook.Sheets['研发进度款式数据'];
const mainRows = readSheetRows(mainSheet);

const designerRows = workbook.SheetNames.includes('designer')
  ? readSheetRows(workbook.Sheets['designer'])
  : [];

const designerMap = {};
designerRows.forEach((row) => {
  const id = row[0];
  const brand = row[1];
  const position = row[2];
  const name = row[3];
  const avatar = row[4] || (name ? name[0] : '');
  const department = row[5] || '';
  let lengthOfService = row[6] != null ? String(row[6]) : '';
  if (lengthOfService && /^\d+(\.\d+)?$/.test(lengthOfService)) {
    lengthOfService += '年';
  }
  if (id) designerMap[id] = { id, brand, position, name, avatar, department, lengthOfService };
});

const demoThumbs = [
  "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=1200&q=80",
  "https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=1200&q=80",
  "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?auto=format&fit=crop&w=1200&q=80",
  "https://images.unsplash.com/photo-1529139574466-a303027c1d8b?auto=format&fit=crop&w=1200&q=80",
  "https://images.unsplash.com/photo-1496747611176-843222e1e57c?auto=format&fit=crop&w=1200&q=80",
  "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=1200&q=80",
];

// 读取 images sheet
const imageRows = workbook.SheetNames.includes('images')
  ? readSheetRows(workbook.Sheets['images'])
  : [];
const imageMap = {};
imageRows.forEach((row) => {
  const code = row[0];
  const url = row[1];
  if (code) imageMap[code] = url;
});

// 读取 timeline sheet
const timelineRows = workbook.SheetNames.includes('timeline')
  ? readSheetRows(workbook.Sheets['timeline'])
  : [];
const timelineMap = {};
timelineRows.forEach((row) => {
  const id = row[0];
  const date = row[1] || '10月12日 10:30';
  const role = row[2] || 'designer';
  const name = row[3];
  const action = row[4] || '上传了设计稿';
  const text = row[5] || '';
  const rawImages = row[6];
  const images = rawImages ? rawImages.split(',').map(s => s.trim()).filter(Boolean) : [];
  if (id) timelineMap[id] = { id, date, role, name, action, text, images };
});

const rdStylesData = mainRows.map((row, idx) => {
  const wave = String(row[0] || '').trim();
  const brand = String(row[1] || '').trim();
  const code = String(row[2] || '').trim();
  const name = String(row[3] || '').trim();
  const category = String(row[4] || '').trim();
  let status = String(row[5] || '').trim();
  if (status === '待审批') status = '已提交';
  const statusChangeTime = String(row[6] || '').trim();
  const designerId = String(row[7] || '').trim();
  const rawImages = String(row[8] || '').trim();
  const rawTimeline = String(row[9] || '').trim();

  const d = designerMap[designerId] || { id: designerId, brand, position: '设计师', name: '未知', avatar: '未' };
  const imagesArr = rawImages ? rawImages.split(',').map(s => s.trim()).filter(Boolean) : [];
  let styleImgCounter = 0;
  const images = imagesArr.map((imgCode, i) => {
    if (imageMap[imgCode]) return imageMap[imgCode];
    return demoThumbs[(idx + i) % demoThumbs.length];
  });

  const timelineIds = rawTimeline ? rawTimeline.split(',').map(s => s.trim()).filter(Boolean) : [];
  let thumbCounter = 0;
  const timeline = timelineIds.map((tid) => {
    const t = timelineMap[tid];
    if (!t) {
      return { id: tid, date: '10月12日 10:30', role: 'designer', name: d.name, action: '上传了设计稿', text: '初版提交', images: [] };
    }
    const timelineImages = t.images.map((imgCode) => {
      const mappedUrl = imageMap[imgCode];
      if (mappedUrl) return mappedUrl;
      const url = demoThumbs[(idx + thumbCounter) % demoThumbs.length];
      thumbCounter += 1;
      return url;
    });
    return {
      id: tid,
      date: t.date,
      role: t.role,
      name: t.name || d.name,
      action: t.action,
      text: t.text,
      images: timelineImages
    };
  });

  return {
    id: 100 + idx + 1,
    wave,
    brand,
    code,
    name,
    category,
    status,
    statusChangeTime,
    designer: { id: d.id, brand: d.brand, position: d.position, name: d.name, avatar: d.avatar },
    images,
    timeline
  };
});

// ----------------------
// 2. 按波段统计实际通过数
// ----------------------
const waveStats = {};
mainRows.forEach((row) => {
  const wave = String(row[0] || '').trim();
  const category = String(row[4] || '').trim();
  let status = String(row[5] || '').trim();
  if (status === '待审批') status = '已提交';

  if (!waveStats[wave]) {
    waveStats[wave] = {
      submitted: 0,
      approved: 0,
      approvedByCat: { '上衣': 0, '外套': 0, '下装': 0, '连衣裙': 0, '配饰': 0 }
    };
  }

  if (status !== '已删除') waveStats[wave].submitted += 1;
  if (status === '已通过') {
    waveStats[wave].approved += 1;
    const abstractCat = CATEGORY_MAP[category] || category;
    if (abstractCat in waveStats[wave].approvedByCat) {
      waveStats[wave].approvedByCat[abstractCat] += 1;
    }
  }
});

// ----------------------
// 3. waveTargets (v3 改名)
// ----------------------
let waveSummary = {};
if (workbook.SheetNames.includes('waveTargets')) {
  const summaryRows = readSheetRows(workbook.Sheets['waveTargets']);
  summaryRows.forEach((row) => {
    const wave = String(row[0] || '').trim();
    const start = parseDate(row[1]);
    const end = parseDate(row[2]);
    const targets = {};
    CATEGORIES.forEach((cat, i) => {
      targets[cat] = Number(row[3 + i]) || 0;
    });
    const manualStatus = String(row[8] || '').trim();
    const targetTotal = Number(row[9]) || Object.values(targets).reduce((a, b) => a + b, 0);

    const stats = waveStats[wave] || { submitted: 0, approved: 0, approvedByCat: {} };
    const gap = stats.approved - targetTotal;
    const items = {};
    CATEGORIES.forEach(cat => {
      const approvedCat = stats.approvedByCat[cat] || 0;
      items[cat] = approvedCat - targets[cat];
    });

    let days = 0;
    let timeProgress = 0;
    if (start && end) {
      const total = end - start;
      const elapsed = BASE_DATE - start;
      const remaining = end - BASE_DATE;
      days = Math.max(0, Math.ceil(remaining / (1000 * 60 * 60 * 24)));
      timeProgress = total > 0 ? Math.max(0, Math.min(100, Math.round((elapsed / total) * 100))) : 100;
    }

    waveSummary[wave] = {
      gap,
      days,
      status: manualStatus || (gap < 0 ? 'risk' : 'safe'),
      items,
      target: targetTotal,
      submitted: stats.submitted,
      approved: stats.approved,
      start: formatDate(start),
      end: formatDate(end),
      timeProgress,
    };
  });
}

// ----------------------
// 4. 读取固定数据 sheet
// ----------------------
const fixedWaveProgress = {};
const fixedTeamEfficiency = {};
const fixedDesignerStats = {};
const fixedDesignerBrandMap = {};

if (workbook.SheetNames.includes('固定数据')) {
  const fixedRows = readFixedSheetRows(workbook.Sheets['固定数据']);

  // 研发进度页面：行 4-11（0-based 索引）
  for (let r = 4; r <= 11 && r < fixedRows.length; r++) {
    const row = fixedRows[r];
    const wave = String(row[2] || '').trim();
    if (!wave) continue;
    const timeProgress = typeof row[6] === 'number' ? row[6] : (parseFloat(row[6]) || 0);
    const planCount = Number(row[3]) || 0;
    const draftCount = Number(row[4]) || 0;
    let completionProgress = typeof row[7] === 'number' ? row[7] : (parseFloat(row[7]) || 0);
    if (!completionProgress && planCount && timeProgress) {
      completionProgress = draftCount / (planCount / timeProgress);
    }
    fixedWaveProgress[wave] = {
      planCount,
      draftCount,
      approvedCount: Number(row[5]) || 0,
      timeProgress,
      completionProgress,
    };
  }

  // 效能评定团队：行 16-23
  for (let r = 16; r <= 23 && r < fixedRows.length; r++) {
    const row = fixedRows[r];
    const wave = String(row[2] || '').trim();
    if (!wave) continue;
    fixedTeamEfficiency[wave] = {
      devCount: Number(row[3]) || 0,
      submittedCount: Number(row[4]) || 0,
      approvedCount: Number(row[5]) || 0,
      timeProgress: typeof row[6] === 'number' ? row[6] : (parseFloat(row[6]) || 0),
      completionProgress: typeof row[7] === 'number' ? row[7] : (parseFloat(row[7]) || 0),
    };
  }

  // 设计师固定数据：行 26-29
  for (let r = 26; r <= 29 && r < fixedRows.length; r++) {
    const row = fixedRows[r];
    const name = String(row[2] || '').trim();
    if (!name) continue;
    fixedDesignerStats[name] = {
      submitted: Number(row[3]) || 0,
      approved: Number(row[4]) || 0,
      target: Number(row[5]) || 0,
    };
  }

  // 推断新增设计师品牌（基于固定数据 sheet 的行上下文）
  let currentBrandHint = '';
  for (let r = 25; r < fixedRows.length; r++) {
    const row = fixedRows[r];
    const hint = String(row[1] || '').trim();
    const name = String(row[2] || '').trim();
    if (hint.toLowerCase().includes('imuselle')) {
      currentBrandHint = 'imuselle';
    } else if (hint.toLowerCase().includes('imu')) {
      currentBrandHint = 'i.Mu';
    }
    if (name && fixedDesignerStats[name]) {
      fixedDesignerBrandMap[name] = currentBrandHint;
    }
  }
}

// ----------------------
// 5. 效能评定 - 自动生成
//    数据源：designer sheet + designerTargets（如有）+ 主表自动统计
// ----------------------
const efficiencyPeriods = {};
Object.entries(waveSummary).forEach(([wave, info]) => {
  efficiencyPeriods[wave] = {
    start: info.start || '2026.01.01',
    end: info.end || '2026.12.31',
    weeks: 9,
  };
});

// 读取 designerTargets（波段时间=周期）
const designerTargets = {};
if (workbook.SheetNames.includes('designerTargets')) {
  const targetRows = readSheetRows(workbook.Sheets['designerTargets']);
  targetRows.forEach((row) => {
    const designerId = String(row[0] || '').trim();
    const wave = String(row[1] || '').trim();
    let target = Number(row[2]) || 0;
    if (!target && waveSummary[wave]) {
      target = waveSummary[wave].target || 0;
    }
    designerTargets[`${designerId}:${wave}`] = target;
  });
}

// 自动统计每个设计师 + 波段的实际数据
const autoEffStats = {};
mainRows.forEach((row) => {
  const wave = String(row[0] || '').trim();
  const designerId = String(row[7] || '').trim();
  let status = String(row[5] || '').trim();
  if (status === '待审批') status = '已提交';
  if (!designerId) return;

  const key = `${designerId}:${wave}`;
  if (!autoEffStats[key]) {
    autoEffStats[key] = { target: designerTargets[key] || 0, submitted: 0, modifying: 0, approved: 0, deleted: 0 };
  }

  if (status === '已删除') autoEffStats[key].deleted += 1;
  else {
    autoEffStats[key].submitted += 1;
    if (status === '已通过') autoEffStats[key].approved += 1;
    else autoEffStats[key].modifying += 1;
  }
});

// 组装 efficiencyDesigners（去重读取有目标或有过数据的设计师）
const activeDesignerIds = new Set([
  ...Object.keys(designerMap),
  ...Object.keys(autoEffStats).map(k => k.split(':')[0]),
  ...Object.keys(designerTargets).map(k => k.split(':')[0]),
]);

const efficiencyDesigners = [];
activeDesignerIds.forEach((id) => {
  const d = designerMap[id];
  if (!d) return;
  efficiencyDesigners.push({
    id: d.id,
    name: d.name,
    brand: d.brand,
    department: d.department || '设计部',
    position: d.position,
    tenure: d.lengthOfService || '',
    avatar: d.avatar,
  });
});

// 补充固定数据中的新增设计师
Object.entries(fixedDesignerStats).forEach(([name, stats]) => {
  if (efficiencyDesigners.some(d => d.name === name)) return;
  const inferredBrand = fixedDesignerBrandMap[name] || '';
  efficiencyDesigners.push({
    id: `fixed_${name}`,
    name,
    brand: inferredBrand,
    department: '',
    position: '设计师',
    tenure: '',
    avatar: name[0] || '',
  });
});

// 作为 EFF_STATS 输出
const efficiencyStats = autoEffStats;

// ----------------------
// 6. 输出
// ----------------------
fs.writeFileSync('./rd_data.json', JSON.stringify({
  rdStylesData,
  waveSummary,
  efficiencyPeriods,
  efficiencyDesigners,
  efficiencyStats,
  fixedData: {
    waveProgress: fixedWaveProgress,
    teamEfficiency: fixedTeamEfficiency,
    designerStats: fixedDesignerStats,
    designerBrandMap: fixedDesignerBrandMap,
  },
}, null, 2));
console.log(`Generated rd_data.json with ${rdStylesData.length} styles, ${Object.keys(waveSummary).length} waves, ${Object.keys(efficiencyPeriods).length} periods, ${efficiencyDesigners.length} designers.`);
