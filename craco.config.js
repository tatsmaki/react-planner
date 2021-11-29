const CracoAlias = require('craco-alias')

module.exports = {
  style: {
    css: {
      loaderOptions: {
        importLoaders: 1,
        modules: {
          exportLocalsConvention: 'camelCaseOnly',
        },
      },
    },
  },
  plugins: [
    {
      plugin: CracoAlias,
      options: {
        source: 'tsconfig',
        baseUrl: './',
        tsConfigPath: './tsconfig.path.json',
      },
    },
  ],
}
