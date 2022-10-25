module.exports = {
  root: true,
  extends: [
    '@react-native-community',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:import/typescript',
  ],
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint'],
  settings: {
    'import/resolver': {
      node: {
        paths: ['src'],
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
      },
      alias: {
        map: [
          ['components', './components'],
          ['pages', './pages'],
          ['utils', './utils'],
        ],
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
      },
    },
  },
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
        'import/order': [
          'error',
          {
            'newlines-between': 'always',
            groups: [
              'external',
              'builtin',
              'internal',
              'sibling',
              'parent',
              'index',
            ],
            pathGroups: [
              {pattern: '@components/**', group: 'internal'},
              {pattern: '@pages/**', group: 'internal'},
              {pattern: '@utils/**', group: 'internal', position: 'after'},
            ],
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
