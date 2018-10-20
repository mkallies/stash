const devConfig = require('./configs/webpack/webpack.config.dev')
const prodConfig = require('./configs/webpack/webpack.config.prod')
const baseConfig = require('./configs/webpack/webpack.config.common')
const merge = require('webpack-merge')

module.exports = (env, opts) => {
  const { mode } = opts

  if (mode === 'production') {
    return merge(baseConfig, prodConfig)
  }

  return merge(baseConfig, devConfig)
}
