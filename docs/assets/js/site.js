(function () {
  const ERAS = window.ERAS || [];
  const ITEMS = window.ITEMS || [];
  const eraOf = key => ERAS.find(e => e.key === key) || {};

  // 모바일 메뉴
  const menuBtn = document.querySelector('.menu-btn');
  const nav = document.querySelector('.nav');
  if (menuBtn && nav) {
    menuBtn.addEventListener('click', () => {
      const open = nav.classList.toggle('open');
      menuBtn.setAttribute('aria-expanded', open);
    });
  }

  // 시기별 서류철 펼치기
  const folders = document.querySelectorAll('.stack .folder:not(:first-child)');
  folders.forEach(f => {
    const open = () => folders.forEach(o => o.classList.toggle('open', o === f));
    f.addEventListener('click', open);
    f.addEventListener('keydown', e => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); open(); } });
  });

  // 자료 카드
  function card(item) {
    const era = eraOf(item.era);
    const el = document.createElement('button');
    el.type = 'button';
    el.className = 'card';
    el.style.setProperty('--c', era.color);
    el.style.setProperty('--ci', era.ink);
    el.innerHTML = `
      <span class="ctab">CODE_${era.code} // ${item.type}</span>
      <span class="thumb${item.type === '통계표' ? ' contain' : ''}"><img src="${item.img}" alt="${item.title}" loading="lazy"></span>
      <span class="meta"><span>${item.date}</span><span>p.${item.page}</span></span>
      <h3>${item.title}</h3>
      <span class="holder">${item.holder}</span>`;
    el.addEventListener('click', () => openViewer(item));
    return el;
  }

  // 상세 보기
  const viewer = document.querySelector('dialog.viewer');
  function openViewer(item) {
    if (!viewer) { location.href = 'collection.html#' + item.id; return; }
    const era = eraOf(item.era);
    viewer.querySelector('.viewer-img img').src = item.hero || item.img;
    viewer.querySelector('.viewer-img img').alt = item.title;
    viewer.querySelector('.viewer-txt').innerHTML = `
      <div class="eyebrow">CODE_${era.code} // ${era.name} · ${era.period}</div>
      <h2>${item.title}</h2>
      <p>${item.desc}</p>
      <dl>
        <dt>유형</dt><dd>${item.type}</dd>
        <dt>시기</dt><dd>${item.date}</dd>
        <dt>소장·출처</dt><dd>${item.holder}</dd>
        ${item.people.length ? `<dt>인물</dt><dd>${item.people.join(', ')}</dd>` : ''}
        <dt>주제어</dt><dd>${item.tags.join(' · ')}</dd>
        <dt>원문</dt><dd>『수원시의원으로 살다』 p.${item.page}</dd>
        <dt>식별자</dt><dd class="mono">${item.id}</dd>
      </dl>`;
    if (!viewer.open) viewer.showModal();
    history.replaceState(null, '', '#' + item.id);
  }
  if (viewer) {
    viewer.querySelector('.viewer-close').addEventListener('click', () => viewer.close());
    viewer.addEventListener('click', e => { if (e.target === viewer) viewer.close(); });
    viewer.addEventListener('close', () => history.replaceState(null, '', location.pathname + location.search));
  }

  // 메인: 최근 자료
  const latest = document.querySelector('[data-latest]');
  if (latest) ['council-1952', 'poster-1956', 'posters-1991', 'heo-youngsoon-1997']
    .forEach(id => latest.appendChild(card(ITEMS.find(i => i.id === id))));

  // 컬렉션 페이지
  const grid = document.querySelector('[data-collection]');
  if (grid) {
    const params = new URLSearchParams(location.search);
    const state = { q: params.get('q') || '', era: params.get('era') || '', type: params.get('type') || '' };
    const input = document.querySelector('#collection-q');
    const count = document.querySelector('.result-count');
    input.value = state.q;

    const types = [...new Set(ITEMS.map(i => i.type))];
    const eraChips = document.querySelector('[data-chips="era"]');
    const typeChips = document.querySelector('[data-chips="type"]');
    const chip = (group, value, label) => {
      const b = document.createElement('button');
      b.type = 'button'; b.className = 'chip'; b.textContent = label; b.dataset.value = value;
      b.addEventListener('click', () => { state[group] = state[group] === value ? '' : value; render(); });
      return b;
    };
    ERAS.forEach(e => eraChips.appendChild(chip('era', e.key, e.name)));
    types.forEach(t => typeChips.appendChild(chip('type', t, t)));

    const norm = s => s.toLowerCase().replace(/\s+/g, '');
    function matches(item) {
      if (state.era && item.era !== state.era) return false;
      if (state.type && item.type !== state.type) return false;
      if (!state.q) return true;
      const era = eraOf(item.era);
      const hay = norm([item.title, item.desc, item.holder, item.type, item.date, item.year, era.name, ...item.tags, ...item.people].join(' '));
      return norm(state.q).split(/[,]/).every(w => hay.includes(w));
    }
    function render() {
      document.querySelectorAll('[data-chips] .chip').forEach(b => {
        const group = b.parentElement.dataset.chips;
        b.setAttribute('aria-pressed', state[group] === b.dataset.value);
      });
      const list = ITEMS.filter(matches).sort((a, b) => a.year - b.year);
      grid.replaceChildren(...list.map(card));
      count.textContent = `${list.length} / ${ITEMS.length} 건`;
      document.querySelector('.empty').hidden = list.length > 0;
      const p = new URLSearchParams();
      Object.entries(state).forEach(([k, v]) => v && p.set(k, v));
      history.replaceState(null, '', location.pathname + (p.toString() ? '?' + p : '') + location.hash);
    }
    input.addEventListener('input', () => { state.q = input.value.trim(); render(); });
    document.querySelector('.toolbar form').addEventListener('submit', e => e.preventDefault());
    render();

    const hashItem = ITEMS.find(i => '#' + i.id === location.hash);
    if (hashItem) openViewer(hashItem);
  }

  // 전시: 현재 장 표시
  const tocLinks = document.querySelectorAll('.ex-toc a');
  if (tocLinks.length && 'IntersectionObserver' in window) {
    const io = new IntersectionObserver(entries => {
      entries.forEach(en => {
        if (!en.isIntersecting) return;
        tocLinks.forEach(a => a.classList.toggle('on', a.getAttribute('href') === '#' + en.target.id));
      });
    }, { rootMargin: '-45% 0px -50% 0px' });
    tocLinks.forEach(a => { const t = document.querySelector(a.getAttribute('href')); if (t) io.observe(t); });
  }
})();
