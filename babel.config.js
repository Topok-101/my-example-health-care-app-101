module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./src'],
        extensions: ['.ios.js', '.android.js', '.js', '.ts', '.tsx', '.json'],
        alias: {
          '@components': './src/components',
          '@assets': './src/assets/',
          '@config': './src/config/',
          '@features': './src/features/',
          '@helper': './src/helper/',
          '@hooks': './src/hooks/',
          '@languages': './src/languages/',
          '@models': './src/models/',
          '@navigations': './src/navigations/',
          '@services': './src/services/',
          '@store': './src/store/',
          '@types': './src/types/',
          '@view-models': './src/view-models/',
          '@constants': './src/constants/'
        }
      }
    ],
    [
      'react-native-reanimated/plugin',
      {
        globals: ['__scanCodes']
      }
    ]
  ]
}
