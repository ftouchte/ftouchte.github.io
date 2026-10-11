// Allow to swap between pages

const pages = ["/", "/phd/", "/cv/", "/projects/", "/contact/"];
const path = location.pathname.replace("index\.html$/", "");
const current = pages.indexOf(path);
let startX = 0, startY = 0;

document.addEventListener("touchstart", e => {
  startX = e.changedTouches[0].clientX;
  startY = e.changedTouches[0].clientY;
}, { passive: true });

document.addEventListener("touchend", e => {
  const dx = e.changedTouches[0].clientX - startX;
  const dy = e.changedTouches[0].clientY - startY;
  if (Math.abs(dx) < 60 || Math.abs(dx) < Math.abs(dy) * 1.5) return; // ignore le scroll vertical
  const next = dx < 0 ? current + 1 : current - 1; // glisser vers la gauche = page suivante
  if (pages[next]) location.href = pages[next];
}, { passive: true });