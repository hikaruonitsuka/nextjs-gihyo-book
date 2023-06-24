module.exports = {
  root: true,
  extends: [
    'next/core-web-vitals',
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:import/recommended',
    'plugin:import/typescript',
    'prettier',
    'plugin:storybook/recommended',
  ],
  overrides: [
    {
      files: ['*.ts', '*.tsx', '*.js'],
      parser: '@typescript-eslint/parser',
    },
    {
      files: ['./jest.config.js'],
      rules: {
        '@typescript-eslint/no-var-requires': 'off',
      },
    },
  ],
  rules: {
    'react/react-in-jsx-scope': 'off',
    'import/order': [
      2,
      {
        alphabetize: {
          order: 'asc',
        },
      },
    ],
  },
}
