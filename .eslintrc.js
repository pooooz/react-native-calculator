module.exports = {
  root: true,
  extends: [
    '@react-native-community',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:import/errors',
    'plugin:import/warnings',
  ],
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint', 'react-native', 'detox', 'jest', 'import'],
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
      },
      alias: {
        map: [
          ['@components', './src/components'],
          ['@screens', './src/screens'],
          ['@modules', './src/modules'],
          ['@nativeComponents', './src/nativeComponents'],
          ['@utils', './src/utils'],
          ['@constants', './src/constants'],
          ['@theme', './src/theme'],
          ['types', './src/types'],
        ],
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
      },
    },
    'import/ignore': ['react-native'],
  },
  overrides: [
    {
      files: ['*.e2e.js'],
      env: {
        'detox/detox': true,
        jest: true,
        'jest/globals': true,
      },
    },
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
              'builtin',
              'external',
              'internal',
              'sibling',
              'parent',
              'index',
            ],
            pathGroups: [
              {
                pattern: '@components/**',
                group: 'internal',
              },
              {
                pattern: '@modules/**',
                group: 'internal',
              },
              {
                pattern: '@nativeComponents/**',
                group: 'internal',
              },
              {
                pattern: '@screens/**',
                group: 'internal',
              },
              {
                pattern: '@constants/**',
                group: 'internal',
              },
              {
                pattern: '@utils/**',
                group: 'internal',
                position: 'after',
              },
              {
                pattern: '@theme',
                group: 'internal',
                position: 'after',
              },
              {
                pattern: 'types/**',
                group: 'internal',
                position: 'after',
              },
              {
                pattern: './components/**',
                group: 'sibling',
                position: 'after',
              },
            ],
          },
        ],
        '@typescript-eslint/no-shadow': ['error'],
        'no-shadow': 'off',
        'no-undef': 'off',
        'react/react-in-jsx-scope': 0,
        'no-eval': 0,
        'react-hooks/exhaustive-deps': 0,
      },
    },
  ],
};
