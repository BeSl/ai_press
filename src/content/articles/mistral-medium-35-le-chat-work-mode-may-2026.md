---
title: "Mistral расширяет Work mode в Le Chat: 128B-модель Medium 3.5 как дефолт, SWE-Bench Verified 77,6%"
description: "Mistral Medium 3.5 — плотная 128B-модель с окном 256k, ставшая дефолтом в Le Chat и Vibe. Work mode в Le Chat теперь полноценный агент с параллельными tool calls, доступом к внешним данным и подтверждением чувствительных действий. Регулируемый reasoning effort, веса под модифицированной MIT-лицензией."
pubDate: 2026-05-18
author: "Редакция AI Press"
category: "Модели и платформы"
featured: false
readingTime: 3
tags: ["Mistral", "Mistral Medium 3.5", "Le Chat", "Vibe", "agentic AI", "Open Weights"]
sourceUrl: "https://mistral.ai/news/vibe-remote-agents-mistral-medium-3-5"
sourceName: "Mistral AI"
---

Mistral вывел **Mistral Medium 3.5** в дефолт обоих своих продуктов — потребительского ассистента Le Chat и облачной IDE Vibe. Это плотная **128B**-модель с окном контекста **256k**, обслуживающая инструкции, рассуждения и кодинг одним набором весов.

## Ключевые цифры

- **SWE-Bench Verified — 77,6%**: на уровне или выше Claude Sonnet 4.5 и GPT-5.0 в задачах исправления реальных багов.
- **Reasoning effort** регулируется per-request — одна модель закрывает и быстрый ответ, и многошаговый агент.
- **Открытые веса** под модифицированной MIT-лицензией: размещение на HuggingFace, можно дообучать.

## Что нового в Work mode

Work mode (Preview) в Le Chat становится не просто чатом с поиском, а **полноценным агентом**:

- Параллельные tool calls.
- Доступ к внешним источникам (Drive, Notion, Slack, Atlassian; в roadmap — Salesforce, ServiceNow).
- Создание задач и issue, генерация отчётов и черновиков сообщений.
- Подтверждение чувствительных действий (отправка email, изменение в SaaS).
- Видимость intermediate steps — пользователь видит дерево tool calls.

## Контекст

Mistral держит позицию «европейская открытая альтернатива» и активно встраивается в enterprise-стек клиентов, которые не хотят зависеть от OpenAI и Anthropic одновременно. На прошлой неделе Bpifrance подтвердил, что Mistral используется в 30+ ведомствах французского правительства; Deutsche Telekom раскатывает Le Chat в 60 000 рабочих мест.

Vibe Remote Agents — отдельный сюжет: облачные сессии vibe-coding, в которых длинные задачи выполняются асинхронно. Это аналог OpenAI Codex Cloud и Anthropic Claude Code, но с открытой моделью и более низким price-per-task.

## Лицензия

Модифицированная MIT-лицензия позволяет коммерческое использование и дообучение, но запрещает прямую перепродажу как «foundation model service». Для enterprise это компромисс между Apache 2.0 (Llama) и закрытыми облачными API.

## Что смотреть

- Бенчмарки Mistral Medium 3.5 в кодинге против Claude и GPT-5.5 после I/O.
- Появление новых коннекторов в Work mode (Salesforce — ключевая ставка).
- Цены и SLA Vibe Remote Agents в первой неделе GA.
