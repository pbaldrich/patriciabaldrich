(() => {
  const toggle = document.querySelector('.menu-toggle');
  const links = document.querySelector('.navlinks');
  toggle?.addEventListener('click', () => {
    const open = links.classList.toggle('open');
    toggle.setAttribute('aria-expanded', String(open));
    toggle.textContent = open ? 'Close ✕' : 'Menu ☰';
  });
  links?.querySelectorAll('a').forEach(a => a.addEventListener('click', () => {links.classList.remove('open');toggle?.setAttribute('aria-expanded','false')}));
  const search = document.querySelector('#pub-search');
  const year = document.querySelector('#pub-year');
  const count = document.querySelector('#result-count');
  if (search && year) {
    const rows = [...document.querySelectorAll('.publication[data-year]')];
    const filter = () => {
      const q = search.value.toLocaleLowerCase().trim();
      const y = year.value;
      let n=0;
      rows.forEach(el => { const show=(!y || el.dataset.year===y) && (!q || el.textContent.toLocaleLowerCase().includes(q));el.hidden=!show;if(show)n++ });
      if(count)count.textContent=n+' publication'+(n===1?'':'s')+' shown';
    };
    search.addEventListener('input',filter);year.addEventListener('change',filter);
    filter();
  }
  document.querySelectorAll('[data-image-fallback]').forEach(img=>{
    img.addEventListener('error',()=>{img.hidden=true; const fallback=img.nextElementSibling;if(fallback)fallback.hidden=false});
  });
})();
