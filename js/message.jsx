function Message(){
  return (
    <section id="message" className="msg-sec">
      <div className="section-inner">
        <div className="msg-grid">
          <div className="msg-left reveal">
            <div className="eyebrow on-dark">MESSAGE · 代表より</div>
            <h2 className="msg-title">
              <span data-jp="当たり前のことを" data-en="The ordinary">当たり前のことを</span><br/>
              <span className="underline" data-jp="当たり前に" data-en="done ordinarily well">当たり前に</span>
            </h2>
            <div className="msg-body">
              <p data-jp="一人ひとりの力が集まって、全員の技術力が集結したものづくり。弊社の最大の武器は、若き社員達の行動力と、それを支える確かな技術力・クラフトマンシップです。"
                 data-en="Every person's force, gathered; every skill, converged into one making. Our greatest weapon is the drive of young employees, backed by honest technical ability and craftsmanship.">
                一人ひとりの力が集まって、全員の技術力が集結したものづくり。弊社の最大の武器は、若き社員達の行動力と、それを支える確かな技術力・クラフトマンシップです。
              </p>
              <p data-jp="日々進化する製品品質を、最新鋭のマシンとCAD/CAMを以って、近代のニーズに対応した高品質（高技術）の型作りを目指しています。"
                 data-en="With state-of-the-art machines and CAD/CAM, we pursue molds that answer modern demands with modern quality.">
                日々進化する製品品質を、最新鋭のマシンとCAD/CAMを以って、近代のニーズに対応した高品質（高技術）の型作りを目指しています。
              </p>
              <p data-jp="新しく製作する金型は勿論、数年経った金型であっても、アフターフォローは昼夜を問わず対応。良い製品を短納期で、そしてリーズナブルに——お客様の立場に立って、敏速に対応するという当たり前の事を、当たり前に行える企業づくりに精進しております。"
                 data-en="Whether a brand-new tool or one years old, after-support runs day and night. Good product, short lead time, fair price—to stand in our customer's shoes and respond quickly. We strive to be a company that simply does the ordinary, ordinarily well.">
                新しく製作する金型は勿論、数年経った金型であっても、アフターフォローは昼夜を問わず対応。良い製品を短納期で、そしてリーズナブルに——お客様の立場に立って、敏速に対応するという当たり前の事を、当たり前に行える企業づくりに精進しております。
              </p>
            </div>
            <div className="msg-sign">
              <div className="sign-label" data-jp="代表取締役" data-en="President & CEO">代表取締役</div>
              <div className="sign-name">河村 良博 <span>— Yoshihiro Kawamura</span></div>
            </div>
          </div>
          <div className="msg-right reveal">
            <div className="msg-portrait">
              <div className="mp-frame">
                <div className="mp-photo">
                  <img src="assets/company/president.jpg" alt="代表取締役 河村 良博" loading="lazy" className="mp-photo-img"/>
                </div>
                <div className="mp-plate">
                  <div className="mp-since">SINCE 1984</div>
                  <div className="mp-co">KAWAMURA<br/>WORKS CO., LTD.</div>
                </div>
              </div>
              <div className="mp-seal">✦</div>
              <div className="mp-caption" data-jp="代表取締役 河村 良博 · 作業風景" data-en="Yoshihiro Kawamura, President · at the bench">代表取締役 河村 良博 · 作業風景</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

if(!document.getElementById('msg-css')){
  const s=document.createElement('style');s.id='msg-css';
  s.textContent=`
    .msg-sec{background:var(--green-900);color:var(--cream);position:relative;overflow:hidden;}
    .msg-sec::before{content:"";position:absolute;inset:0;background:radial-gradient(circle at 20% 50%, rgba(127,176,105,.15), transparent 50%);}
    .msg-grid{display:grid;grid-template-columns:1.3fr 1fr;gap:80px;align-items:center;position:relative;}
    @media(max-width:960px){.msg-grid{grid-template-columns:1fr;gap:40px;}}
    .msg-title{font-size:clamp(40px,5.5vw,72px);font-weight:900;line-height:1.1;margin:16px 0 36px;letter-spacing:-.02em;}
    .msg-title .underline{position:relative;display:inline-block;}
    .msg-title .underline::after{content:"";position:absolute;left:0;right:0;bottom:6%;height:16%;background:var(--marigold);z-index:-1;border-radius:4px;transform:skewX(-6deg);}
    .msg-body p{margin-bottom:20px;color:var(--green-100);line-height:2;font-size:15px;max-width:600px;}
    .msg-sign{margin-top:40px;padding-top:24px;border-top:1px solid rgba(244,240,232,.15);}
    .sign-label{font-family:var(--font-mono);font-size:11px;letter-spacing:.24em;color:var(--green-300);font-weight:700;margin-bottom:6px;}
    .sign-name{font-family:var(--font-serif);font-size:28px;font-weight:700;}
    .sign-name span{font-family:var(--font-en);font-size:14px;opacity:.7;font-weight:400;}
    .msg-portrait{position:relative;max-width:400px;margin-left:auto;}
    .mp-frame{background:var(--cream);padding:16px 16px 70px;border-radius:6px;box-shadow:0 30px 60px -20px rgba(0,0,0,.6),0 4px 0 rgba(0,0,0,.3);transform:rotate(-2deg);}
    .mp-photo{border-radius:2px;overflow:hidden;aspect-ratio:4/5;background:#0c2a1f;}
    .mp-photo-img{width:100%;height:100%;object-fit:cover;object-position:center 30%;display:block;filter:saturate(.92) contrast(1.03);}
    .mp-caption{
      position:absolute;left:-8px;bottom:-30px;transform:rotate(-2deg);
      font-family:var(--font-mono);font-size:10px;letter-spacing:.22em;font-weight:700;
      color:var(--green-300);
    }
    .mp-plate{margin-top:14px;display:flex;justify-content:space-between;align-items:flex-end;padding:0 6px;color:var(--ink);}
    .mp-since{font-family:var(--font-mono);font-size:10px;letter-spacing:.2em;color:var(--green-700);font-weight:700;}
    .mp-co{font-family:var(--font-en);font-size:11px;font-weight:700;text-align:right;line-height:1.3;}
    .mp-seal{position:absolute;top:-20px;right:-30px;width:80px;height:80px;border-radius:50%;background:var(--marigold);color:var(--ink);display:flex;align-items:center;justify-content:center;font-size:28px;transform:rotate(10deg);box-shadow:0 8px 20px rgba(255,182,39,.4);animation:spinSlow 20s linear infinite;}
    @keyframes spinSlow{to{transform:rotate(370deg);}}
  `;document.head.appendChild(s);
}
ReactDOM.createRoot(document.getElementById('message-mount')).render(<Message/>);
