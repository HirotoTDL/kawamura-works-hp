function Recruit(){
  return (
    <section id="recruit" className="rec-sec">
      <div className="section-inner">
        <div className="rec-card reveal">
          <div className="rec-left">
            <div className="eyebrow on-dark">RECRUIT · 採用情報</div>
            <h2 className="rec-title">
              <span data-jp="手で考え、" data-en="Think with your hands.">手で考え、</span><br/>
              <span data-jp="機械と話せる人へ。" data-en="Talk to the machines.">機械と話せる人へ。</span>
            </h2>
            <p data-jp="金型は、図面どおりには動かない。職人の目と手で、初めて形になる。若手が育ち、ベテランが磨き続ける。そんな現場を一緒に育ててくれる人を探しています。"
               data-en="Molds never obey the drawing alone. They become real through the craftsman's eye and hand. We're looking for people who want to grow alongside a workshop where youth and experience sharpen each other.">
              金型は、図面どおりには動かない。職人の目と手で、初めて形になる。若手が育ち、ベテランが磨き続ける。そんな現場を一緒に育ててくれる人を探しています。
            </p>
            <div className="rec-ctas">
              <a href="#contact" className="hero-cta-primary" style={{background:'var(--marigold)',color:'var(--ink)',boxShadow:'0 3px 0 var(--marigold-2),0 12px 24px -6px rgba(0,0,0,.3)'}}>
                <span data-jp="採用についてお問い合せ" data-en="Contact us about careers">採用についてお問い合せ</span>
                <svg viewBox="0 0 16 16" width="14" height="14"><path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.8" fill="none" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </a>
            </div>
          </div>
          <div className="rec-right">
            <div className="rec-stats">
              <div className="rs-stat"><div className="rs-n">20<sub>名</sub></div><div className="rs-l" data-jp="少数精鋭" data-en="SMALL TEAM">少数精鋭</div></div>
              <div className="rs-stat"><div className="rs-n">30<sub>代</sub></div><div className="rs-l" data-jp="平均年齢" data-en="AVG AGE">平均年齢</div></div>
              <div className="rs-stat"><div className="rs-n">9<sub>工程</sub></div><div className="rs-l" data-jp="幅広い経験" data-en="BROAD EXP.">幅広い経験</div></div>
              <div className="rs-stat"><div className="rs-n">100%<sub></sub></div><div className="rs-l" data-jp="自社内製" data-en="IN-HOUSE">自社内製</div></div>
            </div>
            <div className="rec-chips">
              {[{jp:"未経験OK",en:"NO EXP. OK"},{jp:"岐阜・中津川",en:"GIFU LOCAL"},{jp:"CAD／CAM研修あり",en:"CAD/CAM TRAINING"},{jp:"長期腰を据えて",en:"LONG-TERM"}].map((c,i)=>(
                <span key={i} className="rec-chip" data-jp={c.jp} data-en={c.en}>{c.jp}</span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
if(!document.getElementById('rec-css')){
  const s=document.createElement('style');s.id='rec-css';
  s.textContent=`
    .rec-sec{background:var(--cream);}
    .rec-card{background:var(--green-800);color:var(--cream);border-radius:var(--radius-xl);padding:60px;display:grid;grid-template-columns:1.3fr 1fr;gap:48px;align-items:center;box-shadow:var(--shadow-25d);position:relative;overflow:hidden;}
    .rec-card::before{content:"RECRUIT";position:absolute;right:-30px;bottom:-40px;font-family:var(--font-en);font-weight:700;font-size:200px;color:rgba(244,240,232,.04);letter-spacing:-.05em;pointer-events:none;}
    @media(max-width:860px){.rec-card{grid-template-columns:1fr;padding:36px;}}
    .rec-title{font-size:clamp(34px,4.5vw,56px);font-weight:900;line-height:1.15;margin:16px 0 24px;letter-spacing:-.01em;}
    .rec-left p{color:var(--green-100);line-height:1.9;margin-bottom:28px;max-width:500px;font-size:15px;}
    .rec-stats{display:grid;grid-template-columns:1fr 1fr;gap:14px;margin-bottom:24px;position:relative;z-index:2;}
    .rs-stat{background:rgba(244,240,232,.06);border:1px solid rgba(244,240,232,.1);padding:20px;border-radius:var(--radius-md);}
    .rs-n{font-family:var(--font-en);font-weight:700;font-size:40px;line-height:1;color:var(--marigold);letter-spacing:-.02em;}
    .rs-n sub{font-size:13px;color:var(--cream);opacity:.8;font-weight:500;margin-left:4px;vertical-align:baseline;}
    .rs-l{font-family:var(--font-mono);font-size:10px;letter-spacing:.2em;color:var(--green-300);font-weight:700;margin-top:8px;}
    .rec-chips{display:flex;flex-wrap:wrap;gap:8px;}
    .rec-chip{padding:6px 12px;background:rgba(244,240,232,.08);border:1px solid rgba(244,240,232,.2);border-radius:999px;font-size:12px;font-weight:600;}
  `;document.head.appendChild(s);
}
ReactDOM.createRoot(document.getElementById('recruit-mount')).render(<Recruit/>);
