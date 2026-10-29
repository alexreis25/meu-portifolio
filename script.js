const toggle = document.getElementById('themeToggle');
const year = document.getElementById('year');
year.textContent = new Date().getFullYear();

toggle.addEventListener('click', () => {
  const isDark = document.body.classList.toggle('dark');
  toggle.textContent = isDark ? '☀' : '☾';
  toggle.setAttribute('aria-label', isDark ? 'Ativar modo claro' : 'Ativar modo escuro');
});
