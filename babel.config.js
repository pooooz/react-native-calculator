module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./src'],
        extensions: ['.ios.js', '.android.js', '.js', '.ts', '.tsx', '.json'],
        alias: {
          tests: ['./tests/'],
          '@components': './src/components',
          '@screens': './src/screens',
          '@types': './src/types/index',
          '@utils': './src/utils',
          '@constants': './src/constants/index',
          '@theme': './src/theme',
        },
      },
    ],
  ],
};
