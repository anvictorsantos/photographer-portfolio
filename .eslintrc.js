module.exports = {
  extends: [
    '@rocketseat/eslint-config/next',
    'next/core-web-vitals',
    'plugin:tailwindcss/recommended',
    'plugin:import/recommended',
    'plugin:perfectionist/recommended-natural',
  ],
  root: true,
  rules: {
    'import/order': [
      'error',
      {
        distinctGroup: false,
        'newlines-between': 'always',
        pathGroups: [
          {
            group: 'external',
            pattern: '@app/**',
            position: 'after',
          },
        ],
      },
    ],
    'perfectionist/sort-objects': [
      'error',
      {
        order: 'asc',
        type: 'natural',
      },
    ],
    'sort-keys': [
      'error',
      'asc',
      { caseSensitive: true, minKeys: 2, natural: false },
    ],
  },
}
