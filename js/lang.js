(function(){
  function applyLang(){
    const en = window.KW.TWEAKS.language === 'en';
    document.body.classList.toggle('lang-en', en);
    document.querySelectorAll('[data-jp]').forEach(el => {
      const jp = el.getAttribute('data-jp');
      const enT = el.getAttribute('data-en');
      if(enT) el.textContent = en ? enT : jp;
    });
  }
  document.addEventListener('click', e => {
    const btn = e.target.closest('#langBtn');
    if(!btn) return;
    const cur = window.KW.TWEAKS.language;
    window.KW.setTweak('language', cur === 'en' ? 'jp' : 'en');
  });
  window.KW.subscribe(applyLang);
  // apply initially + after components mount
  setTimeout(applyLang, 200);
  setTimeout(applyLang, 1000);
  setTimeout(applyLang, 2500);
})();
