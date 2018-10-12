const devConfig = require('./configs/webpack/webpack.config.dev')
const prodConfig = require('./configs/webpack/webpack.config.prod')
const baseConfig = require('./configs/webpack/webpack.config.common')
const merge = require('webpack-merge')

console.log('PROCESSSSSS', process.env)

module.exports = (env, opts) => {
  const { mode } = opts

  console.log('env', env)

  if (mode === 'production') {
    return merge(baseConfig, prodConfig)
  }

  return merge(baseConfig, devConfig)
}

// switch (process.env.NODE_ENV) {
//   case 'prod':
//   case 'production':
//     module.exports = require('./configs/webpack/webpack.config.prod')
//     break
//   case 'dev':
//   case 'development':
//   case 'test':
//   case 'testing':
//   default:
//     module.exports = require('./configs/webpack/webpack.config.dev')
// }
