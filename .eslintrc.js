module.exports = {
  root: true,
  extends: [
    '@react-native-community',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:import/typescript',
  ],
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint', 'react-native'],
  overrides: [
    {
      files: ['*.ts', '*.tsx'],
      rules: {
        'sort-imports': [
          'error',
          {
            ignoreCase: true,
            ignoreDeclarationSort: true,
          },
        ],
        '@typescript-eslint/no-shadow': ['error'],
        'no-shadow': 'off',
        'no-undef': 'off',
        'react/react-in-jsx-scope': 0,
        'no-eval': 0,
      },
    },
  ],
};
