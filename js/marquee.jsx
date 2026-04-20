const { useEffect: useEffect_m, useRef: useRef_m, useState: useState_m } = React;

/* ======================================================
   TICKER — 編集デザインのデータストリップ
   ・同じ場所/同じ高さ。ダサいでかマーキー → 計器/モニタ風
   ・小さく密な情報、等幅数字、縦目盛、ライブ感
   ====================================================== */

const TICKER_ITEMS = [
  { code:"PRJ-0412", label_jp:"自動車インパネ部品",     label_en:"AUTO INSTRUMENT PANEL", val:"550t",  unit:"CLASS",  st:"RUN" },
  { code:"PRJ-0398", label_jp:"オフィスチェア構造材",   label_en:"CHAIR FRAME COMPONENT", val:"320t",  unit:"CLASS",  st:"RUN" },
  { code:"QC-A21",   label_jp:"鏡面磨き 工程完了",       label_en:"MIRROR POLISH DONE",    val:"Ra 0.02", unit:"μm",   st:"OK"  },
  { code:"PRJ-0407", label_jp:"家電フロントパネル",      label_en:"APPLIANCE FRONT PANEL", val:"180t",  unit:"CLASS",  st:"RUN" },
  { code:"CAM-77",   label_jp:"CAM 経路最適化",          label_en:"CAM PATH OPTIMIZED",    val:"−12%",  unit:"TIME",   st:"OK"  },
  { code:"PRJ-0423", label_jp:"電子部品コネクタ",        label_en:"E-CONNECTOR HOUSING",   val:"50t",   unit:"CLASS",  st:"RUN" },
  { code:"QC-B08",   label_jp:"CMM 全数測定",            label_en:"CMM 100% INSPECTION",   val:"±0.005", unit:"mm",   st:"OK"  },
  { code:"PRJ-0431", label_jp:"日用品コンテナキャップ",  label_en:"CONTAINER CAP",         val:"80t",   unit:"CLASS",  st:"RUN" },
  { code:"DLV-119",  label_jp:"韓国オフィス向け出荷",    label_en:"SHIPPED · KOREA OFFICE", val:"1set",  unit:"MOLD",   st:"OK"  },
  { code:"TRY-T0",   label_jp:"ファーストショット良品",  label_en:"FIRST-SHOT GOOD PART",  val:"100%",  unit:"PASS",   st:"OK"  },
  { code:"FAC-MN",   label_jp:"中津川本社工場 稼働中",   label_en:"NAKATSUGAWA · OPERATING", val:"24h",  unit:"OPS",  st:"RUN" },
  { code:"EST-1984", label_jp:"昭和59年創業",            label_en:"EST. 1984",             val:"1984",  unit:"FOUNDED",st:"——"  },
];

function Ticker(){
  // Live clock for the right-side data column (gives "live" feel without animation noise)
  const [now, setNow] = useState_m(()=>new Date());
  useEffect_m(()=>{
    const id = setInterval(()=>setNow(new Date()), 1000);
    return ()=>clearInterval(id);
  },[]);

  const hh = String(now.getHours()).padStart(2,'0');
  const mm = String(now.getMinutes()).padStart(2,'0');
  const ss = String(now.getSeconds()).padStart(2,'0');

  // duplicated for seamless loop
  const stream = [...TICKER_ITEMS, ...TICKER_ITEMS];

  return (
    <section className="tk">
      {/* Left fixed label */}
      <div className="tk-side tk-side-l">
        <div className="tk-side-stack">
          <span className="tk-side-mono">LIVE</span>
          <span className="tk-side-dot"></span>
          <span className="tk-side-mono">FEED</span>
        </div>
        <div className="tk-side-rule"></div>
      </div>

      {/* Scrolling stream */}
      <div className="tk-window">
        <div className="tk-rail">
          {stream.map((it, i)=>(
            <div className="tk-cell" key={i}>
              <span className={`tk-status tk-st-${it.st.toLowerCase().replace(/[^a-z]/g,'') || 'na'}`}>
                <span className="tk-status-dot"/>
                <span>{it.st}</span>
              </span>
              <span className="tk-code">{it.code}</span>
              <span className="tk-label" data-jp={it.label_jp} data-en={it.label_en}>{it.label_jp}</span>
              <span className="tk-val">
                <b>{it.val}</b>
                <em>{it.unit}</em>
              </span>
              <span className="tk-sep">·</span>
            </div>
          ))}
        </div>
        {/* edge fades */}
        <div className="tk-fade tk-fade-l"/>
        <div className="tk-fade tk-fade-r"/>
      </div>

      {/* Right fixed clock + meta */}
      <div className="tk-side tk-side-r">
        <div className="tk-side-rule"></div>
        <div className="tk-side-stack">
          <span className="tk-side-mono">JST</span>
          <span className="tk-side-clock">{hh}:{mm}<small>:{ss}</small></span>
          <span className="tk-side-mono">N35.49 · E137.50</span>
        </div>
      </div>

      {/* hairline tick rulers */}
      <svg className="tk-ruler tk-ruler-t" viewBox="0 0 1000 6" preserveAspectRatio="none" aria-hidden="true">
        {Array.from({length:200}).map((_,i)=>(
          <line key={i} x1={i*5} y1="0" x2={i*5} y2={i%5===0?6:3} stroke="rgba(244,240,232,.3)" strokeWidth=".5"/>
        ))}
      </svg>
      <svg className="tk-ruler tk-ruler-b" viewBox="0 0 1000 6" preserveAspectRatio="none" aria-hidden="true">
        {Array.from({length:200}).map((_,i)=>(
          <line key={i} x1={i*5} y1="6" x2={i*5} y2={i%5===0?0:3} stroke="rgba(244,240,232,.3)" strokeWidth=".5"/>
        ))}
      </svg>
    </section>
  );
}

if(!document.getElementById('marquee-css')){
  const s = document.createElement('style');
  s.id='marquee-css';
  s.textContent = `
    .tk{
      position:relative;
      background:linear-gradient(180deg, #0c2a1f 0%, #0F3D2E 50%, #0c2a1f 100%);
      color:var(--cream);
      height:96px;
      padding:0 !important;
      display:flex; align-items:stretch;
      overflow:hidden;
      border-top:1px solid rgba(244,240,232,.08);
      border-bottom:1px solid rgba(244,240,232,.08);
    }
    /* faint diagonal lines for texture */
    .tk::before{
      content:""; position:absolute; inset:0;
      background-image: repeating-linear-gradient(90deg, transparent 0 79px, rgba(244,240,232,.04) 79px 80px);
      pointer-events:none;
    }

    /* hairline rulers top + bottom */
    .tk-ruler{position:absolute; left:0; right:0; height:6px; pointer-events:none; z-index:3;}
    .tk-ruler-t{top:8px;}
    .tk-ruler-b{bottom:8px;}

    /* Side fixed columns */
    .tk-side{
      flex-shrink:0; display:flex; align-items:center;
      padding:0 22px; position:relative; z-index:2;
    }
    .tk-side-l{padding-left:28px;}
    .tk-side-r{padding-right:28px;}
    .tk-side-rule{width:1px; height:48px; background:rgba(244,240,232,.18); margin:0 18px;}
    .tk-side-stack{display:flex; flex-direction:column; gap:4px; align-items:flex-start;}
    .tk-side-r .tk-side-stack{align-items:flex-end;}
    .tk-side-mono{
      font-family:var(--font-mono); font-size:9px; letter-spacing:.28em; font-weight:700;
      color:rgba(244,240,232,.55);
    }
    .tk-side-dot{
      width:7px; height:7px; border-radius:50%;
      background:#F4B860; box-shadow:0 0 12px rgba(244,184,96,.7);
      animation:tkPulse 1.4s ease-in-out infinite;
    }
    @keyframes tkPulse{
      0%,100%{opacity:1; transform:scale(1);}
      50%{opacity:.4; transform:scale(.7);}
    }
    .tk-side-clock{
      font-family:var(--font-mono); font-weight:700;
      font-size:22px; letter-spacing:.04em; color:var(--cream);
      font-variant-numeric: tabular-nums;
      line-height:1;
    }
    .tk-side-clock small{font-size:13px; color:var(--marigold); margin-left:2px;}

    /* Scrolling window */
    .tk-window{position:relative; flex:1; overflow:hidden; align-self:stretch;}
    .tk-rail{
      display:flex; align-items:center; gap:0;
      height:100%; width:max-content;
      animation:tkScroll 80s linear infinite;
      will-change:transform;
    }
    @keyframes tkScroll{from{transform:translateX(0);}to{transform:translateX(-50%);}}
    .tk:hover .tk-rail{animation-play-state:paused;}

    /* edge fades */
    .tk-fade{position:absolute; top:0; bottom:0; width:60px; pointer-events:none; z-index:2;}
    .tk-fade-l{left:0; background:linear-gradient(90deg, #0c2a1f, transparent);}
    .tk-fade-r{right:0; background:linear-gradient(-90deg, #0c2a1f, transparent);}

    /* Each cell */
    .tk-cell{
      display:inline-flex; align-items:center; gap:14px;
      padding:0 22px;
      flex-shrink:0;
      font-family:var(--font-jp);
      white-space:nowrap;
    }

    .tk-status{
      display:inline-flex; align-items:center; gap:5px;
      font-family:var(--font-mono); font-size:9px; letter-spacing:.18em; font-weight:700;
      padding:4px 7px; border-radius:4px;
      background:rgba(244,240,232,.05);
      border:1px solid rgba(244,240,232,.15);
    }
    .tk-status-dot{width:5px; height:5px; border-radius:50%;}
    .tk-st-run{color:#7FB069; border-color:rgba(127,176,105,.45);}
    .tk-st-run .tk-status-dot{background:#7FB069;}
    .tk-st-ok{color:var(--cream); border-color:rgba(244,240,232,.35);}
    .tk-st-ok .tk-status-dot{background:var(--cream);}
    .tk-st-na{color:rgba(244,240,232,.5);}
    .tk-st-na .tk-status-dot{background:rgba(244,240,232,.5);}

    .tk-code{
      font-family:var(--font-mono); font-size:11px; font-weight:700;
      color:var(--marigold); letter-spacing:.08em;
      font-variant-numeric: tabular-nums;
    }
    .tk-label{
      font-family:var(--font-jp); font-weight:600; font-size:14px;
      color:var(--cream); letter-spacing:.01em;
    }
    .tk-val{
      display:inline-flex; align-items:baseline; gap:4px;
      font-family:var(--font-mono);
      padding:3px 9px; border-radius:4px;
      background:rgba(244,240,232,.06);
      border:1px solid rgba(244,240,232,.12);
    }
    .tk-val b{font-weight:700; font-size:13px; color:var(--cream); font-variant-numeric:tabular-nums;}
    .tk-val em{font-style:normal; font-size:9px; letter-spacing:.18em; color:rgba(244,240,232,.55); font-weight:600;}
    .tk-sep{color:rgba(244,240,232,.25); font-size:18px; padding-left:4px;}

    /* small screens */
    @media(max-width:840px){
      .tk{height:80px;}
      .tk-side-l{padding-left:14px;}
      .tk-side-r{padding-right:14px;}
      .tk-side-rule{display:none;}
      .tk-side-clock{font-size:18px;}
      .tk-cell{gap:10px; padding:0 14px;}
      .tk-label{font-size:12px;}
      .tk-status{padding:3px 5px;}
    }
    @media(max-width:600px){
      .tk-side-r{display:none;}
    }
  `;
  document.head.appendChild(s);
}

ReactDOM.createRoot(document.getElementById('marquee-mount')).render(<Ticker/>);
