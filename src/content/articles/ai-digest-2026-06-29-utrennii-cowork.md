---
title: "AI-дайджест 29 июня 2026: GPT-5.6 расширяет preview, NVIDIA Vera уходит в первых клиентов, Anthropic закрывает инцидент, EU AI Act — 34 дня до часа Х"
description: "Утро понедельника, 29 июня 2026: OpenAI расширяет limited preview GPT-5.6 (Sol/Terra/Luna) в ChatGPT Plus/Pro/Team, NVIDIA Vera начинает поставки Anthropic, OpenAI, Microsoft Azure и Oracle, Anthropic готовит postmortem по инциденту 27 июня, Menlo Ventures поднял $3 млрд под AI-инфраструктуру, до core-обязательств EU AI Act — 34 дня."
pubDate: 2026-06-29
author: "Редакция AI Press"
category: "Дайджест"
featured: true
readingTime: 6
tags: ["дайджест", "OpenAI", "Anthropic", "NVIDIA", "GPT-5.6", "Gemini", "Claude", "EU AI Act", "Menlo Ventures", "June 2026"]
sourceUrl: "https://llm-stats.com/llm-updates"
sourceName: "llm-stats.com"
---

К утру понедельника, 29 июня 2026 года, индустрия открывает последнюю неделю июня сразу с тремя параллельными сюжетами: OpenAI расширяет limited preview GPT-5.6 (Sol / Terra / Luna), NVIDIA подтверждает первых клиентов компаньон-CPU Vera, а Anthropic закрывает инцидент 27 июня и обещает postmortem на этой неделе. Ниже — десять сюжетов, формирующих повестку дня.

## 1. GPT-5.6: «customer-by-customer» rollout идёт в ChatGPT

OpenAI расширяет limited preview семейства **GPT-5.6** — флагман **Sol**, балансировщик **Terra** (~2× дешевле GPT-5.5) и быстрая дешёвая **Luna**. Доступ в ChatGPT Plus/Pro/Team раскатывается на этой неделе, GA в API — «в ближайшие недели». Rollout согласован с CAISI, что подтверждает дефолтный сценарий тройного аудита перед публичным запуском.

Бизнес-сигнал: для интеграторов цикл устаревания моделей у OpenAI окончательно становится квартальным, и production-pipeline теперь обязан содержать contract-test и собственный fallback-layer.

## 2. NVIDIA Vera — первые поставки

NVIDIA подтвердила первых клиентов компаньон-CPU **Vera**: **Anthropic**, **OpenAI**, **Microsoft Azure** и **Oracle Cloud**. Vera синхронна со связкой Rubin / Rubin Ultra; именно эта пара ляжет в основу AI-фабрик 2027 года. Поставки идут параллельно с продолжающимся ramp-up Stargate-1 (Техас) и Helios (Аризона).

## 3. Anthropic закрывает инцидент 27 июня

После короткого incident-window 27 июня **Anthropic** возобновила доступ к флагманской модели, SLA восстановлены. Постмортем обещан на этой неделе; команда инфраструктуры готовит улучшения по rate-limit hot-path и автоматическим shadow-failover. Параллельно ускоряется внутренняя интеграция Opus 4.8 как дефолта для production-агентских сценариев.

## 4. Claude Mythos 5 — расширение списка лицензиатов

После пересмотра экспорт-контрольной директивы 26 июня **круг операторов критической инфраструктуры**, имеющих доступ к Mythos 5, расширен. **Fable 5** остаётся в режиме selective release, а ограничения по странам сохраняются. CAISI публикует обновлённый чек-лист требований: agentic deception under uncertainty, biothreat-related capability, autonomous cyber-ops.

## 5. Microsoft MAI-Reasoning-1 — заметный шаг по latency

Microsoft обновила preview **MAI-Reasoning-1**: задержка снижена на 22% относительно первого билда. Интеграция в GitHub Copilot Workspace раскатывается на всех пользователей: бесплатные аккаунты получают 50 reasoning-вызовов в сутки. На GPQA/MATH модель сохраняет паритет с GPT-5.5 при ~40% от inference-cost.

## 6. Apple Siri AI — Extensions для движков

Apple запускает в США и Японии **переключатель движков** (ChatGPT / Gemini / Claude) для Siri AI. Выбор — per-task, история диалогов остаётся локальной. Параллельно идут пилоты сторонних приложений App Store с **Apple Foundation Models** — поддержка Claude через фреймворк подтверждена и переходит из dev preview в production-стадию.

## 7. Google Gemini 3.5 Pro Deep Think — по умолчанию

**Gemini 3.5 Pro** получает контекст 2 млн токенов и режим **Deep Think** как дефолт для Pro-подписки. На коротких задачах модель автоматически возвращается в обычный режим reasoning, что снижает удельную стоимость токена при сохранении глубоких возможностей рассуждения.

## 8. Капитал: Menlo поднял $3 млрд, $4.68 млрд за неделю

**Menlo Ventures** закрыл два новых фонда на **$3 млрд** — Menlo Ventures XVII и Menlo Inflection IV; фокус — AI-инфраструктура и инференс-стеки. Итог недели по AI-сделкам: 23 раскрытых раунда на **$4.68 млрд** — пик квартала по числу транзакций. Из заметного: **Sail Research** ($80 млн seed + $450 млн Series A под лидерством Kleiner Perkins), **Alan** (€480 млн Series G), **Scaled Cognition** ($100 млн Series A), **Redo** ($81 млн Series B при оценке $1.25 млрд), **xCures** ($46 млн), **Hang Ten Systems** ($32 млн seed), **Seltz** ($12.5 млн seed).

## 9. IPO-окно: OpenAI и Anthropic выходят почти одновременно

**OpenAI**: Goldman Sachs и Morgan Stanley финализируют paperwork, таргет $730–800 млрд, окно — сентябрь–октябрь. **Anthropic**: $965 млрд post-money подтверждено, S-1 уже у регулятора, листинг — окно сентябрь–ноябрь. Впервые две фронтир-лаборатории идут на публичный рынок параллельно, и стратегические таблицы инвестбанков переписываются прямо сейчас.

## 10. EU AI Act: 34 дня до core-обязательств

До **2 августа 2026** вступают в силу high-risk и GPAI-обязательства **EU AI Act**. Еврокомиссия публикует финальные guidance во вторник. У Fortune 500 уже стал дефолтом тройной комплаенс-периметр **US / EU / CAISI** — отдельный раздел в RFP, отдельный owner в каждой команде закупок.

---

## Что отслеживать дальше

- **Понедельник** — расширение GPT-5.6 preview в Plus/Pro/Team.
- **Вторник** — финальные EU AI Act guidance по GPAI/high-risk.
- **Среда** — Anthropic postmortem по инциденту 27 июня.
- **Четверг** — OpenAI × Broadcom: подробности по поставкам в Stargate-1.
- **Пятница** — первые независимые бенчмарки MAI-Reasoning-1.

## Источники

- [AI Updates Today — June 2026 (llm-stats.com)](https://llm-stats.com/llm-updates)
- [LLM News Today — June 2026 (llm-stats.com)](https://llm-stats.com/ai-news)
- [Claude Updates by Anthropic — June 2026 (Releasebot)](https://releasebot.io/updates/anthropic/claude)
- [OpenAI Release Notes — June 2026 (Releasebot)](https://releasebot.io/updates/openai)
- [US government allows Anthropic limited release of Mythos (CNN Business)](https://www.cnn.com/2026/06/26/tech/anthropic-mythos-release)
- [OpenAI and Anthropic face new AI reality (CNBC, 26.06.2026)](https://www.cnbc.com/2026/06/26/openai-anthropic-new-ai-spending-reality-as-users-shift-to-efficiency.html)
- [AI News Today — June 26, 2026 (Build Fast With AI)](https://www.buildfastwithai.com/blogs/ai-news-today-june-26-2026)
- [AI Startup Funding News — June 2026 (Mean.ceo)](https://blog.mean.ceo/ai-startup-funding-news-june-2026/)
- [Google Poised to Lose Two More AI Staffers to Anthropic (Bloomberg)](https://www.bloomberg.com/news/articles/2026-06-24/google-poised-to-lose-two-more-high-profile-ai-staffers-to-anthropic)
- [June 2026 AI Launch Wave: Builder's Decision Map (WaveSpeed)](https://wavespeed.ai/blog/posts/june-2026-ai-launch-wave/)
