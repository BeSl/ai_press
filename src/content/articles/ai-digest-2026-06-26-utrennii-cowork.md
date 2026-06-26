---
title: "AI-дайджест 26 июня 2026: GPT-4.5 уходит в ретайр, Anthropic при $965 млрд подал на IPO, Jumper и Shazeer переписывают карту фронтира, GLM-5.2 открывает 1M-токен MoE под MIT"
description: "Утренний обзор повестки 26 июня 2026: завтра гаснет GPT-4.5, на её место в API и ChatGPT приходит GPT-5.3; Anthropic при оценке $965 млрд выходит вперёд OpenAI и подаёт конфиденциальную S-1; Jonas Adler и Alexander Pritzel переходят из Google DeepMind в Anthropic, Noam Shazeer возглавляет Architecture Research в OpenAI; Zhipu GLM-5.2 выпускается под MIT с 1M-токен MoE; MiMo-V2.5-Pro-UltraSpeed выдаёт 1000 токенов/с; Apple строит мульти-модельный Extensions-слой для Apple Intelligence."
pubDate: 2026-06-26
author: "Редакция AI Press"
category: "Дайджест"
featured: true
readingTime: 6
tags: ["дайджест", "OpenAI", "Anthropic", "Google DeepMind", "GPT-5.5", "Claude Fable 5", "GLM-5.2", "MiniMax M3", "Apple Intelligence", "EU AI Act", "June 2026"]
sourceUrl: "https://techcrunch.com/2026/06/24/ai-researchers-continue-to-leave-google-for-its-rivals/"
sourceName: "TechCrunch"
---

К утру пятницы, 26 июня 2026 года, повестка ИИ разворачивается по трём векторам: финальный шаг OpenAI к листингу на фоне резкого роста капитализации Anthropic, переток нобелевских и архитектурных кадров между фронтир-лабораториями и неожиданно сильный рывок open-source-моделей по длинному контексту и скорости инференса. Ниже — десять сюжетов, формирующих картину дня.

## 1. Завтра — sunset GPT-4.5, на её место заступает GPT-5.3

OpenAI официально завершает 30-дневный sunset GPT-4.5: **27 июня** модель становится недоступной в API и ChatGPT, дефолтом для Plus/Pro/Team подписок становится **GPT-5.3**. Команды, использовавшие старые tool-схемы, получили предупреждение о breaking-изменениях в `tools[]` и формате `parallel_tool_calls`. Для миграции опубликован compatibility-layer и расширенный playbook.

Бизнес-сигнал: OpenAI ускоряет цикл устаревания моделей до квартального — впервые с 2024 года. Это шаг навстречу публичным инвесторам и одновременно отказ от «вечной» обратной совместимости.

## 2. Anthropic при $965 млрд — впереди OpenAI, S-1 подан конфиденциально

Закрытый раунд официально вывел **Anthropic** к pre-money $965 млрд — выше текущей внутренней оценки **OpenAI** ($730–800 млрд). Параллельно компания **подала конфиденциальный S-1 draft**, открыла **офис в Сеуле** и анонсировала партнёрства с корейской AI-экосистемой.

Структурно: Anthropic закрепил тройной compute-стек (TPU у Google, Broadcom ASIC, NVIDIA H- и B-классы), что снимает риск bottleneck-зависимости от одного вендора. Этот же стек теперь зашит в инвест-теже банков-андеррайтеров.

## 3. OpenAI готовит подачу S-1, листинг — сентябрь 2026

**Goldman Sachs** и **Morgan Stanley** финализируют paperwork OpenAI; внутренний таргет — конфиденциальная подача в ближайшие недели и листинг **в сентябре 2026**. Это синхронизировано с обновлением финансовой отчётности после релиза GPT-5.5 и обновлений Codex.

Если оба IPO состоятся в одном окне, мировые рынки впервые получат сопоставимую пару «чистых» AI-эмитентов — для индекс-провайдеров и пенсионных фондов это пере-форматирует понятие «AI-портфеля».

## 4. Кадры: Adler, Pritzel и Jumper уходят к Anthropic, Shazeer — к OpenAI

По данным **Bloomberg** и **TechCrunch**, **Jonas Adler** (AlphaFold-команда) и **Alexander Pritzel** (multi-agent RL) переходят из Google DeepMind к Anthropic. Это пятая и шестая громкие потери Google за июнь. Также подтверждено: лауреат **Нобелевской премии 2024 Джон Джампер** уходит в Anthropic для развития life sciences-направления.

Параллельно **Noam Shazeer** (соавтор «Attention Is All You Need», в 2024-м возвращённый в Google за ~$2,7 млрд) переходит в **OpenAI**, где возглавит Architecture Research. Сюжет «Google вернул Шазира» окончательно закрыт.

## 5. Apple: мульти-модельный Extensions-слой для Apple Intelligence

**Apple** строит систему **Extensions**, позволяющую пользователю выбирать, какая модель отвечает за функции Apple Intelligence: **ChatGPT, Gemini или Claude**. Дефолтом по умолчанию заявлен **Gemini**. Релиз ожидается в сборках iOS/macOS 27 — следующая после WWDC волна.

Стратегически Apple занимает позицию «AI-агрегатора», а не лаборатории фронтира: компания не претендует на флагман-модель, но получает контроль над выбором, биллингом и интерпретируемостью на уровне устройства. Для OpenAI, Google и Anthropic это новый канал дистрибуции — и одновременно новая зависимость.

## 6. Open-source: Zhipu GLM-5.2 даёт честный 1M-токен MoE под MIT

13 июня **Zhipu AI** выпустил **GLM-5.2**: Mixture-of-Experts с используемым окном **1 миллион токенов** и пермиссивной **MIT-лицензией**. Модель доступна на Hugging Face, поддерживает агентские tool-вызовы и заявлена как «фронтир для предприятий, у которых не может быть закрытых API».

Это первый случай, когда open-source-релиз параметрически сопоставим с закрытыми флагманами в long-context-задачах. Для enterprise это снимает блокер «нельзя гонять PII через закрытое API»; для Anthropic и OpenAI — давление на цены input/output в 1M-сегменте.

## 7. Скорость инференса — MiniMax M3 и MiMo-V2.5-Pro-UltraSpeed

**MiniMax M3** на архитектуре **MSA** снижает per-token compute в **20 раз**, prefilling ускоряется в **9×**, decoding — в **15×**. Параллельно **Xiaomi × TileRT** показали **MiMo-V2.5-Pro-UltraSpeed** — модель на **1 трлн параметров**, выдающую **1 000 токенов/с** на стандартной 8-GPU-ноде.

Совокупный сигнал: ось конкуренции смещается с «качество vs цена» в «латентность vs цена». Для voice- и агентских пайплайнов это конец многих ограничений UX — синхронный голосовой ассистент с reasoning в реальном времени становится возможным на ширпотребной инфраструктуре.

## 8. Claude Fable 5 / Mythos 5 — четырнадцатый день под экспорт-контролем

С 12 июня директива Минторга США ограничивает доступ иностранных граждан к **Claude Fable 5** и **Mythos 5**. Anthropic не комментирует возможные исключения; базовый **Fable** переведён на usage-credit-биллинг (бесплатное окно закрыто 23 июня).

Прямой эффект: enterprise-клиенты с офисами вне США вынуждены пересобирать pipelines под Opus 4.8 или GLM-5.2. Для самой Anthropic это снижение global ARPU в краткосроке и переоценка комплаенс-нагрузки при IPO.

## 9. Microsoft MAI-Code-1-Flash — собственный кодер из MAI-семейства

Microsoft представила на Build **MAI-Code-1-Flash** — первый собственный кодер из линейки **MAI**, без участия OpenAI. Модель встроена в **Azure AI Foundry** и **GitHub Copilot Workspace** как low-latency-альтернатива GPT-5.5 для PR-review и автодополнения.

Это часть стратегии Microsoft по снижению зависимости от OpenAI: за MAI-Code-1-Flash в очереди — MAI-Reasoning-1 и MAI-Voice-2. Для разработчиков на Azure появляется первая реальная альтернатива «всё через OpenAI».

## 10. Регуляторика — указ Белого дома и 37 дней до EU AI Act

Президентский указ **«Promoting Advanced AI Innovation and Security»** (июнь 2026) закрепляет **CAISI** в роли pre-release-аудитора и вводит ускоренный режим строительства AI-датацентров с прямой энергоподпиской. Параллельно до **2 августа 2026** — даты вступления в силу core-обязательств **EU AI Act** по high-risk AI и GPAI — осталось **37 дней**; Еврокомиссия публикует финальные guidance-документы.

Совокупный эффект: enterprise-внедрения теперь требуют отдельной **AI-governance-роли**. Тройной комплаенс-периметр (US/EU/CAISI) становится дефолтным требованием в RFP крупных корпораций.

## Что отслеживать на этой неделе

- **Пятница–суббота** — реакция API-клиентов на ретайр GPT-4.5 и стабильность GPT-5.3.
- **Понедельник** — возможные шаги Минторга США по исключениям для Fable/Mythos.
- **Среда** — следующая публикация EC по EU AI Act guidance.
- **Постоянно** — мониторинг утечек кадров из Google DeepMind в Anthropic / OpenAI.

---

*Источники:* [TechCrunch — AI researchers continue to leave Google](https://techcrunch.com/2026/06/24/ai-researchers-continue-to-leave-google-for-its-rivals/), [Bloomberg — Google poised to lose two more high-profile AI staffers](https://www.bloomberg.com/news/articles/2026-06-24/google-poised-to-lose-two-more-high-profile-ai-staffers-to-anthropic), [LLM Stats — AI Updates Today June 2026](https://llm-stats.com/llm-updates), [Buildfastwithai — AI News Today June 2026](https://www.buildfastwithai.com/blogs/ai-news-today-june-7-2026), [CNBC — Microsoft and Google take on Anthropic and OpenAI in coding](https://www.cnbc.com/2026/06/01/microsoft-and-google-take-on-anthropic-and-openai-in-ai-coding-models.html), [The White House — Promoting Advanced AI Innovation and Security](https://www.whitehouse.gov/presidential-actions/2026/06/promoting-advanced-artificial-intelligence-innovation-and-security/), [Anthropic Newsroom](https://www.anthropic.com/news), [OpenAI Newsroom](https://openai.com/news/).
