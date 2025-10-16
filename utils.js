export function qp(name, url=window.location.href) {
  const u = new URL(url);
  return u.searchParams.get(name);
}
export function linkTo(el, url) {
  el.addEventListener('click', () => window.location.href = url);
  el.classList.add('clickable');
}