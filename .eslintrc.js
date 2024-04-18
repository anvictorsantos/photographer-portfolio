module.exports = {
  root: true,
  extends: [
    '@rocketseat/eslint-config/next',
    'next/core-web-vitals',
    'plugin:tailwindcss/recommended',
    'plugin:import/recommended',
  ],
  rules: {
    'import/order': [
      'error',
      {
        'newlines-between': 'always',
        pathGroups: [
          {
            pattern: '@app/**',
            group: 'external',
            position: 'after',
          },
        ],
        distinctGroup: false,
      },
    ],
  },
}
