function Footer(){
  return (
    <footer className="ft-sec">
      <div className="section-inner">
        <div className="ft-grid">
          <div className="ft-brand">
            <div className="ft-logo">
              <img src="assets/logo/footerlogo2.png" alt="株式会社 河村製作所" className="ft-logo-img"/>
              <div className="ft-co-en">KAWAMURA WORKS CO., LTD.</div>
            </div>
            <p className="ft-tag" data-jp="岐阜・中津川の金型工房 / Est. 1984" data-en="Mold Workshop in Nakatsugawa, Gifu / Est. 1984">岐阜・中津川の金型工房 / Est. 1984</p>
            <p className="ft-addr">〒508-0001<br/>岐阜県中津川市中津川2467-127<br/>TEL 0573-66-4429 / FAX 0573-66-6737</p>
          </div>
          <div className="ft-nav">
            <div className="ft-nav-col">
              <div className="ft-nav-ttl">EXPLORE</div>
              <a href="#process"><span data-jp="製作工程" data-en="Process">製作工程</span></a>
              <a href="#machines"><span data-jp="保有設備" data-en="Machines">保有設備</span></a>
              <a href="#products"><span data-jp="製品事例" data-en="Products">製品事例</span></a>
              <a href="#about"><span data-jp="会社概要" data-en="Company">会社概要</span></a>
            </div>
            <div className="ft-nav-col">
              <div className="ft-nav-ttl">COMPANY</div>
              <a href="#message"><span data-jp="メッセージ" data-en="Message">メッセージ</span></a>
              <a href="#overseas"><span data-jp="海外拠点" data-en="Global">海外拠点</span></a>
              <a href="#recruit"><span data-jp="採用情報" data-en="Careers">採用情報</span></a>
            </div>
            <div className="ft-nav-col">
              <div className="ft-nav-ttl">CONTACT</div>
              <a href="#contact"><span data-jp="お問合せ" data-en="Contact">お問合せ</span></a>
              <a href="#access"><span data-jp="アクセス" data-en="Access">アクセス</span></a>
              <a href="tel:0573664429"><span data-jp="電話する" data-en="Call us">電話する</span></a>
              <a href="#"><span data-jp="パンフレットDL" data-en="Brochure">パンフレットDL</span></a>
            </div>
          </div>
        </div>
        <div className="ft-mega">KAWAMURA</div>
        <div className="ft-bottom">
          <div className="ft-copy">© {new Date().getFullYear()} Kawamura Works Co., Ltd. All rights reserved.</div>
          <div className="ft-legal">
            <a href="#"><span data-jp="プライバシー" data-en="Privacy">プライバシー</span></a>
            <a href="#"><span data-jp="サイトマップ" data-en="Sitemap">サイトマップ</span></a>
          </div>
        </div>
      </div>
    </footer>
  );
}
if(!document.getElementById('ft-css')){
  const s=document.createElement('style');s.id='ft-css';
  s.textContent=`
    .ft-sec{background:var(--green-900);color:var(--cream);padding:80px 28px 28px;position:relative;overflow:hidden;}
    .ft-grid{display:grid;grid-template-columns:1.3fr 1.5fr;gap:60px;margin-bottom:60px;}
    @media(max-width:860px){.ft-grid{grid-template-columns:1fr;gap:40px;}}
    .ft-logo{display:flex;flex-direction:column;gap:10px;align-items:flex-start;margin-bottom:20px;}
    .ft-logo-img{height:40px;width:auto;filter:brightness(0) invert(1) opacity(.92);}
    .ft-co-en{font-family:var(--font-mono);font-size:10px;letter-spacing:.2em;color:var(--green-300);font-weight:700;}
    .ft-tag{font-family:var(--font-mono);font-size:11px;letter-spacing:.2em;color:var(--green-300);margin-bottom:18px;font-weight:700;}
    .ft-addr{font-size:13px;line-height:1.9;color:var(--green-100);}
    .ft-nav{display:grid;grid-template-columns:repeat(3,1fr);gap:28px;}
    .ft-nav-col{display:flex;flex-direction:column;gap:10px;}
    .ft-nav-ttl{font-family:var(--font-mono);font-size:10px;font-weight:700;letter-spacing:.22em;color:var(--marigold);margin-bottom:10px;}
    .ft-nav-col a{font-size:13px;color:var(--green-100);transition:.2s;}
    .ft-nav-col a:hover{color:var(--marigold);padding-left:4px;}
    .ft-mega{font-family:var(--font-en);font-weight:700;font-size:clamp(80px,18vw,260px);letter-spacing:-.04em;line-height:.85;color:transparent;-webkit-text-stroke:1.5px rgba(127,176,105,.25);margin:20px 0 40px;text-align:center;}
    .ft-bottom{display:flex;justify-content:space-between;gap:20px;padding-top:28px;border-top:1px solid rgba(244,240,232,.1);flex-wrap:wrap;}
    .ft-copy{font-family:var(--font-mono);font-size:11px;color:var(--green-200);letter-spacing:.04em;}
    .ft-legal{display:flex;gap:24px;}
    .ft-legal a{font-size:12px;color:var(--green-200);}
    .ft-legal a:hover{color:var(--marigold);}
  `;document.head.appendChild(s);
}
ReactDOM.createRoot(document.getElementById('footer-mount')).render(<Footer/>);
