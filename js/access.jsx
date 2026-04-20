function Access(){
  return (
    <section id="access" className="ac-sec">
      <div className="section-inner">
        <div className="section-head reveal">
          <div className="eyebrow">ACCESS · アクセス</div>
          <h2 className="section-title"><span data-jp="所在地" data-en="Find us">所在地</span><span className="en">GIFU · NAKATSUGAWA</span></h2>
        </div>
        <div className="ac-grid">
          <div className="ac-info reveal">
            <div className="ac-row"><span className="ac-l">所在地<br/>ADDRESS</span><span className="ac-v"><span data-jp="〒508-0001 岐阜県中津川市中津川2467-127" data-en="2467-127 Nakatsugawa, Nakatsugawa-shi, Gifu 508-0001">〒508-0001 岐阜県中津川市中津川2467-127</span></span></div>
            <div className="ac-row"><span className="ac-l">電話<br/>PHONE</span><span className="ac-v"><a href="tel:0573664429">0573-66-4429</a></span></div>
            <div className="ac-row"><span className="ac-l">FAX</span><span className="ac-v">0573-66-6737</span></div>
            <div className="ac-row"><span className="ac-l">営業時間<br/>HOURS</span><span className="ac-v"><span data-jp="平日 8:30 – 17:30 / 緊急対応24h" data-en="Weekdays 8:30–17:30 / 24h emergency">平日 8:30 – 17:30 / 緊急対応24h</span></span></div>
            <div className="ac-row"><span className="ac-l">最寄駅<br/>STATION</span><span className="ac-v"><span data-jp="JR中央本線「中津川駅」より車で5分" data-en="5 min by car from JR Nakatsugawa Station">JR中央本線「中津川駅」より車で5分</span></span></div>
            <a href="https://www.google.com/maps/search/?api=1&query=%E4%B8%AD%E6%B4%A5%E5%B7%9D%E5%B8%82%E4%B8%AD%E6%B4%A5%E5%B7%9D2467-127" target="_blank" rel="noopener" className="ac-gmap">
              <span data-jp="Googleマップで開く" data-en="Open in Google Maps">Googleマップで開く</span>
              <svg viewBox="0 0 16 16" width="14" height="14"><path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.8" fill="none" strokeLinecap="round"/></svg>
            </a>
          </div>
          <div className="ac-map reveal">
            <iframe
              className="ac-map-iframe"
              title="河村製作所 所在地マップ"
              src="https://maps.google.com/maps?q=%E5%B2%90%E9%98%9C%E7%9C%8C%E4%B8%AD%E6%B4%A5%E5%B7%9D%E5%B8%82%E4%B8%AD%E6%B4%A5%E5%B7%9D2467-127&z=16&hl=ja&output=embed"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
            <div className="ac-map-badge">
              <span className="ac-mb-code">N 35.487° · E 137.495°</span>
              <span className="ac-mb-name">河村製作所 / KAWAMURA WORKS</span>
            </div>
          </div>
        </div>

        {/* 本社外観写真 */}
        <div className="ac-exterior reveal">
          <div className="ac-exterior-img">
            <img src="assets/company/gaikan-1.jpg" alt="河村製作所 本社工場 外観" loading="lazy"/>
          </div>
          <div className="ac-exterior-meta">
            <div className="ac-ex-tag">HEAD OFFICE / WORKSHOP</div>
            <div className="ac-ex-name" data-jp="本社工場 外観" data-en="Head office building">本社工場 外観</div>
            <div className="ac-ex-desc" data-jp="中津川の山あいに佇む、金型づくりの現場。"
                 data-en="Our mold-making workshop nestled in the Nakatsugawa hills.">
              中津川の山あいに佇む、金型づくりの現場。
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
if(!document.getElementById('ac-css')){
  const s=document.createElement('style');s.id='ac-css';
  s.textContent=`
    .ac-sec{background:var(--cream);}
    .ac-grid{display:grid;grid-template-columns:1fr 1.4fr;gap:32px;}
    @media(max-width:860px){.ac-grid{grid-template-columns:1fr;}}
    .ac-info{background:var(--cream-2);border-radius:var(--radius-xl);padding:32px;box-shadow:var(--shadow-25d);border:1px solid rgba(15,61,46,.08);}
    .ac-row{display:grid;grid-template-columns:100px 1fr;gap:16px;padding:18px 0;border-bottom:1px dashed rgba(15,61,46,.15);align-items:baseline;}
    .ac-row:last-of-type{border-bottom:none;}
    .ac-l{font-family:var(--font-mono);font-size:10px;font-weight:700;letter-spacing:.16em;color:var(--green-700);line-height:1.5;}
    .ac-v{font-size:14px;font-weight:600;line-height:1.7;}
    .ac-gmap{display:inline-flex;align-items:center;gap:8px;margin-top:20px;padding:12px 20px;background:var(--green-800);color:var(--cream);border-radius:999px;font-size:13px;font-weight:600;}
    .ac-map{position:relative;border-radius:var(--radius-xl);overflow:hidden;box-shadow:var(--shadow-25d);border:1px solid rgba(15,61,46,.08);min-height:400px;background:#DCE9CF;}
    .ac-map-iframe{
      position:absolute;inset:0;width:100%;height:100%;border:0;display:block;
      filter:saturate(.96);
    }
    .ac-map-badge{
      position:absolute;left:14px;bottom:14px;z-index:2;
      display:flex;flex-direction:column;gap:3px;
      padding:10px 14px;border-radius:10px;
      background:rgba(10,36,25,.88);color:var(--cream);
      backdrop-filter:blur(8px);-webkit-backdrop-filter:blur(8px);
      box-shadow:0 8px 20px -6px rgba(10,36,25,.45);
      border:1px solid rgba(127,176,105,.22);
      pointer-events:none;
    }
    .ac-mb-code{
      font-family:var(--font-mono);font-size:9px;letter-spacing:.24em;
      color:var(--green-300);font-weight:700;
    }
    .ac-mb-name{
      font-family:var(--font-mono);font-size:11px;letter-spacing:.14em;
      color:var(--cream);font-weight:700;
    }
    .ac-exterior{
      margin-top:32px;display:grid;grid-template-columns:1.4fr 1fr;gap:32px;align-items:stretch;
      background:var(--cream-2);border-radius:var(--radius-xl);overflow:hidden;
      box-shadow:var(--shadow-25d);border:1px solid rgba(15,61,46,.08);
    }
    @media(max-width:860px){.ac-exterior{grid-template-columns:1fr;}}
    .ac-exterior-img{position:relative;overflow:hidden;min-height:280px;aspect-ratio:7/5;}
    .ac-exterior-img img{position:absolute;inset:0;width:100%;height:100%;object-fit:cover;display:block;filter:saturate(.94);transition:transform .8s cubic-bezier(.2,.8,.2,1);}
    .ac-exterior:hover .ac-exterior-img img{transform:scale(1.03);}
    .ac-exterior-meta{padding:36px;display:flex;flex-direction:column;justify-content:center;gap:10px;}
    .ac-ex-tag{font-family:var(--font-mono);font-size:10px;letter-spacing:.28em;color:var(--green-700);font-weight:700;}
    .ac-ex-name{font-size:24px;font-weight:900;color:var(--green-900);letter-spacing:-.01em;margin-top:6px;}
    .ac-ex-desc{font-size:14px;line-height:1.9;color:var(--ink-2);margin-top:10px;}
  `;document.head.appendChild(s);
}
ReactDOM.createRoot(document.getElementById('access-mount')).render(<Access/>);
