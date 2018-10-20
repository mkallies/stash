const webpack = require('webpack')
const postcssPresetEnv = require('postcss-preset-env')
const postcssImport = require('postcss-import')
const stylelint = require('stylelint')
const tailwindcss = require('tailwindcss')
const path = require('path')

const ROOT = path.resolve(__dirname, '../../')

module.exports = {
  devServer: {
    contentBase: './dist',
    historyApiFallback: true,
    hot: true,
    port: 4200,
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'style-loader',
          },
          {
            loader: 'css-loader',
            options: {
              importLoaders: 1,
              sourceMap: true,
              modules: true,
              getLocalIdent: (
                loaderContext,
                localIdentName,
                localName,
                options
              ) => {
                const fileName = path.basename(loaderContext.resourcePath)
                if (fileName.indexOf('global.css') !== -1) {
                  return localName
                } else {
                  const name = fileName.replace(/\.[^/.]+$/, '')
                  return `${name}__${localName}`
                }
              },
              // localIdentName: '[local]___[hash:base64:5]',
            },
          },
          {
            loader: 'postcss-loader',
            options: {
              ident: 'postcss',
              plugins: () => [
                postcssImport({ plugins: [stylelint()] }),
                postcssPresetEnv({ features: { 'nesting-rules': true } }),
                tailwindcss(ROOT + '/tailwind.config.js'),
              ],
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new webpack.NamedModulesPlugin(),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('development'),
      },
      __DEVTOOLS__: true,
    }),
    new webpack.HotModuleReplacementPlugin(),
  ],
}
