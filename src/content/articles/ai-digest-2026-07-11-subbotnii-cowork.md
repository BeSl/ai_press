---
title: "AI-дайджест 11 июля 2026: GPT-5.6 в GA, ChatGPT Work бросает вызов Claude Cowork, Anthropic заключает мегасделку с Google и Broadcom"
description: "Суббота, 11 июля 2026: OpenAI выпустил семейство GPT-5.6 (Sol/Terra/Luna) в общий доступ и представил ChatGPT Work — прямой ответ на Claude Cowork; Anthropic анонсировала многогигаваттное партнёрство с Google и Broadcom; Claude Fable 5 вернулся в оборот и удерживает корону на SWE-Bench Pro; Together AI закрыла $800M Series C. Итог первой полной рабочей недели июля — в десяти сюжетах."
pubDate: 2026-07-11
author: "Редакция AI Press"
category: "Дайджест"
featured: false
readingTime: 7
tags: ["дайджест", "OpenAI", "Anthropic", "Google", "Broadcom", "GPT-5.6", "ChatGPT Work", "Claude Cowork", "Fable 5", "Together AI", "NVIDIA", "July 2026"]
sourceUrl: "https://llm-stats.com/llm-updates"
sourceName: "llm-stats.com"
---

К субботе, 11 июля 2026 года, индустрия закрывает первую полную рабочую неделю месяца сразу с несколькими сдвигами повестки: OpenAI довёл семейство GPT-5.6 до общего доступа и выкатил ChatGPT Work — свой ответ на Claude Cowork; Anthropic объявила о многогигаваттной сделке с Google и Broadcom; Claude Fable 5 вернулся из режима экспортного простоя и снова забирает корону на SWE-Bench Pro. Ниже — десять сюжетов, формирующих картину дня.

## 1. GPT-5.6 стал дефолтом ChatGPT

9 июля OpenAI перевела **GPT-5.6** из preview в общий доступ и одновременно сделала его моделью по умолчанию для ChatGPT. Семейство состоит из трёх моделей с астрофизическими именами: флагманский **Sol** для сложного reasoning, кода и cybersecurity; средний **Terra** — конкурент GPT-5.5 при вдвое меньшей цене; и самая быстрая и дешёвая **Luna**. Sol зафиксировал новый SOTA на Terminal-Bench 2.1, что уже отражается в первых независимых прогонах.

Для интеграторов сигнал прежний: цикл устаревания моделей у OpenAI укрепился на квартальном ритме, а production-контур обязан включать contract-test и собственный fallback-layer поверх дефолтной модели.

## 2. ChatGPT Work: OpenAI атакует Cowork-нишу

Главная премьера недели — **ChatGPT Work**. Продукт связывает чатбот, Codex и новый десктоп-клиент, добавляет hosted websites и позволяет собирать документы, презентации и сайты из одного окна на GPT-5.6. Позиционируется как прямой конкурент **Claude Cowork** — агентной среды Anthropic, запущенной в январе для планирования и автономного исполнения многошаговых задач.

Ключевое отличие OpenAI — упор на «умный офисный слой» с публикацией артефактов наружу. Ключевое отличие Anthropic — предсказуемость агента на длинных задачах и наличие сформированного корпоративного пресейла. Оба лагеря теперь окончательно продают одну и ту же вещь под разными этикетками.

## 3. GPT-Live: параллельный голосовой модуль

Вместе с ChatGPT Work в тот же цикл релизов вошёл **GPT-Live** — голосовой интерфейс, который слушает, думает и говорит одновременно, а не ждёт конца реплики. Модель умеет вставлять короткие «мгм» и «понял» прямо в поток речи собеседника — это первый массовый продукт с полностью duplex-архитектурой.

Для колл-центров и виртуальных ассистентов это принципиальное изменение: латентность больше не является главной характеристикой, ключевым становится качество естественного перебивания и рекавери после ошибок распознавания.

## 4. Anthropic × Google × Broadcom: несколько гигаватт под Claude

Anthropic **расширила стратегическое партнёрство с Google и Broadcom** на несколько гигаватт компьютерной мощности нового поколения. Сделка расписана на несколько лет и включает Trillium/Ironwood-класс TPU и заказные ускорители Broadcom. Ставка ясна: Anthropic отвязывается от единственного облачного якоря и получает конкуренцию поставщиков внутри собственного стека.

Одновременно компания подтверждает закупки будущих связок **NVIDIA Grace Blackwell** и **Vera Rubin** — то есть в контуре Claude 2027 года будут работать одновременно три семейства чипов.

## 5. Claude Fable 5 снова в проде

1 июля Anthropic **вернула Fable 5 из экспортного простоя**, снятого правительством США после трёхнедельной паузы. Модель немедленно вернула себе позицию top-1 по **SWE-Bench Pro** с показателем **80.3%** — на сегодня это лучший публично доступный результат по инженерному агентскому кодированию.

Практический вывод: команды, которые в июне временно переключались с Fable 5 на Opus 4.8 или GPT-5.5 для code-agent сценариев, уже перекладывают трафик обратно, но оставляют fallback-каналы как страховку от повторного экспортного окна.

## 6. Global Workspace внутри Claude

6 июля Anthropic опубликовала исследование, в котором обнаружила внутри Claude **небольшой карман активности, ведущий себя как «глобальное рабочее пространство»** — понятие из когнитивной науки для описания механизма, объединяющего восприятие, память и планирование. Модель, судя по всему, самостоятельно выделила это подпространство в ходе обучения.

Для интерпретируемости это существенный сигнал: если карман действительно ведёт себя как global workspace, инспектировать и корректировать его можно инструментами, аналогичными классическим probing-техникам, без переобучения всей модели.

## 7. Meta Muse Spark 1.1 — открытый preview

Meta открыла **публичный preview Muse Spark 1.1** — обновлённой модели для программирования, reasoning, tool-use, мультимодального понимания и агентских сценариев. Модель нацелена в ту же нишу, где сейчас конкурируют GPT-5.6 Terra и Claude Sonnet 5: массовые задачи с приличным потолком качества и агрессивной ценой инференса.

Для рынка это третья по счёту крупная модель, вышедшая в июле, — и первый большой релиз Meta после весенней серии сокращений в подразделении Superintelligence Labs.

## 8. Экономика недели: Together AI на $8.3 млрд, SambaNova закрыла $1 млрд

**Together AI** закрыла раунд Series C на **$800 млн** при пост-мани оценке **$8.3 млрд** — с ведущим Aramco Ventures и участием Vista Equity, General Catalyst, Emergence Capital, NVIDIA, March Capital, Pegatron и SentinelOne. Раунд подтверждает: рынок готов ставить премию на игроков, продающих оптимизированный инференс поверх открытых моделей.

Параллельно **SambaNova Systems** закрыла Series F на **$1 млрд** под лидерством General Atlantic (Intel Capital, GV, SoftBank Vision Fund 2). А **Prime Intellect** зафиксировал единорога — $130 млн Series A при оценке $1 млрд, лид — Radical Ventures. Общий вектор недели: капитал сконцентрирован в стеке compute-and-inference, а не в потребительских приложениях.

## 9. OpenAI Deployment Company купила Northslope

**OpenAI Deployment Company** объявила о покупке **Northslope** — второй applied-AI фирмы в портфеле подразделения с момента его запуска в мае. Northslope добавит команду forward-deployed engineers, которые встраиваются в корпоративные операции клиента и собирают AI-системы вокруг реальных бизнес-процессов, а не поверх абстрактных API.

Стратегия читается однозначно: OpenAI постепенно достраивает собственный консалтинг, чтобы не отдавать первую милю внедрений внешним интеграторам и Big Four.

## 10. Расстановка сил: ChatGPT 53.9%, Gemini 27.9%, Claude 9.2%

Свежая аналитика по июлю показывает распределение мирового веб-трафика между семью крупнейшими генеративными чатботами: **ChatGPT — 53.9%**, **Google Gemini — 27.9%**, **Anthropic Claude — 9.2%**. Оставшиеся ~9% делят Grok, Copilot, DeepSeek и Perplexity.

Ключевая динамика — рост Gemini относительно весны и стабилизация доли Claude, несмотря на трёхнедельное экспортное окно по Fable 5. Иначе говоря, корпоративный сегмент Anthropic компенсирует потери в консьюмерском веб-трафике.

---

## Что отслеживать дальше

- **Понедельник** — первые независимые бенчмарки GPT-5.6 Sol на Terminal-Bench 2.1 и SWE-Bench Pro в GA-варианте.
- **Вторник** — детальные раскрытия по сделке Anthropic × Google × Broadcom (расписания и валидация Broadcom ASIC).
- **Среда** — рыночная реакция NVIDIA на график поставок Grace Blackwell для Anthropic.
- **Четверг** — новые данные по adoption ChatGPT Work в enterprise-сегменте (пилоты Fortune 500).
- **Пятница** — итоги первого полного цикла отчётов по Muse Spark 1.1 в кодерских бенчмарках.

## Источники

- [AI Updates Today — July 2026 (llm-stats.com)](https://llm-stats.com/llm-updates)
- [LLM News Today — July 2026 (llm-stats.com)](https://llm-stats.com/ai-news)
- [AI Update, July 10, 2026: AI News and Views From the Past Week (MarketingProfs)](https://www.marketingprofs.com/opinions/2026/55247/ai-update-july-10-2026-ai-news-and-views-from-the-past-week)
- [OpenAI unveils long-awaited 'super app' as rivalry with Anthropic intensifies (CGTN)](https://news.cgtn.com/news/2026-07-10/OpenAI-unveils-super-app-as-rivalry-with-Anthropic-intensifies-1OF7nrvaglG/p.html)
- [AI News Recap: July 10, 2026 (NeuralBuddies)](https://www.neuralbuddies.com/p/ai-news-recap-july-10-2026)
- [OpenAI launches ChatGPT Work to challenge Anthropic with GPT-5.6 (Mezha)](https://mezha.net/eng/bukvy/d4880af1_openai_launches_chatgpt/)
- [OpenAI Release Notes — July 2026 (Releasebot)](https://releasebot.io/updates/openai)
- [Anthropic expands partnership with Google and Broadcom (Anthropic Newsroom)](https://www.anthropic.com/news/google-broadcom-partnership-compute)
- [Newsroom (Anthropic)](https://www.anthropic.com/news)
- [Venture Capital & Startup Funding Roundup, July 9, 2026 (Tech Startups)](https://techstartups.com/2026/07/09/venture-capital-startup-funding-roundup-july-9-2026-sequoia-khosla-ventures-y-combinator-a16z-accel/)
- [The Week's 10 Biggest Funding Rounds: AI Drives Another Spree Of Megadeals (Crunchbase News)](https://news.crunchbase.com/venture/biggest-funding-rounds-ai-marketing-robotics-baseten/)
- [July 2026 Top Generative AI Chatbots & LLMs by Market Share (Momentic)](https://momenticmarketing.com/blog/top-ai-chatbots)
