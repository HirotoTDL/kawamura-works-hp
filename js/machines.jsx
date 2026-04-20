/* ============================================================
   MACHINES — 元サイト本体 + 設備増加ニュース + 保有機一覧画像
   (machinelist.jpg) の3ソースから確認できた実機データのみを
   構造化して掲載。写真が確認できる機械には写真、他はテキスト。
   ============================================================ */

/* Featured (写真あり優先の注目機) */
const MACHINES = [
  {cat:"マシニング", cat_en:"MACHINING", items:[
    {name:"牧野フライス製作所 V33",        spec:"高速マシニングセンター",    img:"assets/machines/machine2.jpg"},
    {name:"MAKINO D300",                  spec:"5軸高速マシニングセンター",  img:"assets/machines/makino_d300.png", since:"2021"},
    {name:"高速マシニングセンター V77",    spec:"牧野フライス製作所",         img:"assets/machines/v77l.png"},
    {name:"MAKINO V33i",                  spec:"グラファイト加工機",         since:"2023"},
  ]},
  {cat:"放電加工", cat_en:"EDM", items:[
    {name:"三菱 EA 12V ADVANCE",          spec:"形彫放電加工機",             img:"assets/machines/machine1.jpg"},
    {name:"ソディック AQ75L",             spec:"放電加工機",                 since:"2023"},
    {name:"ソディック AQ550L",            spec:"ワイヤー放電加工機"},
  ]},
  {cat:"ダイスポッティング", cat_en:"DIE SPOTTING", items:[
    {name:"アサイ産業 DSP1300",           spec:"ダイスポッティングプレス",   img:"assets/machines/machine3.jpg"},
  ]},
  {cat:"測定", cat_en:"METROLOGY", items:[
    {name:"キーエンス XM-1200",           spec:"画像寸法測定機",             img:"assets/machines/keyence.png"},
    {name:"3D 測定機",                    spec:"三次元寸法測定",             since:"2020"},
  ]},
];

/* 保有機一覧（machinelist.jpg を構造化データに書き起こし） */
const FULL_LIST = [
  { group:"マシニング / NC加工", items:[
    {name:"5軸高速マシニングセンター", maker:"牧野フライス製作所", model:"D300", qty:1, note:"2021年導入"},
    {name:"高速マシニングセンター",     maker:"牧野フライス製作所", model:"V33",  qty:1},
    {name:"高速マシニングセンター",     maker:"牧野フライス製作所", model:"V56",  qty:2},
    {name:"高速マシニングセンター",     maker:"牧野フライス製作所", model:"V77",  qty:1},
    {name:"NCフライス盤",              maker:"静岡鐵工所",          model:"B-10VP", qty:2},
    {name:"NCフライス盤",              maker:"静岡鐵工所",          model:"VHR-AP", qty:1},
    {name:"NCフライス盤",              maker:"静岡鐵工所",          model:"VHR-AF", qty:1},
    {name:"汎用フライス盤",             maker:"静岡鐵工所",          model:"VHR-A",  qty:2},
  ]},
  { group:"放電・ワイヤー加工", items:[
    {name:"放電加工機",                maker:"ソディック",           model:"A35",          qty:1},
    {name:"放電加工機",                maker:"ソディック",           model:"AQ55L",        qty:1},
    {name:"放電加工機",                maker:"三菱電機",             model:"EA 12V ADVANCE", qty:1},
    {name:"ワイヤー放電加工機",        maker:"ソディック",           model:"AQ550L",       qty:1},
    {name:"ワイヤー放電加工機",        maker:"三菱電機",             model:"U53",          qty:1},
  ]},
  { group:"研磨・仕上・スポッティング", items:[
    {name:"ダイスポッティングプレス",  maker:"アサイ産業",           model:"DSP1300", qty:1},
    {name:"成形研磨機",                maker:"ナガセ インテグレックス", model:"—",     qty:1},
    {name:"平面研磨機",                maker:"黒田精工",             model:"—",        qty:2},
  ]},
  { group:"旋盤・ボール盤", items:[
    {name:"旋盤",                     maker:"豊和産業",             model:"—",        qty:1},
    {name:"ラジアルボール盤",         maker:"IKEDA",               model:"—",        qty:2},
    {name:"ボール盤",                 maker:"吉良鉄工所",           model:"—",        qty:4},
  ]},
  { group:"CAD / CAM", items:[
    {name:"CAD/CAM",                   maker:"日本ユニシス",         model:"CAD MEISTER", qty:2},
    {name:"CAD/CAM",                   maker:"セスクワ",             model:"WorkNC",      qty:4},
    {name:"CAD/CAM",                   maker:"DATE DESIGN",        model:"Surfcam",     qty:1},
    {name:"CAD/CAM",                   maker:"GODO ソリューション",   model:"NASUKA CAD",  qty:6},
  ]},
  { group:"測定", items:[
    {name:"3D測定機",                 maker:"KEYENCE",             model:"XM-1200",     qty:1},
  ]},
];

function Machines(){
  const [cat, setCat] = React.useState(0);
  const totalUnits = FULL_LIST.reduce((s,g)=>s+g.items.reduce((x,it)=>x+it.qty,0),0);
  const totalKinds = FULL_LIST.reduce((s,g)=>s+g.items.length,0);

  return (
    <section id="machines" className="machines-sec">
      <div className="section-inner">
        <div className="section-head reveal">
          <div className="eyebrow">MACHINES · 保有設備</div>
          <h2 className="section-title">
            <span data-jp="技術を支える 鋼鉄の仲間たち" data-en="The steel companions behind the craft">技術を支える 鋼鉄の仲間たち</span>
            <span className="en">EQUIPMENT · 50T–850T</span>
          </h2>
          <p className="lede">
            <span data-jp="マシニング、放電、ワイヤー、研磨、ダイスポッティング、測定。金型づくりに必要な全てを社内に揃え、一貫して素早く、精度高く仕上げます。"
                  data-en="Milling, EDM, wire, grinding, die-spotting, metrology. Every machine a mold needs is under one roof—for fast, precise, in-house craftsmanship.">
              マシニング、放電、ワイヤー、研磨、ダイスポッティング、測定。金型づくりに必要な全てを社内に揃え、一貫して素早く、精度高く仕上げます。
            </span>
          </p>
        </div>

        {/* ----- Featured machines ----- */}
        <div className="mac-tabs reveal">
          {MACHINES.map((c,i) => (
            <button key={i} className={`mac-tab ${i===cat?'on':''}`} onClick={() => setCat(i)}>
              <span className="mt-n">{String(i+1).padStart(2,'0')}</span>
              <span className="mt-jp" data-jp={c.cat} data-en={c.cat_en}>{c.cat}</span>
              <span className="mt-en">{c.cat_en}</span>
            </button>
          ))}
        </div>

        <div className="mac-grid">
          {MACHINES[cat].items.map((m,i) => (
            <div key={cat+'-'+i} className={`mac-card reveal ${m.img?'has-photo':'no-photo'}`}>
              <div className="mc-visual">
                {m.img ? (
                  <>
                    <img src={m.img} alt={m.name} loading="lazy" className="mc-photo"/>
                    <div className="mc-visual-tint"/>
                  </>
                ) : (
                  <div className="mc-placeholder">
                    <svg className="mc-ph-icon" viewBox="0 0 60 60" aria-hidden="true">
                      <rect x="8" y="30" width="44" height="22" rx="2" fill="none" stroke="currentColor" strokeWidth="1.3" opacity=".55"/>
                      <rect x="18" y="14" width="24" height="18" fill="none" stroke="currentColor" strokeWidth="1.3" opacity=".55"/>
                      <circle cx="30" cy="41" r="4.5" fill="none" stroke="currentColor" strokeWidth="1.3"/>
                      <circle cx="30" cy="41" r="1.5" fill="currentColor"/>
                    </svg>
                    <span className="mc-ph-label">PHOTO — TBC</span>
                  </div>
                )}
                {m.since && <div className="mc-since">SINCE {m.since}</div>}
              </div>
              <div className="mc-body">
                <div className="mc-spec">{m.spec}</div>
                <div className="mc-name">{m.name}</div>
              </div>
              <div className="mc-num">{String(i+1).padStart(2,'0')}</div>
            </div>
          ))}
        </div>

        {/* ----- Full equipment list (structured HTML) ----- */}
        <div className="mac-list reveal">
          <div className="mac-list-top">
            <div className="mac-list-eyebrow">FULL EQUIPMENT LIST · 保有機一覧</div>
            <h3 className="mac-list-ttl"
                data-jp="社内に揃う 加工から測定までの全工程"
                data-en="Every step in one workshop">
              社内に揃う 加工から測定までの全工程
            </h3>
            <div className="mac-list-stats">
              <div><span className="mls-n">{totalKinds}</span><span className="mls-l">機種</span></div>
              <div className="mls-rule"/>
              <div><span className="mls-n">{totalUnits}</span><span className="mls-l">台</span></div>
              <div className="mls-rule"/>
              <div><span className="mls-n">{FULL_LIST.length}</span><span className="mls-l">カテゴリ</span></div>
            </div>
          </div>

          <div className="mac-list-groups">
            {FULL_LIST.map((g,gi) => (
              <div key={gi} className="mlg">
                <div className="mlg-head">
                  <span className="mlg-idx">{String(gi+1).padStart(2,'0')}</span>
                  <span className="mlg-name">{g.group}</span>
                  <span className="mlg-count">{g.items.reduce((s,it)=>s+it.qty,0)} 台</span>
                </div>
                <ul className="mlg-items">
                  {g.items.map((it,ii) => (
                    <li key={ii} className="mli">
                      <span className="mli-name">{it.name}</span>
                      <span className="mli-maker">{it.maker}</span>
                      <span className="mli-model">{it.model}</span>
                      <span className="mli-qty">× {it.qty}</span>
                      {it.note && <span className="mli-note">{it.note}</span>}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="mac-note reveal">
          <svg viewBox="0 0 16 16" width="16" height="16"><circle cx="8" cy="8" r="7" fill="none" stroke="currentColor" strokeWidth="1.5"/><path d="M8 4v5M8 11v.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/></svg>
          <span data-jp="※ 機械名・形式は元サイトおよび設備増加のお知らせに基づく実績値です。最新情報はお問い合わせください。"
                data-en="※ Machine names/models are based on the official site and equipment-update news. Contact us for the latest list.">
            ※ 機械名・形式は元サイトおよび設備増加のお知らせに基づく実績値です。最新情報はお問い合わせください。
          </span>
        </div>
      </div>
    </section>
  );
}

if(!document.getElementById('mac-css')){
  const s = document.createElement('style');
  s.id='mac-css';
  s.textContent = `
    .machines-sec{background:var(--paper);}

    /* Featured cards */
    .mac-tabs{display:flex;gap:8px;margin-bottom:40px;flex-wrap:wrap;}
    .mac-tab{
      display:flex;align-items:center;gap:10px;
      padding:10px 18px;border-radius:999px;
      background:var(--cream-2);
      border:1.5px solid rgba(15,61,46,.15);
      font-size:13px;font-weight:600;color:var(--ink-2);
      transition:.25s;
    }
    .mac-tab.on{background:var(--green-800);color:var(--cream);border-color:var(--green-800);box-shadow:0 2px 0 var(--green-900);}
    .mt-n{font-family:var(--font-mono);font-size:10px;opacity:.6;}
    .mt-en{font-family:var(--font-mono);font-size:10px;letter-spacing:.16em;opacity:.6;}
    .mac-grid{display:grid;grid-template-columns:repeat(auto-fill,minmax(260px,1fr));gap:16px;margin-bottom:48px;}
    .mac-card{
      background:var(--cream-2);border-radius:var(--radius-lg);
      box-shadow:var(--shadow-25d);padding:0;overflow:hidden;
      border:1px solid rgba(15,61,46,.08);
      position:relative;
      transition:transform .3s,box-shadow .3s;
    }
    .mac-card:hover{transform:translateY(-4px);box-shadow:0 4px 0 rgba(10,36,25,.08),0 16px 32px -8px rgba(10,36,25,.2);}
    .mc-visual{
      position:relative;aspect-ratio:1.3/1;overflow:hidden;
      background:linear-gradient(180deg, #0c2a1f, #0F3D2E);
    }
    .mc-photo{
      position:absolute;inset:0;width:100%;height:100%;object-fit:cover;
      filter:saturate(.9) contrast(1.03);
      transition:transform .6s cubic-bezier(.2,.8,.2,1);
    }
    .mac-card:hover .mc-photo{transform:scale(1.05);}
    .mc-visual-tint{
      position:absolute;inset:0;pointer-events:none;
      background:
        linear-gradient(180deg, rgba(10,36,25,0) 55%, rgba(10,36,25,.35) 100%),
        radial-gradient(circle at 50% 50%, transparent 50%, rgba(10,36,25,.18) 100%);
    }
    .mc-placeholder{
      position:absolute;inset:0;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:10px;
      color:rgba(184,212,168,.55);
      background:
        radial-gradient(circle at 50% 45%, rgba(127,176,105,.14), transparent 60%),
        repeating-linear-gradient(135deg, transparent 0 14px, rgba(127,176,105,.05) 14px 15px);
    }
    .mc-ph-icon{width:40%;height:auto;max-width:110px;}
    .mc-ph-label{font-family:var(--font-mono);font-size:9px;letter-spacing:.3em;font-weight:700;color:rgba(184,212,168,.5);}
    .mc-since{
      position:absolute;top:12px;left:12px;
      padding:4px 8px;border-radius:999px;
      background:rgba(255,182,39,.92);color:var(--green-900);
      font-family:var(--font-mono);font-size:9px;letter-spacing:.18em;font-weight:800;
    }
    .mc-body{padding:16px 18px 20px;border-top:1px solid rgba(15,61,46,.08);}
    .mc-spec{font-family:var(--font-mono);font-size:10px;letter-spacing:.18em;color:var(--green-700);font-weight:700;margin-bottom:6px;}
    .mc-name{font-size:15px;font-weight:700;color:var(--ink);}
    .mc-num{position:absolute;top:12px;right:14px;font-family:var(--font-mono);font-size:10px;color:var(--muted);font-weight:700;}

    /* Full equipment list — structured */
    .mac-list{
      background:var(--cream-2);border-radius:var(--radius-xl);
      padding:40px 44px;border:1px solid rgba(15,61,46,.08);
      box-shadow:var(--shadow-25d);margin-top:8px;
    }
    .mac-list-top{
      display:grid;grid-template-columns:1fr auto;gap:24px;
      padding-bottom:24px;border-bottom:1px dashed rgba(15,61,46,.2);
      margin-bottom:28px;align-items:end;
    }
    @media(max-width:720px){.mac-list{padding:28px 22px;} .mac-list-top{grid-template-columns:1fr;}}
    .mac-list-eyebrow{
      font-family:var(--font-mono);font-size:11px;letter-spacing:.28em;
      color:var(--green-700);font-weight:700;
    }
    .mac-list-ttl{font-size:clamp(24px,2.6vw,34px);font-weight:900;color:var(--green-900);margin-top:8px;letter-spacing:-.01em;line-height:1.25;}
    .mac-list-stats{
      display:flex;gap:18px;align-items:center;white-space:nowrap;
      background:var(--green-900);color:var(--cream);
      padding:14px 22px;border-radius:var(--radius-md);
    }
    .mac-list-stats > div{display:flex;flex-direction:column;align-items:center;min-width:56px;}
    .mls-n{font-family:var(--font-en);font-size:30px;font-weight:700;line-height:1;color:var(--marigold);letter-spacing:-.02em;}
    .mls-l{font-family:var(--font-mono);font-size:9px;letter-spacing:.22em;color:var(--green-200);font-weight:700;margin-top:5px;}
    .mls-rule{width:1px;height:28px;background:rgba(244,240,232,.25);min-width:1px;}

    .mac-list-groups{display:grid;grid-template-columns:repeat(2,1fr);gap:28px 40px;}
    @media(max-width:860px){.mac-list-groups{grid-template-columns:1fr;gap:24px;}}
    .mlg{}
    .mlg-head{
      display:flex;align-items:baseline;gap:12px;
      padding-bottom:10px;margin-bottom:8px;
      border-bottom:1px solid rgba(15,61,46,.15);
    }
    .mlg-idx{
      font-family:var(--font-mono);font-size:11px;font-weight:700;letter-spacing:.14em;
      color:var(--marigold-2);background:rgba(255,182,39,.12);
      padding:3px 8px;border-radius:4px;
    }
    .mlg-name{font-size:15px;font-weight:800;color:var(--green-900);letter-spacing:-.01em;flex:1;}
    .mlg-count{font-family:var(--font-mono);font-size:10px;letter-spacing:.18em;color:var(--muted);font-weight:700;}
    .mlg-items{list-style:none;padding:0;margin:0;display:flex;flex-direction:column;}
    .mli{
      display:grid;grid-template-columns:minmax(120px,1.1fr) minmax(110px,1fr) minmax(100px,1fr) auto;
      gap:12px;align-items:baseline;
      padding:10px 0;border-bottom:1px dashed rgba(15,61,46,.1);
      font-size:13px;
    }
    .mli:last-child{border-bottom:none;}
    .mli-name{font-weight:700;color:var(--ink);}
    .mli-maker{font-size:12.5px;color:var(--ink-2);}
    .mli-model{font-family:var(--font-mono);font-size:11.5px;letter-spacing:.04em;color:var(--green-700);font-weight:700;}
    .mli-qty{font-family:var(--font-mono);font-size:11.5px;font-weight:700;color:var(--green-900);text-align:right;min-width:36px;}
    .mli-note{
      grid-column:1 / -1;
      font-family:var(--font-mono);font-size:10px;letter-spacing:.18em;color:var(--marigold-2);font-weight:700;
      margin-top:-4px;
    }
    @media(max-width:640px){
      .mli{grid-template-columns:1fr auto;row-gap:2px;column-gap:8px;}
      .mli-name{grid-column:1;grid-row:1;}
      .mli-qty{grid-column:2;grid-row:1;}
      .mli-maker{grid-column:1 / -1;grid-row:2;font-size:12px;color:var(--muted);}
      .mli-model{grid-column:1 / -1;grid-row:3;}
    }

    .mac-note{display:flex;align-items:center;gap:8px;color:var(--muted);font-size:12.5px;margin-top:24px;line-height:1.6;}
  `;
  document.head.appendChild(s);
}

ReactDOM.createRoot(document.getElementById('machines-mount')).render(<Machines/>);
