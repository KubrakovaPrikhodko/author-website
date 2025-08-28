# Author Website (GitHub Pages)
Минимальный статический сайт с автодеплоем через GitHub Actions.

## Деплой
1) Создайте репозиторий и поместите файлы из этой папки в корень.
2) Убедитесь, что существует `.github/workflows/pages.yml`.
3) Сделайте commit в ветку `main`.
4) Ссылка появится в разделе **Actions → Deploy to GitHub Pages** и **Settings → Pages**.

## Опционально: PWA
- Подключите в `<head>`: `<link rel="manifest" href="manifest.webmanifest">`
- Внизу `index.html` зарегистрируйте SW:
  `<script>if('serviceWorker' in navigator){navigator.serviceWorker.register('./service-worker.js')}</script>`
