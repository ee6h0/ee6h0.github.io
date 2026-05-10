/* ── THEMES ── */
const THEMES = ['', 'sunset', 'forest', 'ice', 'crimson', 'gold', 'matrix'];
let ti = Math.max(0, THEMES.indexOf(localStorage.getItem('theme') || ''));

if (THEMES[ti]) document.body.classList.add(THEMES[ti]);

function nextTheme() {
  document.body.classList.remove(...THEMES.filter(Boolean));
  ti = (ti + 1) % THEMES.length;
  if (THEMES[ti]) document.body.classList.add(THEMES[ti]);
  localStorage.setItem('theme', THEMES[ti]);
}

/* ── SORT GRID ── */
function sortGrid(gridId, dir) {
  const g = document.getElementById(gridId);
  if (!g) return;
  [...g.children]
    .sort((a, b) => dir * a.textContent.trim().localeCompare(b.textContent.trim()))
    .forEach(el => g.appendChild(el));
}

/* ── BLOCK IMG RIGHT-CLICK ── */
document.addEventListener('contextmenu', e => {
  if (e.target.tagName === 'IMG') e.preventDefault();
});
