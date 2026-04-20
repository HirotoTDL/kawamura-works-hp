function About(){
  const rows = [
    {l_jp:"会社名", l_en:"Company", v_jp:"株式会社 河村製作所", v_en:"Kawamura Works Co., Ltd."},
    {l_jp:"設立", l_en:"Founded", v_jp:"昭和59年（1984年）10月1日", v_en:"October 1, 1984"},
    {l_jp:"代表取締役", l_en:"President", v_jp:"河村 良博", v_en:"Yoshihiro Kawamura"},
    {l_jp:"従業員数", l_en:"Employees", v_jp:"20名", v_en:"20"},
    {l_jp:"資本金", l_en:"Capital", v_jp:"1,000万円", v_en:"¥10,000,000"},
    {l_jp:"所在地", l_en:"Address", v_jp:"〒508-0001 岐阜県中津川市中津川2467-127", v_en:"2467-127 Nakatsugawa, Nakatsugawa-shi, Gifu 508-0001, JAPAN"},
    {l_jp:"電話番号", l_en:"Phone", v_jp:"0573-66-4429", v_en:"+81-573-66-4429"},
    {l_jp:"FAX番号", l_en:"Fax", v_jp:"0573-66-6737", v_en:"+81-573-66-6737"},
    {l_jp:"業務内容", l_en:"Business",
     v_jp:"プラスチック金型の設計・製造／専用機・精密部品加工／アルミ・MCナイロン・SUS等の切削加工",
     v_en:"Design & manufacture of plastic molds; custom machines & precision parts; cutting of aluminum, MC nylon, stainless steel."},
  ];
  return (
    <section id="about" className="about-sec">
      <div className="section-inner">
        <div className="section-head reveal">
          <div className="eyebrow">COMPANY · 会社概要</div>
          <h2 className="section-title">
            <span data-jp="会社概要" data-en="About the company">会社概要</span>
            <span className="en">COMPANY PROFILE</span>
          </h2>
        </div>
        <div className="about-split">
          <div className="about-table reveal">
            {rows.map((r,i) => (
              <div key={i} className="at-row">
                <div className="at-label">
                  <span className="at-n">{String(i+1).padStart(2,'0')}</span>
                  <span className="at-jp" data-jp={r.l_jp} data-en={r.l_en}>{r.l_jp}</span>
                </div>
                <div className="at-value" data-jp={r.v_jp} data-en={r.v_en}>{r.v_jp}</div>
              </div>
            ))}
          </div>
          <div className="about-figure reveal">
            <div className="af-photo">
              <img src="assets/company/gaikan-1.jpg" alt="河村製作所 本社工場 外観" loading="lazy"/>
              <div className="af-photo-tag">NAKATSUGAWA · GIFU</div>
            </div>
            <div className="af-card">
              <div className="af-num">1984<sub>—</sub></div>
              <div className="af-label" data-jp="創業以来、金型一筋。" data-en="Devoted to molds since 1984.">創業以来、金型一筋。</div>
            </div>
            <div className="af-card alt">
              <div className="af-num">20<sub>ppl</sub></div>
              <div className="af-label" data-jp="少数精鋭。手を動かせる20名。" data-en="Small and sharp—20 makers.">少数精鋭。手を動かせる20名。</div>
            </div>
            <div className="af-card">
              <div className="af-num">9<sub>steps</sub></div>
              <div className="af-label" data-jp="自社一貫の9工程体制。" data-en="Nine steps, all in-house.">自社一貫の9工程体制。</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

if(!document.getElementById('about-css')){
  const s=document.createElement('style');s.id='about-css';
  s.textContent=`
    .about-sec{background:var(--cream);}
    .about-split{display:grid;grid-template-columns:1.4fr 1fr;gap:48px;}
    @media(max-width:960px){.about-split{grid-template-columns:1fr;}}
    .about-table{background:var(--cream-2);border-radius:var(--radius-xl);padding:8px 28px;box-shadow:var(--shadow-25d);border:1px solid rgba(15,61,46,.08);}
    .at-row{display:grid;grid-template-columns:180px 1fr;gap:24px;padding:20px 0;border-bottom:1px dashed rgba(15,61,46,.15);align-items:baseline;}
    .at-row:last-child{border-bottom:none;}
    .at-label{display:flex;align-items:center;gap:10px;}
    .at-n{font-family:var(--font-mono);font-size:10px;color:var(--muted);font-weight:700;letter-spacing:.1em;}
    .at-jp{font-size:13px;font-weight:700;color:var(--green-800);letter-spacing:.04em;}
    .at-value{font-size:15px;color:var(--ink);font-weight:500;line-height:1.7;}
    .about-figure{display:flex;flex-direction:column;gap:16px;}
    .af-photo{position:relative;border-radius:var(--radius-lg);overflow:hidden;aspect-ratio:7/5;box-shadow:var(--shadow-25d);border:1px solid rgba(15,61,46,.08);}
    .af-photo img{width:100%;height:100%;object-fit:cover;display:block;transition:transform .8s cubic-bezier(.2,.8,.2,1);filter:saturate(.92);}
    .af-photo:hover img{transform:scale(1.04);}
    .af-photo-tag{
      position:absolute;left:14px;bottom:12px;
      padding:6px 10px;background:rgba(10,36,25,.72);color:var(--cream);
      font-family:var(--font-mono);font-size:9.5px;letter-spacing:.22em;font-weight:700;
      border-radius:4px;backdrop-filter:blur(6px);
    }
    .af-card{background:var(--green-800);color:var(--cream);border-radius:var(--radius-lg);padding:28px;box-shadow:var(--shadow-25d);}
    .af-card.alt{background:var(--marigold);color:var(--ink);}
    .af-num{font-family:var(--font-en);font-weight:700;font-size:64px;line-height:1;letter-spacing:-.03em;}
    .af-num sub{font-family:var(--font-en);font-size:14px;font-weight:500;letter-spacing:.1em;opacity:.7;margin-left:4px;vertical-align:baseline;}
    .af-label{font-size:14px;font-weight:600;margin-top:10px;opacity:.9;}
  `;document.head.appendChild(s);
}
ReactDOM.createRoot(document.getElementById('about-mount')).render(<About/>);
