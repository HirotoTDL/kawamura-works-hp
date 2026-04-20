function Overseas(){
  return (
    <section id="overseas" className="ov-sec">
      <div className="section-inner">
        <div className="section-head reveal">
          <div className="eyebrow">GLOBAL · 海外拠点・協力メーカー</div>
          <h2 className="section-title">
            <span data-jp="海を越えた 信頼のネットワーク" data-en="A network of trust across the sea">海を越えた 信頼のネットワーク</span>
            <span className="en">KOREA OFFICE & PARTNERS</span>
          </h2>
          <p className="lede">
            <span data-jp="お客様のニーズにお応えすべく、製品コスト・品質・納期に応じて海外での製作、日本でのアフターケアという形にも取り組んでいます。韓国メーカー5社と長年の信頼関係で協力関係を結んでいます。"
                  data-en="To meet customer needs across cost, quality, and delivery, we manufacture overseas and provide after-care in Japan. Our partnership with five Korean makers is built on years of trust.">
              お客様のニーズにお応えすべく、製品コスト・品質・納期に応じて海外での製作、日本でのアフターケアという形にも取り組んでいます。韓国メーカー5社と長年の信頼関係で協力関係を結んでいます。
            </span>
          </p>
        </div>

        <div className="ov-grid">
          <div className="ov-office reveal">
            <div className="ovo-flag">
              <svg viewBox="0 0 60 40" width="60" height="40">
                <rect width="60" height="40" fill="#FAF8F2"/>
                <circle cx="30" cy="20" r="9" fill="#C60C30"/>
                <path d="M21 20a9 9 0 0118 0" fill="#003478"/>
              </svg>
            </div>
            <div className="ovo-tag">KOREA OFFICE</div>
            <div className="ovo-name">KGMD</div>
            <div className="ovo-rows">
              <div><span>所在地 / Address</span><span>Jeonpo-daero 274, Busanjin-Gu, Busan 614-862, Korea</span></div>
              <div><span>電話 / Phone</span><span>+82-70-8838-4792</span></div>
              <div><span>FAX</span><span>+82-51-802-4792</span></div>
            </div>
          </div>

          <div className="ov-map reveal">
            <svg viewBox="0 0 500 400" style={{width:'100%',height:'auto'}}>
              {/* water */}
              <rect width="500" height="400" fill="#0F3D2E" opacity=".03"/>
              {/* grid */}
              <g stroke="#1B5E3F" strokeWidth=".3" opacity=".25">
                {[...Array(12)].map((_,i) => <line key={'v'+i} x1={i*50} y1="0" x2={i*50} y2="400"/>)}
                {[...Array(10)].map((_,i) => <line key={'h'+i} x1="0" y1={i*50} x2="500" y2={i*50}/>)}
              </g>
              {/* japan (stylized) */}
              <g>
                <path d="M340 100 Q360 110 350 135 L360 155 Q370 175 355 195 L365 220 Q370 245 345 255 L320 245 Q305 230 310 210 L300 190 Q290 170 305 150 L315 130 Q325 105 340 100 Z"
                      fill="#1B5E3F"/>
                <circle cx="330" cy="195" r="4" fill="#FFB627"/>
                <text x="340" y="198" fontFamily="Space Mono" fontSize="10" fill="#0F3D2E" fontWeight="700">中津川</text>
              </g>
              {/* korea */}
              <g>
                <path d="M180 160 Q200 155 210 175 L220 195 Q225 220 215 240 L200 255 Q180 260 170 245 L160 220 Q155 195 170 175 Z" fill="#2D7A52"/>
                <circle cx="195" cy="230" r="4" fill="#FFB627"/>
                <text x="205" y="233" fontFamily="Space Mono" fontSize="10" fill="#0F3D2E" fontWeight="700">BUSAN</text>
              </g>
              {/* line */}
              <path d="M195 230 Q260 180 330 195" stroke="#FFB627" strokeWidth="1.5" fill="none" strokeDasharray="4 3"/>
              {/* ticker */}
              <text x="250" y="40" textAnchor="middle" fontFamily="Space Mono" fontSize="10" fill="#1B5E3F" letterSpacing="3" fontWeight="700">— PARTNER NETWORK —</text>
              <text x="20" y="390" fontFamily="Space Mono" fontSize="9" fill="#5A6B5F" letterSpacing="2">5 KOREAN PARTNERS · LONG-STANDING TRUST</text>
            </svg>
          </div>
        </div>

        <div className="ov-partners reveal">
          {[1,2,3,4].map(k => (
            <div key={k} className="ov-ptile">
              <div className="ovp-inner">
                <img src={`assets/korea/korea_factory${k}.jpg`} alt={`韓国協力工場 ${k}`} loading="lazy" className="ovp-photo"/>
                <div className="ovp-label">PARTNER {k} · BUSAN</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

if(!document.getElementById('ov-css')){
  const s=document.createElement('style');s.id='ov-css';
  s.textContent=`
    .ov-sec{background:var(--cream);}
    .ov-grid{display:grid;grid-template-columns:1fr 1.3fr;gap:40px;margin-bottom:40px;align-items:stretch;}
    @media(max-width:860px){.ov-grid{grid-template-columns:1fr;}}
    .ov-office{background:var(--green-800);color:var(--cream);padding:36px;border-radius:var(--radius-xl);box-shadow:var(--shadow-25d);display:flex;flex-direction:column;}
    .ovo-flag{width:60px;height:40px;border-radius:4px;overflow:hidden;margin-bottom:20px;box-shadow:0 2px 6px rgba(0,0,0,.2);}
    .ovo-tag{font-family:var(--font-mono);font-size:10px;letter-spacing:.3em;color:var(--green-300);font-weight:700;margin-bottom:6px;}
    .ovo-name{font-family:var(--font-en);font-size:56px;font-weight:700;letter-spacing:-.02em;line-height:1;margin-bottom:24px;}
    .ovo-rows{display:flex;flex-direction:column;gap:14px;margin-top:auto;}
    .ovo-rows > div{display:flex;flex-direction:column;gap:4px;padding-top:12px;border-top:1px dashed rgba(244,240,232,.2);}
    .ovo-rows span:first-child{font-family:var(--font-mono);font-size:10px;letter-spacing:.2em;opacity:.7;font-weight:700;}
    .ovo-rows span:last-child{font-size:13px;line-height:1.5;}
    .ov-map{background:var(--cream-2);padding:24px;border-radius:var(--radius-xl);border:1px solid rgba(15,61,46,.08);box-shadow:var(--shadow-25d);display:flex;align-items:center;}
    .ov-partners{display:grid;grid-template-columns:repeat(4,1fr);gap:12px;}
    @media(max-width:860px){.ov-partners{grid-template-columns:repeat(2,1fr);}}
    .ov-ptile{border-radius:var(--radius-md);overflow:hidden;box-shadow:var(--shadow-25d);background:var(--cream-2);border:1px solid rgba(15,61,46,.08);transition:transform .35s,box-shadow .35s;}
    .ov-ptile:hover{transform:translateY(-4px);box-shadow:0 4px 0 rgba(10,36,25,.08),0 16px 32px -8px rgba(10,36,25,.22);}
    .ovp-inner{aspect-ratio:3/2;position:relative;overflow:hidden;}
    .ovp-photo{position:absolute;inset:0;width:100%;height:100%;object-fit:cover;display:block;transition:transform .6s cubic-bezier(.2,.8,.2,1);filter:saturate(.95);}
    .ov-ptile:hover .ovp-photo{transform:scale(1.06);}
    .ovp-label{position:absolute;bottom:8px;left:8px;right:8px;padding:6px 10px;background:rgba(10,36,25,.72);color:var(--cream);font-family:var(--font-mono);font-size:9px;letter-spacing:.18em;font-weight:700;border-radius:4px;backdrop-filter:blur(4px);}
  `;document.head.appendChild(s);
}
ReactDOM.createRoot(document.getElementById('overseas-mount')).render(<Overseas/>);
