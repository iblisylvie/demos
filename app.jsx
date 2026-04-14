const { useState, useMemo, useRef, useEffect } = React;

const ChevronLeft = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="m15 18-6-6 6-6" key="1wnfg3" />
  </svg>
);
const ChevronRight = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="m9 18 6-6-6-6" key="qrunsl" />
  </svg>
);
const ChevronDown = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="m6 9 6 6 6-6" key="qrunsl" />
  </svg>
);
const ArrowDownWideNarrow = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="m3 16 4 4 4-4" key="1co6wj" /><path d="M7 20V4" key="1yoxec" /><path d="M11 4h10" key="1w87gc" /><path d="M11 8h7" key="djye34" /><path d="M11 12h4" key="q8tih4" />
  </svg>
);
const ArrowUpNarrowWide = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="m3 8 4-4 4 4" key="11wl7u" /><path d="M7 4v16" key="1glfcx" /><path d="M11 12h4" key="q8tih4" /><path d="M11 16h7" key="uosisv" /><path d="M11 20h10" key="jvxblo" />
  </svg>
);
const CheckCircle2 = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <circle cx="12" cy="12" r="10" key="1mglay" /><path d="m9 12 2 2 4-4" key="dzmm74" />
  </svg>
);
const XCircle = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <circle cx="12" cy="12" r="10" key="1mglay" /><path d="m15 9-6 6" key="1uzhvr" /><path d="m9 9 6 6" key="z0biqf" />
  </svg>
);
const LayoutGrid = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <rect width="7" height="7" x="3" y="3" rx="1" key="1g98yp" /><rect width="7" height="7" x="14" y="3" rx="1" key="6d4xhi" /><rect width="7" height="7" x="14" y="14" rx="1" key="nxv5o0" /><rect width="7" height="7" x="3" y="14" rx="1" key="1bb6yr" />
  </svg>
);
const TrendingUp = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <polyline points="22 7 13.5 15.5 8.5 10.5 2 17" key="126l90" /><polyline points="16 7 22 7 22 13" key="kwv8wd" />
  </svg>
);
const Check = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M20 6 9 17l-5-5" key="1gmf2c" />
  </svg>
);
const BarChart2 = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <line x1="18" x2="18" y1="20" y2="10" key="1xfpm4" /><line x1="12" x2="12" y1="20" y2="4" key="be30l9" /><line x1="6" x2="6" y1="20" y2="14" key="1r4le6" />
  </svg>
);
const Target = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <circle cx="12" cy="12" r="10" key="1mglay" /><circle cx="12" cy="12" r="6" key="1vlfrh" /><circle cx="12" cy="12" r="2" key="1c9p78" />
  </svg>
);
const AlertTriangle = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3" key="wmoenq" /><path d="M12 9v4" key="juzpu7" /><path d="M12 17h.01" key="p32p05" />
  </svg>
);
const AlertCircle = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <circle cx="12" cy="12" r="10" key="1mglay" /><line x1="12" x2="12" y1="8" y2="12" key="13bkgv" /><line x1="12" x2="12.01" y1="16" y2="16" key="1nuqt2" />
  </svg>
);
const Clock = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <circle cx="12" cy="12" r="10" key="1mglay" /><polyline points="12 6 12 12 16 14" key="68esgv" />
  </svg>
);
const Briefcase = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" key="jecpp" /><rect width="20" height="14" x="2" y="6" rx="2" key="i6l2r4" />
  </svg>
);
const Activity = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2" key="169zse" />
  </svg>
);
const Table = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M12 3v18" key="108xh3" /><rect width="18" height="18" x="3" y="3" rx="2" key="afitv7" /><path d="M3 9h18" key="1pudct" /><path d="M3 15h18" key="5xshup" />
  </svg>
);
const RefreshCcw = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M21 12a9 9 0 0 0-9-9 9.75 9.75 0 0 0-6.74 2.74L3 8" key="14sxne" /><path d="M3 3v5h5" key="1xhq8a" /><path d="M3 12a9 9 0 0 0 9 9 9.75 9.75 0 0 0 6.74-2.74L21 16" key="1hlbsb" /><path d="M16 16h5v5" key="ccwih5" />
  </svg>
);
const ArrowRight = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M5 12h14" key="1ays0h" /><path d="m12 5 7 7-7 7" key="xquz4c" />
  </svg>
);
const Layers = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="m12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83Z" key="8b97xw" /><path d="m22 17.65-9.17 4.16a2 2 0 0 1-1.66 0L2 17.65" key="dd6zsq" /><path d="m22 12.65-9.17 4.16a2 2 0 0 1-1.66 0L2 12.65" key="ep9fru" />
  </svg>
);

// ==========================================
// 核心 UI 常量与公用组件
// ==========================================
const brandGradient = "bg-gradient-to-r from-[#8B9DFE] via-[#85B5FF] to-[#7DE0EF]";
const brandGradientPrimary = "bg-gradient-to-r from-[#8B9DFE] to-[#7DE0EF]";
const actionGradient = "linear-gradient(135deg, #7289FF 0%, #8B9DFE 100%)";

const BottomNav = ({ currentTab, setCurrentTab }) => (
  <div className="absolute bottom-0 left-0 right-0 bg-white/95 backdrop-blur-md border-t border-neutral-200 flex items-center justify-around px-6 pt-3 pb-6 z-40">
    <button onClick={() => setCurrentTab('progress')} className={`flex flex-col items-center gap-1 transition-colors w-1/2 ${currentTab === 'progress' ? 'text-[#5B73E8]' : 'text-neutral-400 hover:text-neutral-600'}`}>
      <Briefcase className="w-5 h-5" />
      <span className="text-[11px] font-bold mt-0.5">研发进度</span>
    </button>
    <button onClick={() => setCurrentTab('efficiency')} className={`flex flex-col items-center gap-1 transition-colors w-1/2 ${currentTab === 'efficiency' ? 'text-[#5B73E8]' : 'text-neutral-400 hover:text-neutral-600'}`}>
      <Activity className="w-5 h-5" />
      <span className="text-[11px] font-bold mt-0.5">效能评定</span>
    </button>
  </div>
);

const Avatar = ({ src, className, textClassName }) => {
  if (src && /^https?:\/\//.test(src)) {
    return <img src={src} alt="" className={`object-cover ${className}`} />;
  }
  return <div className={className}><span className={textClassName}>{src}</span></div>;
};

// ==========================================
// [模块 A] 研发进度相关数据与新增多选组件
// ==========================================
const demoThumbs = [
  "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=1200&q=80",
  "https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=1200&q=80",
  "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?auto=format&fit=crop&w=1200&q=80",
  "https://images.unsplash.com/photo-1529139574466-a303027c1d8b?auto=format&fit=crop&w=1200&q=80",
  "https://images.unsplash.com/photo-1496747611176-843222e1e57c?auto=format&fit=crop&w=1200&q=80",
  "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=1200&q=80",
];

const rdStylesData = window.__RD_DATA__ || [];

const CATEGORIES = ["上衣", "外套", "下装", "连衣裙", "配饰"];
const MULTI_WAVE_DATA = {
  waves: window.__WAVE_SUMMARY__ || {}
};

const PillSelect = ({ value, options, onChange, activeMenu, setActiveMenu, menuId, variant }) => {
  const isOpen = activeMenu === menuId;
  const baseClasses = "flex items-center gap-1 font-medium py-1 pl-3 pr-2.5 rounded-full outline-none cursor-pointer transition-all whitespace-nowrap";
  const variantClasses = variant === 'primary'
    ? `${brandGradientPrimary} text-white shadow-[0_2px_8px_rgba(139,157,254,0.35)] hover:opacity-90 text-[12px] border-none`
    : "bg-white border border-neutral-200 shadow-sm hover:bg-neutral-50 text-[11px] text-neutral-700";

  return (
    <div className="relative shrink-0">
      <button onClick={() => setActiveMenu(isOpen ? null : menuId)} className={`${baseClasses} ${variantClasses}`}>
        <span className="truncate max-w-[100px]">{value}</span>
        <ChevronDown className={`w-3.5 h-3.5 transition-transform ${isOpen ? 'rotate-180' : ''} ${variant === 'primary' ? 'text-white' : 'text-neutral-400'}`} />
      </button>
      {isOpen && (
        <div className="absolute top-[calc(100%+6px)] left-0 min-w-[130px] bg-white rounded-2xl shadow-xl border border-neutral-100 z-50 overflow-hidden py-1 animate-pop-in">
          {options.map(opt => (
            <div key={opt} onClick={() => { onChange(opt); setActiveMenu(null); }} className={`px-3 py-2 text-[12px] flex items-center justify-between cursor-pointer transition-colors ${value === opt ? 'bg-[#EBF0FF] font-bold text-[#5B73E8]' : 'hover:bg-neutral-50 text-neutral-700 font-medium'}`}>
              {opt} {value === opt && <Check className="w-3.5 h-3.5 text-[#5B73E8]" />}
            </div>
          ))}
        </div>
      )}
      {isOpen && <div className="fixed inset-0 z-40" onClick={() => setActiveMenu(null)}></div>}
    </div>
  );
};

// ------------------------------------------
// 多选下拉组件 (支持多选波段)
// ------------------------------------------
const RefinedMultiSelect = ({ values, options, onChange }) => {
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (containerRef.current && !containerRef.current.contains(event.target)) setIsOpen(false);
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const toggleOption = (opt) => {
    if (values.includes(opt)) {
      if (values.length > 1) onChange(values.filter(v => v !== opt));
    } else {
      onChange([...values, opt]);
    }
  };

  const displayText = values.length === options.length
    ? "全选波段"
    : (values.length > 1 ? `${values[0]}等 ${values.length}个` : values[0]);

  return (
    <div className="relative shrink-0" ref={containerRef}>
      <button onClick={() => setIsOpen(!isOpen)} className={`flex items-center gap-1 py-1 pl-3 pr-2.5 rounded-full transition-all duration-300 border whitespace-nowrap ${isOpen ? 'bg-white border-[#7289FF] shadow-[0_4px_12px_rgba(114,137,255,0.15)]' : 'bg-white border-neutral-200 shadow-sm hover:bg-neutral-50'}`}>
        <span className={`text-[11px] font-semibold tracking-tight ${isOpen ? 'text-[#7289FF]' : 'text-neutral-700'}`}>{displayText}</span>
        <ChevronDown className={`w-3 h-3 transition-transform duration-300 ${isOpen ? 'rotate-180 text-[#7289FF]' : 'text-neutral-400'}`} />
      </button>

      {isOpen && (
        <div className="absolute top-[calc(100%+6px)] right-0 min-w-[150px] bg-white rounded-2xl shadow-xl border border-neutral-100 z-[60] overflow-hidden animate-pop-in">
          <div className="p-2 border-b border-neutral-50 flex items-center justify-between px-3">
            <span className="text-[10px] font-bold text-neutral-400">选择波段</span>
            <span className="text-[10px] font-bold text-[#7289FF] bg-[#F1F3FF] px-1.5 py-0.5 rounded-md">{`${values.length}/${options.length}`}</span>
          </div>
          <div className="max-h-[240px] overflow-y-auto py-1 custom-scrollbar">
            {options.map(opt => {
              const isSelected = values.includes(opt);
              return (
                <div key={opt} onClick={() => toggleOption(opt)} className="px-3 py-2.5 flex items-center justify-between cursor-pointer group hover:bg-[#F8F9FF] transition-colors">
                  <span className={`text-[12px] transition-colors ${isSelected ? 'text-[#7289FF] font-bold' : 'text-neutral-600 font-medium'}`}>{opt}</span>
                  <div className={`w-4 h-4 rounded-full border flex items-center justify-center transition-all duration-300 ${isSelected ? 'bg-[#7289FF] border-[#7289FF]' : 'bg-white border-neutral-200 opacity-40 group-hover:opacity-100'}`}>
                    {isSelected && <Check className="w-2.5 h-2.5 text-white" strokeWidth={4} />}
                  </div>
                </div>
              );
            })}
          </div>
          <div className="p-2 bg-neutral-50/50 flex gap-2 border-t border-neutral-50">
             <button onClick={(e) => { e.stopPropagation(); onChange(options); }} className="flex-1 py-1.5 text-[11px] font-bold text-neutral-500 hover:text-[#7289FF] hover:bg-white rounded-lg transition-all">全选</button>
             <button onClick={(e) => { e.stopPropagation(); onChange([options[0]]); }} className="flex-1 py-1.5 text-[11px] font-bold text-neutral-500 hover:text-[#FF5C5C] hover:bg-white rounded-lg transition-all">重置</button>
          </div>
        </div>
      )}
    </div>
  );
};

// --- 多选波段专属子组件 ---
const PlanningStructureTable = ({ selectedWaves }) => (
  <div className="mx-4 mt-4 bg-white rounded-3xl p-4 shadow-[0_2px_16px_rgba(0,0,0,0.03)] border border-neutral-100">
    <div className="flex items-center gap-2 mb-4 px-1">
      <div className="w-7 h-7 bg-[#F4F7FF] rounded-lg flex items-center justify-center"><Table className="w-3.5 h-3.5 text-[#7289FF]" /></div>
      <h3 className="text-[14px] font-bold text-neutral-800 tracking-tight">企划结构还原表</h3>
    </div>
    <div className="relative rounded-2xl overflow-hidden border border-neutral-100 bg-white">
      <div className="overflow-x-auto scrollbar-hide">
        <table className="w-full border-collapse">
          <thead>
            <tr className="bg-neutral-50/80">
              <th className="sticky left-0 z-10 bg-neutral-50/80 py-2 px-3 text-[11px] font-bold text-neutral-400 text-left min-w-[60px] border-r border-neutral-100">品类</th>
              {selectedWaves.map(wave => <th key={wave} className="py-2 px-3 text-[11px] font-bold text-neutral-400 text-center min-w-[90px]">{wave}</th>)}
              <th className="sticky right-0 z-10 bg-neutral-50/80 py-2 px-3 text-[11px] font-bold text-neutral-400 text-right min-w-[60px] border-l border-neutral-100">合计</th>
            </tr>
          </thead>
          <tbody>
            {CATEGORIES.map(cat => {
              let total = 0;
              return (
                <tr key={cat} className="border-t border-neutral-100/60 group hover:bg-neutral-50/50 transition-colors">
                  <td className="sticky left-0 z-10 bg-white group-hover:bg-neutral-50/50 py-3 px-3 text-[12px] font-bold text-neutral-600 border-r border-neutral-100/60">{cat}</td>
                  {selectedWaves.map(wave => {
                    const val = MULTI_WAVE_DATA.waves[wave]?.items[cat] || 0;
                    total += val;
                    return <td key={wave} className={`py-3 px-3 text-[12px] font-bold text-center ${val < 0 ? 'text-[#7289FF]' : 'text-neutral-300'}`}>{val}</td>;
                  })}
                  <td className="sticky right-0 z-10 bg-white group-hover:bg-neutral-50/50 py-3 px-3 text-[12px] font-bold text-right border-l border-neutral-100/60 text-[#5B73E8]">{total}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  </div>
);

const PredictionList = ({ selectedWaves }) => (
  <div className="mx-4 mt-6 space-y-4">
    <div className="flex items-center gap-2 px-1">
      <RefreshCcw className="w-4 h-4 text-[#8B9DFE]" />
      <h3 className="text-[14px] font-bold text-neutral-800 tracking-tight">研发补款预测与调配</h3>
    </div>
    {selectedWaves.map(wave => {
      const info = MULTI_WAVE_DATA.waves[wave];
      if (!info) return null;

      const fixed = (typeof FIXED_DATA !== 'undefined' && FIXED_DATA.waveProgress) ? FIXED_DATA.waveProgress[wave] : null;
      let timeProgress = 75;
      let progress = 0;
      if (fixed) {
        timeProgress = typeof fixed.timeProgress === 'number' ? Math.round(fixed.timeProgress * 100) : 75;
        const target = fixed.planCount || 0;
        const approved = fixed.approvedCount || 0;
        progress = typeof fixed.completionProgress === 'number' ? Math.round(fixed.completionProgress * 100) : (target === 0 ? 0 : Math.round((approved / target) * 100));
      } else {
        timeProgress = typeof info.timeProgress === 'number' ? info.timeProgress : 75;
        const target = info.target || 0;
        const approved = info.approved || 0;
        progress = target === 0 ? 0 : Math.round((approved / target) * 100);
      }
      const isRisk = Math.abs(progress - timeProgress) > 30 || timeProgress < 15;

      return (
        <div key={wave} className="bg-white rounded-3xl p-5 border border-neutral-100 shadow-[0_2px_16px_rgba(0,0,0,0.03)]">
          <div className="flex justify-between items-center mb-4">
            <div>
              <h4 className="text-[14px] font-bold text-neutral-800">{wave}</h4>
              <p className="text-[11px] text-neutral-400 font-medium mt-1">剩余 {info.days} 天 | 缺款 {Math.abs(info.gap)} 款</p>
            </div>
            <span className={`text-[10px] font-bold px-2 py-1 rounded-md border ${isRisk ? 'bg-[#FFF2F2] text-[#FF5C5C] border-[#FF5C5C]/10' : 'bg-emerald-50 text-emerald-600 border-emerald-100'}`}>
              {isRisk ? "风险预警" : "进度安全"}
            </span>
          </div>
          {isRisk ? (
            <div className="flex items-center gap-2 text-[#FF5C5C] bg-[#FFF2F2]/60 p-3.5 rounded-xl border border-dashed border-[#FF5C5C]/30">
              <AlertCircle className="w-4 h-4" />
              <span className="text-[12px] font-bold">进度滞后，预期交付可能延期</span>
            </div>
          ) : (
            <div className="flex items-center gap-2 text-emerald-600 bg-emerald-50/50 p-3.5 rounded-xl border border-dashed border-emerald-200">
              <Check className="w-4 h-4" />
              <span className="text-[12px] font-bold">资源充足，预期可按时交付</span>
            </div>
          )}
        </div>
      );
    })}
  </div>
);

const getStatusStyles = (status) => {
  switch (status) {
    case '已通过': return 'bg-emerald-50 text-emerald-600 border-emerald-100';
    case '待审批': return 'bg-amber-50 text-amber-600 border-amber-100';
    case '已删除': return 'bg-neutral-100 text-neutral-500 border-neutral-200';
    case '已提交':
    default: return 'bg-[#EBF0FF] text-[#5B73E8] border-[#D6E0FF]';
  }
};

const ProgressDashboard = ({ currentTab, setCurrentTab }) => {
  const [page, setPage] = useState("home");
  const uniqueBrands = Array.from(new Set(rdStylesData.map(s => s.brand)));
  const [brandFilter, setBrandFilter] = useState(uniqueBrands[0]);

  const initialWaves = Array.from(new Set(rdStylesData.filter(s => s.brand === uniqueBrands[0]).map(s => s.wave))).sort();
  const [waveFilters, setWaveFilters] = useState([initialWaves[0]]);
  const isMultiWave = waveFilters.length > 1;
  const singleWaveFilter = waveFilters[0] || initialWaves[0];

  const [rdListFilter, setRdListFilter] = useState("全部状态");
  const [activeMenu, setActiveMenu] = useState(null);
  const [selectedRdStyle, setSelectedRdStyle] = useState(null);
  const [imageIndex, setImageIndex] = useState(0);
  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);

  const availableWaves = Array.from(new Set(rdStylesData.filter(s => s.brand === brandFilter).map(s => s.wave))).sort();

  const handleBrandChange = (brand) => {
    setBrandFilter(brand);
    const newWaves = Array.from(new Set(rdStylesData.filter(s => s.brand === brand).map(s => s.wave))).sort();
    setWaveFilters([newWaves[0]]);
  };

  const filteredRdStyles = rdStylesData.filter(s => s.brand === brandFilter && s.wave === singleWaveFilter);
  const displayStyles = filteredRdStyles.filter(s => rdListFilter === "全部状态" || s.status === rdListFilter);

  const waveSummary = window.__WAVE_SUMMARY__ || {};
  const dashboardStats = useMemo(() => {
    const fixed = FIXED_DATA.waveProgress && FIXED_DATA.waveProgress[singleWaveFilter];
    if (fixed) {
      const target = fixed.planCount || 0;
      const submitted = fixed.draftCount;
      const approved = fixed.approvedCount;
      const timeProgress = typeof fixed.timeProgress === 'number' ? Math.round(fixed.timeProgress * 100) : 75;
      const progress = typeof fixed.completionProgress === 'number' ? Math.round(fixed.completionProgress * 100) : (target === 0 ? 0 : Math.round((approved / target) * 100));
      const isRisk = Math.abs(progress - timeProgress) > 30 || timeProgress < 15;
      return { target, submitted, approved, progress, timeProgress, isRisk };
    }
    const summary = waveSummary[singleWaveFilter] || {};
    let target = summary.target || 0;
    const submitted = filteredRdStyles.filter(s => s.status !== '已删除').length;
    const approved = filteredRdStyles.filter(s => s.status === "已通过").length;
    const progress = target === 0 ? 0 : Math.round((approved / target) * 100);
    const timeProgress = typeof summary.timeProgress === 'number' ? summary.timeProgress : 75;
    const isRisk = Math.abs(progress - timeProgress) > 30 || timeProgress < 15;
    return { target, submitted, approved, progress, timeProgress, isRisk };
  }, [filteredRdStyles, singleWaveFilter, waveSummary]);

  const onTouchEndSlider = (totalImages) => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    if (distance > 50) setImageIndex((prev) => Math.min(totalImages - 1, prev + 1));
    if (distance < -50) setImageIndex((prev) => Math.max(0, prev - 1));
  };

  if (page === "home") {
    return (
      <div className="flex items-center justify-center min-h-screen bg-neutral-200 font-sans sm:p-6">
        <div className="w-full sm:max-w-[414px] h-[100dvh] sm:h-[850px] bg-white sm:rounded-[40px] sm:shadow-2xl sm:border-[8px] sm:border-white overflow-hidden relative flex flex-col">
          <div className="flex-1 overflow-y-auto relative z-10 pb-28 bg-white hide-scrollbar">
            <div className="bg-white px-5 pt-14 pb-4 relative z-40">
              <div className="flex items-center justify-between mb-4">
                <h1 className="text-[28px] font-black text-neutral-900 tracking-tight">研发进度</h1>
              </div>
              <div className="flex items-center">
                <span className="text-[12px] text-neutral-500 font-medium mr-2 whitespace-nowrap">当前品牌：</span>
                <PillSelect variant="primary" value={brandFilter} options={uniqueBrands} onChange={handleBrandChange} activeMenu={activeMenu} setActiveMenu={setActiveMenu} menuId="brandFilterRd" />
              </div>
            </div>

            <div className="bg-neutral-50 rounded-t-[32px] min-h-full pt-1 pb-10 shadow-[0_-4px_20px_rgba(0,0,0,0.02)] border-t border-neutral-100/50">
              <div className="sticky top-0 z-30 bg-neutral-50/90 backdrop-blur-md px-5 py-3 flex items-center justify-between border-b border-neutral-200/60 rounded-t-[32px]">
                <div className="flex items-center gap-2">
                  <div className="w-1 h-4 bg-[#85B5FF] rounded-full"></div>
                  <h2 className="text-[17px] font-bold text-neutral-900 tracking-tight whitespace-nowrap">{isMultiWave ? '多波段分析' : '波段整体进度'}</h2>
                </div>
                <RefinedMultiSelect values={waveFilters} options={availableWaves} onChange={setWaveFilters} />
              </div>

              {isMultiWave ? (
                <div className="animate-pop-in pb-10">
                  <PlanningStructureTable selectedWaves={waveFilters} />
                  <PredictionList selectedWaves={waveFilters} />
                </div>
              ) : (
                <>
                  <div className="px-5 pt-4 pb-2">
                    <div className="bg-white p-4 sm:p-5 rounded-[24px] shadow-sm border border-neutral-200/60">
                      <div className="flex items-center justify-between px-1 mb-5">
                        <div className="flex flex-col items-center flex-1">
                          <span className="text-[11px] text-neutral-500 font-medium mb-1 whitespace-nowrap flex items-center gap-1">
                            <Target className="w-3 h-3 text-neutral-400" /> 企划款数
                          </span>
                          <div className="flex items-baseline gap-0.5">
                            <span className="text-[24px] font-bold text-neutral-900">{dashboardStats.target}</span>
                            <span className="text-[10px] text-neutral-400">款</span>
                          </div>
                        </div>
                        <div className="w-px h-8 bg-neutral-100"></div>
                        <div className="flex flex-col items-center flex-1">
                          <span className="text-[11px] text-neutral-500 font-medium mb-1 whitespace-nowrap">初稿已出</span>
                          <div className="flex items-baseline gap-0.5">
                            <span className="text-[24px] font-bold text-neutral-900">{dashboardStats.submitted}</span>
                            <span className="text-[10px] text-neutral-400">款</span>
                          </div>
                        </div>
                        <div className="w-px h-8 bg-neutral-100"></div>
                        <div className="flex flex-col items-center flex-1">
                          <span className="text-[11px] text-neutral-500 font-medium mb-1 whitespace-nowrap">审版通过</span>
                          <div className="flex items-baseline gap-0.5">
                            <span className="text-[24px] font-bold text-[#5B73E8]">{dashboardStats.approved}</span>
                            <span className="text-[10px] text-[#5B73E8]/80 font-medium">款</span>
                          </div>
                        </div>
                      </div>

                      <div className="bg-neutral-50 border border-neutral-100/80 p-4 rounded-[16px] space-y-4">
                        <div>
                          <div className="flex justify-between items-center mb-1.5">
                            <span className="text-[11px] font-medium text-neutral-500 flex items-center gap-1.5"><Clock className="w-3.5 h-3.5 text-neutral-400"/>波段时间进度</span>
                            <span className="text-[13px] font-bold text-neutral-800">{dashboardStats.timeProgress}%</span>
                          </div>
                          <div className="h-1.5 w-full bg-slate-300 rounded-full overflow-hidden">
                            <div className="h-full bg-[#85B5FF] rounded-full transition-all duration-500" style={{ width: `${dashboardStats.timeProgress}%` }}></div>
                          </div>
                        </div>
                        <div>
                          <div className="flex justify-between items-center mb-1.5">
                            <span className="text-[11px] font-medium text-neutral-500 flex items-center gap-1.5"><BarChart2 className="w-3.5 h-3.5 text-[#5B73E8]"/>过审完成进度</span>
                            <span className={`text-[13px] font-bold ${dashboardStats.isRisk ? 'text-amber-600' : 'text-neutral-900'}`}>{dashboardStats.progress}%</span>
                          </div>
                          <div className="h-1.5 w-full bg-neutral-200 rounded-full overflow-hidden">
                            <div className={`h-full ${brandGradient} rounded-full transition-all duration-500`} style={{ width: `${Math.min(dashboardStats.progress, 100)}%` }}></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="px-5 pt-6 flex items-center justify-between mb-4 relative z-20">
                    <h2 className="text-[17px] font-bold text-neutral-900 tracking-tight whitespace-nowrap">款式信息</h2>
                    <div className="flex items-center bg-white border border-neutral-200/80 shadow-[0_2px_8px_rgba(0,0,0,0.02)] rounded-full h-[28px]">
                      <div className="relative h-full">
                        <button onClick={() => setActiveMenu(activeMenu === 'rdFilter' ? null : 'rdFilter')} className="flex items-center gap-1 h-full pl-3 pr-2.5 rounded-full text-[11px] font-semibold text-neutral-600 hover:bg-neutral-50 transition-colors whitespace-nowrap">
                          <span className="text-neutral-400 font-normal">状态</span><span>{rdListFilter}</span><ChevronDown className={`w-3.5 h-3.5 text-neutral-400 transition-transform ${activeMenu === 'rdFilter' ? 'rotate-180' : ''}`} />
                        </button>
                        {activeMenu === 'rdFilter' && (
                          <>
                            <div className="absolute top-[calc(100%+6px)] right-0 min-w-[130px] bg-white rounded-2xl shadow-xl border border-neutral-100 z-50 overflow-hidden py-1.5 animate-pop-in">
                              {["全部状态", "已提交", "已通过", "待审批", "已删除"].map(opt => (
                                <div key={opt} onClick={() => { setRdListFilter(opt); setActiveMenu(null); }} className={`px-4 py-2.5 text-[13px] flex items-center justify-between cursor-pointer transition-colors ${rdListFilter === opt ? 'bg-[#EBF0FF] text-[#5B73E8] font-bold' : 'hover:bg-neutral-50 text-neutral-700 font-medium'}`}>
                                  {opt} {rdListFilter === opt && <Check className="w-3.5 h-3.5 text-[#5B73E8]" />}
                                </div>
                              ))}
                            </div>
                            <div className="fixed inset-0 z-40" onClick={() => setActiveMenu(null)}></div>
                          </>
                        )}
                      </div>
                    </div>
                  </div>

                  <div className="px-4 space-y-3.5 relative z-0">
                    {displayStyles.length === 0 ? (
                      <div className="py-10 text-center text-[12px] text-neutral-400">当前筛选下无款式数据</div>
                    ) : (
                      displayStyles.map((style) => (
                        <div key={style.id} onClick={() => { setSelectedRdStyle(style); setImageIndex(0); setPage('rd_style'); }} className="bg-white rounded-2xl p-3.5 shadow-[0_2px_12px_rgba(0,0,0,0.02)] border border-neutral-200/60 cursor-pointer active:scale-[0.98] transition-transform flex items-start gap-3.5">
                          <img src={style.images[0]} alt="" className={`w-20 h-24 rounded-[12px] object-cover border border-neutral-100 shrink-0 ${style.status === '已删除' ? 'grayscale-[60%] opacity-70' : ''}`} />
                          <div className="flex-1 min-w-0 py-0.5">
                            <div className="flex items-center justify-between mb-1">
                              <h3 className={`text-[15px] font-bold truncate pr-2 ${style.status === '已删除' ? 'text-neutral-500 line-through' : 'text-neutral-900'}`}>{style.code}</h3>
                              <span className={`text-[10px] font-bold px-2 py-0.5 rounded border shrink-0 ${getStatusStyles(style.status)}`}>{style.status}</span>
                            </div>
                            <p className="text-[11px] text-neutral-500 mb-2 truncate">{style.name}</p>

                            <div className="flex items-center gap-1.5 mb-2 text-[10px] font-medium">
                              <span className="bg-neutral-100 text-neutral-600 px-1.5 py-0.5 rounded">{style.brand}</span>
                              <span className="bg-neutral-100 text-neutral-600 px-1.5 py-0.5 rounded">{style.category}</span>
                            </div>

                            <div className="flex items-center gap-1.5 text-[10px] text-neutral-500 mt-1">
                              <Avatar src={style.designer.avatar} className="w-4 h-4 rounded-full bg-neutral-100 border border-neutral-200 flex items-center justify-center" textClassName="text-[8px] text-neutral-600 font-bold" />
                              <span className="truncate">{style.designer.name} · {style.timeline[style.timeline.length-1]?.action}</span>
                            </div>
                          </div>
                        </div>
                      ))
                    )}
                  </div>
                </>
              )}
            </div>

          </div>
          <BottomNav currentTab={currentTab} setCurrentTab={setCurrentTab} />
        </div>
      </div>
    );
  }

  if (page === "rd_style" && selectedRdStyle) {
    const style = selectedRdStyle;
    return (
      <div className="flex items-center justify-center min-h-screen bg-neutral-200 font-sans sm:p-6">
        <div className="w-full sm:max-w-[414px] h-[100dvh] sm:h-[850px] bg-neutral-50 sm:rounded-[40px] sm:shadow-2xl sm:border-[8px] sm:border-white overflow-hidden relative flex flex-col">
          <div className="bg-white/90 backdrop-blur-md px-4 py-3 flex items-center justify-between sticky top-0 z-30 border-b border-neutral-200 shrink-0 min-h-[48px]">
            <button onClick={() => setPage("home")} className="flex items-center -ml-2 text-neutral-500 hover:text-neutral-700 active:opacity-60 transition-all">
              <ChevronLeft className="w-6 h-6" />
              <span className="text-[14px] ml-[-2px] font-medium">返回</span>
            </button>
            <span className={`text-[11px] px-2.5 py-1 rounded-md font-bold border ${getStatusStyles(style.status)}`}>{style.status}</span>
          </div>
          <div className="flex-1 overflow-y-auto pb-12 px-5 pt-4 hide-scrollbar">
            <div className="bg-white rounded-3xl shadow-sm p-4 relative border border-neutral-200/60 animate-pop-in">
              <div className="relative" onTouchStart={(e) => { setTouchEnd(null); setTouchStart(e.targetTouches[0].clientX); }} onTouchMove={(e) => setTouchEnd(e.targetTouches[0].clientX)} onTouchEnd={() => onTouchEndSlider(style.images.length)}>
                <div className="aspect-[4/5] overflow-hidden rounded-2xl bg-neutral-100 relative border border-neutral-100">
                  <img src={style.images[imageIndex]} alt="" className="h-full w-full object-cover transition-opacity duration-300" />
                  {style.images.length > 1 && (
                    <>
                      {imageIndex > 0 && (
                        <button
                          onClick={() => setImageIndex((prev) => Math.max(0, prev - 1))}
                          className="absolute left-2 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-white/80 backdrop-blur-sm shadow-sm flex items-center justify-center text-neutral-600 hover:bg-white active:scale-95 transition-all"
                        >
                          <ChevronLeft className="w-5 h-5" />
                        </button>
                      )}
                      {imageIndex < style.images.length - 1 && (
                        <button
                          onClick={() => setImageIndex((prev) => Math.min(style.images.length - 1, prev + 1))}
                          className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-white/80 backdrop-blur-sm shadow-sm flex items-center justify-center text-neutral-600 hover:bg-white active:scale-95 transition-all"
                        >
                          <ChevronRight className="w-5 h-5" />
                        </button>
                      )}
                    </>
                  )}
                </div>
                <div className="absolute bottom-4 left-0 w-full flex justify-center gap-2 px-4 pointer-events-none">
                  {style.images.map((_, idx) => (
                    <div key={idx} className={`h-1.5 rounded-full shadow-sm backdrop-blur-sm transition-all duration-300 ${idx === imageIndex ? "w-6 bg-white" : "w-2 bg-white/60"}`} />
                  ))}
                </div>
              </div>
            </div>
            <div className="mt-4 bg-white rounded-3xl shadow-sm p-5 border border-neutral-200/60 animate-slide-in">
              <h2 className="text-[18px] font-bold text-neutral-900 tracking-tight">{style.name}</h2>
              <div className="mt-3 flex flex-wrap gap-x-4 gap-y-2 text-[12px] text-neutral-500">
                <p><span className="text-neutral-400 mr-1.5">款号</span>{style.code}</p>
                <p><span className="text-neutral-400 mr-1.5">品类</span>{style.category}</p>
                <p><span className="text-neutral-400 mr-1.5">波段</span>{style.wave}</p>
              </div>
            </div>
            <div className="mt-4 bg-white rounded-3xl shadow-sm p-4 flex items-center gap-4 border border-neutral-200/60 animate-slide-in">
              <Avatar src={style.designer.avatar} className="w-12 h-12 rounded-full bg-neutral-100 border border-neutral-200 flex items-center justify-center shrink-0" textClassName="font-bold text-[16px] text-neutral-600" />
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <h3 className="text-[15px] font-bold text-neutral-900">{style.designer.name}</h3>
                  <span className="text-[10px] bg-neutral-100 text-neutral-600 px-1.5 py-0.5 rounded-md">{style.designer.brand}</span>
                </div>
                <p className="text-[11px] text-neutral-500 font-medium">{style.designer.position}</p>
              </div>
            </div>
            {style.timeline && style.timeline.length > 0 && (
              <div className="mt-6 animate-slide-in">
                <h3 className="text-[14px] font-bold text-neutral-900 mb-4 px-1">动态记录</h3>
                <div className="relative border-l-[1.5px] border-neutral-200 ml-3 pb-2 space-y-6">
                  {style.timeline.map((record) => {
                    const isDesigner = record.role === 'designer';
                    return (
                      <div key={record.id} className="relative pl-6">
                        <div className={`absolute -left-[9px] top-1 w-4 h-4 rounded-full border-4 border-neutral-50 shadow-sm flex items-center justify-center ${isDesigner ? 'bg-blue-500' : 'bg-amber-500'}`} />
                        <div className="flex items-center justify-between mb-1.5">
                          <div className="flex items-center gap-1.5">
                            <span className="text-[13px] font-bold text-neutral-900">{record.name}</span>
                            <span className="text-[11px] text-neutral-500">{record.action}</span>
                          </div>
                          <span className="text-[10px] text-neutral-400 font-medium">{record.date}</span>
                        </div>
                        <div className={`rounded-[16px] p-3 shadow-sm border ${isDesigner ? 'bg-white border-neutral-200' : 'bg-amber-50/50 border-amber-100'}`}>
                          {record.text && <p className={`text-[12px] leading-relaxed ${isDesigner ? 'text-neutral-700' : 'text-amber-800'}`}>{record.text}</p>}
                          {record.images && record.images.length > 0 && (
                            <div className={`flex gap-2 overflow-x-auto hide-scrollbar pb-1 ${record.text ? 'mt-2' : ''}`}>
                              {record.images.map((img, i) => (
                                <img key={i} src={img} alt="附件" className="h-16 w-auto object-cover rounded-xl border border-neutral-200 shrink-0" />
                              ))}
                            </div>
                          )}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    );
  }
  return null;
};

// ==========================================
// [模块 B] 效能评定相关数据与组件
// ==========================================

const EFF_DESIGNERS = window.__EFF_DESIGNERS__ || [];
const EFF_STATS = window.__EFF_STATS__ || {};
const EFF_PERIODS = window.__EFF_PERIODS__ || {};
const FIXED_DATA = window.__FIXED_DATA__ || {};

const SORT_OPTIONS = [
  { label: '完成进度', value: 'progress' },
  { label: '定稿数量', value: 'approved' },
  { label: '提审数量', value: 'submitted' }
];

const getRankStyle = (index) => {
  if (index === 0) return { color: 'text-white', bg: 'bg-gradient-to-br from-red-500 to-red-600 shadow-md shadow-red-200/60', border: 'border-transparent' };
  if (index === 1) return { color: 'text-white', bg: 'bg-gradient-to-br from-orange-400 to-orange-500 shadow-md shadow-orange-200/60', border: 'border-transparent' };
  if (index === 2) return { color: 'text-white', bg: 'bg-gradient-to-br from-amber-400 to-yellow-500 shadow-md shadow-amber-200/60', border: 'border-transparent' };
  return { color: 'text-gray-600', bg: 'bg-gray-100', border: 'border-gray-200' };
};

const EfficiencyDashboard = ({ currentTab, setCurrentTab }) => {
  const uniqueBrands = Array.from(new Set(EFF_DESIGNERS.map(d => d.brand)));
  const [selectedBrand, setSelectedBrand] = useState(uniqueBrands[0]);

  const [globalPeriod, setGlobalPeriod] = useState(Object.keys(EFF_PERIODS)[0] || '');
  const [sortField, setSortField] = useState('progress');
  const [sortOrder, setSortOrder] = useState('desc');
  const [activeMenu, setActiveMenu] = useState(null);
  const [selectedUser, setSelectedUser] = useState(null);
  const [galleryTab, setGalleryTab] = useState('all');

  const RD_DATA = window.__RD_DATA__ || [];

  const brandWaves = useMemo(() => {
    const waves = [];
    const seen = new Set();
    RD_DATA.forEach(item => {
      if (item.brand === selectedBrand && item.wave && !seen.has(item.wave)) {
        seen.add(item.wave);
        waves.push(item.wave);
      }
    });
    return waves.sort();
  }, [selectedBrand, RD_DATA]);

  useEffect(() => {
    if (brandWaves.length > 0 && !brandWaves.includes(globalPeriod)) {
      setGlobalPeriod(brandWaves[0]);
    }
  }, [brandWaves, globalPeriod]);

  const scopedDesigners = useMemo(() => {
    let list = EFF_DESIGNERS.filter(d => d.brand === selectedBrand);
    return list.map(d => {
      const fixedDesigner = FIXED_DATA.designerStats && FIXED_DATA.designerStats[d.name];
      if (fixedDesigner) {
        const target = fixedDesigner.target || 0;
        const submitted = fixedDesigner.submitted || 0;
        const approved = fixedDesigner.approved || 0;
        return {
          ...d,
          stats: {
            target, submitted, approved, modifying: 0, deleted: 0,
            progress: target === 0 ? 0 : Math.round((approved / target) * 100),
          }
        };
      }
      const statKey = `${d.id}:${globalPeriod}`;
      const stat = EFF_STATS[statKey] || { target: 0, submitted: 0, modifying: 0, approved: 0, deleted: 0 };
      const target = stat.target;
      return {
        ...d,
        stats: {
          ...stat,
          progress: target === 0 ? 0 : Math.round((stat.approved / target) * 100),
        }
      };
    });
  }, [selectedBrand, globalPeriod]);

  const WAVE_SUMMARY = window.__WAVE_SUMMARY__ || {};

  const dashboardStats = useMemo(() => {
    const fixed = FIXED_DATA.teamEfficiency && FIXED_DATA.teamEfficiency[globalPeriod];
    if (fixed) {
      const totalTarget = fixed.devCount || 0;
      const totalSub = fixed.submittedCount || 0;
      const totalApp = fixed.approvedCount || 0;
      const teamProgress = typeof fixed.completionProgress === 'number' ? Math.round(fixed.completionProgress * 100) : (totalTarget === 0 ? 0 : Math.round((totalApp / totalTarget) * 100));
      const timeProgress = typeof fixed.timeProgress === 'number' ? Math.round(fixed.timeProgress * 100) : 100;
      const isRisk = Math.abs(teamProgress - timeProgress) > 30 || timeProgress < 15;
      return { totalSub, totalApp, totalTarget, teamProgress, timeProgress, isRisk };
    }
    let totalSub = 0, totalApp = 0, totalTarget = 0;
    scopedDesigners.forEach(d => { totalSub += d.stats.submitted; totalApp += d.stats.approved; totalTarget += d.stats.target; });
    const teamProgress = totalTarget === 0 ? 0 : Math.round((totalApp / totalTarget) * 100);
    const ws = WAVE_SUMMARY[globalPeriod];
    const timeProgress = ws && typeof ws.timeProgress === 'number' ? ws.timeProgress : 100;
    const isRisk = Math.abs(teamProgress - timeProgress) > 30 || timeProgress < 15;
    return { totalSub, totalApp, totalTarget, teamProgress, timeProgress, isRisk };
  }, [scopedDesigners, globalPeriod, WAVE_SUMMARY]);

  const sortedDesigners = useMemo(() => {
    return [...scopedDesigners].sort((a, b) => {
      let valA = a.stats[sortField]; let valB = b.stats[sortField];
      return sortOrder === 'desc' ? valB - valA : valA - valB;
    });
  }, [scopedDesigners, sortField, sortOrder]);

  const rankedByApproved = useMemo(() => {
    const totalApp = dashboardStats.totalApp;
    return [...scopedDesigners].sort((a, b) => b.stats.approved - a.stats.approved).map(d => ({
      ...d,
      contributionRatio: totalApp > 0 ? Math.round((d.stats.approved / totalApp) * 100) : 0
    }));
  }, [scopedDesigners, dashboardStats.totalApp]);

  const rankedBySubmitted = useMemo(() => {
    const totalSub = dashboardStats.totalSub;
    return [...scopedDesigners].sort((a, b) => b.stats.submitted - a.stats.submitted).map(d => ({
      ...d,
      submitRatio: totalSub > 0 ? Math.round((d.stats.submitted / totalSub) * 100) : 0
    }));
  }, [scopedDesigners, dashboardStats.totalSub]);

  const getSortFieldLabel = () => SORT_OPTIONS.find(o => o.value === sortField)?.label || '排序';

  const isCompletedPeriod = useMemo(() => {
    const ws = WAVE_SUMMARY[globalPeriod];
    if (ws && typeof ws.timeProgress === 'number') return ws.timeProgress >= 100;
    const period = EFF_PERIODS[globalPeriod];
    if (!period || !period.end) return false;
    const base = new Date('2026-06-01');
    const end = new Date(period.end.replace(/\./g, '-'));
    return base > end;
  }, [globalPeriod, WAVE_SUMMARY]);

  const renderMainContent = () => (
    <div className="flex-1 overflow-y-auto relative z-10 pb-20 hide-scrollbar bg-white">

      <div className="bg-white px-5 pt-14 pb-4 relative z-40">
        <div className="flex items-center justify-between mb-4">
          <h1 className="text-[26px] font-black text-gray-900 tracking-tight">研发效能看板</h1>
        </div>
        <div className="flex items-center">
          <span className="text-[12px] text-gray-500 font-medium mr-2 whitespace-nowrap">选择品牌：</span>
          <PillSelect variant="primary" value={selectedBrand} options={uniqueBrands} onChange={setSelectedBrand} activeMenu={activeMenu} setActiveMenu={setActiveMenu} menuId="brandFilterEff" />
        </div>
      </div>

      <div className="bg-[#F5F5F7] rounded-t-[32px] min-h-full pt-1 pb-10 shadow-[0_-4px_20px_rgba(0,0,0,0.02)] border-t border-neutral-100/50">

        <div className="sticky top-0 z-30 bg-[#F5F5F7]/85 backdrop-blur-xl px-5 py-3 flex items-center justify-between border-b border-gray-200/50 rounded-t-[32px]">
          <div className="flex items-center gap-2">
            <div className="w-1 h-4 bg-gradient-to-b from-[#8B9DFE] to-[#7DE0EF] rounded-full"></div>
            <h2 className="text-[16px] font-bold text-gray-900 tracking-tight whitespace-nowrap">团队整体效能</h2>
          </div>
          <PillSelect variant="secondary" value={globalPeriod} options={brandWaves} onChange={setGlobalPeriod} activeMenu={activeMenu} setActiveMenu={setActiveMenu} menuId="periodMainEff" />
        </div>

        <div className="px-5 pt-4 pb-2">
          <div className="bg-white p-4 sm:p-5 rounded-[24px] shadow-[0_2px_16px_rgba(0,0,0,0.03)] border border-gray-100">

            <div className={`flex items-center justify-between px-1 ${!isCompletedPeriod ? 'mb-5' : 'mb-1'}`}>
              <div className="flex flex-col items-center flex-1">
                <span className="text-[11px] text-gray-500 font-medium mb-1 whitespace-nowrap flex items-center gap-1">
                  <Target className="w-3 h-3 text-gray-400" /> 开发款数
                </span>
                <div className="flex items-baseline gap-0.5">
                  <span className="text-[24px] font-bold text-gray-900">{dashboardStats.totalTarget}</span>
                  <span className="text-[10px] text-gray-400">款</span>
                </div>
              </div>
              <div className="w-px h-8 bg-gray-200/60"></div>
              <div className="flex flex-col items-center flex-1">
                <span className="text-[11px] text-gray-500 font-medium mb-1 whitespace-nowrap">
                  {isCompletedPeriod ? '提审总数' : '已提审'}
                </span>
                <div className="flex items-baseline gap-0.5">
                  <span className="text-[24px] font-bold text-gray-900">{dashboardStats.totalSub}</span>
                  <span className="text-[10px] text-gray-400">款</span>
                </div>
              </div>
              <div className="w-px h-8 bg-gray-200/60"></div>
              <div className="flex flex-col items-center flex-1">
                <span className="text-[11px] text-gray-500 font-medium mb-1 whitespace-nowrap">
                  {isCompletedPeriod ? '定稿总数' : '已定稿'}
                </span>
                <div className="flex items-baseline gap-0.5">
                  <span className="text-[24px] font-bold text-[#5B73E8]">{dashboardStats.totalApp}</span>
                  <span className="text-[10px] text-[#5B73E8]/70 font-medium">款</span>
                </div>
              </div>
            </div>

            {!isCompletedPeriod ? (
              <div className="bg-[#F5F5F7] p-4 rounded-[16px] space-y-4 border border-gray-100/50">
                <div>
                  <div className="flex justify-between items-center mb-1.5">
                    <span className="text-[11px] font-medium text-gray-500 flex items-center gap-1.5"><Clock className="w-3.5 h-3.5 text-gray-400"/>波段时间进度</span>
                    <span className="text-[13px] font-bold text-gray-700">{dashboardStats.timeProgress}%</span>
                  </div>
                  <div className="h-1.5 w-full bg-slate-300 rounded-full overflow-hidden">
                    <div className="h-full bg-[#85B5FF] rounded-full transition-all duration-500" style={{ width: `${dashboardStats.timeProgress}%` }}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between items-center mb-1.5">
                    <span className="text-[11px] font-medium text-gray-500 flex items-center gap-1.5"><BarChart2 className="w-3.5 h-3.5 text-[#8B9DFE]"/>定稿完成进度</span>
                    <span className={`text-[13px] font-bold ${dashboardStats.isRisk ? 'text-amber-600' : 'text-gray-900'}`}>{dashboardStats.teamProgress}%</span>
                  </div>
                  <div className="h-1.5 w-full bg-gray-100 rounded-full overflow-hidden">
                    <div className={`h-full ${brandGradient} rounded-full transition-all duration-500`} style={{ width: `${Math.min(dashboardStats.teamProgress, 100)}%` }}></div>
                  </div>
                </div>
              </div>
            ) : (
              <div className="bg-[#F5F5F7] p-4 rounded-[16px] space-y-3.5 border border-gray-100/50 mt-4">
                <div className="flex justify-between items-center mb-1">
                  <span className="text-[12px] font-semibold text-gray-700 flex items-center gap-1.5">
                     <CheckCircle2 className="w-4 h-4 text-[#34C759]" /> 波段已完结
                  </span>
                  <span className={`text-[13px] font-bold ${dashboardStats.isRisk ? 'text-amber-600' : 'text-gray-900'}`}>最终达成率 {dashboardStats.teamProgress}%</span>
                </div>
                <div className="h-1.5 w-full bg-gray-200/80 rounded-full overflow-hidden">
                  <div className={`h-full ${brandGradient} rounded-full transition-all duration-500`} style={{ width: `${Math.min(dashboardStats.teamProgress, 100)}%` }}></div>
                </div>
              </div>
            )}
          </div>
        </div>

        {!isCompletedPeriod ? (
          <>
            <div className="px-5 pt-8 flex items-center justify-between mb-4 relative z-20">
              <h2 className="text-[17px] font-bold text-gray-900 tracking-tight whitespace-nowrap">个人效能</h2>

              <div className="flex items-center bg-white border border-gray-200/80 shadow-[0_2px_8px_rgba(0,0,0,0.04)] rounded-full h-[28px]">
                <div className="relative h-full">
                  <button onClick={() => setActiveMenu(activeMenu === 'sort' ? null : 'sort')} className="flex items-center gap-1 h-full pl-3 pr-2.5 rounded-l-full text-[11px] font-semibold text-gray-700 hover:bg-gray-50 active:bg-gray-100 transition-colors whitespace-nowrap">
                    <span className="text-gray-400 font-normal">排序</span><span>{getSortFieldLabel()}</span><ChevronDown className={`w-3.5 h-3.5 text-gray-400 transition-transform ${activeMenu === 'sort' ? 'rotate-180' : ''}`} />
                  </button>
                  {activeMenu === 'sort' && (
                    <>
                      <div className="absolute top-[calc(100%+6px)] right-0 min-w-[120px] bg-white/95 backdrop-blur-3xl rounded-2xl shadow-[0_12px_40px_rgba(0,0,0,0.12)] border border-gray-100 z-50 overflow-hidden py-1 animate-pop-in">
                        {SORT_OPTIONS.map(opt => (
                          <div key={opt.value} onClick={() => { setSortField(opt.value); setActiveMenu(null); }} className={`px-3 py-2 text-[12px] flex items-center justify-between cursor-pointer ${sortField === opt.value ? 'bg-[#85B5FF]/10 text-[#3B82F6] font-bold' : 'hover:bg-gray-50 text-gray-600 font-medium'}`}>{opt.label}</div>
                        ))}
                      </div>
                      <div className="fixed inset-0 z-40" onClick={() => setActiveMenu(null)}></div>
                    </>
                  )}
                </div>
                <div className="w-px h-3.5 bg-gray-200"></div>
                <button onClick={() => setSortOrder(sortOrder === 'desc' ? 'asc' : 'desc')} className="flex items-center justify-center h-full pl-2.5 pr-3 rounded-r-full text-gray-500 hover:bg-gray-50 hover:text-gray-700 active:bg-gray-100 transition-colors">
                  {sortOrder === 'desc' ? <ArrowDownWideNarrow className="w-3.5 h-3.5" /> : <ArrowUpNarrowWide className="w-3.5 h-3.5" />}
                </button>
              </div>
            </div>

            <div className="px-4 space-y-3.5 relative z-0">
              {sortedDesigners.length === 0 ? (
                 <div className="py-10 text-center text-[12px] text-gray-400">该品牌下暂无设计师数据</div>
              ) : (
                sortedDesigners.map((designer) => (
                  <div key={designer.id} onClick={() => { setSelectedUser(designer); setGalleryTab('all'); }} className="bg-white rounded-[20px] p-3.5 shadow-[0_2px_12px_rgba(0,0,0,0.02)] cursor-pointer active:scale-[0.98] transition-transform flex items-center justify-between">
                    <div className="flex items-center gap-3 w-full">
                      <Avatar src={designer.avatar} className="w-11 h-11 rounded-full bg-gray-100 border border-gray-200/60 flex items-center justify-center shrink-0" textClassName="font-bold text-[16px] text-gray-600" />
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center justify-between mb-1">
                          <div className="font-bold text-[15px] text-gray-900 truncate pr-2">{designer.name}</div>
                          <div className="flex items-baseline gap-1"><span className="text-[10px] text-gray-400 font-medium">完成进度</span><span className="text-[15px] font-bold text-[#5B73E8]">{designer.stats.progress}%</span></div>
                        </div>
                        <div className="flex items-center gap-1.5 mb-2 text-[11px] text-gray-500 font-medium"><span className="bg-[#F5F5F7] px-1.5 py-0.5 rounded text-gray-600">{designer.brand}</span><span>{designer.position}</span></div>
                        <div className="h-1 w-full bg-[#F0F4FF] rounded-full mb-2 overflow-hidden"><div className={`h-full ${brandGradient} transition-all duration-500 ease-out`} style={{ width: `${Math.min(designer.stats.progress, 100)}%` }}></div></div>
                        <div className="flex justify-between items-center text-[11px]">
                          <div className="text-gray-500">提审 <span className="font-bold text-gray-900 ml-0.5">{designer.stats.submitted}</span></div>
                          <div className="text-gray-500">定稿 <span className="font-bold text-gray-900 ml-0.5">{designer.stats.approved}</span></div>
                          <div className="text-gray-500">目标 <span className="font-bold text-gray-900 ml-0.5">{designer.stats.target}</span></div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))
              )}
            </div>
          </>
        ) : (
          <>
            <div className="px-5 pt-10 pb-5 flex items-center justify-between relative z-20">
              <h2 className="text-[18px] font-bold text-gray-900 tracking-tight whitespace-nowrap">效能总结报告</h2>
            </div>

            <div className="px-4 space-y-3 relative z-0 mb-8 mt-1">
              <h3 className="text-[14px] font-bold text-gray-800 ml-1 mb-4 flex items-center gap-1.5">卓越贡献榜 <span className="text-[10px] font-normal text-gray-400 ml-1">按定稿款数排名</span></h3>
              {rankedByApproved.map((designer, index) => {
                const rank = getRankStyle(index);
                return (
                  <div key={designer.id} onClick={() => { setSelectedUser(designer); setGalleryTab('approved'); }} className="bg-white rounded-[20px] p-3 shadow-[0_2px_12px_rgba(0,0,0,0.02)] cursor-pointer active:scale-[0.98] transition-transform flex items-center justify-between border border-gray-50">
                    <div className="flex items-center gap-3 w-full">
                      <div className={`w-8 h-8 rounded-full flex items-center justify-center font-bold shrink-0 text-[14px] border ${rank.bg} ${rank.border} ${rank.color}`}>
                         {index + 1}
                      </div>
                      <Avatar src={designer.avatar} className="w-10 h-10 rounded-full bg-gray-100 border border-gray-200/60 flex items-center justify-center shrink-0" textClassName="font-bold text-[14px] text-gray-600" />
                      <div className="flex-1 min-w-0">
                        <div className="font-bold text-[14px] text-gray-900 truncate">{designer.name}</div>
                        <div className="text-[10px] text-gray-500 mt-0.5">{designer.department}</div>
                      </div>
                      <div className="text-right pr-2 flex flex-col items-end">
                        <div className="text-[18px] font-bold text-[#5B73E8] leading-none mb-1.5">{designer.stats.approved}<span className="text-[10px] font-normal text-gray-400 ml-0.5">款</span></div>
                        <div className="text-[10px] text-[#5B73E8] bg-[#EBF0FF] px-1.5 py-0.5 rounded font-medium">贡献占比 {designer.contributionRatio}%</div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="px-4 space-y-3 relative z-0 mb-4">
              <h3 className="text-[14px] font-bold text-gray-800 ml-1 mb-4 flex items-center gap-1.5">勤劳小蜜蜂 <span className="text-[10px] font-normal text-gray-400 ml-1">按提审款数排名</span></h3>
              {rankedBySubmitted.map((designer, index) => {
                const rank = getRankStyle(index);
                return (
                  <div key={designer.id} onClick={() => { setSelectedUser(designer); setGalleryTab('all'); }} className="bg-white rounded-[20px] p-3 shadow-[0_2px_12px_rgba(0,0,0,0.02)] cursor-pointer active:scale-[0.98] transition-transform flex items-center justify-between border border-gray-50">
                    <div className="flex items-center gap-3 w-full">
                      <div className={`w-8 h-8 rounded-full flex items-center justify-center font-bold shrink-0 text-[14px] border ${rank.bg} ${rank.border} ${rank.color}`}>
                         {index + 1}
                      </div>
                      <Avatar src={designer.avatar} className="w-10 h-10 rounded-full bg-gray-100 border border-gray-200/60 flex items-center justify-center shrink-0" textClassName="font-bold text-[14px] text-gray-600" />
                      <div className="flex-1 min-w-0">
                        <div className="font-bold text-[14px] text-gray-900 truncate">{designer.name}</div>
                        <div className="text-[10px] text-gray-500 mt-0.5">{designer.department}</div>
                      </div>
                      <div className="text-right pr-2 flex flex-col items-end">
                        <div className="text-[18px] font-bold text-gray-900 leading-none mb-1.5">{designer.stats.submitted}<span className="text-[10px] font-normal text-gray-400 ml-0.5">款</span></div>
                        <div className="text-[10px] text-gray-500 bg-gray-100 px-1.5 py-0.5 rounded font-medium">产出占比 {designer.submitRatio}%</div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </>
        )}
      </div>
    </div>
  );

  const renderDetail = () => {
    if (!selectedUser) return null;
    const userStyles = RD_DATA.filter(
      s => s.wave === globalPeriod && s.designer && (s.designer.id === selectedUser.id || s.designer.name === selectedUser.name)
    );
    const galleryItems = {
      all: userStyles.filter(s => ['已提交', '已通过', '待审批'].includes(s.status)),
      modifying: userStyles.filter(s => s.status === '已提交'),
      approved: userStyles.filter(s => s.status === '已通过'),
      deleted: userStyles.filter(s => s.status === '已删除'),
    };
    const currentGallery = galleryTab === 'all' ? galleryItems.all : galleryItems[galleryTab];

    const periodData = EFF_PERIODS[globalPeriod] || { weeks: 9, start: '', end: '' };

    const weekCounts = {};
    for (let i = 1; i <= periodData.weeks; i++) weekCounts[`W${i}`] = 0;
    userStyles.forEach(s => {
      if (['已提交','已通过','待审批'].includes(s.status)) {
        const m = String(s.statusChangeTime || 'W1').match(/W(\d+)/i);
        const w = m ? Math.min(Math.max(parseInt(m[1], 10), 1), periodData.weeks) : 1;
        weekCounts[`W${w}`]++;
      }
    });
    const rawChartData = Object.entries(weekCounts).map(([week, value]) => ({ week, value }));
    const maxChartVal = Math.max(...rawChartData.map(d => d.value)) || 1;
    const chartData = rawChartData.map(d => ({
        ...d,
        heightPercent: Math.max((d.value / maxChartVal) * 100, 5)
    }));

    return (
      <div className="absolute inset-0 bg-[#F5F5F7] z-50 flex flex-col h-full overflow-hidden slide-in font-sans">
        <div className="bg-white/80 backdrop-blur-xl px-4 py-3 flex items-center sticky top-0 z-30 border-b border-gray-200/50 shrink-0 min-h-[48px]">
          <button onClick={() => setSelectedUser(null)} className="flex items-center -ml-2 text-gray-500 hover:text-gray-700 active:opacity-60 transition-all">
            <ChevronLeft className="w-6 h-6" /><span className="text-[14px] ml-[-2px]">返回</span>
          </button>
        </div>

        <div className="flex-1 overflow-y-auto pb-8 relative space-y-4 pt-4 px-4 hide-scrollbar">

          <div className="bg-white p-5 rounded-[24px] shadow-[0_2px_16px_rgba(0,0,0,0.03)] relative overflow-hidden">
            <div className="flex items-center gap-4 relative z-10">
               <Avatar src={selectedUser.avatar} className="w-16 h-16 rounded-full bg-gray-100 border-2 border-white flex items-center justify-center shadow-[0_2px_8px_rgba(0,0,0,0.08)] relative shrink-0" textClassName="font-bold text-[24px] text-gray-600" />
                <div className="flex-1 min-w-0">
                  <h2 className="text-[18px] font-bold text-gray-900 tracking-tight mb-0.5">{selectedUser.name}</h2>
                  <div className="text-[12px] text-gray-500 mb-2 font-medium flex items-center gap-1.5 truncate">
                    <span>{selectedUser.department}</span><span className="text-gray-300 font-bold">·</span><span>{selectedUser.position}</span>
                  </div>
                  <div className="flex items-center gap-1.5 flex-wrap">
                    <span className="inline-flex items-center px-2 py-0.5 rounded text-[10px] font-medium bg-[#F5F5F7] text-gray-600">{selectedUser.brand}</span>
                    <span className="inline-flex items-center px-2 py-0.5 rounded text-[10px] font-medium bg-[#F5F5F7] text-gray-600">在职{selectedUser.tenure}</span>
                  </div>
                </div>
            </div>
            <div className={`absolute -right-8 -top-8 w-32 h-32 opacity-10 rounded-full blur-2xl ${brandGradient}`}></div>
          </div>

          <div className="flex items-center justify-between px-1 pt-1 pb-1">
            <h3 className="text-[15px] font-bold text-gray-900 tracking-tight">周期内表现</h3>
            <PillSelect variant="secondary" value={globalPeriod} options={brandWaves} onChange={setGlobalPeriod} activeMenu={activeMenu} setActiveMenu={setActiveMenu} menuId="periodDetailEff" />
          </div>

          <div className="bg-white p-4 rounded-[24px] shadow-[0_2px_16px_rgba(0,0,0,0.03)]">
            <h3 className="text-[13px] font-bold text-gray-800 mb-4 flex items-center gap-1.5"><TrendingUp className="w-4 h-4 text-[#8B9DFE]" />产出与进度趋势</h3>
            <div className="flex items-center bg-[#F5F5F7] rounded-[16px] p-4 mb-5">
              <div className="flex-1 text-center border-r border-gray-200/60 last:border-0"><div className="text-[10px] text-gray-500 mb-1 font-medium">提审数量</div><div className="text-[20px] font-bold text-gray-900 leading-none">{selectedUser.stats.submitted}</div></div>
              <div className="flex-1 text-center border-r border-gray-200/60 last:border-0"><div className="text-[10px] text-gray-500 mb-1 font-medium">定稿数量</div><div className="text-[20px] font-bold text-[#5B73E8] leading-none">{selectedUser.stats.approved}</div></div>
              <div className="flex-1 text-center border-r border-gray-200/60 last:border-0"><div className="text-[10px] text-gray-500 mb-1 font-medium">完成进度</div><div className="text-[20px] font-bold text-gray-900 leading-none">{selectedUser.stats.progress}%</div></div>
            </div>

            <div>
              <div className="flex items-start justify-between mb-4 font-medium">
                 <div><div className="text-[11px] font-bold text-gray-700 mb-0.5">提审频率分布 (自然周)</div><div className="text-[10px] text-gray-400">波段研发周期：{periodData.start} - {periodData.end}</div></div>
                 <span className="flex items-center gap-1 text-[10px] text-gray-400 mt-0.5"><div className={`w-2.5 h-2.5 rounded-sm ${brandGradient}`}></div>提审数</span>
              </div>
              <div className="relative w-full">
                <div className="absolute top-0 left-0 right-0 bottom-[24px] z-0 pointer-events-none">
                  <div className="absolute top-[15%] w-full border-t border-gray-100 border-dashed"></div>
                  <div className="absolute top-[55%] w-full border-t border-gray-100 border-dashed"></div>
                  <div className="absolute bottom-0 w-full border-t border-gray-100 border-solid"></div>
                </div>
                <div className="overflow-x-auto hide-scrollbar w-full relative z-10">
                  <div className="flex items-end gap-5 min-w-max px-3 pb-1 h-[120px]">
                    {chartData.map((d, i) => (
                      <div key={i} className="flex flex-col items-center group w-7 shrink-0">
                        <span className="text-[10px] font-bold text-gray-600 mb-1">{d.value}</span>
                        <div className="w-full bg-[#F0F4FF] rounded-t-md relative overflow-hidden flex flex-col justify-end h-[70px]">
                          <div className={`w-full ${brandGradient} transition-all duration-500 ease-out`} style={{ height: `${d.heightPercent}%` }}></div>
                        </div>
                        <div className="h-[24px] flex items-end justify-center w-full"><span className="text-[9px] text-gray-400 font-medium">{d.week}</span></div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-[24px] shadow-[0_2px_16px_rgba(0,0,0,0.03)] overflow-hidden">
             <div className="p-4 pb-0"><h3 className="text-[13px] font-bold text-gray-800 flex items-center gap-1.5"><LayoutGrid className="w-4 h-4 text-[#8B9DFE]" />产出看版</h3></div>
             <div className="p-4 pb-2">
               <div className="flex bg-[#F5F5F7] p-1 rounded-lg">
                  {['all', 'modifying', 'approved', 'deleted'].map(tab => (
                    <button key={tab} onClick={() => setGalleryTab(tab)} className={`flex-1 text-center py-1.5 text-[11px] font-medium rounded-md transition-all whitespace-nowrap ${galleryTab === tab ? 'bg-white text-gray-900 shadow-sm' : 'text-gray-500'}`}>
                      {tab === 'all' ? `提审 (${galleryItems.all.length})` : tab === 'modifying' ? `修改 (${galleryItems.modifying.length})` : tab === 'approved' ? `定稿 (${galleryItems.approved.length})` : `删除 (${galleryItems.deleted.length})`}
                    </button>
                  ))}
               </div>
             </div>
             <div className="p-4 pt-2 bg-white min-h-[200px]">
                <div className="grid grid-cols-3 gap-2">
                  {currentGallery && currentGallery.length > 0 ? (
                    currentGallery.map((item, idx) => (
                      <div key={idx} className={`aspect-[3/4] rounded-lg relative overflow-hidden group border ${galleryTab === 'deleted' ? 'bg-gray-100 border-gray-200 grayscale opacity-60' : 'bg-[#F5F5F7] border-gray-100'}`}>
                        {item.images && item.images[0] ? (
                          <img src={item.images[0]} alt="" className="w-full h-full object-cover" />
                        ) : (
                          <div className="absolute inset-0 flex items-center justify-center"><span className="text-gray-400 text-[10px] font-medium">作品</span></div>
                        )}
                        <div className="absolute top-1.5 right-1.5 bg-white/80 backdrop-blur-md rounded-full p-0.5 shadow-sm">
                          {item.status === '已提交' ? <Clock className="w-3.5 h-3.5 text-amber-500" /> : item.status === '已删除' ? <XCircle className="w-3.5 h-3.5 text-gray-400" /> : <CheckCircle2 className="w-3.5 h-3.5 text-[#34C759]" />}
                        </div>
                      </div>
                    ))
                  ) : (<div className="col-span-3 py-10 text-center text-[12px] text-gray-400">暂无数据</div>)}
                </div>
             </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-[#E5E5EA] font-sans sm:p-6">
      <div className="w-full sm:max-w-[414px] h-[100dvh] sm:h-[850px] bg-white sm:rounded-[40px] sm:shadow-[0_20px_50px_rgba(0,0,0,0.1)] sm:border-[8px] sm:border-white overflow-hidden relative flex flex-col">
        {renderMainContent()}
        {renderDetail()}
        <BottomNav currentTab={currentTab} setCurrentTab={setCurrentTab} />
      </div>
    </div>
  );
};

export default function App() {
  const [currentTab, setCurrentTab] = useState("progress");

  return (
    <>
      {currentTab === 'progress' ? (
        <ProgressDashboard currentTab={currentTab} setCurrentTab={setCurrentTab} />
      ) : (
        <EfficiencyDashboard currentTab={currentTab} setCurrentTab={setCurrentTab} />
      )}
      <style>{`
        .slide-in { animation: slideIn 0.35s cubic-bezier(0.2, 0.8, 0.2, 1) forwards; }
        @keyframes slideIn { from { transform: translateX(100%); } to { transform: translateX(0); } }
        .animate-pop-in { animation: popIn 0.2s cubic-bezier(0.16, 1, 0.3, 1) forwards; transform-origin: top right; }
        @keyframes popIn { 0% { opacity: 0; transform: scale(0.95) translateY(-5px); } 100% { opacity: 1; transform: scale(1) translateY(0); } }
        .hide-scrollbar::-webkit-scrollbar { display: none; }
        .hide-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
        ::-webkit-scrollbar { width: 2px; height: 2px; }
        ::-webkit-scrollbar-track { background: transparent; }
        ::-webkit-scrollbar-thumb { background: rgba(0,0,0,0.1); border-radius: 2px; }
        ::-webkit-scrollbar-thumb:hover { background: rgba(0,0,0,0.2); }
        .pb-safe { padding-bottom: env(safe-area-inset-bottom, 24px); }
      `}</style>
    </>
  );
}
