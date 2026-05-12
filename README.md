# AI·Пресса

Статический сайт-газета об искусственном интеллекте и автономных AI-агентах.
Собран на [Astro](https://astro.build), оформлен в стилистике советской газеты:
бумажный фон, серифные шрифты, приглушённый плакатный красный.

## Содержание

- 5 демо-статей на русском о AI-агентах (основы, фреймворки, мультиагенты, кейсы, будущее)
- Главная-передовица с фичерд-материалом и сеткой
- Страница «О газете»
- 404-страница в той же эстетике
- Авто-деплой на GitHub Pages через GitHub Actions

## Локальная разработка

```bash
# 1. Установите зависимости
npm install

# 2. Запустите dev-сервер
npm run dev
# → http://localhost:4321/ai_press

# 3. Сборка
npm run build
# результат в ./dist
```

Требуется Node.js 18 или новее.

## Структура

```
ai_press/
├── astro.config.mjs        # base: '/ai_press' для GitHub Pages
├── package.json
├── public/
│   └── favicon.svg
├── src/
│   ├── components/         # Header, Footer, ArticleCard
│   ├── layouts/            # BaseLayout, ArticleLayout
│   ├── pages/
│   │   ├── index.astro     # передовица
│   │   ├── about.astro
│   │   ├── 404.astro
│   │   └── articles/[...slug].astro
│   ├── content/
│   │   ├── config.ts       # Astro Content Collections
│   │   └── articles/       # 5 markdown-статей
│   └── styles/
│       └── global.css      # газетная стилистика
└── .github/workflows/
    └── deploy.yml          # автодеплой на GitHub Pages
```

## Как опубликовать на GitHub Pages

1. Залейте проект в репозиторий `BeSl/ai_press`:

   ```bash
   git init
   git add .
   git commit -m "Initial commit: AI Press static site"
   git branch -M main
   git remote add origin https://github.com/BeSl/ai_press.git
   git push -u origin main
   ```

2. В настройках репозитория откройте **Settings → Pages** и в разделе **Build and deployment** выберите источник **GitHub Actions**.

3. После пуша воркфлоу `deploy.yml` соберёт сайт и опубликует его. Адрес будет:

   ```
   https://besl.github.io/ai_press/
   ```

   Если ваш GitHub-username отличается — поправьте поле `site` в `astro.config.mjs`.

## Как добавить новую статью

Создайте новый markdown-файл в `src/content/articles/`, например `moy-novyy-material.md`:

```markdown
---
title: "Заголовок статьи"
description: "Краткое описание (используется как deck и в карточках)"
pubDate: 2026-05-20
author: "Иван Иванов"
category: "Категория"
tags: ["тег1", "тег2"]
featured: false        # true — статья поедет на передовицу
readingTime: 6
---

Текст статьи в Markdown.

## Подзаголовок

Поддерживаются цитаты, списки, код, картинки и так далее.
```

Сайт автоматически подберёт новый файл — ни в каких других местах ничего править не нужно.

## Стилистика

Палитра и шрифты заданы в `src/styles/global.css` через CSS-переменные. Поменяйте
`--paper`, `--ink`, `--red` — изменится весь сайт.

Шрифты загружаются из Google Fonts (Old Standard TT, PT Sans Narrow, Russo One)
и поддерживают кириллицу.
