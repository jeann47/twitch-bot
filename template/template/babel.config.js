module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./'],
        alias: {
          '~': './src',
          root: './'
        }
      }
    ],
    [
      'dotenv-import',
      {
        moduleName: '@env',
        path: '.env.local',
        blacklist: null,
        whitelist: null,
        safe: false,
        allowUndefined: true
      }
    ]
  ],
  env: {
    production: {
      plugins: [
        'babel-plugin-root-import',
        {
          rootPathPrefix: '~',
          rootPathSuffix: 'src'
        }
      ]
    }
  }
}
