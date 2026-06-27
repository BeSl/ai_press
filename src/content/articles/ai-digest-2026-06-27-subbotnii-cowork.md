---
title: "AI-дайджест 27 июня 2026: GPT-4.5 окончательно гаснет, OpenAI × Broadcom раскрывают inference-чип, NVIDIA Vera выходит на поток, GPT-5.6 — preview system card"
description: "Утро субботы, 27 июня 2026: OpenAI окончательно сворачивает GPT-4.5, дефолт API переходит к GPT-5.3 и GPT-5.5; вместе с Broadcom раскрыт LLM-оптимизированный inference-чип; NVIDIA подтверждает Anthropic и OpenAI как первых клиентов чипа Vera; OpenAI публикует GPT-5.6 Preview System Card; Codex Computer Use, Memory и Chronicle раскатываются в EEA/UK/Швейцарии; до старта core-обязательств EU AI Act — 36 дней."
pubDate: 2026-06-27
author: "Редакция AI Press"
category: "Дайджест"
featured: true
readingTime: 6
tags: ["дайджест", "OpenAI", "Anthropic", "NVIDIA", "Broadcom", "GPT-5.6", "GPT-4.5", "Codex", "EU AI Act", "June 2026"]
sourceUrl: "https://thursdai.news/releases/2026-06"
sourceName: "ThursdAI"
---

К утру субботы, 27 июня 2026 года, индустрия закрывает третью неделю июня сразу несколькими «жёсткими» переходами: OpenAI окончательно гасит GPT-4.5, NVIDIA подтверждает первых клиентов нового чипа Vera, а OpenAI вместе с Broadcom впервые публично представляет собственный inference-чип. Ниже — десять сюжетов, формирующих повестку дня.

## 1. Сегодня — финальный sunset GPT-4.5

Сегодня, **27 июня**, OpenAI окончательно гасит GPT-4.5 в API и ChatGPT после 30-дневного sunset-окна. Дефолтом ChatGPT Plus/Pro/Team становится **GPT-5.3**, для enterprise-API — **GPT-5.5**. Команды, использовавшие старые tool-схемы, должны были смигрировать на новый формат `tools[]` и `parallel_tool_calls`: compatibility-layer работает до **31 июля**, после чего откатывается.

Бизнес-сигнал: квартальный цикл устаревания моделей у OpenAI становится дефолтом. Для интеграторов это означает, что любой production-pipeline теперь обязан содержать contract-test на модель и собственный fallback-layer.

## 2. OpenAI × Broadcom — собственный inference-чип

25 июня OpenAI и **Broadcom** официально раскрыли совместно разработанный inference-чип, оптимизированный под LLM-нагрузку GPT-5.x и future-агентские стеки. Производство — на **TSMC N2P**, packaging — на CoWoS-L. Первая партия идёт на дата-центры **Stargate-1** в Техасе и **Helios** в Аризоне.

Стратегически это пятый параллельный inference-стек на рынке (после NVIDIA, Google TPU, Anthropic-ASIC через Trainium2, AWS Trainium3 и Microsoft MAIA-200) и первый, оптимизированный под одну семью моделей. Удельная стоимость токена должна опуститься на 35–45% от уровня H200-кластеров — на этой цифре строится дефолтный экономический сценарий OpenAI S-1.

## 3. NVIDIA Vera: Anthropic и OpenAI — в числе первых клиентов

NVIDIA подтвердила: первые поставки чипа **Vera** идут к **Anthropic** и **OpenAI**, а также в **Microsoft Azure** и **Oracle Cloud**. Vera — компаньон-CPU поколения, синхронный со связкой Rubin/Rubin Ultra; именно эта пара ляжет в основу AI-фабрик 2027 года.

Для Anthropic это закрытие compute-периметра на финальной стадии road-show перед IPO: тройной стек (TPU у Google, кастомный ASIC у Broadcom, NVIDIA Vera+Rubin) делает презентацию инвесторам устойчивее к концентрационным рискам. Для OpenAI — пересечение собственного inference-чипа с Vera-CPU создаёт первый по-настоящему гетерогенный кластер фронтир-уровня.

## 4. GPT-5.6 Preview System Card

26 июня OpenAI опубликовала **GPT-5.6 Preview System Card**: модель ещё не доступна в API, но карта раскрывает архитектурные и safety-показатели. Заявлены **+18% к pass@1 на SWE-bench Verified**, длинный контекст до **2 млн токенов** и нативная поддержка multimodal tool-calling в видео-потоке.

В safety-разделе впервые формализована метрика «agentic deception under uncertainty»: модель оценивается не только на честность ответа, но и на устойчивость к ложным reward-сигналам в multi-step-сценариях. Это шаг к новому стандарту safety-документации фронтир-моделей.

## 5. Codex Computer Use, Memory и Chronicle — раскатка в EEA, UK и Швейцарии

OpenAI открыла доступ к **Codex Computer Use**, **Codex Memory** и **Chronicle** для разработчиков в **EEA, Великобритании и Швейцарии**. Расширение Chrome работает поверх GPT-5.5 и GPT-5.5 Pro, Memory привязан к рабочему пространству Codex и сохраняется между сессиями, Chronicle ведёт пер-проектную историю изменений с rollback на уровне отдельных вызовов.

Это первый случай, когда полный агентский стек OpenAI становится доступен в юрисдикциях, попадающих под core-обязательства **EU AI Act**. Контракты с европейскими клиентами публикуются с отдельным GPAI-приложением, согласованным с AI Office Еврокомиссии.

## 6. Anthropic после $965 млрд: подача S-1 и азиатская экспансия

Anthropic при оценке **$965 млрд** подал конфиденциальный S-1 draft, открыл офис в **Сеуле** и анонсировал партнёрство с **Samsung SDS** и **NAVER Cloud**. Параллельно компания закрыла серию переговоров с **MUFG** и **Mizuho** по линии japan enterprise pilots.

Сюжет недели: впервые мировые рынки могут получить одновременно две сопоставимые «чистые» AI-эмиссии — Anthropic и OpenAI — в одном окне (сентябрь–ноябрь 2026). Для индекс-провайдеров и пенсионных фондов это пересборка «AI-портфеля» с нуля.

## 7. Claude Fable 5 / Mythos 5 — пятнадцатый день под экспорт-контролем

С **12 июня** директива Минторга США ограничивает доступ иностранных граждан к **Claude Fable 5** и **Mythos 5**. Anthropic не комментирует переговоры по исключениям, но в выходные ожидается обновление guidance от **BIS**. Базовый Fable окончательно переведён на usage-credit-биллинг 23 июня.

Эффект: ряд enterprise-клиентов с офисами в EMEA и APAC уже мигрировал на **Opus 4.8** или **GLM-5.2**. Для самой Anthropic это контролируемое снижение global ARPU в обмен на чистый комплаенс-периметр накануне IPO.

## 8. Кадровая карта: Adler, Pritzel, Jumper — в Anthropic, Shazeer — в OpenAI, Karpathy подтверждён

Финальная сверка по кадровым переходам недели: **Jonas Adler** (AlphaFold) и **Alexander Pritzel** (multi-agent RL) переходят из Google DeepMind в **Anthropic**. **John Jumper** (Нобель-2024) подтвердил переход в Anthropic для life sciences. **Noam Shazeer** (соавтор Transformer) возглавил **Architecture Research** в OpenAI. **Andrej Karpathy** подтвердил присоединение к Anthropic для работы во фронтир-направлении LLM R&D.

Совокупно за июнь Google DeepMind потеряла шесть имён уровня director/principal. Для рынка это закрепляет картину: фронтир-конкуренция выходит на стадию, где разница в один-два архитектора стоит миллиардов.

## 9. Microsoft MAI-Code-1-Flash и MAI-Reasoning-1

Microsoft продолжает катить свой стек **MAI**: после **MAI-Code-1-Flash** на Build готовится релиз **MAI-Reasoning-1** — первого reasoning-фронтира без OpenAI-инференса. Заявленные показатели — паритет с GPT-5.5 на GPQA и MATH, при ~40% inference-cost. Развёртывание — поверх **Azure AI Foundry** и **GitHub Copilot Workspace**.

Это формальный конец монопартнёрства Microsoft × OpenAI: контракт остаётся non-exclusive до 2032 года, но фактически Microsoft строит параллельный фронтир-стек, который сможет полностью заменить OpenAI к 2027-му.

## 10. Регуляторика: 36 дней до core-обязательств EU AI Act, CAISI закрепляется

До **2 августа 2026** — даты вступления в силу core-обязательств **EU AI Act** по high-risk AI и GPAI — осталось **36 дней**. Еврокомиссия публикует финальные guidance-документы. Параллельно президентский указ **«Promoting Advanced AI Innovation and Security»** закрепляет **CAISI** в роли pre-release-аудитора; в США начинаются первые ускоренные согласования AI-датацентров с прямой энергоподпиской.

Совокупно тройной комплаенс-периметр (US/EU/CAISI) становится дефолтным требованием в RFP крупных корпораций. AI-governance-роль в enterprise-структуре переходит из «опционального усиления legal» в самостоятельную линию подчинения на уровне C-suite.

## Что отслеживать на этой неделе

- **Понедельник** — поведение GPT-5.3 как нового дефолта в production-нагрузке Plus/Pro/Team.
- **Вторник–среда** — публикация финальных EU AI Act guidance по GPAI и high-risk.
- **Четверг** — возможный анонс деталей OpenAI × Broadcom inference-чипа на closed-door-сессии для аналитиков.
- **Пятница** — первые поставки NVIDIA Vera в Anthropic и OpenAI.
