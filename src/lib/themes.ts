// Группировка категорий статей в темы (разделы навигации сайта).
// Категория из frontmatter — то, что подставляет публикующий скилл/бот.
// Тема — крупный раздел, через который читатель навигирует.

export interface Theme {
  slug: string;          // URL-сегмент: /theme/<slug>/
  label: string;         // как показывается в навигации
  description: string;   // подзаголовок секции на странице темы
  categories: string[];  // какие category-значения сюда попадают
}

export const THEMES: Theme[] = [
  {
    slug: 'tools',
    label: 'Инструменты',
    description: 'Новые модели, платформы, продукты, фреймворки и стартапы — чем теперь можно пользоваться.',
    categories: ['Модели', 'Платформы', 'Продукты', 'Фреймворки', 'Стартапы', 'Релизы'],
  },
  {
    slug: 'research',
    label: 'Исследования',
    description: 'Научные работы, бенчмарки, технические разборы.',
    categories: ['Исследования', 'Наука', 'Аналитика'],
  },
  {
    slug: 'business',
    label: 'Бизнес',
    description: 'Корпоративный ИИ, инвестиции, M&A, кадры.',
    categories: ['Бизнес', 'Корпоративный AI', 'Инвестиции', 'Рынки', 'Рынок', 'Корпорации', 'Индустрия', 'Рынок труда'],
  },
  {
    slug: 'safety',
    label: 'Безопасность',
    description: 'Безопасность моделей, кибербезопасность, регулирование.',
    categories: ['Безопасность', 'Кибербезопасность', 'Регулирование'],
  },
  {
    slug: 'infra',
    label: 'Инфраструктура',
    description: 'Чипы, дата-центры, робототехника, edge.',
    categories: ['Инфраструктура', 'Робототехника'],
  },
];

// Любая категория не из явного списка попадает в "Другое".
const KNOWN: Set<string> = new Set(THEMES.flatMap((t) => t.categories));

export function themeForCategory(category: string): Theme | null {
  for (const t of THEMES) {
    if (t.categories.includes(category)) return t;
  }
  return null;
}

export function isUnclassified(category: string): boolean {
  return !KNOWN.has(category);
}
