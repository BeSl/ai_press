# ai-press-api — Cloudflare Worker для лайков

Лёгкий API на Cloudflare Workers + KV. Хранит счётчики лайков для статей AI·Прессы. Без авторизации — клиент сам помнит свой клик в localStorage.

## Эндпойнты

```
GET  /stats?slugs=a,b,c
     → { "a": { "likes": 5 }, "b": { "likes": 0 }, "c": { "likes": 12 } }

POST /like   { "slug": "...", "action": "add" | "remove" }
     → { "slug": "...", "likes": N }
```

CORS открыт для `https://besl.github.io` и localhost — поправьте `ORIGINS` в `src/worker.js`, если домен другой.

## Установка (5 минут)

1. Зарегистрируйтесь на https://dash.cloudflare.com (бесплатно).
2. Поставьте wrangler — CLI Cloudflare:

   ```bash
   npm install -g wrangler
   wrangler login        # откроет браузер для подтверждения
   ```

3. В этой папке создайте KV-namespace:

   ```bash
   wrangler kv namespace create STATS
   wrangler kv namespace create STATS --preview
   ```

   Каждая команда напечатает блок вида:

   ```
   [[kv_namespaces]]
   binding = "STATS"
   id = "abc123..."
   ```

   Скопируйте оба `id` (один обычный, один preview) в `wrangler.toml` — на место `REPLACE_WITH_KV_ID` и `REPLACE_WITH_KV_PREVIEW_ID`.

4. Задеплойте:

   ```bash
   wrangler deploy
   ```

   В ответ получите URL вида `https://ai-press-api.<ваш-аккаунт>.workers.dev`. Это и есть ваш API.

5. Откройте в браузере `https://<ваш-url>/stats?slugs=test` — должны увидеть `{"test":{"likes":0}}`.

## Подключение к сайту

В репозитории `BeSl/ai_press` откройте файл `src/config.ts` и впишите URL:

```ts
export const API_URL = "https://ai-press-api.<ваш-аккаунт>.workers.dev";
```

Закоммитьте, GitHub Actions пересоберёт сайт, и сердечки оживут.

## Лимиты бесплатного тарифа

- 100 000 запросов воркера в день
- 100 000 чтений KV в день
- **1 000 записей KV в день** ← это ограничение по лайкам

Каждый клик «лайк»/«анлайк» — это 1 запись. Если в сутки больше 1000 кликов, нужен платный план (~$5/мес) или Durable Objects.

## Локальная разработка

```bash
wrangler dev          # запускает локально на http://localhost:8787
```

В `ai_press/src/config.ts` временно поставьте `API_URL = "http://localhost:8787"`.

## Удаление

```bash
wrangler delete       # удалит воркер
wrangler kv namespace delete STATS
```
