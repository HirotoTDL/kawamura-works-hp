const CLIENTS = [
  "株式会社イケックス工業","株式会社エス・ケイ・ワイ","株式会社ＮＳＰ ＫＳ","株式会社黒田製作所",
  "株式会社セントラルファインツール","中央金型株式会社","辻精機株式会社","南木曽発条株式会社",
  "有限会社プラモ","三菱電機株式会社 中津川製作所","ワイ・ケー・ピー工業株式会社",
];

function Clients(){
  return (
    <section id="clients" className="clients-sec">
      <div className="section-inner">
        <div className="section-head reveal">
          <div className="eyebrow">CLIENTS · 主な取引先</div>
          <h2 className="section-title">
            <span data-jp="信頼の、長いお付き合い。" data-en="Partners we build the long road with.">信頼の、長いお付き合い。</span>
            <span className="en">TRUSTED CLIENTS · 五十音順</span>
          </h2>
        </div>
        <div className="clients-grid reveal">
          {CLIENTS.map((c,i) => (
            <div key={i} className="client-tile">
              <div className="ct-mark">
                <svg viewBox="0 0 24 24" width="16" height="16"><circle cx="12" cy="12" r="4" fill="currentColor"/><circle cx="12" cy="12" r="10" fill="none" stroke="currentColor" strokeWidth="1.5" opacity=".4"/></svg>
              </div>
              <div className="ct-name">{c}</div>
              <div className="ct-arrow">
                <svg viewBox="0 0 16 16" width="14" height="14"><path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.6" fill="none" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

if(!document.getElementById('cli-css')){
  const s=document.createElement('style');s.id='cli-css';
  s.textContent=`
    .clients-sec{background:var(--paper);}
    .clients-grid{display:grid;grid-template-columns:repeat(auto-fill,minmax(280px,1fr));gap:10px;}
    .client-tile{
      display:grid;grid-template-columns:auto 1fr auto;gap:14px;align-items:center;
      padding:22px 20px;background:var(--cream-2);border-radius:var(--radius-md);
      border:1px solid rgba(15,61,46,.08);box-shadow:0 2px 0 rgba(10,36,25,.04);
      transition:.25s;
    }
    .client-tile:hover{background:var(--green-800);color:var(--cream);transform:translateY(-2px);}
    .ct-name{font-size:14px;font-weight:700;}
    .ct-mark{color:var(--green-700);opacity:.55;display:flex;}
    .client-tile:hover .ct-mark{color:var(--marigold);opacity:1;}
    .ct-arrow{color:var(--green-700);opacity:.35;transition:.25s;}
    .client-tile:hover .ct-arrow{color:var(--marigold);opacity:1;transform:translateX(3px);}
  `;document.head.appendChild(s);
}
ReactDOM.createRoot(document.getElementById('clients-mount')).render(<Clients/>);
