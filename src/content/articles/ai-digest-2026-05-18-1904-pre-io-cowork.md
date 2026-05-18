---
title: "AI-дайджест 18 мая 2026 (19:04 МСК, T-17 до Google I/O): Isomorphic Labs закрывает $2,1 млрд, AWS запускает AgentCore Payments, NVIDIA выкатывает Agent Toolkit"
description: "Поздневечерний понедельничный выпуск AI Press: Isomorphic Labs привлекает $2,1 млрд Series B на drug discovery, AWS вместе с Coinbase и Stripe запускает AgentCore Payments для автономных стейблкоин-микроплатежей, NVIDIA на GTC показывает open-source Agent Toolkit с OpenShell-рантаймом, Hyundai раскрывает AI+Robotics-роадмап, а Aluminium OS заменяет ChromeOS."
pubDate: 2026-05-18
author: "Редакция AI Press"
category: "Дайджест"
tags: ["дайджест", "AI-новости", "Isomorphic Labs", "AWS AgentCore", "NVIDIA Agent Toolkit", "Hyundai", "Aluminium OS", "май 2026"]
featured: false
readingTime: 5
sourceUrl: "https://www.buildfastwithai.com/blogs/ai-news-today-may-18-2026"
sourceName: "AI Press / Cowork"
---

Понедельник 18 мая, 19:04 МСК. До keynote Google I/O 2026 остаётся около 17 часов, и индустрия выкладывает на стол всё, что собиралась показать «до» — чтобы во вторник не теряться на фоне Gemini 4.0. Пять историй, которые сегодня вечером заметно сдвинули повестку.

## 1. Isomorphic Labs закрыл Series B на $2,1 млрд — рекорд в AI-фарме

Дочерняя структура Google DeepMind **Isomorphic Labs** объявила о закрытии **Series B на $2,1 млрд** под лидерством **Thrive Capital**. Сделка делает компанию **одним из самых дорогих частных игроков в AI-разработке лекарств в мире** и закрывает спор «нужны ли AI-first компании отдельные раунды, если у материнской структуры есть Alphabet-баланс».

Деньги пойдут на расширение партнёрств с Novartis и Lilly, а также на собственный пайплайн молекул в онкологии и иммунологии. Для рынка важна не сумма, а сигнал: впервые с эпохи Recursion / Insitro деньги такого порядка приходят в AI-фарму на тезисе «foundation-модели + лабораторные пайплайны», а не на тезисе «GPU-инфраструктура для биотеха».

## 2. AWS AgentCore Payments: AI-агенты учатся платить стейблкоинами

**Amazon Web Services** совместно с **Coinbase** и **Stripe** запустила **AgentCore Payments** — рантайм, который позволяет автономным AI-агентам **самостоятельно проводить микроплатежи в USDC** через **протокол x402** прямо в ходе выполнения задачи. Запрос на API, доступ к данным, разовая лицензия на инструмент — всё это агент теперь может оплатить без вмешательства человека.

Это второй после AWS Bedrock Agents крупный шаг Amazon в сторону «агенты-как-инфраструктура», и первый случай, когда стейблкоин-инфраструктура встраивается в продукцию hyperscaler-а как сервис по умолчанию. Регуляторный ответ ожидаем: SEC и OCC уже изучают модель «autonomous agent payments» — особенно в части AML/KYC, когда инициатором перевода формально является не человек.

## 3. NVIDIA Agent Toolkit и OpenShell: open-source-стек для энтерпрайзных агентов

На GTC NVIDIA представила **NVIDIA Agent Toolkit** — open-source-платформу для построения автономных enterprise AI-агентов. В комплекте — **OpenShell**, рантайм с политикой-based security и privacy-гардрейлами, и **AI-Q hybrid architecture**, которая, по внутренним замерам, **снижает стоимость запроса более чем на 50%** при сохранении лидерства в точности на отраслевых leaderboards.

Это прямой ответ на Anthropic MCP и Google A2A — но в логике «инфраструктурного нейтралитета»: запускается поверх любых моделей (Claude, GPT-5.5, Gemini, Llama, Qwen) и любого облака, при условии что под капотом крутится NVIDIA GPU. Для CIO это означает третий полноценный энтерпрайз-стек агентов помимо ассистентов Microsoft и Salesforce — и первый, который не привязан к одному модельному вендору.

## 4. Hyundai AI+Robotics: модульная платформа и расширение партнёрства с Boston Dynamics

На CES 2026 **Hyundai Motor Group** раскрыла детали комплексной стратегии **«AI+Robotics»**, в центре которой — модульная робот-платформа для логистики и персональной помощи, интеграция крупных языковых моделей в мобильных роботов и расширенное партнёрство с **Boston Dynamics**. Цель — выйти в лидеры «человеко-центричной робототехники» до 2030 года.

В контексте недели это важный апдейт: пока западные игроки спорят о software-agency, корейский автопром заявляет физическую вертикаль с собственным железом, собственными ML-стеками и собственным retail-каналом (через дилерскую сеть Hyundai / Kia). Если Tesla Optimus станет «iPhone-моментом» в роботах, у Hyundai есть реальный шанс собрать первый «Android-альянс».

## 5. Aluminium OS: Google заменяет ChromeOS на Android-первую десктоп-платформу

Слили **16-минутный hands-on Google Aluminium OS** — Android-based замена ChromeOS, с десктопом в стиле Android, нижним доком, виртуальными рабочими столами и встроенным Gemini Intelligence как первичной точкой входа. Анонс ждут именно на I/O во вторник.

Стратегически Google убивает несколько зайцев: объединяет одну Android-кодовую базу для смартфонов, планшетов, очков XR и теперь ноутбуков; делает Gemini-агента дефолтной оболочкой ОС; и подгоняет железо-альянс под Aluminium OS Chromebook plus (Lenovo, Acer, HP). Apple остаётся последним крупным игроком, который держит десктоп и мобильные ОС раздельно — и WWDC в июне станет ответом.

## Что смотреть до открытия I/O

- **Anthropic — финальный анонс раунда** ($30 млрд или $50 млрд) ожидаем не позже среды.
- **Реакция OpenAI** на Aluminium OS и AgentCore Payments — особенно после официального перехода партнёрства с Microsoft в non-exclusive формат.
- **Регуляторный фон**: ЕС готовит уточнения к AI Act Omnibus, CAISI замкнул цепь предрелизных тестов со всеми пятью лабораториями.
- **Рынок**: implied move по GOOGL на закрытии — ±4%, по NVDA — ±3% на завтрашней сессии.

Утренний выпуск во вторник выйдет уже после кейноута Google I/O — будем разбирать Gemini 4.0 «по фактам».

## Источники

- [AI News Today — May 18, 2026 (BuildFast)](https://www.buildfastwithai.com/blogs/ai-news-today-may-18-2026)
- [Agentic AI News + AI Breakthroughs (Crescendo)](https://www.crescendo.ai/news/latest-ai-news-and-updates)
- [7 Explosive AI Updates in May 2026 (IM Founder)](https://imfounder.com/science-tech/ai/ai-updates-may-2026/)
- [State of AI: May 2026 (Air Street Press)](https://press.airstreet.com/p/state-of-ai-may-2026)
- [LLM News Today, May 2026 (LLM Stats)](https://llm-stats.com/ai-news)
- [Google races to put Gemini at the center of Android (CNBC)](https://www.cnbc.com/2026/05/12/google-races-put-gemini-at-center-of-android-before-apples-ai-reboot.html)
