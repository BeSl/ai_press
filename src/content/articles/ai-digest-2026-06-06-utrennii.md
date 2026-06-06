---
title: "AI-дайджест 6 июня 2026: Указ Трампа о 30-дневном допуске к frontier-моделям, Great American AI Act, Qwen3.7-Plus GA, гонка GPT-5.6 и Claude Sonnet 4.8"
description: "Свежий дайджест AI Press за 6 июня 2026: Трамп подписал executive order о добровольном 30-дневном госдоступе к frontier-моделям, в Конгресс внесён 269-страничный Great American AI Act с трёхлетним preemption штатных законов, Alibaba выкатил Qwen3.7-Plus в GA как мультимодального агента, OpenAI и Anthropic готовят GPT-5.6 и Claude Sonnet 4.8 к выпуску в середине июня, Anthropic расширил Project Glasswing, NVIDIA RTX Spark подбирается к первым отгрузкам, а закон Колорадо об AI стартует через 25 дней."
pubDate: 2026-06-06
author: "Редакция AI Press"
category: "Дайджест"
featured: true
readingTime: 7
tags: ["дайджест", "регулирование", "OpenAI", "Anthropic", "Alibaba", "NVIDIA", "Microsoft", "июнь 2026"]
---

Субботний дайджест AI Press за 6 июня 2026 года. Центральная история недели — резкий разворот регуляторного ландшафта в США: подписан президентский указ о добровольной передаче frontier-моделей государству на 30 дней до релиза, а в Конгрессе внесён самый объёмный за всю историю федеральный AI-проект. Параллельно индустрия готовит залп новых моделей в середине июня и продолжает гонку агентов.

## Указ Трампа о frontier-моделях: 30 дней до релиза

2 июня президент подписал executive order **«Promoting Advanced Artificial Intelligence Innovation and Security»**. Федеральным агентствам поручено выстроить рамку безопасного развёртывания frontier-моделей и процесс, в котором разработчики **добровольно** дают правительству ранний доступ к моделям сроком до **30 дней** до выкатки на доверенных партнёров.

Ключевые детали:

- Окно изначально обсуждалось в **90 дней**, в финале сокращено до 30 — компромисс между «нацбезопасным» и «дерегуляционным» крылом администрации.
- Прямо запрещено вводить обязательное лицензирование или preclearance — это просьба, не правило.
- Создаётся **AI cybersecurity clearinghouse** для обмена данными об уязвимостях, агентства разрабатывают бенчмарки кибер-способностей моделей.
- Засекреченный бенчмарк будет определять, какие модели вообще подпадают под «frontier» и попадают в эту схему.

Это самая большая смена курса с момента отмены предыдущего AI-EO: вместо чисто «pro-innovation» риторики теперь идёт явное переплетение AI и кибер-безопасности на федеральном уровне.

## Great American Artificial Intelligence Act

Конгрессмены **Jay Obernolte (R-CA)** и **Lori Trahan (D-MA)** опубликовали 269-страничный discussion draft — **Great American AI Act**, самая комплексная федеральная AI-рамка, выдвинутая на сегодняшний день. Заголовочное положение — **трёхлетний preemption** штатных законов, касающихся разработки frontier-моделей. Это прямой удар по фрагментации регулирования по штатам и по моделям вроде колорадского.

## 25 дней до Colorado AI Act

**Colorado Consumer Protections for Artificial Intelligence Act** — первый комплексный штатный AI-закон в США — вступает в силу **30 июня 2026**. До дедлайна 25 дней; преамбуляция в Great American AI Act, если пройдёт, его перекроет — но до выхода из дискуссионной стадии расходовать на это надежды нельзя. Энтерпрайз сейчас активно адаптирует процессы compliance под колорадскую модель.

## Anthropic: IPO-окно, Project Glasswing, Mythos

Anthropic подал на IPO 1 июня по оценке **$965 млрд** и ARR **$47 млрд**. Аналитики Fortune закладывают два крупнейших AI-листинга 2026 года — Anthropic и затем OpenAI. Project **Glasswing** расширен ещё на ~150 организаций в 15+ странах с прицелом на регулируемые рынки (энергетика, вода, здравоохранение, связь, hardware).

## OpenAI: листинг и GPT-5.6 на подходе

OpenAI готовит собственное IPO, в марте закрыт раунд на **$122 млрд при post-money $852 млрд**. Параллельно во внутреннем тестировании ходят утечки бенчмарков **GPT-5.6** с релиз-окном середины июня. Заявленные апгрейды — точность рассуждений на многошаговых агентных сценариях и улучшенная токен-эффективность. Если ценник на токены снизится так, как анонсируют утечки, GPT-5.6 пойдёт лоб в лоб с **Claude Sonnet 4.8** на production-агентных нагрузках.

## Microsoft MAI-серия: первая нативная reasoning-модель

Microsoft на Build представил линейку MAI:

- **MAI-Thinking-1** — первая reasoning-модель Microsoft, обучена с нуля на «чистых», коммерчески лицензированных данных без дистилляции из сторонних систем. Открытая претензия — независимость от OpenAI.
- **MAI-Code-1-Flash** — нативная coding-модель, конкурирующая с Codex и Claude Code.
- **MAI-Transcribe-1.5** обходит транскрипционные модели Gemini и OpenAI.
- **MAI-Image-2.5** обходит Gemini на Arena leaderboard.

Это часть тренда: гиперскейлеры один за другим переходят от рент-платы платформам к собственному стеку моделей.

## Alibaba: Qwen3.7-Plus в GA и давление по цене

20 мая Alibaba выкатил **Qwen3.7-Max** — frontier-модель с 1 млн токенов контекста, способную автономно работать **35 часов** и сделать **1 158 tool-calls** без оператора. На Terminal-Bench 2.0-Terminus она набирает **69.7%**, обгоняя DeepSeek-V4-Pro Max (67.9), Opus 4.6 Max (65.4) и Kimi K2.6 Thinking (66.7). Цена — **$2.50** за 1 млн input-токенов, в 6 раз дешевле Claude Opus 4.7.

В июне Alibaba выкатил в **General Availability** мультимодальный **Qwen3.7-Plus** — версия GA вышла из Preview и добавила vision-возможности к агентному фундаменту. Это второй за месяц удар по западной ценовой модели и серьёзный аргумент для бюджет-консервативных enterprise-команд.

## NVIDIA на Computex: RTX Spark на старте

NVIDIA на Computex 2026 в Тайбэе анонсировала **RTX Spark CPU** — суперчип для агент-PC, который Хуанг прямо называет «переизобретением PC» вместе с Microsoft. Это вход NVIDIA в потребительский ноутбучный рынок и прямой удар по Intel и AMD. Первые машины — у ASUS, Dell, HP, Lenovo, Microsoft Surface и MSI этой осенью; платформа проектируется под локальный запуск агентов.

Параллельно открыт большой набор **open-source agent skills и tools** для Omniverse, Cosmos, Alpamayo и Metropolis; CVPR 2026 в Денвере подтверждает масштаб NVIDIA в physical AI и нейрорендеринге.

## Биобезопасность и согласованная позиция фронта

Главы OpenAI, Anthropic, Google DeepMind и Microsoft AI выступили **единым фронтом** и попросили Конгресс срочно ужесточить правила продажи синтетической ДНК и РНК. Это первый случай, когда четвёрка публично выступает совместно по вопросу AI-сценарного оружия — и сигнал о том, что внутри индустрии всерьёз воспринимают риски двойного использования.

## Что смотреть на неделе

- **Релизы GPT-5.6 и Claude Sonnet 4.8** — ожидаются середина июня; первые ценники задают тон рынку enterprise-агентов на квартал.
- **Реакция AI-лабораторий на executive order** — кто подпишется на 30-дневное окно первым, кто откажется.
- **Прохождение Great American AI Act** через слушания и судьба preemption штатных законов.
- **Дедлайн Colorado AI Act 30 июня** — практика первых compliance-кейсов.
- **Первые отгрузки RTX Spark** и ценовая реакция Intel/AMD.

---

## Источники

- [Tom's Hardware — Trump signs AI EO seeking 30-day government access](https://www.tomshardware.com/tech-industry/artificial-intelligence/trump-signs-ai-executive-order-seeking-30-day-government-access-to-frontier-models-before-release)
- [The White House — Promoting Advanced AI Innovation and Security](https://www.whitehouse.gov/presidential-actions/2026/06/promoting-advanced-artificial-intelligence-innovation-and-security/)
- [NPR — Trump's new AI safety order seeks voluntary review](https://www.npr.org/2026/06/02/nx-s1-5844347/ai-safety-trump-executive-order)
- [CNBC — Trump executive order on AI](https://www.cnbc.com/2026/06/02/trump-executive-order-ai.html)
- [Scientific American — Trump's new AI EO drastically shifts stance](https://www.scientificamerican.com/article/trumps-new-ai-executive-order-drastically-shifts-the-administrations-stance-on-the-tech/)
- [BuildFastWithAI — AI News Today June 6, 2026](https://www.buildfastwithai.com/blogs/ai-news-today-june-6-2026)
- [Anti-Malware — ИИ-лидеры просят закрыть лазейку для биооружия](https://www.anti-malware.ru/news/2026-06-05-111332/50287)
- [Euronews — Anthropic files for IPO](https://www.euronews.com/business/2026/06/02/worlds-most-valuable-ai-start-up-anthropic-files-for-ipo-five-things-to-know)
- [Euronews — Microsoft launches its own AI models](https://www.euronews.com/next/2026/06/03/microsoft-launches-its-own-ai-models-to-take-on-openai-and-anthropic)
- [CNBC — Microsoft unveils MAI-Code-1-Flash](https://www.cnbc.com/2026/06/02/microsoft-unveils-new-ai-models-lessen-reliance-on-openai-lower-costs.html)
- [VentureBeat — Qwen3.7-Max can run 35 hours autonomously](https://venturebeat.com/technology/alibabas-proprietary-qwen3-7-max-can-run-for-35-hours-autonomously-and-supports-external-harnesses-like-anthropics-claude-code)
- [DigitalApplied — Qwen 3.7 Plus GA release](https://www.digitalapplied.com/blog/qwen-3-7-plus-alibaba-multimodal-agent-model-2026-release)
- [llm-stats — AI Updates Today (June 2026)](https://llm-stats.com/llm-updates)
- [Investing.com — Anthropic Mythos / Project Glasswing](https://www.investing.com/analysis/anthropic-mythos-expansion-opens-a-new-ai-cybersecurity-market-200681377)
