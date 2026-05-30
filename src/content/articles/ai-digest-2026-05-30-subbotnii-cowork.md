---
title: "AI-дайджест 30 мая 2026, суббота: Anthropic стоит $965 млрд, OpenAI выпускает Frontier Governance, Skild AI поглощает Zebra Robotics"
description: "Свежий субботний обзор AI-новостей: Anthropic закрыл Series H на $65 млрд с оценкой $965 млрд и обогнал OpenAI; OpenAI обнародовал Frontier Governance Framework; Skild AI скупил роботизационный бизнес Zebra; Penn создал гибридный световой ускоритель для AI; NVIDIA и ServiceNow расширяют альянс по автономным агентам."
pubDate: 2026-05-30
author: "Редакция AI Press"
category: "Дайджест"
featured: true
readingTime: 7
tags: ["дайджест", "Anthropic", "OpenAI", "Skild AI", "NVIDIA", "ServiceNow", "Penn", "май 2026"]
sourceUrl: "https://www.axios.com/2026/05/28/anthropic-ai-fundraising-openai"
sourceName: "Axios"
---

Конец мая 2026-го запомнится отрасли как момент, когда баланс сил между лидирующими AI-лабораториями ощутимо сместился. Anthropic закрыл рекордный раунд, OpenAI отвечает рамкой управления frontier-моделями, а инфраструктурный фронт — от роботизации складов до фотонных ускорителей — продолжает разогреваться. Собрали девять сюжетов, на которые стоит обратить внимание перед началом новой рабочей недели.

## 1. Anthropic: $65 млрд Series H, оценка $965 млрд — впервые выше OpenAI

28 мая Anthropic объявил о закрытии Series H на **$65 млрд** при пост-мани оценке **$965 млрд**. Раунд возглавили Altimeter Capital, Dragoneer, Greenoaks и Sequoia Capital. Это один из крупнейших частных раундов в истории технологий — Anthropic впервые в публичной оценке обогнал OpenAI ($730 млрд по последней сделке).

В сопроводительном пресс-релизе компания подтвердила, что **годовой run-rate выручки в этом месяце превысил $47 млрд**. Деньги пойдут на исследования безопасности и интерпретируемости, расширение compute-парка и масштабирование продуктов Claude и партнёрской программы.

Для билдеров главное — это сигнал, что Anthropic закрепляется как самостоятельный полюс рынка, а не «второй номер» в дуополии с OpenAI. Можно ожидать ускорения релизного цикла Claude и более агрессивных корпоративных контрактов.

## 2. OpenAI: Frontier Governance Framework и Codex для самонастраивающихся налоговых агентов

29 мая OpenAI опубликовал **Frontier Governance Framework** — структуру оценки, мониторинга и публичной отчётности по моделям передового уровня. Документ заявляет правила пре-деплоймент тестирования, обязательства перед регуляторами и план раскрытия результатов red team.

Параллельно, 28 мая, инженерная команда показала кейс **self-improving tax agents**, построенный на Codex. Агент анализирует свои собственные ошибки в кодовой базе налогового расчёта и предлагает патчи, которые далее проходят детерминированный тест-сьют. Это второй большой пример «self-modifying production agents» после анонсов Microsoft Copilot.

Gartner также назвал OpenAI **лидером в enterprise coding agents** — формально закрепляя позицию Codex и ChatGPT Enterprise против Anthropic Claude Code и Cursor.

## 3. Google I/O 2026 и стратегия Gemini как «слоя действий»

На I/O 2026 (прошла в этом месяце) Google почти полностью сфокусировался на AI. Главное:

- Поисковая строка переведена в **двойной режим**: классический короткий запрос плюс развёрнутый чат-формат.
- YouTube получает **«Ask YouTube»** — вопрос → текстовый ответ плюс ссылки на релевантные видео.
- Gemini позиционируется как **cross-platform intelligence layer**, проникающий в Search, Android, Chrome, Workspace и YouTube — с акцентом на агентность и автоматизацию задач.

В тот же день Google показал семейство **Gemma 4** — открытые модели, заточенные под «advanced reasoning» и агентские workflow. Высокий «intelligence-per-parameter» позиционирует Gemma 4 как прямого конкурента Mistral и Llama-семейству для on-prem развёртываний.

## 4. AMD «Venice»: первое HPC-устройство на 2-нм TSMC

AMD сообщил о старте серийного производства **6-го поколения EPYC «Venice»** на 2-нм процессе TSMC. Это **первый** высокопроизводительный продукт, попавший в массовое производство на этом узле. Для AI-инфраструктуры это означает дальнейшее снижение TCO для inference-кластеров и обновление цикла обновления гипермасштабных дата-центров до конца 2026 года.

## 5. Skild AI поглощает Robotics Automation у Zebra

Skild AI закрыл сделку по покупке роботизационного бизнеса у **Zebra Technologies**, объединив гуманоидов, AMR-платформы, манипуляторы и оркестрацию в один сквозной AI-стек для складской автоматизации. Это первая end-to-end «AI-native» вертикаль в логистике, и она напрямую конкурирует с предложениями Amazon Robotics, Symbotic и AutoStore.

Параллельно отрасль обсуждает **π0.7** — первую foundation-модель для роботов с количественно подтверждённым zero-shot переносом на ранее не виденные задачи и тела. Это меняет инженерную экономику: до сих пор каждый новый SKU/каждая новая платформа требовали отдельной фазы fine-tuning.

## 6. NVIDIA × ServiceNow: Project Arc — десктоп-агент с долгой памятью

На ServiceNow Knowledge 2026 NVIDIA и ServiceNow расширили партнёрство. Главное объявление — **Project Arc**: «long-running self-evolving desktop agent» для knowledge workers. Архитектурно — гибрид локально работающей модели (на NVIDIA-чипах) и облачной агентской платформы ServiceNow.

Отдельный сигнал из enterprise-сегмента: Salesforce Agentforce достиг **29 000 закрытых сделок** с **$800M ARR** с момента запуска; Microsoft Copilot Studio — **160 000 организаций** и более **400 000 кастомных агентов**. Гипотеза «агенты пройдут через 2026 в production» подтверждается на цифрах.

## 7. Anthropic + Bill & Melinda Gates Foundation: $200 млн на 4 года

Anthropic и Gates Foundation объявили о партнёрстве на **$200 млн в течение 4 лет** для развития AI-инструментов в здравоохранении, образовании, сельском хозяйстве и экономическом развитии регионов с ограниченным доступом к технологиям. Это первый крупный фондово-исследовательский контракт между frontier-лабораторией и one of the largest philanthropic organizations.

В тот же ряд: **Novo Nordisk** и OpenAI запускают сквозную AI-интеграцию — от drug discovery и клинических испытаний до производства и коммерческих операций, полное развертывание — до конца 2026 года. Health intelligence укрепляется как одна из ключевых enterprise-вертикалей года.

## 8. Penn: гибридный «свет-материя» ускоритель для AI-вычислений

Исследовательская команда **Университета Пенсильвании** 18 мая представила гибридный quasi-particle (свет + материя), который потенциально позволяет на порядки ускорить AI-вычисления при кратно меньшем энергопотреблении. Прямой путь к промышленному применению пока не объявлен, но это вторая за месяц значимая публикация о потенциальной альтернативе традиционным GPU — после анонсов аналогового AI от IBM и Cerebras.

NASA параллельно тестирует новое поколение **радиационно-стойких чипов** для глубокого космоса с производительностью «в сотни раз выше» текущих spaceflight-стандартов — это открывает окно для автономной обработки на борту, без обязательной связи с Землёй.

## 9. Регуляторика: США давят на pre-release тестирование, xAI и Microsoft согласились

США усиливают переговорное давление на лаборатории: **xAI** и **Microsoft** официально согласились предоставлять регуляторам ранний доступ к моделям до публичного релиза. EU ведёт параллельный трек с Anthropic. UK AISI выпустил обновлённые red-teaming-гайдлайны накануне Google I/O.

Структурный вывод: фронтир переходит из режима «move fast and break things» в режим регулируемой инфраструктуры. Это +1–2 недели между анонсом и API-доступностью, но снижение комплаенс-риска для enterprise-покупателя.

## Что смотреть на следующей неделе

- **Закрытие сделки Amazon × OpenAI на $10 млрд** — переговоры на финальной стадии, реструктуризация эксклюзива с Microsoft уже формально проведена.
- **Финальная ревизия EU AI Act Omnibus** — ожидается публикация в первой декаде июня.
- **Anthropic Claude 4.7 и/или Claude Code обновление** — логичный следующий шаг после закрытия Series H.

## Источники

- Anthropic Series H и оценка $965 млрд — [Axios](https://www.axios.com/2026/05/28/anthropic-ai-fundraising-openai), [Bloomberg](https://www.bloomberg.com/news/articles/2026-05-28/anthropic-raises-at-965-billion-valuation-eclipsing-openai).
- OpenAI Frontier Governance Framework и Codex tax agents — [OpenAI News](https://openai.com/news/).
- Google AI-стратегия и Gemma 4 — [Axios: How Google plans to win the AI war](https://www.axios.com/2026/05/21/google-ai-anthropic-openai-war).
- AMD Venice 2 нм, AI-инвестиции, Skild AI — [Crescendo: Latest AI News](https://www.crescendo.ai/news/latest-ai-news-and-updates), [devFlokers](https://www.devflokers.com/blog/ai-tech-breakthroughs-may-2026-developments).
- NVIDIA × ServiceNow, Salesforce/Microsoft метрики — [MarkTechPost: Best Enterprise Agentic AI Platforms 2026](https://www.marktechpost.com/2026/05/19/best-enterprise-level-agentic-ai-platforms-for-2026/).
- Penn quasi-particle и NASA-чип — [ScienceDaily: AI News](https://www.sciencedaily.com/news/computers_math/artificial_intelligence/).
- Регуляторика и pre-deployment тестирование — [imFounder: 7 Explosive AI Updates](https://imfounder.com/science-tech/ai/ai-updates-may-2026/).
