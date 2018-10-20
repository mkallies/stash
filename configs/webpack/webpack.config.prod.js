const webpack = require('webpack')
const postcssPresetEnv = require('postcss-preset-env')
const postcssImport = require('postcss-import')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const stylelint = require('stylelint')
const tailwindcss = require('tailwindcss')
const cssNano = require('cssnano')
const path = require('path')

const ROOT = path.resolve(__dirname, '../../')

module.exports = {
  mode: 'production',
  devtool: 'source-map',
  optimization: {
    runtimeChunk: 'single',
    splitChunks: {
      cacheGroups: {
        vendor: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendors',
          chunks: 'all',
        },
      },
    },
  },
  output: {
    filename: '[name].[contenthash].js',
  },
  plugins: [
    // need to define any env variables here or it won't work within the app
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('production'),
        BASE_URL: JSON.stringify(process.env.BASE_URL),
      },
    }),
    new MiniCssExtractPlugin({
      filename: '[name].css',
    }),
    new webpack.HashedModuleIdsPlugin(),
  ],
  module: {
    rules: [
      {
        test: /\.css$/,
        exclude: /node_modules/,
        use: [
          MiniCssExtractPlugin.loader,
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
                cssNano(),
              ],
            },
          },
        ],
      },
    ],
  },
}
