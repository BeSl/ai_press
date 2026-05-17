---
title: "AI-дайджест 17 мая 2026 (16:07 UTC, cowork scheduled): ElevenLabs пробил $500M ARR, OpenAI Realtime API GA, Claude Code лимиты ×2"
description: "Воскресный вечерний срез: ElevenLabs перешагнул $500 млн ARR и закрыл Series D с BlackRock и NVIDIA, OpenAI вывел Realtime API в GA с тремя голосовыми моделями, Anthropic удвоил лимиты Claude Code после сделки с SpaceX Colossus, на горизонте — Google I/O 2026 (19 мая)."
pubDate: 2026-05-17
author: "Редакция AI Press"
category: "Дайджест"
featured: false
readingTime: 5
tags: ["дайджест", "ElevenLabs", "OpenAI", "Anthropic", "Claude Code", "Realtime API", "voice AI", "май 2026"]
---

Сводка свежих AI-новостей по состоянию на воскресенье, 17 мая 2026 года, ~16:07 UTC. Подготовлено автоматическим cowork-скриптом по открытым источникам.

## ElevenLabs пробил $500M ARR и закрыл Series D

ElevenLabs официально перешагнул рубеж **$500 млн annual recurring revenue**, прибавив за первые четыре месяца 2026 года около $150 млн ARR (рост с $350M до $500M+). Параллельно компания закрыла третий транш **Series D** на сумму около **$500 млн**, оценка — порядка **$11 млрд**.

В синдикат вошли BlackRock, Wellington Management, NVentures (NVIDIA), Santander, D. E. Shaw, Schroders, а также медийные имена — Jamie Foxx, Eva Longoria, Hwang Dong-hyuk и Matthew McConaughey. Сигнал рынку: голосовой AI окончательно выходит из категории «вертикальная фича» и превращается в самостоятельную платформенную ставку, сопоставимую по интересу институционалов с LLM-лабораториями второго эшелона.

## OpenAI: Realtime API в GA, три новые голосовые модели

OpenAI объявила о переводе **Realtime API** в режим **General Availability** и выпустила одновременно три модели:

- **GPT-Realtime-2** — голосовой агент уровня рассуждений GPT-5 с окном контекста 128K;
- **GPT-Realtime-Translate** — синхронный речевой перевод speech-to-speech;
- **GPT-Realtime-Whisper** — стриминговая транскрипция.

Прямое следствие: рынок voice infrastructure поляризуется. ElevenLabs делает ставку на качество голоса и медиапродукт, OpenAI — на «голосовой ChatGPT» как универсальный интерфейс к моделям и агентам. Для интеграторов это означает выбор между «топовой студийной озвучкой» и «единым стеком GPT» уже на этапе архитектуры решения.

## Anthropic: лимиты Claude Code удвоены, Colossus 1 онлайн

С 6 мая 2026 года Anthropic удвоила 5-часовые лимиты **Claude Code** для тарифов Pro, Max, Team и Enterprise (seat-based) и убрала ограничения «peak hours» на Pro/Max. Параллельно Tier 1 API получил рост максимального input tokens/min на **1500%**, output tokens/min — на **900%**.

Источник новых мощностей — сделка с **SpaceX**: Anthropic получает доступ ко всей вычислительной ёмкости дата-центра **Colossus 1** с приростом более **300 МВт** в течение месяца. Free-тариф под удвоение не попал; weekly cap остался без изменений.

Тактический эффект: разработчики, которые упирались в 5-часовое окно Claude Code, получают ×2 буфер; стратегический — Anthropic переходит из режима «дефицит компьюта» в режим «избыток мощностей» аккурат перед Code with Claude.

## Разогрев перед Google I/O 2026 (19 мая)

До открытия Google I/O — двое суток. Консенсус ожиданий:

- новый класс **Gemini** (обсуждается ветка Gemini 3.x) с **Omni**-режимом — единый мультимодальный поток (текст, изображение, аудио, видео в реальном времени);
- глубокая интеграция **Gemini Intelligence** в Android (анонсы вокруг Android 17): ассистент «прыгает» между приложениями, видит экран и доводит задачи до конца;
- развитие **Project Mariner** (управление браузером) и обновление **Android XR**.

Главный нарратив Google — переход «от ОС к Intelligence System» до анонсов **Apple Intelligence** на WWDC 2026.

## Корпоративный AI: коротко

- **OpenAI Deployment Company** (DeployCo, $4 млрд) и поглощение Tomoro закрепляют курс на industrial deployment GPT-моделей внутри энтерпрайза; традиционные SI-консалтинги (Accenture, Deloitte, BCG X) теперь имеют прямого вертикально интегрированного соперника от вендора фронтирной модели.
- **PwC × Claude** — Anthropic стал ядром технологического стэка PwC для редизайна корпоративных функций клиентов.
- **Anthropic × Gates Foundation** — $200 млн на применение AI к глобальному здравоохранению и устойчивому развитию.

## Регуляторика и общественные настроения

- В США оформилась практика **pre-release safety review**: крупные лаборатории (включая Microsoft и xAI) согласились предоставлять регуляторам ранний доступ к моделям до публичного релиза. CAISI получает право аудита Google, Microsoft и xAI до релиза.
- Новый опрос **Gallup**: **71% американцев** против размещения дата-центров рядом со своим жильём — оппозиция кросс-партийная, что повышает политическую цену каждого нового AI-кампуса.

## Безопасность и инфраструктура

- **Mandiant M-Trends 2026**: 28,3% CVE эксплуатируются в первые 24 часа после раскрытия — AI-ассистированные эксплойты обгоняют патчи.
- **Cloudflare** сокращает ~20% штата на фоне роста внутреннего использования AI на 600% за квартал; доля коммитов с участием AI выросла с 14% в декабре до 71% в апреле.

## Что смотреть на этой неделе

1. **19 мая — Google I/O 2026.** Новый класс Gemini, Omni-режим, Android × Gemini Intelligence, Mariner, Android XR.
2. **Code with Claude (Сан-Франциско).** Возможный анонс «Orbit» — проактивного агента Anthropic.
3. **WWDC 2026 (превью).** Сигналы об открытии Apple Intelligence для Gemini и Claude.
4. **Voice AI.** Реакция рынка на одновременный двойной апдейт от ElevenLabs и OpenAI Realtime API.

---

*Источники: OpenAI Newsroom, Anthropic News, ElevenLabs Blog, Engadget, 9to5Google, TechCrunch, MarketingProfs (AI Update 15.05.2026), Solutions Review (AI News, неделя 8 мая), Mandiant M-Trends 2026, Stanford HAI AI Index 2026, Gallup. Дайджест сформирован автоматически в рамках расписания cowork-скрипта ai_press.*
