const { useState, useEffect, useRef, useMemo } = React;

/* ======================================================
   HERO v3 — キャッチコピー × 製品コラージュ
   ・工程関連は全撤去
   ・3つのキャッチ案を Tweaks で切り替え
   ・右側は「金型から生まれる製品」が浮遊コラージュで循環
   ====================================================== */

/* ---------- COPY VARIANTS ---------- */
/*  Tweaks: heroVariant ∈ {invisible, hundredth, hands}  */

const COPY = {
  invisible: {
    eyebrow_jp: "岐阜・中津川 / EST.1984",
    eyebrow_en: "GIFU · NAKATSUGAWA / EST.1984",
    /* 2行構成：見えないところに / 私たちの金型 */
    lines_jp: [
      { kind:"plain", text:"見えないところに" },
      { kind:"pop",   text:"私たちの金型" },
    ],
    lines_en: [
      { kind:"plain", text:"Inside a million things" },
      { kind:"pop",   text:"our molds" },
    ],
    lede_jp: "クルマのダッシュ、家電のパネル、椅子の構造部品。あなたの暮らしを構成する『形』の多くは、金型から生まれている。私たち河村製作所は、その金型を、岐阜・中津川で1984年からつくり続けています。",
    lede_en: "Car dashboards, appliance panels, chair components. Most of the shapes around you start as a mold — and we've been making those molds in Gifu since 1984.",
  },
  hundredth: {
    eyebrow_jp: "PRECISION SINCE 1984",
    eyebrow_en: "PRECISION SINCE 1984",
    lines_jp: [
      { kind:"mono",  text:"0.01mmの精度で" },
      { kind:"pop",   text:"昭和59年から" },
    ],
    lines_en: [
      { kind:"mono",  text:"A hundredth of a millimeter" },
      { kind:"pop",   text:"since 1984" },
    ],
    lede_jp: "百分の一ミリの世界で、量産現場の『当たり前』を支える金型を。CAD/CAMから手仕事の磨きまで、設計→製造→トライを社内一貫。50t〜850tクラスに対応します。",
    lede_en: "A hundredth of a millimeter, every day. From CAD/CAM to hand-polishing — design, manufacture and try-out, all in-house. 50t – 850t class.",
  },
  hands: {
    eyebrow_jp: "FROM STEEL, TO EVERYDAY LIFE",
    eyebrow_en: "FROM STEEL, TO EVERYDAY LIFE",
    lines_jp: [
      { kind:"plain", text:"鉄をかたちに" },
      { kind:"pop",   text:"かたちを暮らしに" },
    ],
    lines_en: [
      { kind:"plain", text:"Steel becomes form" },
      { kind:"pop",   text:"Form becomes life" },
    ],
    lede_jp: "一枚の鋼から、毎日使われるプロダクトの『形』が生まれる。河村製作所は、自動車・家電・オフィス製品のプラスチック金型を、岐阜・中津川の工場で一貫製造しています。",
    lede_en: "From a single block of steel, the shape of daily life. We design and manufacture plastic injection molds for automotive, appliance and office products — all under one roof in Gifu, Japan.",
  },
};

/* ---------- LEFT COLUMN ---------- */

function HeroLeft({variantKey}){
  const c = COPY[variantKey] || COPY.invisible;
  return (
    <div className="hero-left">
      <div className="hero-eyebrow">
        <span className="pulse"></span>
        <span data-jp={c.eyebrow_jp} data-en={c.eyebrow_en}>{c.eyebrow_jp}</span>
      </div>

      <h1 className="hero-title" key={variantKey /* re-mount → re-animate */}>
        {c.lines_jp.map((ln, i) => {
          const en = c.lines_en[i] || {kind:ln.kind, text:""};
          const cls =
            ln.kind === "pop"   ? "pop"   :
            ln.kind === "mono"  ? "mono"  :
            ln.kind === "outline" ? "outline" : "plain";
          return (
            <span className="line" key={i} style={{animationDelay:`${i*120}ms`}}>
              <span className={cls} data-jp={ln.text} data-en={en.text}>{ln.text}</span>
            </span>
          );
        })}
      </h1>

      <p className="hero-lede">
        <span data-jp={c.lede_jp} data-en={c.lede_en}>{c.lede_jp}</span>
      </p>

      <div className="hero-ctas">
        <a href="#products" className="hero-cta-primary">
          <span data-jp="製品事例を見る" data-en="See our work">製品事例を見る</span>
          <svg viewBox="0 0 16 16" width="14" height="14"><path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.8" fill="none" strokeLinecap="round" strokeLinejoin="round"/></svg>
        </a>
        <a href="#contact" className="hero-cta-secondary">
          <span data-jp="お見積り依頼" data-en="Request a quote">お見積り依頼</span>
        </a>
      </div>

      <div className="hero-stats">
        <div className="hero-stat">
          <div className="n">1984<sup>—</sup></div>
          <div className="l"><span data-jp="創業" data-en="EST.">創業</span></div>
        </div>
        <div className="hero-stat">
          <div className="n">850<sup>t</sup></div>
          <div className="l"><span data-jp="最大型締" data-en="MAX CLASS">最大型締</span></div>
        </div>
        <div className="hero-stat">
          <div className="n">9<sup>工程</sup></div>
          <div className="l"><span data-jp="一貫製造" data-en="IN-HOUSE">一貫製造</span></div>
        </div>
      </div>
    </div>
  );
}

/* ====================================================
   RIGHT — PRODUCT COLLAGE (浮遊する2.5D 製品群)
   各製品カードに対応する金型ラベルを添える
   ==================================================== */

function CarDashArt(){
  return (
    <svg viewBox="0 0 200 130" className="pc-art">
      <defs>
        <linearGradient id="dashG" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#2a3a32"/>
          <stop offset="1" stopColor="#0f1f18"/>
        </linearGradient>
      </defs>
      <path d="M10 90 Q 30 30, 100 28 T 190 90 L 190 110 L 10 110 Z" fill="url(#dashG)"/>
      <path d="M10 90 Q 30 30, 100 28 T 190 90" fill="none" stroke="#7FB069" strokeWidth=".6" opacity=".5"/>
      <circle cx="60" cy="80" r="22" fill="none" stroke="#cfd8d3" strokeWidth="2.5"/>
      <circle cx="60" cy="80" r="6" fill="#cfd8d3"/>
      <line x1="38" y1="80" x2="82" y2="80" stroke="#cfd8d3" strokeWidth="2"/>
      <line x1="60" y1="58" x2="60" y2="86" stroke="#cfd8d3" strokeWidth="2"/>
      <rect x="110" y="55" width="60" height="34" rx="5" fill="#0a1812" stroke="#7FB069" strokeWidth=".8"/>
      <rect x="116" y="62" width="22" height="3" fill="#F4B860"/>
      <rect x="116" y="68" width="34" height="2" fill="#7FB069" opacity=".7"/>
      <rect x="116" y="73" width="28" height="2" fill="#7FB069" opacity=".5"/>
      <circle cx="160" cy="78" r="5" fill="none" stroke="#F4B860" strokeWidth="1"/>
    </svg>
  );
}

function ChairArt(){
  return (
    <svg viewBox="0 0 200 130" className="pc-art">
      <path d="M70 18 Q 100 14, 130 18 L 132 70 Q 100 76, 68 70 Z" fill="#1B5E3F"/>
      <path d="M70 18 Q 100 14, 130 18 L 132 70 Q 100 76, 68 70 Z" fill="none" stroke="#7FB069" strokeWidth=".6"/>
      {Array.from({length:6}).map((_,i)=>(
        <path key={i} d={`M${72+i*10} 22 Q ${74+i*10} 50, ${72+i*10} 70`} stroke="#7FB069" strokeWidth=".5" opacity=".5" fill="none"/>
      ))}
      <ellipse cx="100" cy="82" rx="42" ry="8" fill="#0f1f18"/>
      <line x1="100" y1="82" x2="60" y2="115" stroke="#444" strokeWidth="2"/>
      <line x1="100" y1="82" x2="100" y2="118" stroke="#444" strokeWidth="2"/>
      <line x1="100" y1="82" x2="140" y2="115" stroke="#444" strokeWidth="2"/>
      <circle cx="60" cy="115" r="4" fill="#222"/>
      <circle cx="100" cy="118" r="4" fill="#222"/>
      <circle cx="140" cy="115" r="4" fill="#222"/>
    </svg>
  );
}

function ApplianceArt(){
  return (
    <svg viewBox="0 0 200 130" className="pc-art">
      <rect x="20" y="18" width="160" height="94" rx="10" fill="#f4f0e8"/>
      <rect x="20" y="18" width="160" height="94" rx="10" fill="none" stroke="#1B5E3F" strokeWidth="1"/>
      <rect x="34" y="32" width="132" height="28" rx="4" fill="#0F3D2E"/>
      <text x="44" y="52" fill="#F4B860" fontSize="14" fontFamily="monospace" fontWeight="700">88:88</text>
      <circle cx="150" cy="46" r="3" fill="#7FB069"/>
      <circle cx="50" cy="86" r="14" fill="none" stroke="#1B5E3F" strokeWidth="1.5"/>
      <line x1="50" y1="86" x2="58" y2="80" stroke="#1B5E3F" strokeWidth="2" strokeLinecap="round"/>
      <rect x="78" y="76" width="22" height="20" rx="3" fill="none" stroke="#1B5E3F" strokeWidth="1"/>
      <rect x="106" y="76" width="22" height="20" rx="3" fill="none" stroke="#1B5E3F" strokeWidth="1"/>
      <rect x="134" y="76" width="22" height="20" rx="3" fill="#F4B860"/>
    </svg>
  );
}

function ConnectorArt(){
  return (
    <svg viewBox="0 0 200 130" className="pc-art">
      <rect x="40" y="40" width="120" height="50" rx="4" fill="#1B5E3F"/>
      <rect x="40" y="40" width="120" height="50" rx="4" fill="none" stroke="#7FB069" strokeWidth=".8"/>
      {Array.from({length:8}).map((_,i)=>(
        <rect key={i} x={50+i*14} y="52" width="8" height="26" rx="1.5" fill="#0a1812"/>
      ))}
      <path d="M40 40 L40 30 L70 30 L70 40 Z" fill="#0F3D2E"/>
      {Array.from({length:8}).map((_,i)=>(
        <line key={i} x1={54+i*14} y1="90" x2={54+i*14} y2="108" stroke="#cfd8d3" strokeWidth="1.5"/>
      ))}
    </svg>
  );
}

function BottleArt(){
  return (
    <svg viewBox="0 0 200 130" className="pc-art">
      <rect x="78" y="20" width="44" height="22" rx="3" fill="#0F3D2E"/>
      {Array.from({length:7}).map((_,i)=>(
        <line key={i} x1={82+i*6} y1="22" x2={82+i*6} y2="40" stroke="#7FB069" strokeWidth=".6"/>
      ))}
      <rect x="84" y="42" width="32" height="10" fill="#cfd8d3"/>
      <path d="M70 56 Q 70 52, 78 52 L 122 52 Q 130 52, 130 56 L 130 110 Q 130 116, 124 116 L 76 116 Q 70 116, 70 110 Z" fill="#f4f0e8" stroke="#1B5E3F" strokeWidth=".8"/>
      <rect x="78" y="74" width="44" height="28" rx="2" fill="#F4B860"/>
      <line x1="84" y1="82" x2="116" y2="82" stroke="#0F3D2E" strokeWidth=".8"/>
      <line x1="84" y1="88" x2="110" y2="88" stroke="#0F3D2E" strokeWidth=".5"/>
      <line x1="84" y1="93" x2="106" y2="93" stroke="#0F3D2E" strokeWidth=".5"/>
    </svg>
  );
}

const HERO_PRODUCTS = [
  {
    id:"car-dash",
    cat_jp:"自動車", cat_en:"AUTOMOTIVE",
    name_jp:"インパネ部品", name_en:"Instrument panel",
    note_jp:"550t級金型", note_en:"550t class mold",
    color:"#1B5E3F",
    Art: CarDashArt,
  },
  {
    id:"chair",
    cat_jp:"オフィス家具", cat_en:"OFFICE",
    name_jp:"チェア構造部品", name_en:"Chair components",
    note_jp:"320t級金型", note_en:"320t class mold",
    color:"#0F3D2E",
    Art: ChairArt,
  },
  {
    id:"appliance",
    cat_jp:"家電", cat_en:"APPLIANCE",
    name_jp:"前面パネル", name_en:"Front panel",
    note_jp:"180t級金型", note_en:"180t class mold",
    color:"#F4B860",
    Art: ApplianceArt,
  },
  {
    id:"connector",
    cat_jp:"電子部品", cat_en:"ELECTRONICS",
    name_jp:"コネクタハウジング", name_en:"Connector housing",
    note_jp:"50t級金型", note_en:"50t class mold",
    color:"#7FB069",
    Art: ConnectorArt,
  },
  {
    id:"bottle",
    cat_jp:"日用品", cat_en:"CONSUMER",
    name_jp:"コンテナキャップ", name_en:"Container cap",
    note_jp:"80t級金型", note_en:"80t class mold",
    color:"#1B5E3F",
    Art: BottleArt,
  },
];

function ProductCollage({speed}){
  // 5 slots arranged around the canvas. Cards "swap" via rotating index.
  const [tick, setTick] = useState(0);
  useEffect(()=>{
    const dur = 3800 / (speed||1);
    const id = setInterval(()=>setTick(t=>t+1), dur);
    return ()=>clearInterval(id);
  },[speed]);

  // slot positions (x%, y%, scale, z, rotate)
  const SLOTS = [
    { x:18, y:22, s:.86, z:1, r:-4 },   // top-left
    { x:72, y:18, s:.96, z:2, r:3 },    // top-right
    { x:50, y:50, s:1.18, z:5, r:0 },   // CENTER (hero card)
    { x:22, y:78, s:.92, z:3, r:2 },    // bottom-left
    { x:78, y:80, s:.82, z:1, r:-3 },   // bottom-right
  ];

  return (
    <div className="pc-stage">
      {/* deep-green plate background */}
      <div className="pc-plate"></div>

      {/* moving grid */}
      <svg className="pc-grid" viewBox="0 0 600 600" preserveAspectRatio="none">
        <defs>
          <pattern id="pcGrid" width="40" height="40" patternUnits="userSpaceOnUse">
            <path d="M40 0 L0 0 0 40" fill="none" stroke="rgba(127,176,105,.18)" strokeWidth=".8"/>
          </pattern>
        </defs>
        <rect width="600" height="600" fill="url(#pcGrid)"/>
      </svg>

      {/* "MOLD MAKER" wordmark behind */}
      <div className="pc-bgword">
        <span data-jp="MOLD" data-en="MOLD">MOLD</span>
        <span data-jp="MAKER" data-en="MAKER">MAKER</span>
      </div>

      {/* Floating mold-tool pictograms */}
      <div className="pc-floaters">
        <div className="pc-float pc-float-1">
          <svg viewBox="0 0 60 60"><rect x="8" y="8" width="44" height="44" rx="3" fill="none" stroke="#7FB069" strokeWidth="1"/><circle cx="30" cy="30" r="10" fill="none" stroke="#7FB069" strokeWidth="1"/><circle cx="30" cy="30" r="3" fill="#F4B860"/></svg>
        </div>
        <div className="pc-float pc-float-2">
          <svg viewBox="0 0 60 60"><path d="M10 50 L30 10 L50 50 Z" fill="none" stroke="#F4B860" strokeWidth="1"/><line x1="20" y1="30" x2="40" y2="30" stroke="#F4B860" strokeWidth="1"/></svg>
        </div>
        <div className="pc-float pc-float-3">
          <svg viewBox="0 0 60 60"><circle cx="30" cy="30" r="22" fill="none" stroke="#7FB069" strokeWidth="1"/><path d="M30 10 V50 M10 30 H50" stroke="#7FB069" strokeWidth=".6"/></svg>
        </div>
      </div>

      {/* Product cards in slots — assignment rotates every tick */}
      {SLOTS.map((slot, slotIdx) => {
        const prodIdx = (slotIdx + tick) % HERO_PRODUCTS.length;
        const p = HERO_PRODUCTS[prodIdx];
        const Art = p.Art;
        const isCenter = slotIdx === 2;
        return (
          <div
            key={slotIdx}
            className={`pc-card ${isCenter?'pc-card-center':''}`}
            style={{
              left:`${slot.x}%`, top:`${slot.y}%`,
              transform:`translate(-50%,-50%) scale(${slot.s}) rotate(${slot.r}deg)`,
              zIndex: slot.z,
            }}
          >
            <div className="pc-card-inner" key={p.id+tick /* re-fade on swap */}>
              <div className="pc-card-art" style={{background:`linear-gradient(135deg, ${p.color}11, ${p.color}22)`}}>
                <Art/>
              </div>
              <div className="pc-card-meta">
                <div className="pc-card-cat" data-jp={p.cat_jp} data-en={p.cat_en}>{p.cat_jp}</div>
                <div className="pc-card-name" data-jp={p.name_jp} data-en={p.name_en}>{p.name_jp}</div>
                <div className="pc-card-note">
                  <span className="pc-card-arrow">←</span>
                  <span data-jp={p.note_jp} data-en={p.note_en}>{p.note_jp}</span>
                </div>
              </div>
              {isCenter && <div className="pc-card-pin">FROM OUR MOLD</div>}
            </div>
          </div>
        );
      })}

      {/* corner marks */}
      <div className="pc-corner pc-corner-tl"><span>KAWAMURA / WORKS</span></div>
      <div className="pc-corner pc-corner-br"><span>EST · 1984</span></div>
    </div>
  );
}

/* ---------- ROOT ---------- */

function Hero(){
  // heroVariant now controls COPY (catchphrase). Backwards-compat: map old values.
  const mapVariant = (v) => {
    if(v === 'invisible' || v === 'hundredth' || v === 'hands') return v;
    return 'invisible'; // default for old values like 'stage','kinetic','blueprint','parts'
  };
  const [variantKey, setVariantKey] = useState(mapVariant(window.KW.TWEAKS.heroVariant));
  const [speed, setSpeed] = useState(window.KW.TWEAKS.animationSpeed || 1);

  useEffect(()=>window.KW.subscribe(t=>{
    setVariantKey(mapVariant(t.heroVariant));
    setSpeed(t.animationSpeed);
  }),[]);

  return (
    <section className="hero" id="top">
      <div className="hero-grid"></div>

      <div className="hero-inner">
        <HeroLeft variantKey={variantKey}/>
        <div className="hero-right">
          <ProductCollage speed={speed}/>
        </div>
      </div>
    </section>
  );
}

/* ---------- STYLES ---------- */
if(!document.getElementById('hero-v3-css')){
  // remove old hero v2 styles if present
  const old = document.getElementById('hero-v2-css'); if(old) old.remove();
  const s = document.createElement('style');
  s.id = 'hero-v3-css';
  s.textContent = `
    .hero{
      position:relative; min-height:100vh;
      padding:104px 24px 48px;
      background:
        radial-gradient(ellipse 1200px 600px at 80% -10%, rgba(127,176,105,.18), transparent 60%),
        radial-gradient(ellipse 900px 500px at 10% 110%, rgba(27,94,63,.15), transparent 60%),
        var(--cream);
      overflow:hidden;
      display:flex; flex-direction:column; justify-content:center;
    }
    .hero-inner{
      position:relative; z-index:2; max-width:1380px; margin:0 auto; width:100%;
      display:grid; grid-template-columns: minmax(0, 1fr) minmax(0, 1.05fr); gap:56px; align-items:center;
    }
    .hero-grid{
      position:absolute; inset:0;
      background-image:
        linear-gradient(rgba(15,61,46,.05) 1px, transparent 1px),
        linear-gradient(90deg, rgba(15,61,46,.05) 1px, transparent 1px);
      background-size: 56px 56px;
      mask-image: radial-gradient(ellipse 80% 80% at 50% 50%, black 40%, transparent 100%);
      pointer-events:none;
    }
    .hero-sidebar{
      position:absolute; left:22px; top:50%; transform:translateY(-50%) rotate(180deg);
      writing-mode:vertical-rl; font-family:var(--font-mono);
      color:var(--green-800); display:flex; align-items:center; gap:12px;
      z-index:3; pointer-events:none;
    }
    .hero-sidebar-right{
      left:auto; right:22px; transform:translateY(-50%);
    }
    .hero-sidebar .hs-label{
      font-size:9px; letter-spacing:.32em; font-weight:700;
      color:var(--green-700); opacity:.55;
    }
    .hero-sidebar .hs-val{
      font-size:10.5px; letter-spacing:.14em; font-weight:600;
      color:var(--green-900); opacity:.78;
    }
    .hero-sidebar .hs-workshop{
      font-family:var(--font-jp); font-size:10px; letter-spacing:.35em; font-weight:700;
      color:var(--green-800); opacity:.6;
    }
    .hero-sidebar .hs-live{display:inline-flex; align-items:center; gap:6px;}
    .hero-sidebar .hs-live i{
      width:6px; height:6px; border-radius:50%; background:#F4B860;
      box-shadow:0 0 0 0 rgba(244,184,96,.6); animation:pulse 1.8s infinite;
      display:inline-block;
    }
    .hero-sidebar .line{width:1px; height:42px; background:var(--green-800); opacity:.22;}

    /* Background vocabulary — workshop glossary drifting behind content */
    .hero-vocab{position:absolute; inset:0; pointer-events:none; z-index:1; overflow:hidden;}
    .hero-vocab span{
      position:absolute;
      font-family:var(--font-jp); font-weight:900;
      color:var(--green-900);
      letter-spacing:-.02em; line-height:1;
      white-space:nowrap;
      animation:vocabDrift 18s ease-in-out infinite;
    }
    .hero-vocab span:nth-child(2n){animation-duration:22s; animation-delay:-4s;}
    .hero-vocab span:nth-child(3n){animation-duration:26s; animation-delay:-9s;}
    @keyframes vocabDrift{
      0%,100%{transform:translate(0,0);}
      50%{transform:translate(0, -8px);}
    }

    @media (max-width: 900px){
      .hero-sidebar, .hero-vocab{display:none;}
    }

    /* LEFT */
    .hero-left{display:flex; flex-direction:column; gap:24px;}
    .hero-eyebrow{
      display:inline-flex; align-items:center; gap:10px;
      font-family:var(--font-mono); font-size:11px; letter-spacing:.22em; font-weight:700;
      color:var(--green-800); padding:8px 14px; border-radius:999px;
      background:rgba(127,176,105,.18); border:1px solid rgba(15,61,46,.18); width:max-content;
    }
    .pulse{width:7px; height:7px; border-radius:50%; background:#F4B860; box-shadow:0 0 0 0 rgba(244,184,96,.7); animation:pulse 1.6s infinite;}
    @keyframes pulse{0%{box-shadow:0 0 0 0 rgba(244,184,96,.7);}70%{box-shadow:0 0 0 10px rgba(244,184,96,0);}100%{box-shadow:0 0 0 0 rgba(244,184,96,0);}}

    .hero-title{
      font-family:var(--font-jp); font-weight:900;
      font-size: clamp(44px, 6.4vw, 92px);
      line-height:1.02; letter-spacing:-.02em; color:var(--green-900);
      margin:8px 0 4px;
    }
    .hero-title .line{display:block; overflow:hidden; padding-right:.04em;}
    .hero-title .line > span{display:inline-block; transform:translateY(110%); opacity:0; animation:heroLineUp .9s cubic-bezier(.2,.8,.2,1) forwards;}
    .hero-title .pop{
      color:var(--green-800);
      background:linear-gradient(180deg, var(--green-700) 0%, var(--green-900) 100%);
      -webkit-background-clip:text; background-clip:text; -webkit-text-fill-color:transparent;
      position:relative;
    }
    /* no underline marker on .pop — kept as a pure gradient-fill emphasis */
    .hero-title .outline{
      -webkit-text-fill-color:transparent; -webkit-text-stroke:1.5px var(--green-900);
    }
    .hero-title .mono{
      font-family:var(--font-mono); font-weight:800; letter-spacing:-.01em;
      color:var(--green-900);
    }
    @keyframes heroLineUp{to{transform:translateY(0); opacity:1;}}
    @keyframes underline{from{transform:scaleX(0);}to{transform:scaleX(1);}}

    .hero-lede{
      font-family:var(--font-jp); font-size:15.5px; line-height:1.85;
      color:var(--ink); max-width:560px; text-wrap:pretty;
      animation:heroFade 1s .4s both;
    }
    @keyframes heroFade{from{opacity:0; transform:translateY(8px);}to{opacity:1; transform:none;}}

    .hero-ctas{display:flex; gap:12px; align-items:center; flex-wrap:wrap; margin-top:4px; animation:heroFade 1s .55s both;}
    .hero-cta-primary{
      display:inline-flex; align-items:center; gap:10px;
      padding:14px 22px; border-radius:999px; background:var(--green-900); color:var(--cream);
      font-family:var(--font-jp); font-weight:700; font-size:14px;
      box-shadow:0 8px 22px -6px rgba(15,61,46,.45), inset 0 -2px 0 rgba(0,0,0,.18);
      transition:.25s;
    }
    .hero-cta-primary:hover{transform:translateY(-2px); box-shadow:0 14px 28px -8px rgba(15,61,46,.55);}
    .hero-cta-secondary{
      display:inline-flex; align-items:center; gap:8px;
      padding:13px 20px; border-radius:999px; background:transparent; color:var(--green-900);
      font-family:var(--font-jp); font-weight:700; font-size:14px;
      border:1.5px solid var(--green-900); transition:.25s;
    }
    .hero-cta-secondary:hover{background:var(--green-900); color:var(--cream);}

    .hero-stats{display:flex; gap:32px; margin-top:14px; padding-top:22px; border-top:1px dashed rgba(15,61,46,.25); animation:heroFade 1s .7s both;}
    .hero-stat .n{font-family:var(--font-en); font-weight:800; font-size:36px; color:var(--green-900); line-height:1;}
    .hero-stat .n sup{font-size:13px; font-weight:700; color:var(--green-700); margin-left:2px;}
    .hero-stat .l{font-family:var(--font-mono); font-size:9px; letter-spacing:.22em; color:var(--green-800); font-weight:700; margin-top:6px;}

    /* ============== RIGHT — PRODUCT COLLAGE ============== */
    .hero-right{position:relative; min-height:560px;}
    .pc-stage{
      position:relative; width:100%; aspect-ratio: 1/1; max-height: 78vh;
      border-radius:28px; overflow:hidden;
      background:linear-gradient(135deg, var(--green-900) 0%, #0a2a1f 100%);
      box-shadow:
        0 30px 60px -20px rgba(15,61,46,.45),
        inset 0 1px 0 rgba(255,255,255,.06);
    }
    .pc-plate{position:absolute; inset:0;
      background:
        radial-gradient(circle at 30% 30%, rgba(127,176,105,.18), transparent 50%),
        radial-gradient(circle at 70% 70%, rgba(244,184,96,.10), transparent 50%);
    }
    .pc-grid{position:absolute; inset:-10%; opacity:.7; animation:pcGridDrift 32s linear infinite;}
    @keyframes pcGridDrift{from{transform:translate(0,0);}to{transform:translate(-40px,-40px);}}

    .pc-bgword{
      position:absolute; inset:0; display:flex; flex-direction:column; justify-content:center; align-items:center; gap:0;
      pointer-events:none;
    }
    .pc-bgword span{
      font-family:var(--font-en); font-weight:900;
      font-size: clamp(70px, 10vw, 140px); line-height:.85;
      color:transparent; -webkit-text-stroke:1.2px rgba(127,176,105,.22);
      letter-spacing:-.02em;
    }

    /* Floating tool pictograms */
    .pc-floaters{position:absolute; inset:0; pointer-events:none;}
    .pc-float{position:absolute; width:60px; height:60px; opacity:.6;}
    .pc-float-1{top:8%; right:12%; animation:pcFloat 7s ease-in-out infinite;}
    .pc-float-2{bottom:10%; left:8%; animation:pcFloat 9s ease-in-out infinite reverse;}
    .pc-float-3{top:42%; right:6%; animation:pcFloat 11s ease-in-out infinite;}
    @keyframes pcFloat{0%,100%{transform:translateY(0) rotate(0);}50%{transform:translateY(-12px) rotate(8deg);}}

    /* Product cards */
    .pc-card{
      position:absolute; width:38%; max-width:260px;
      transition: transform 1.2s cubic-bezier(.4,0,.2,1);
    }
    .pc-card-center{width:48%; max-width:320px;}
    .pc-card-inner{
      position:relative;
      background:var(--cream);
      border-radius:16px;
      box-shadow:
        0 12px 28px -8px rgba(0,0,0,.35),
        0 4px 8px rgba(0,0,0,.15),
        inset 0 1px 0 rgba(255,255,255,.6);
      overflow:hidden;
      animation: cardSwap 1s ease;
      border:1px solid rgba(15,61,46,.1);
    }
    @keyframes cardSwap{from{opacity:0; transform:translateY(8px) scale(.96);}to{opacity:1; transform:none;}}
    .pc-card-art{
      position:relative; padding:8px;
      border-bottom:1px dashed rgba(15,61,46,.18);
    }
    .pc-art{display:block; width:100%; height:auto;}
    .pc-card-meta{padding:10px 14px 12px;}
    .pc-card-cat{
      font-family:var(--font-mono); font-size:9px; letter-spacing:.22em; font-weight:700;
      color:var(--green-700);
    }
    .pc-card-name{
      font-family:var(--font-jp); font-weight:800; font-size:15px; color:var(--green-900);
      margin-top:3px;
    }
    .pc-card-note{
      display:flex; align-items:center; gap:6px;
      margin-top:6px;
      font-family:var(--font-mono); font-size:10px; color:var(--green-800); font-weight:700;
      padding-top:6px; border-top:1px dotted rgba(15,61,46,.2);
    }
    .pc-card-arrow{color:#F4B860;}
    .pc-card-pin{
      position:absolute; top:10px; right:10px;
      background:#F4B860; color:var(--green-900);
      font-family:var(--font-mono); font-size:8px; letter-spacing:.16em; font-weight:800;
      padding:4px 8px; border-radius:6px;
      box-shadow:0 3px 6px rgba(0,0,0,.18);
      transform:rotate(3deg);
    }
    .pc-card-center .pc-card-name{font-size:18px;}

    .pc-corner{position:absolute; font-family:var(--font-mono); font-size:9px; letter-spacing:.22em; color:rgba(244,240,232,.55); font-weight:700;}
    .pc-corner-tl{top:14px; left:18px;}
    .pc-corner-br{bottom:14px; right:18px;}

    /* responsive */
    @media(max-width:1100px){
      .hero-inner{grid-template-columns: minmax(0, 1fr) minmax(0, 1fr); gap:32px;}
      .pc-stage{aspect-ratio:auto; height:100%; min-height:420px; max-height:70vh;}
    }
    @media(max-width:860px){
      .hero-inner{grid-template-columns:1fr; gap:36px;}
      .hero-right{min-height:auto;}
      .pc-stage{aspect-ratio:1/1; max-height:500px;}
    }
    @media(max-width:640px){
      .hero{min-height:auto; padding:96px 18px 36px;}
      .hero-stats{gap:22px;}
      .hero-stat .n{font-size:30px;}
      .pc-card-pin{font-size:7px;}
    }
    /* Short viewports — keep hero one-screen */
    @media(max-height:780px){
      .hero{min-height:auto; padding:92px 24px 32px;}
      .hero-title{font-size:clamp(38px,5.4vw,72px);}
      .hero-lede{font-size:14px; line-height:1.7;}
      .hero-stats{margin-top:8px; padding-top:14px; gap:24px;}
      .hero-stat .n{font-size:28px;}
      .pc-stage{max-height:62vh;}
    }
    @media(max-height:640px){
      .hero-stats{display:none;}
      .hero-lede{display:-webkit-box; -webkit-line-clamp:3; -webkit-box-orient:vertical; overflow:hidden;}
      .pc-stage{max-height:56vh;}
    }
  `;
  document.head.appendChild(s);
}

ReactDOM.createRoot(document.getElementById('hero-mount')).render(<Hero/>);
