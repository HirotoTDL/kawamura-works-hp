const { useState: useS_c } = React;
function Contact(){
  const [f,setF] = useS_c({name:'',company:'',email:'',kind:'見積',msg:''});
  const [sent,setSent] = useS_c(false);
  return (
    <section id="contact" className="cc-sec">
      <div className="section-inner">
        <div className="cc-grid">
          <div className="cc-left reveal">
            <div className="eyebrow on-dark">CONTACT · お問合せ</div>
            <h2 className="cc-title">
              <span data-jp="まず、" data-en="Let's start">まず、</span><br/>
              <span data-jp="お話を聞かせてください。" data-en="with a conversation.">お話を聞かせてください。</span>
            </h2>
            <p data-jp="お見積り、技術のご相談、アフターフォロー。どんな段階でもお気軽に。通常2営業日以内にご返信します。"
               data-en="Quotes, technical consultation, after-service—whatever stage you're at, reach out. We reply within 2 business days.">
              お見積り、技術のご相談、アフターフォロー。どんな段階でもお気軽に。通常2営業日以内にご返信します。
            </p>
            <div className="cc-inline">
              <div><span className="cci-l" data-jp="お電話" data-en="Phone">お電話</span><a href="tel:0573664429" className="cci-v">0573-66-4429</a></div>
              <div><span className="cci-l">FAX</span><span className="cci-v">0573-66-6737</span></div>
              <div><span className="cci-l" data-jp="営業時間" data-en="Hours">営業時間</span><span className="cci-v"><span data-jp="平日 8:30–17:30" data-en="Weekdays 8:30–17:30">平日 8:30–17:30</span></span></div>
            </div>
          </div>
          <div className="cc-right reveal">
            {sent ? (
              <div className="cc-sent">
                <div className="cc-check"><svg viewBox="0 0 24 24" width="36" height="36"><path d="M5 12l5 5L20 7" stroke="currentColor" strokeWidth="2.5" fill="none" strokeLinecap="round" strokeLinejoin="round"/></svg></div>
                <h3 data-jp="送信ありがとうございました。" data-en="Message received.">送信ありがとうございました。</h3>
                <p data-jp="2営業日以内にご返信いたします。" data-en="We'll respond within 2 business days.">2営業日以内にご返信いたします。</p>
                <button className="cc-again" onClick={()=>{setSent(false);setF({name:'',company:'',email:'',kind:'見積',msg:''});}}><span data-jp="もう一度送る" data-en="Send another">もう一度送る</span></button>
              </div>
            ) : (
            <form className="cc-form" onSubmit={e=>{e.preventDefault();setSent(true);}}>
              <div className="cc-kinds">
                {['見積','技術相談','採用','その他'].map((k,i) => {
                  const en=['Quote','Technical','Careers','Other'][i];
                  return <label key={k} className={`cc-kind ${f.kind===k?'on':''}`}>
                    <input type="radio" name="kind" value={k} checked={f.kind===k} onChange={()=>setF({...f,kind:k})}/>
                    <span data-jp={k} data-en={en}>{k}</span>
                  </label>;
                })}
              </div>
              <div className="cc-2col">
                <label className="cc-field"><span data-jp="お名前 *" data-en="Name *">お名前 *</span><input required value={f.name} onChange={e=>setF({...f,name:e.target.value})}/></label>
                <label className="cc-field"><span data-jp="会社名" data-en="Company">会社名</span><input value={f.company} onChange={e=>setF({...f,company:e.target.value})}/></label>
              </div>
              <label className="cc-field"><span data-jp="メール *" data-en="Email *">メール *</span><input required type="email" value={f.email} onChange={e=>setF({...f,email:e.target.value})}/></label>
              <label className="cc-field"><span data-jp="お問い合せ内容 *" data-en="Message *">お問い合せ内容 *</span><textarea required rows="5" value={f.msg} onChange={e=>setF({...f,msg:e.target.value})}/></label>
              <button type="submit" className="cc-submit">
                <span data-jp="送信する" data-en="Send">送信する</span>
                <svg viewBox="0 0 16 16" width="14" height="14"><path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.8" fill="none" strokeLinecap="round"/></svg>
              </button>
            </form>)}
          </div>
        </div>
      </div>
    </section>
  );
}
if(!document.getElementById('cc-css')){
  const s=document.createElement('style');s.id='cc-css';
  s.textContent=`
    .cc-sec{background:var(--green-900);color:var(--cream);}
    .cc-grid{display:grid;grid-template-columns:1fr 1.1fr;gap:60px;}
    @media(max-width:860px){.cc-grid{grid-template-columns:1fr;}}
    .cc-title{font-size:clamp(38px,5vw,60px);font-weight:900;line-height:1.15;margin:16px 0 24px;letter-spacing:-.01em;}
    .cc-left p{color:var(--green-100);line-height:1.9;max-width:440px;font-size:15px;margin-bottom:32px;}
    .cc-inline{display:flex;flex-direction:column;gap:16px;padding-top:24px;border-top:1px solid rgba(244,240,232,.15);}
    .cc-inline > div{display:flex;justify-content:space-between;align-items:baseline;gap:24px;}
    .cci-l{font-family:var(--font-mono);font-size:10px;letter-spacing:.22em;color:var(--green-300);font-weight:700;}
    .cci-v{font-family:var(--font-mono);font-size:15px;font-weight:700;color:var(--cream);}
    .cc-form{background:rgba(244,240,232,.04);border:1px solid rgba(244,240,232,.1);border-radius:var(--radius-xl);padding:32px;display:flex;flex-direction:column;gap:20px;}
    .cc-kinds{display:flex;gap:6px;flex-wrap:wrap;}
    .cc-kind{flex:1 1 auto;min-width:80px;cursor:pointer;padding:10px 14px;border-radius:999px;background:rgba(244,240,232,.06);border:1px solid rgba(244,240,232,.15);font-size:13px;font-weight:600;text-align:center;transition:.2s;}
    .cc-kind input{display:none;}
    .cc-kind.on{background:var(--marigold);color:var(--ink);border-color:var(--marigold);}
    .cc-2col{display:grid;grid-template-columns:1fr 1fr;gap:12px;}
    @media(max-width:620px){.cc-2col{grid-template-columns:1fr;}}
    .cc-field{display:flex;flex-direction:column;gap:6px;}
    .cc-field > span{font-family:var(--font-mono);font-size:10px;letter-spacing:.2em;color:var(--green-300);font-weight:700;}
    .cc-field input,.cc-field textarea{background:rgba(10,36,25,.35);border:1px solid rgba(244,240,232,.15);border-radius:var(--radius-md);padding:12px 14px;color:var(--cream);font-family:inherit;font-size:14px;resize:vertical;transition:.2s;}
    .cc-field input:focus,.cc-field textarea:focus{outline:none;border-color:var(--marigold);background:rgba(10,36,25,.55);}
    .cc-submit{align-self:flex-start;display:inline-flex;align-items:center;gap:10px;padding:14px 24px;background:var(--marigold);color:var(--ink);border-radius:999px;font-weight:700;font-size:14px;box-shadow:0 3px 0 var(--marigold-2);transition:.2s;}
    .cc-submit:hover{transform:translateY(-2px);}
    .cc-sent{text-align:center;padding:60px 20px;background:rgba(244,240,232,.04);border:1px solid rgba(244,240,232,.1);border-radius:var(--radius-xl);}
    .cc-check{width:70px;height:70px;border-radius:50%;background:var(--marigold);color:var(--ink);margin:0 auto 20px;display:flex;align-items:center;justify-content:center;}
    .cc-sent h3{font-size:22px;margin-bottom:8px;}
    .cc-sent p{color:var(--green-100);margin-bottom:20px;}
    .cc-again{padding:10px 20px;border-radius:999px;border:1px solid rgba(244,240,232,.25);color:var(--cream);font-size:13px;font-weight:600;}
  `;document.head.appendChild(s);
}
ReactDOM.createRoot(document.getElementById('contact-mount')).render(<Contact/>);
