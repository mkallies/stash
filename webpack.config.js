switch (process.env.NODE_ENV) {
  case 'prod':
  case 'production':
    module.exports = require('./configs/webpack/webpack.config.production')
    break
  case 'dev':
  case 'development':
  case 'test':
  case 'testing':
  default:
    module.exports = require('./configs/webpack/webpack.config.dev')
}
