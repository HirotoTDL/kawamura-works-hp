const { useState: useS_p, useEffect: useE_p, useRef: useR_p } = React;

/* ====================================================
   STAGE ILLUSTRATIONS — 9工程 専用SVG
   （以前は hero.jsx 側にあったが、Hero リデザインで剥離してこちらへ移動）
   ==================================================== */

function StageFrame({children}){
  return (
    <svg viewBox="0 0 560 560" preserveAspectRatio="xMidYMid meet" className="stage-svg">
      <defs>
        <linearGradient id="s_steel" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#8a9a90"/>
          <stop offset="1" stopColor="#3a4a42"/>
        </linearGradient>
        <linearGradient id="s_steel2" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#cfd8d3"/>
          <stop offset="1" stopColor="#7a8a82"/>
        </linearGradient>
        <pattern id="s_grid" width="28" height="28" patternUnits="userSpaceOnUse">
          <path d="M28 0 L0 0 0 28" fill="none" stroke="rgba(127,176,105,.18)" strokeWidth=".6"/>
        </pattern>
      </defs>
      <rect width="560" height="560" fill="#0c2a1f"/>
      <rect width="560" height="560" fill="url(#s_grid)"/>
      {children}
    </svg>
  );
}

function Stage01(){
  return (
    <StageFrame>
      <rect x="60" y="80" width="440" height="380" rx="6" fill="#0a1812" stroke="#7FB069" strokeWidth="1"/>
      <rect x="60" y="80" width="440" height="22" fill="#0F3D2E"/>
      <circle cx="74" cy="91" r="3.5" fill="#FF6059"/>
      <circle cx="86" cy="91" r="3.5" fill="#F4B860"/>
      <circle cx="98" cy="91" r="3.5" fill="#7FB069"/>
      <text x="480" y="95" fill="#7FB069" fontSize="9" fontFamily="monospace" textAnchor="end">MOLD_v04.cad</text>
      <g transform="translate(280,280)">
        <rect x="-110" y="-90" width="220" height="180" fill="none" stroke="#7FB069" strokeWidth="1"/>
        <rect x="-90" y="-70" width="180" height="140" fill="none" stroke="#7FB069" strokeWidth=".6"/>
        <path d="M-90 0 L90 0 M0 -70 L0 70" stroke="#7FB069" strokeWidth=".5" strokeDasharray="4 3"/>
        <circle cx="0" cy="0" r="40" fill="none" stroke="#F4B860" strokeWidth="1"/>
        <circle cx="0" cy="0" r="4" fill="#F4B860"/>
        <text x="50" y="4" fill="#F4B860" fontSize="10" fontFamily="monospace">Ø 80.00</text>
      </g>
      <line x1="100" y1="430" x2="460" y2="430" stroke="#7FB069" strokeWidth=".5"/>
      <text x="280" y="445" fill="#7FB069" fontSize="9" fontFamily="monospace" textAnchor="middle">360.00</text>
      <g style={{animation:"cursor01 6s ease-in-out infinite"}}>
        <path d="M0 0 L0 14 L4 10 L7 16 L9 15 L6 9 L12 9 Z" fill="#F4B860" stroke="#0F3D2E" strokeWidth=".8"/>
      </g>
    </StageFrame>
  );
}

function Stage02(){
  return (
    <StageFrame>
      <rect x="140" y="260" width="280" height="180" fill="url(#s_steel)" stroke="#1B5E3F"/>
      <rect x="140" y="260" width="280" height="18" fill="url(#s_steel2)"/>
      <g style={{animation:"tool02 4s ease-in-out infinite"}}>
        <rect x="200" y="100" width="30" height="140" fill="#444"/>
        <rect x="205" y="240" width="20" height="30" fill="#888"/>
        <g style={{transformOrigin:"215px 250px", animation:"spin02 .4s linear infinite"}}>
          <circle cx="215" cy="250" r="14" fill="#bbb"/>
          <line x1="201" y1="250" x2="229" y2="250" stroke="#666" strokeWidth="2"/>
        </g>
      </g>
      {Array.from({length:6}).map((_,i)=>(
        <circle key={i} cx={210+i*4} cy={270} r="2" fill="#F4B860" style={{animation:`chip 1.4s ${i*.18}s infinite`,"--cx":`${(i-3)*8}px`}}/>
      ))}
      <text x="280" y="480" fill="#7FB069" fontSize="10" fontFamily="monospace" textAnchor="middle">SKD-11 ブロック材</text>
    </StageFrame>
  );
}

function Stage03(){
  return (
    <StageFrame>
      <rect x="100" y="300" width="360" height="160" fill="url(#s_steel2)" stroke="#1B5E3F"/>
      <path d="M180 300 Q 280 240, 380 300" fill="none" stroke="#0F3D2E" strokeWidth="1.5"/>
      <path d="M180 300 Q 280 260, 380 300 L380 300 L180 300 Z" fill="#0a1812"/>
      <g style={{animation:"tool03 5s linear infinite"}}>
        <rect x="260" y="100" width="40" height="160" fill="#555"/>
        <g style={{transformOrigin:"280px 270px", animation:"spin02 .25s linear infinite"}}>
          <ellipse cx="280" cy="270" rx="10" ry="4" fill="#ddd"/>
          <circle cx="280" cy="270" r="3" fill="#F4B860"/>
        </g>
      </g>
      <text x="110" y="480" fill="#7FB069" fontSize="10" fontFamily="monospace">N040 G01 X120.0 Y0.0 F2400</text>
    </StageFrame>
  );
}

function Stage04(){
  return (
    <StageFrame>
      <rect x="140" y="320" width="280" height="140" fill="url(#s_steel)"/>
      <rect x="160" y="360" width="240" height="100" fill="#0a1812"/>
      <g style={{animation:"edm04 1.6s ease-in-out infinite"}}>
        <rect x="260" y="160" width="40" height="180" fill="#c8a76b"/>
        <rect x="260" y="160" width="40" height="14" fill="#a78544"/>
        <rect x="272" y="320" width="16" height="40" fill="#a78544"/>
      </g>
      {Array.from({length:8}).map((_,i)=>(
        <circle key={i} cx={272+i*2} cy={350} r="2" fill="#F4B860" style={{animation:`spark04 .9s ${i*.12}s infinite`}}/>
      ))}
      <text x="280" y="500" fill="#7FB069" fontSize="10" fontFamily="monospace" textAnchor="middle">EDM · 電極 Cu-W</text>
    </StageFrame>
  );
}

function Stage05(){
  return (
    <StageFrame>
      <rect x="100" y="260" width="360" height="160" fill="url(#s_steel2)" stroke="#1B5E3F"/>
      <rect x="100" y="310" width="360" height="60" fill="#f0f0ec" opacity=".85"/>
      <rect x="100" y="310" width="360" height="60" fill="none" stroke="#cfd8d3" strokeWidth=".6"/>
      <g style={{animation:"polish05 2.4s ease-in-out infinite", transformOrigin:"280px 290px"}}>
        <rect x="260" y="180" width="40" height="110" rx="6" fill="#7a5b3a"/>
        <ellipse cx="280" cy="300" rx="24" ry="10" fill="#fff" stroke="#1B5E3F" strokeWidth=".5"/>
      </g>
      {Array.from({length:5}).map((_,i)=>(
        <circle key={i} cx={140+i*70} cy="340" r="2" fill="#fff" opacity=".7" style={{animation:`spark04 1.4s ${i*.3}s infinite`}}/>
      ))}
      <text x="280" y="460" fill="#7FB069" fontSize="10" fontFamily="monospace" textAnchor="middle">Ra 0.02 μm · 面粗度願灪</text>
    </StageFrame>
  );
}

function Stage06(){
  return (
    <StageFrame>
      <rect x="120" y="320" width="320" height="140" fill="url(#s_steel)" stroke="#1B5E3F"/>
      <line x1="100" y1="180" x2="460" y2="180" stroke="#666" strokeWidth="4"/>
      <line x1="100" y1="180" x2="100" y2="320" stroke="#666" strokeWidth="4"/>
      <line x1="460" y1="180" x2="460" y2="320" stroke="#666" strokeWidth="4"/>
      <g style={{animation:"probe06 5s ease-in-out infinite"}}>
        <g transform="translate(280,200)">
          <rect x="-8" y="0" width="16" height="60" fill="#888"/>
          <line x1="0" y1="60" x2="0" y2="110" stroke="#bbb" strokeWidth="2"/>
          <circle cx="0" cy="114" r="5" fill="#F4B860" stroke="#0F3D2E" strokeWidth="1"/>
        </g>
      </g>
      <rect x="320" y="100" width="130" height="54" rx="4" fill="#0a1812" stroke="#7FB069" strokeWidth=".6"/>
      <text x="328" y="118" fill="#7FB069" fontSize="9" fontFamily="monospace">CMM · LIVE</text>
      <text x="328" y="138" fill="#F4B860" fontSize="14" fontFamily="monospace" fontWeight="700">± 0.005</text>
      <text x="328" y="150" fill="#7FB069" fontSize="8" fontFamily="monospace">mm · PASS</text>
      <text x="280" y="500" fill="#7FB069" fontSize="10" fontFamily="monospace" textAnchor="middle">全数 · 100% 検査</text>
    </StageFrame>
  );
}

function Stage07(){
  return (
    <StageFrame>
      <rect x="120" y="380" width="320" height="50" fill="url(#s_steel)" stroke="#1B5E3F"/>
      <g style={{animation:"lift07c 2.6s ease-in-out infinite"}}>
        <rect x="180" y="180" width="200" height="40" fill="#cfd8d3" stroke="#1B5E3F"/>
      </g>
      <g style={{animation:"lift07b 2.6s ease-in-out infinite"}}>
        <rect x="170" y="230" width="220" height="50" fill="#9faaa3" stroke="#1B5E3F"/>
      </g>
      <g style={{animation:"lift07a 2.6s ease-in-out infinite"}}>
        <rect x="160" y="290" width="240" height="80" fill="#7a8a82" stroke="#1B5E3F"/>
      </g>
      <circle cx="190" cy="305" r="4" fill="#F4B860"/>
      <circle cx="370" cy="305" r="4" fill="#F4B860"/>
      <circle cx="190" cy="360" r="4" fill="#F4B860"/>
      <circle cx="370" cy="360" r="4" fill="#F4B860"/>
      <text x="280" y="470" fill="#7FB069" fontSize="10" fontFamily="monospace" textAnchor="middle">3-PLATE · BUILD</text>
    </StageFrame>
  );
}

function Stage08(){
  return (
    <StageFrame>
      <rect x="120" y="180" width="180" height="200" fill="url(#s_steel)" stroke="#1B5E3F"/>
      <rect x="320" y="180" width="120" height="200" fill="url(#s_steel2)" stroke="#1B5E3F"/>
      <line x1="310" y1="170" x2="310" y2="390" stroke="#F4B860" strokeWidth=".8" strokeDasharray="4 3"/>
      <g style={{animation:"eject08 2.2s ease-in-out infinite"}}>
        <rect x="230" y="240" width="70" height="80" rx="4" fill="#0F3D2E" stroke="#7FB069" strokeWidth=".8"/>
        <circle cx="265" cy="280" r="12" fill="#F4B860"/>
      </g>
      <g style={{animation:"stamp08 2.2s ease-in-out infinite", transformOrigin:"380px 430px"}}>
        <circle cx="380" cy="430" r="32" fill="none" stroke="#FF6059" strokeWidth="2.5"/>
        <text x="380" y="436" fill="#FF6059" fontSize="18" fontFamily="monospace" fontWeight="800" textAnchor="middle">T0</text>
      </g>
      <text x="280" y="500" fill="#7FB069" fontSize="10" fontFamily="monospace" textAnchor="middle">FIRST-SHOT · GOOD PART</text>
    </StageFrame>
  );
}

function Stage09(){
  return (
    <StageFrame>
      <g style={{animation:"ship09 2.4s ease-in-out infinite"}}>
        <rect x="160" y="260" width="240" height="160" fill="#7a5b3a" stroke="#3a2a1a" strokeWidth="1.5"/>
        <line x1="160" y1="310" x2="400" y2="310" stroke="#3a2a1a" strokeWidth="1.5"/>
        <line x1="160" y1="370" x2="400" y2="370" stroke="#3a2a1a" strokeWidth="1.5"/>
        <line x1="220" y1="260" x2="220" y2="420" stroke="#3a2a1a" strokeWidth="1.5"/>
        <line x1="340" y1="260" x2="340" y2="420" stroke="#3a2a1a" strokeWidth="1.5"/>
        <rect x="230" y="320" width="100" height="42" fill="#f4f0e8"/>
        <text x="280" y="338" fill="#0F3D2E" fontSize="10" fontFamily="monospace" textAnchor="middle" fontWeight="700">KAWAMURA</text>
        <text x="280" y="352" fill="#1B5E3F" fontSize="8" fontFamily="monospace" textAnchor="middle">MOLD · 1 SET</text>
        <path d="M260 380 L290 380 L290 374 L304 384 L290 394 L290 388 L260 388 Z" fill="#F4B860"/>
      </g>
      <text x="280" y="470" fill="#7FB069" fontSize="10" fontFamily="monospace" textAnchor="middle">→ TO CUSTOMER</text>
    </StageFrame>
  );
}

const P_STAGES = [Stage01, Stage02, Stage03, Stage04, Stage05, Stage06, Stage07, Stage08, Stage09];

const P_STEPS = [
  {n:"01", jp:"お見積り・設計", en:"QUOTE & DESIGN", sub:"CAD / CAM",
   desc_jp:"仕様書・2D／3Dデータをもとにコストと納期を提示。CADで3Dモデルを起こし、直彫り・放電用電極モデルを作成します。",
   desc_en:"Quote cost & delivery from your specs. 3D model in CAD plus electrode models for EDM — minimizing cuts to save cost without sacrificing precision."},
  {n:"02", jp:"前加工（荒加工）", en:"ROUGHING", sub:"PRE-CUTTING",
   desc_jp:"金型部品の穴明け・荒取り・仕上加工。素材を形に近づけていく、全工程の基盤となる工程です。",
   desc_en:"Hole drilling, rough cutting, and pre-finishing — shaping raw stock toward form. The foundation on which all later steps depend."},
  {n:"03", jp:"マシニング加工", en:"HIGH-SPEED MILLING", sub:"Ø6 BALL-NOSE",
   desc_jp:"金型・型部品の切削加工。高速・高精度でプログラム通りに形を削り出し、面粗度Ra 0.8µmまで追い込みます。",
   desc_en:"High-speed precision milling per program, pushing surface finish to Ra 0.8µm."},
  {n:"04", jp:"放電加工", en:"EDM", sub:"SPARK EROSION",
   desc_jp:"深リブ、ネジ部、エッジ部など、マシニングでは届かない箇所を放電で仕上げる。刃の届かない奥へ、火花で形を刻みます。",
   desc_en:"Deep ribs, thread forms, sharp edges — finishing where milling cannot reach, using spark erosion."},
  {n:"05", jp:"磨き", en:"POLISHING", sub:"#8000 DIAMOND",
   desc_jp:"砥石・セラミック・ダイヤモンドペースト等を駆使し、ほとんどを手作業で。実体顕微鏡で面粗度を確かめながら、鏡面Ra 0.02µmへ。",
   desc_en:"Mostly by hand — ceramic, whetstone, diamond paste. Surface checked under microscope, finished to mirror grade Ra 0.02µm."},
  {n:"06", jp:"測定", en:"MEASUREMENT", sub:"CMM",
   desc_jp:"入子の測定・確認、寸法修正。各工程終了時にオペレーターが測り、次工程へ渡す。勘ではなく、数値で。",
   desc_en:"Insert measurement and dimensional correction at every handoff — never guess, always verify by CMM."},
  {n:"07", jp:"組立", en:"ASSEMBLY", sub:"3-PLATE BUILD",
   desc_jp:"仕上げたパーツを調整・組込み。ヒューマンエラーを排したチェックリストで、常にT0良品を目標に。",
   desc_en:"Adjust and fit finished parts to the mold base — checklist-driven, aiming for T0 good-part quality."},
  {n:"08", jp:"トライ（試し成形）", en:"TRY-OUT", sub:"T0 TEST",
   desc_jp:"新型・修正後の成形確認。お客様のもとへ伺い、立会い・調整もいたします。ファーストショットで良品を。",
   desc_en:"Trial molding for new or modified tools — including on-site attendance. First shot, a good part."},
  {n:"09", jp:"出荷", en:"DELIVER", sub:"→ CUSTOMER",
   desc_jp:"梱包・出荷。次の製品へ、金型は旅立ちます。お客様の工場で新しい製品を生み出す、その起点となる瞬間です。",
   desc_en:"Packed and shipped. On to the next product — the moment before your factory turns steel into parts."},
];

function ProcessSection(){
  const [active, setActive] = useS_p(0);
  const [autoplay, setAutoplay] = useS_p(true);
  const stepRefs = useR_p([]);
  const sectionRef = useR_p(null);

  // Autoplay only before any user interaction
  useE_p(() => {
    if(!autoplay) return;
    const id = setInterval(() => setActive(a => (a+1)%9), 4200);
    return () => clearInterval(id);
  }, [autoplay]);

  const cur = P_STEPS[active];
  const CurStage = P_STAGES[active];

  return (
    <section id="process" className="proc2" ref={sectionRef}>
      <div className="section-inner">
        <div className="section-head reveal">
          <div className="eyebrow">PROCESS · 製作工程</div>
          <h2 className="section-title">
            <span data-jp="九つの工程 一貫の責任" data-en="Nine steps one accountability">九つの工程 一貫の責任</span>
            <span className="en">NINE STEPS · ONE ACCOUNTABILITY</span>
          </h2>
          <p className="lede">
            <span data-jp="設計から試し成形まで、一本の線でつなぐ。各工程のオペレーターが自ら測り、次へ渡す。誰かに任せるではなく、全員で守る品質。"
                  data-en="From design to try-out, one line connects all. Each operator measures and hands off — quality is never outsourced.">
              設計から試し成形まで、一本の線でつなぐ。各工程のオペレーターが自ら測り、次へ渡す。誰かに任せるではなく、全員で守る品質。
            </span>
          </p>
        </div>

        {/* Process map: all 9 steps visible as a horizontal timeline */}
        <div className="p2v3-map reveal">
          <div className="p2v3-map-line"/>
          <div className="p2v3-map-fill" style={{width:`${((active+1)/9)*100}%`}}/>
          {P_STEPS.map((s,i) => (
            <button key={i}
              className={`p2v3-stop ${i===active?'now':''} ${i<active?'done':''}`}
              onClick={()=>{ setAutoplay(false); setActive(i); }}
              aria-label={`Step ${s.n} ${s.jp}`}>
              <span className="p2v3-stop-dot"><span>{s.n}</span></span>
              <span className="p2v3-stop-jp" data-jp={s.jp} data-en={s.en}>{s.jp}</span>
              <span className="p2v3-stop-en">{s.en}</span>
            </button>
          ))}
        </div>

        {/* Single-card viewer: active step only. Background animation + foreground copy. */}
        <div className="p2v3-viewer reveal" ref={el => stepRefs.current[0]=el}>
          <article key={active} className="p2v3-step active">
            <div className="p2v3-bg" aria-hidden="true">
              {CurStage ? <CurStage/> : null}
            </div>
            <div className="p2v3-scrim" aria-hidden="true"/>
            <div className="p2v3-fg">
              <div className="p2v3-step-head">
                <span className="p2v3-step-n">{cur.n}</span>
                <span className="p2v3-step-rule"/>
                <span className="p2v3-step-en">{cur.en}</span>
                <span className="p2v3-step-sub">— {cur.sub} —</span>
              </div>
              <h3 className="p2v3-step-jp" data-jp={cur.jp} data-en={cur.en}>{cur.jp}</h3>
              <p className="p2v3-step-desc" data-jp={cur.desc_jp} data-en={cur.desc_en}>{cur.desc_jp}</p>

              <div className="p2v3-controls">
                <button className="p2v3-arrow"
                  onClick={()=>{ setAutoplay(false); setActive(a=>(a+8)%9); }}
                  aria-label="Previous">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M15 6l-6 6 6 6"/></svg>
                </button>
                <div className="p2v3-progress">
                  <div className="p2v3-progress-fill" style={{width:`${((active+1)/9)*100}%`}}/>
                </div>
                <button className="p2v3-arrow"
                  onClick={()=>{ setAutoplay(false); setActive(a=>(a+1)%9); }}
                  aria-label="Next">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M9 6l6 6-6 6"/></svg>
                </button>
              </div>
            </div>
          </article>
        </div>

        {/* legacy anchor block kept for continuity — hidden in v3 */}
        <div className="proc2-layout" style={{display:'none'}}>
          <div className="proc2-sticky">
            <div className="proc2-card">
              <div className="p2-chrome">
                <div className="p2-tabs">
                  <span className="p2-tab on">STAGE</span>
                  <span className="p2-tab">CAM</span>
                  <span className="p2-tab">QC</span>
                </div>
                <div className="p2-counter">
                  <span className="p2-n">{cur.n}</span><span className="p2-total">/ 09</span>
                  <span className="p2-live"><span className="p2-dot"/>LIVE</span>
                </div>
              </div>

              <div className="p2-stage" key={active}>
                {CurStage ? <CurStage/> : null}
                <div className="p2-label">
                  <div className="p2l-n">STEP {cur.n}</div>
                  <div className="p2l-jp" data-jp={cur.jp} data-en={cur.en}>{cur.jp}</div>
                  <div className="p2l-en">— {cur.sub} —</div>
                </div>
              </div>

              {/* chip strip - always clickable */}
              <div className="p2-strip">
                {P_STEPS.map((s,i) => (
                  <button key={i}
                    className={`p2-chip ${i===active?'now':''} ${i<active?'done':''}`}
                    onClick={()=>{
                      setAutoplay(false);
                      setActive(i);
                      lockRef.current = Date.now() + 900; // ignore scroll handler during smooth-scroll
                      const el = stepRefs.current[i];
                      if(el){
                        const y = el.getBoundingClientRect().top + window.scrollY - window.innerHeight*0.30;
                        window.scrollTo({top:y, behavior:'smooth'});
                      }
                    }}>
                    <span className="p2c-n">{s.n}</span>
                    <span className="p2c-jp" data-jp={s.jp} data-en={s.en}>{s.jp}</span>
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* scrolling right column */}
          <div className="proc2-steps">
            {P_STEPS.map((s,i) => (
              <div key={i}
                   ref={el => stepRefs.current[i]=el}
                   data-idx={i}
                   className={`p2-step ${i===active?'active':''}`}>
                <div className="p2s-head">
                  <span className="p2s-n">{s.n}</span>
                  <span className="p2s-en">— {s.en} —</span>
                </div>
                <h3 className="p2s-jp" data-jp={s.jp} data-en={s.en}>{s.jp}</h3>
                <p className="p2s-desc" data-jp={s.desc_jp} data-en={s.desc_en}>{s.desc_jp}</p>
                <div className="p2s-bar"><div className="p2s-bar-fill" style={{width:i===active?'100%':(i<active?'100%':'0%')}}/></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

if(!document.getElementById('proc2-css')){
  const s = document.createElement('style');
  s.id='proc2-css';
  s.textContent = `
    .proc2{background:var(--cream);padding-top:96px;padding-bottom:96px;}

    /* Process map — all 9 steps as one horizontal timeline */
    .p2v3-map{
      position:relative;
      display:grid; grid-template-columns:repeat(9, 1fr);
      gap:0;
      margin: 40px 0 36px;
      padding: 28px 0 6px;
    }
    .p2v3-map-line{
      position:absolute; left:5.55%; right:5.55%; top: 28px;
      height:2px; background:rgba(15,61,46,.12); border-radius:2px;
      z-index:0;
    }
    .p2v3-map-fill{
      position:absolute; left:5.55%; top: 28px; height:2px;
      background:linear-gradient(90deg, var(--marigold), var(--marigold-2));
      border-radius:2px; z-index:1;
      transition: width .6s cubic-bezier(.2,.8,.2,1);
      max-width: 88.9%;
    }
    .p2v3-stop{
      position:relative; z-index:2;
      background:transparent; border:0; cursor:pointer;
      display:flex; flex-direction:column; align-items:center; gap:10px;
      padding: 0 4px; min-width:0;
    }
    .p2v3-stop-dot{
      width: 32px; height:32px; border-radius:50%;
      background:var(--cream-2);
      border:2px solid rgba(15,61,46,.25);
      display:inline-flex; align-items:center; justify-content:center;
      font-family:var(--font-mono); font-size:11px; font-weight:800;
      color:var(--green-800); letter-spacing:.04em;
      transition: all .3s;
      box-shadow: 0 2px 0 rgba(10,36,25,.06);
    }
    .p2v3-stop.done .p2v3-stop-dot{
      background:var(--green-800); border-color:var(--green-800); color:var(--cream);
    }
    .p2v3-stop.now .p2v3-stop-dot{
      background:var(--marigold); border-color:var(--marigold-2);
      color:var(--green-900);
      transform:scale(1.15);
      box-shadow: 0 0 0 6px rgba(255,182,39,.18), 0 2px 0 rgba(10,36,25,.1);
    }
    .p2v3-stop:hover .p2v3-stop-dot{ transform: scale(1.08); }
    .p2v3-stop.now:hover .p2v3-stop-dot{ transform:scale(1.2); }
    .p2v3-stop-jp{
      font-family:var(--font-jp); font-size:11.5px; font-weight:700;
      color:var(--green-800); line-height:1.25; text-align:center;
      white-space:nowrap; overflow:hidden; text-overflow:ellipsis;
      max-width: 100%;
      transition: color .3s;
    }
    .p2v3-stop.now .p2v3-stop-jp{ color:var(--green-900); }
    .p2v3-stop-en{
      font-family:var(--font-mono); font-size:8.5px; font-weight:700;
      letter-spacing:.18em; color:var(--green-700); opacity:.5;
      white-space:nowrap; overflow:hidden; text-overflow:ellipsis;
      max-width: 100%; text-transform:uppercase;
    }
    @media(max-width: 820px){
      .p2v3-map{ overflow-x:auto; grid-template-columns:repeat(9, 96px); padding-bottom:12px; }
      .p2v3-map-line, .p2v3-map-fill{ display:none; }
      .p2v3-stop-jp{ font-size:10.5px; }
      .p2v3-stop-en{ display:none; }
    }

    /* Single-card viewer */
    .p2v3-viewer{ margin-top: 8px; }
    .p2v3-viewer .p2v3-step{ min-height: 460px; padding: 56px 56px 40px; }
    .p2v3-controls{
      display:flex; align-items:center; gap:16px;
      margin-top: 40px; max-width: 560px;
    }
    .p2v3-arrow{
      width:44px; height:44px; border-radius:50%;
      background:var(--cream-2); border:1px solid rgba(15,61,46,.15);
      display:inline-flex; align-items:center; justify-content:center;
      color:var(--green-800); cursor:pointer; transition: background .25s, transform .2s, border-color .25s;
    }
    .p2v3-arrow:hover{ background:var(--green-800); color:var(--cream); border-color:var(--green-800); transform:translateY(-1px);}
    .p2v3-progress{
      flex:1; height:2px; background:rgba(15,61,46,.12); border-radius:2px; overflow:hidden;
    }
    .p2v3-progress-fill{
      height:100%; background:var(--marigold); transition: width .5s cubic-bezier(.2,.8,.2,1);
    }
    @media(max-width:820px){
      .p2v3-viewer .p2v3-step{ padding: 40px 28px 32px; min-height: 380px; }
      .p2v3-controls{ margin-top: 28px; }
    }

    /* ============================================================
       V3 — background animation, foreground copy
       ============================================================ */
    .p2v3-nav{
      display:flex; align-items:center; gap:24px;
      margin: 40px 0 48px;
      padding:14px 20px;
      background:var(--cream-2);
      border:1px solid rgba(15,61,46,.08);
      border-radius:var(--radius-md);
      box-shadow:0 1px 0 rgba(10,36,25,.04);
    }
    .p2v3-counter{display:flex; align-items:baseline; gap:8px; font-family:var(--font-mono);}
    .p2v3-n{font-size:22px; font-weight:800; color:var(--green-900); letter-spacing:.04em;}
    .p2v3-total{font-size:13px; font-weight:700; color:var(--green-700); opacity:.5;}
    .p2v3-live{
      margin-left:10px; display:inline-flex; align-items:center; gap:6px;
      padding:4px 10px; border-radius:999px; background:rgba(255,96,89,.08);
      font-size:9px; font-weight:700; letter-spacing:.22em; color:#C24A3F;
    }
    .p2v3-dot{width:6px; height:6px; border-radius:50%; background:#FF6059; animation:pulse 1.4s infinite;}

    .p2v3-strip{
      flex:1; display:grid; grid-template-columns:repeat(9, 1fr); gap:6px;
      min-width:0;
    }
    .p2v3-chip{
      position:relative; height:36px; border-radius:6px;
      background:rgba(15,61,46,.05);
      font-family:var(--font-mono); font-size:11px; font-weight:700;
      color:var(--green-800); letter-spacing:.06em;
      cursor:pointer; transition:background .3s, color .3s, transform .2s;
      display:flex; align-items:center; justify-content:center;
      border:1px solid transparent;
    }
    .p2v3-chip:hover{background:rgba(15,61,46,.1); transform:translateY(-1px);}
    .p2v3-chip.done{background:rgba(127,176,105,.18); color:var(--green-800);}
    .p2v3-chip.now{
      background:var(--green-800); color:var(--cream);
      box-shadow:0 4px 14px -4px rgba(10,36,25,.4);
    }
    .p2v3c-n{line-height:1;}

    /* Step cards */
    .p2v3-steps{display:flex; flex-direction:column; gap:18px;}
    .p2v3-step{
      position:relative;
      min-height: 360px;
      padding: 72px 56px 64px;
      border-radius: var(--radius-lg);
      overflow:hidden;
      background:
        linear-gradient(180deg, #FBF8F1 0%, #F4F0E7 100%);
      border:1px solid rgba(15,61,46,.08);
      box-shadow:
        0 1px 0 rgba(255,255,255,.6) inset,
        0 2px 0 rgba(10,36,25,.05),
        0 24px 48px -24px rgba(10,36,25,.12);
      transition: box-shadow .5s, transform .5s;
    }
    .p2v3-step.active{
      box-shadow:
        0 1px 0 rgba(255,255,255,.7) inset,
        0 3px 0 rgba(10,36,25,.08),
        0 36px 64px -24px rgba(10,36,25,.22);
    }

    /* Background animation layer — heavily softened */
    .p2v3-bg{
      position:absolute; inset:0;
      opacity:.22;
      filter: saturate(.55) blur(.3px);
      transition: opacity 1.2s cubic-bezier(.2,.8,.2,1), transform 1.2s cubic-bezier(.2,.8,.2,1);
      transform: scale(1.04);
      pointer-events:none;
    }
    .p2v3-bg .stage-svg{
      width:100%; height:100%; display:block;
    }
    .p2v3-step.active .p2v3-bg{
      opacity:.38;
      transform: scale(1);
    }

    /* Scrim to guarantee text legibility over any animation */
    .p2v3-scrim{
      position:absolute; inset:0; pointer-events:none;
      background:
        linear-gradient(105deg,
          rgba(251,248,241,.95) 0%,
          rgba(251,248,241,.82) 38%,
          rgba(251,248,241,.55) 62%,
          rgba(251,248,241,.35) 100%);
    }

    /* Foreground content */
    .p2v3-fg{
      position:relative; z-index:2;
      max-width: 640px;
    }
    .p2v3-step-head{
      display:flex; align-items:center; gap:16px;
      margin-bottom: 18px;
      flex-wrap:wrap;
    }
    .p2v3-step-n{
      font-family: var(--font-en);
      font-weight: 800;
      font-size: 56px;
      line-height: 1;
      color: var(--green-900);
      letter-spacing: -.04em;
      transition: color .4s;
    }
    .p2v3-step.active .p2v3-step-n{ color: var(--marigold-2); }
    .p2v3-step-rule{
      width:56px; height:1px; background:var(--green-800); opacity:.35;
      display:inline-block;
    }
    .p2v3-step-en{
      font-family: var(--font-mono);
      font-size: 11px; font-weight:700; letter-spacing:.28em;
      color: var(--green-800); opacity:.78;
    }
    .p2v3-step-sub{
      font-family: var(--font-mono);
      font-size: 10px; letter-spacing:.22em;
      color: var(--green-700); opacity:.5;
    }
    .p2v3-step-jp{
      font-family: var(--font-jp);
      font-weight: 900;
      font-size: clamp(32px, 3.4vw, 46px);
      line-height: 1.15;
      letter-spacing: -.02em;
      color: var(--green-900);
      margin: 0 0 18px;
    }
    .p2v3-step-desc{
      font-size: 15.5px;
      line-height: 1.95;
      color: var(--ink-2);
      max-width: 560px;
      font-weight:500;
    }

    @media(max-width: 820px){
      .p2v3-nav{ flex-direction:column; align-items:stretch; gap:14px; }
      .p2v3-strip{ grid-template-columns: repeat(9, 1fr); gap:4px; }
      .p2v3-step{ padding: 48px 32px 44px; min-height:300px; }
      .p2v3-step-n{ font-size: 42px; }
      .p2v3-step-jp{ font-size: 28px; }
      .p2v3-scrim{
        background: linear-gradient(180deg,
          rgba(251,248,241,.96) 0%,
          rgba(251,248,241,.82) 60%,
          rgba(251,248,241,.55) 100%);
      }
    }

    /* ============================================================
       Legacy v2 styles (kept for reference; layout hidden above)
       ============================================================ */
    .proc2-layout{display:grid;grid-template-columns:minmax(0,1.15fr) 1fr;gap:70px;align-items:start;}
    @media(max-width:960px){.proc2-layout{grid-template-columns:1fr;gap:30px;}}

    .proc2-sticky{position:sticky;top:100px;}
    @media(max-width:960px){.proc2-sticky{position:relative;top:0;}}

    .proc2-card{
      background:var(--cream-2);
      border-radius:var(--radius-lg);
      box-shadow:var(--shadow-25d);
      border:1px solid rgba(15,61,46,.1);
      overflow:hidden;
    }
    .p2-chrome{
      display:flex;justify-content:space-between;align-items:center;
      padding:12px 16px;background:#0F3D2E;
      border-bottom:1px solid rgba(10,36,25,.3);
    }
    .p2-tabs{display:flex;gap:4px;}
    .p2-tab{font-family:var(--font-mono);font-size:10px;font-weight:700;letter-spacing:.18em;color:rgba(184,212,168,.5);padding:5px 10px;border-radius:4px;}
    .p2-tab.on{background:rgba(127,176,105,.2);color:var(--green-200);}
    .p2-counter{display:flex;align-items:center;gap:10px;font-family:var(--font-mono);font-size:11px;color:var(--green-200);}
    .p2-n{font-size:16px;font-weight:700;color:var(--cream);}
    .p2-total{opacity:.5;}
    .p2-live{display:inline-flex;align-items:center;gap:6px;padding:3px 8px;border-radius:999px;background:rgba(255,96,89,.15);color:#FFB627;font-weight:700;font-size:9px;letter-spacing:.2em;}
    .p2-dot{width:6px;height:6px;border-radius:50%;background:#FF6059;animation:pulse 1.4s infinite;}

    .p2-stage{
      position:relative;aspect-ratio:16/10;width:100%;overflow:hidden;
      animation:p2in .5s cubic-bezier(.2,.8,.2,1);
    }
    @keyframes p2in{from{opacity:0;transform:scale(.98);}to{opacity:1;transform:none;}}
    .p2-stage .stage-svg{width:100%;height:100%;display:block;}

    .p2-label{
      position:absolute;left:16px;bottom:16px;
      background:rgba(10,36,25,.88);backdrop-filter:blur(6px);
      padding:10px 14px;border-radius:var(--radius-md);color:var(--cream);
      border:1px solid rgba(127,176,105,.25);
    }
    .p2l-n{font-family:var(--font-mono);font-size:9px;letter-spacing:.22em;color:var(--green-300);font-weight:700;}
    .p2l-jp{font-size:20px;font-weight:900;margin-top:2px;line-height:1.1;}
    .p2l-en{font-family:var(--font-mono);font-size:9px;letter-spacing:.2em;color:var(--green-200);margin-top:2px;}

    .p2-strip{display:grid;grid-template-columns:repeat(9,1fr);gap:0;border-top:1px solid rgba(15,61,46,.08);}
    .p2-chip{
      padding:10px 6px;text-align:left;position:relative;
      border-right:1px solid rgba(15,61,46,.08);
      opacity:.45;transition:opacity .3s,background .3s;cursor:pointer;
      min-width:0;
    }
    .p2-chip:last-child{border-right:none;}
    .p2-chip:hover{opacity:.8;}
    .p2-chip.done{opacity:.75;}
    .p2-chip.now{opacity:1;background:rgba(255,182,39,.1);}
    .p2-chip.now::after{content:"";position:absolute;left:0;right:0;bottom:0;height:2px;background:var(--marigold);}
    .p2c-n{display:block;font-family:var(--font-mono);font-size:9px;font-weight:700;color:var(--green-700);letter-spacing:.14em;}
    .p2-chip.now .p2c-n{color:var(--marigold-2);}
    .p2c-jp{display:block;font-size:12px;font-weight:800;color:var(--ink);margin-top:2px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;}

    /* right column steps */
    .proc2-steps{display:flex;flex-direction:column;gap:0;}
    .p2-step{
      padding:64px 0 56px;
      border-top:1px solid rgba(15,61,46,.1);
      opacity:.4;transition:opacity .5s;
    }
    .p2-step:first-child{border-top:none;padding-top:0;}
    .p2-step.active{opacity:1;}
    .p2s-head{display:flex;align-items:baseline;gap:12px;margin-bottom:10px;}
    .p2s-n{font-family:var(--font-en);font-weight:700;font-size:48px;color:var(--green-800);line-height:1;letter-spacing:-.03em;transition:color .4s;}
    .p2-step.active .p2s-n{color:var(--marigold);}
    .p2s-en{font-family:var(--font-mono);font-size:10px;letter-spacing:.22em;color:var(--green-700);font-weight:700;}
    .p2s-jp{font-size:30px;font-weight:900;letter-spacing:-.01em;line-height:1.18;margin-bottom:14px;}
    .p2s-desc{font-size:14.5px;color:var(--ink-2);line-height:1.9;max-width:520px;}
    .p2s-bar{margin-top:20px;height:2px;background:rgba(15,61,46,.1);border-radius:2px;overflow:hidden;max-width:520px;}
    .p2s-bar-fill{height:100%;background:var(--green-700);transition:width .6s;}
    .p2-step.active .p2s-bar-fill{background:var(--marigold);}

    @media(max-width:960px){
      .p2-step{padding:36px 0 28px;}
      .p2s-n{font-size:38px;}
      .p2s-jp{font-size:24px;}
    }
    /* ---- stage frame ---- */
    .stage-svg{width:100%; height:100%; display:block;}

    /* ---- stage animations ---- */
    @keyframes cursor01{0%{transform:translate(180px,280px);}25%{transform:translate(280px,180px);}50%{transform:translate(360px,220px);}75%{transform:translate(300px,310px);}100%{transform:translate(180px,280px);}}
    @keyframes tool02{0%,100%{transform:translate(0,0);}50%{transform:translate(140px,0);}}
    @keyframes spin02{to{transform:rotate(360deg);}}
    @keyframes chip{0%{opacity:1;transform:translate(0,0);}100%{opacity:0;transform:translate(var(--cx,10px),-30px);}}
    @keyframes tool03{0%{transform:translate(-140px,0);}50%{transform:translate(140px,0);}100%{transform:translate(-140px,0);}}
    @keyframes edm04{0%,100%{transform:translateY(0);}50%{transform:translateY(8px);}}
    @keyframes spark04{0%{opacity:1;transform:scale(.3);}60%{opacity:1;transform:scale(1.2);}100%{opacity:0;transform:scale(.8);}}
    @keyframes polish05{0%,100%{transform:translate(0,0) rotate(-4deg);}50%{transform:translate(150px,0) rotate(4deg);}}
    @keyframes probe06{0%{transform:translate(-120px,0);}25%{transform:translate(-60px,-20px);}50%{transform:translate(10px,-40px);}75%{transform:translate(80px,-20px);}100%{transform:translate(130px,0);}}
    @keyframes lift07a{0%,100%{transform:translateY(0);}50%{transform:translateY(-4px);}}
    @keyframes lift07b{0%,100%{transform:translateY(0);}50%{transform:translateY(-10px);}}
    @keyframes lift07c{0%,100%{transform:translateY(0);}50%{transform:translateY(-18px);}}
    @keyframes eject08{0%,10%{opacity:0;transform:translate(-40px,0);}40%{opacity:1;transform:translate(0,0);}90%,100%{opacity:1;transform:translate(10px,0);}}
    @keyframes stamp08{0%,40%{opacity:0;transform:scale(1.6);}60%,100%{opacity:1;transform:scale(1);}}
    @keyframes ship09{0%,100%{transform:translate(0,0);}50%{transform:translate(8px,-3px);}}
  `;
  document.head.appendChild(s);
}

ReactDOM.createRoot(document.getElementById('process-mount')).render(<ProcessSection/>);
