const PRODUCTS = [
  {
    tag:"AUTO", tag_jp:"自動車",
    title_jp:"インパネ・ステアリング周辺",
    title_en:"Interior Trim & Steering",
    desc_jp:"安全と触感を両立するインパネ、ステアリング周辺の精密プラスチック部品用金型。寸法精度と表面品位を妥協しません。",
    desc_en:"Precision plastic molds for instrument panels and steering components—where safety, tactile feel, and dimensional rigor must coexist.",
    color:"#0F3D2E",
    imgs:["assets/products/auto1.jpg","assets/products/auto2.jpg","assets/products/auto3.jpg"],
  },
  {
    tag:"APPL", tag_jp:"家電・OA",
    title_jp:"家電・OA機器プラスチック部品",
    title_en:"Home Appliance & OA",
    desc_jp:"家電製品やオフィス機器の外装・内部部品。薄肉で大面積、歪みを許さない要求に応えます。二色成形型にも対応。",
    desc_en:"Housings and internal parts for home appliances and office equipment—thin walls, large surfaces, zero warp tolerated. Two-shot capable.",
    color:"#1B5E3F",
    imgs:["assets/products/appl1.jpg","assets/products/appl2.jpg","assets/products/appl3.jpg"],
  },
  {
    tag:"OFFICE", tag_jp:"オフィス家具",
    title_jp:"オフィスチェア部品",
    title_en:"Office Chair Components",
    desc_jp:"肘掛け、背もたれ、支持フレームなど、毎日触れるものの、心地よい質感と強度を。",
    desc_en:"Armrests, backrests, support frames—everyday touch points that must feel right and last for years.",
    color:"#2D7A52",
    imgs:["assets/products/office1.jpg","assets/products/office2.jpg"],
  },
  {
    tag:"CUSTOM", tag_jp:"特注品",
    title_jp:"専用機・精密部品加工",
    title_en:"Custom Machines & Parts",
    desc_jp:"アルミ、MCナイロン、SUS等の各種切削加工。少量・多品種のご相談もお気軽に。高周波・真空焼入れ、各種表面加工、メッキも対応。",
    desc_en:"Custom cutting of aluminum, MC nylon, stainless steel. Low volume, high variety—welcomed. Induction/vacuum hardening, surface treatment, plating.",
    color:"#3E9366",
    imgs:["assets/products/custom1.jpg","assets/products/custom2.jpg","assets/products/custom3.jpg"],
  },
];

function Products(){
  const [active, setActive] = React.useState(0);
  return (
    <section id="products" className="products-sec">
      <div className="section-inner">
        <div className="section-head reveal">
          <div className="eyebrow">PRODUCTS · 製品事例</div>
          <h2 className="section-title">
            <span data-jp="私たちの金型が 形にするもの" data-en="What our molds shape">私たちの金型が 形にするもの</span>
            <span className="en">WHAT OUR MOLDS SHAPE</span>
          </h2>
        </div>

        <div className="prod-split">
          <div className="prod-list">
            {PRODUCTS.map((p,i) => (
              <button key={i} className={`prod-row ${i===active?'on':''}`}
                      onClick={() => setActive(i)}
                      onMouseEnter={() => setActive(i)}>
                <div className="pr-tag" style={{'--c':p.color}}>{p.tag}</div>
                <div className="pr-title" data-jp={p.title_jp} data-en={p.title_en}>{p.title_jp}</div>
                <svg className="pr-arrow" viewBox="0 0 16 16" width="16" height="16">
                  <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.8" fill="none" strokeLinecap="round"/>
                </svg>
              </button>
            ))}
          </div>
          <div className="prod-stage">
            <div key={active} className="prod-card" style={{background:PRODUCTS[active].color}}>
              <div className="pc-bg pc-gallery">
                {(PRODUCTS[active].imgs||[]).slice(0,4).map((src,k) => (
                  <div key={k} className={`pc-gi pc-gi-${k}`}>
                    <img src={src} alt="" loading="lazy"/>
                  </div>
                ))}
              </div>
              <div className="pc-overlay"/>
              <div className="pc-content">
                <div className="pc-tag">{PRODUCTS[active].tag} · <span data-jp={PRODUCTS[active].tag_jp} data-en={PRODUCTS[active].tag}>{PRODUCTS[active].tag_jp}</span></div>
                <h3 className="pc-title" data-jp={PRODUCTS[active].title_jp} data-en={PRODUCTS[active].title_en}>
                  {PRODUCTS[active].title_jp}
                </h3>
                <p className="pc-desc" data-jp={PRODUCTS[active].desc_jp} data-en={PRODUCTS[active].desc_en}>
                  {PRODUCTS[active].desc_jp}
                </p>
                <div className="pc-meta">
                  <div><span className="pcm-l">CLASS</span><span className="pcm-v">50t–850t</span></div>
                  <div><span className="pcm-l">TYPE</span><span className="pcm-v">PRECISION</span></div>
                  <div><span className="pcm-l">STATUS</span><span className="pcm-v">ACTIVE</span></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ProductIllust({i}){
  if(i===0) return (
    <svg viewBox="0 0 400 300" style={{width:'100%',height:'100%'}}>
      <circle cx="200" cy="150" r="80" fill="none" stroke="#FAF8F2" strokeWidth="18" opacity=".18"/>
      <circle cx="200" cy="150" r="30" fill="#FAF8F2" opacity=".18"/>
      <rect x="195" y="150" width="10" height="50" fill="#FAF8F2" opacity=".18"/>
      <path d="M140 150 L260 150 M200 90 L200 210" stroke="#FAF8F2" strokeWidth="8" strokeLinecap="round" opacity=".2"/>
    </svg>
  );
  if(i===1) return (
    <svg viewBox="0 0 400 300" style={{width:'100%',height:'100%'}}>
      <rect x="100" y="80" width="200" height="140" rx="16" fill="none" stroke="#FAF8F2" strokeWidth="4" opacity=".25"/>
      <rect x="120" y="100" width="160" height="90" rx="4" fill="#FAF8F2" opacity=".15"/>
      <circle cx="150" cy="210" r="8" fill="#FAF8F2" opacity=".3"/>
      <circle cx="180" cy="210" r="8" fill="#FAF8F2" opacity=".3"/>
      <circle cx="210" cy="210" r="8" fill="#FAF8F2" opacity=".3"/>
    </svg>
  );
  if(i===2) return (
    <svg viewBox="0 0 400 300" style={{width:'100%',height:'100%'}}>
      <path d="M140 80 Q140 60 160 60 L240 60 Q260 60 260 80 L260 170 Q260 180 250 180 L150 180 Q140 180 140 170 Z" fill="#FAF8F2" opacity=".25"/>
      <rect x="195" y="180" width="10" height="50" fill="#FAF8F2" opacity=".25"/>
      <path d="M120 230 L280 230" stroke="#FAF8F2" strokeWidth="8" strokeLinecap="round" opacity=".25"/>
      <circle cx="140" cy="240" r="6" fill="#FAF8F2" opacity=".3"/>
      <circle cx="260" cy="240" r="6" fill="#FAF8F2" opacity=".3"/>
    </svg>
  );
  return (
    <svg viewBox="0 0 400 300" style={{width:'100%',height:'100%'}}>
      <rect x="100" y="100" width="80" height="100" rx="6" fill="#FAF8F2" opacity=".2"/>
      <rect x="200" y="80" width="60" height="120" rx="6" fill="#FAF8F2" opacity=".18"/>
      <rect x="280" y="140" width="40" height="60" rx="6" fill="#FAF8F2" opacity=".22"/>
      <circle cx="140" cy="150" r="12" fill="#FAF8F2" opacity=".35"/>
      <circle cx="230" cy="140" r="12" fill="#FAF8F2" opacity=".35"/>
    </svg>
  );
}

if(!document.getElementById('prod-css')){
  const s = document.createElement('style');
  s.id='prod-css';
  s.textContent = `
    .products-sec{background:var(--cream);}
    .prod-split{display:grid;grid-template-columns:1fr 1.15fr;gap:48px;align-items:start;}
    @media(max-width:960px){.prod-split{grid-template-columns:1fr;gap:28px;}}
    .prod-list{display:flex;flex-direction:column;border-top:1px solid rgba(15,61,46,.12);}
    .prod-row{
      display:grid;grid-template-columns:auto 1fr auto;gap:16px;align-items:center;
      padding:24px 8px;border-bottom:1px solid rgba(15,61,46,.12);
      text-align:left;transition:.3s;color:var(--ink-2);
    }
    .prod-row.on{color:var(--ink);padding-left:16px;background:rgba(15,61,46,.03);}
    .pr-tag{
      font-family:var(--font-mono);font-size:10px;font-weight:700;letter-spacing:.18em;
      padding:4px 10px;border-radius:4px;background:var(--c);color:var(--cream);
    }
    .pr-title{font-size:18px;font-weight:700;}
    .pr-arrow{opacity:.3;transition:.3s;}
    .prod-row.on .pr-arrow{opacity:1;transform:translateX(4px);color:var(--green-800);}
    .prod-stage{position:sticky;top:100px;max-width:600px;margin-left:auto;width:100%;}
    .prod-card{
      position:relative;aspect-ratio:5/4;border-radius:var(--radius-xl);
      overflow:hidden;box-shadow:var(--shadow-25d);
      animation:pcFade .5s ease-out;
    }
    @media(max-width:960px){.prod-stage{max-width:none;}}
    @keyframes pcFade{from{opacity:0;transform:scale(.98);}to{opacity:1;transform:scale(1);}}
    .pc-bg{position:absolute;inset:0;opacity:.9;}
    .pc-gallery{display:grid;gap:4px;padding:0;}
    .pc-gallery:has(.pc-gi-2){grid-template-columns:1fr 1fr;grid-template-rows:1fr 1fr;}
    .pc-gallery:has(.pc-gi-1):not(:has(.pc-gi-2)){grid-template-columns:1fr 1fr;grid-template-rows:1fr;}
    .pc-gi{position:relative;overflow:hidden;background:var(--cream);}
    .pc-gi::after{
      content:"";position:absolute;inset:0;pointer-events:none;
      background:linear-gradient(180deg, rgba(10,36,25,0) 0%, rgba(10,36,25,.06) 100%);
    }
    .pc-gi-0{grid-column:1;grid-row:1 / span 2;}
    .pc-gi-1{grid-column:2;grid-row:1;}
    .pc-gi-2{grid-column:2;grid-row:2;}
    .pc-gi img{width:100%;height:100%;object-fit:cover;display:block;filter:saturate(.96) contrast(1.02);transition:transform 1.2s cubic-bezier(.2,.8,.2,1);}
    .prod-card:hover .pc-gi-0 img{transform:scale(1.04);}
    .pc-overlay{
      position:absolute;inset:0;pointer-events:none;
      background:linear-gradient(to top, rgba(10,36,25,.72) 0%, rgba(10,36,25,.35) 45%, rgba(10,36,25,.12) 100%);
    }
    .pc-content{
      position:absolute;inset:0;padding:28px 30px;z-index:2;
      display:flex;flex-direction:column;justify-content:flex-end;
      color:var(--cream);
    }
    .pc-tag{font-family:var(--font-mono);font-size:10.5px;font-weight:700;letter-spacing:.2em;opacity:.9;margin-bottom:8px;}
    .pc-title{font-size:clamp(22px,2.4vw,28px);font-weight:900;line-height:1.2;margin-bottom:10px;letter-spacing:-.01em;}
    .pc-desc{font-size:13px;line-height:1.75;opacity:.92;max-width:440px;margin-bottom:18px;display:-webkit-box;-webkit-line-clamp:3;-webkit-box-orient:vertical;overflow:hidden;}
    .pc-meta{display:flex;gap:22px;padding-top:12px;border-top:1px solid rgba(244,240,232,.2);}
    .pc-meta > div{display:flex;flex-direction:column;gap:3px;}
    .pcm-l{font-family:var(--font-mono);font-size:9px;letter-spacing:.22em;opacity:.7;font-weight:700;}
    .pcm-v{font-family:var(--font-mono);font-size:12px;font-weight:700;letter-spacing:.06em;}
  `;
  document.head.appendChild(s);
}

ReactDOM.createRoot(document.getElementById('products-mount')).render(<Products/>);
