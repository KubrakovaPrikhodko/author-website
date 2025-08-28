// app.js — безопасно работает даже если на странице нет нужных элементов

document.addEventListener('DOMContentLoaded', () => {
  // 1) Год в футере, если есть элемент #year
  const y = document.getElementById('year');
  if (y) y.textContent = new Date().getFullYear();

  // 2) Плавная прокрутка для якорных ссылок
  document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', e => {
      const id = a.getAttribute('href').slice(1);
      const target = document.getElementById(id);
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });

  // 3) Пример проверки работы JS
  console.log('Author website: JS подключён ✅');

  // 4) Регистрация Service Worker (если файл есть в корне)
  if ('serviceWorker' in navigator) {
    fetch('./service-worker.js', { method: 'HEAD' })
      .then(resp => {
        if (resp.ok) {
          navigator.serviceWorker.register('./service-worker.js', { scope: './' })
            .then(() => console.log('SW зарегистрирован'))
            .catch(err => console.warn('SW не зарегистрирован:', err));
        }
      })
      .catch(() => {/* SW файла нет — просто молчим */});
  }
});
