// Shared global state and helpers.
window.KW = window.KW || {};

window.KW.TWEAKS = {
  "heroVariant": "invisible",
  "language": "jp",
  "animationSpeed": 1
};

window.KW.listeners = new Set();
window.KW.setTweak = function(key, value){
  window.KW.TWEAKS[key] = value;
  window.KW.listeners.forEach(fn => fn(window.KW.TWEAKS));
};
window.KW.subscribe = function(fn){
  window.KW.listeners.add(fn);
  return () => window.KW.listeners.delete(fn);
};

// Cursor glow
(function(){
  const glow = document.getElementById('cursor-glow');
  if(!glow) return;
  let raf, tx=0, ty=0, x=0, y=0;
  document.addEventListener('mousemove', e => {
    tx=e.clientX; ty=e.clientY;
    document.body.classList.add('cursor-active');
    if(!raf) raf = requestAnimationFrame(tick);
  });
  document.addEventListener('mouseleave', () => document.body.classList.remove('cursor-active'));
  function tick(){
    x += (tx-x)*0.18; y += (ty-y)*0.18;
    glow.style.transform = `translate(${x}px,${y}px) translate(-50%,-50%)`;
    if(Math.abs(tx-x)>0.5 || Math.abs(ty-y)>0.5){ raf=requestAnimationFrame(tick);} else raf=null;
  }
})();

// Reveal on scroll
window.KW.observeReveal = function(root){
  const els = (root || document).querySelectorAll('.reveal');
  const io = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if(e.isIntersecting){ e.target.classList.add('in'); io.unobserve(e.target); }
    });
  }, {threshold:0.12, rootMargin:'0px 0px -40px 0px'});
  els.forEach(el => io.observe(el));
};
setTimeout(() => window.KW.observeReveal(), 100);
setInterval(() => window.KW.observeReveal(), 1500);
