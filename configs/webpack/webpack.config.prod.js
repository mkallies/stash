const webpack = require('webpack')
const postcssPresetEnv = require('postcss-preset-env')
const postcssImport = require('postcss-import')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const stylelint = require('stylelint')
const cssNano = require('cssnano')
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer')
  .BundleAnalyzerPlugin

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
    new BundleAnalyzerPlugin(),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('production'),
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
              localIdentName: '[local]___[hash:base64:5]',
            },
          },
          {
            loader: 'postcss-loader',
            options: {
              ident: 'postcss',
              plugins: () => [
                postcssImport({ plugins: [stylelint()] }),
                postcssPresetEnv({ features: { 'nesting-rules': true } }),
                cssNano(),
              ],
            },
          },
        ],
      },
    ],
  },
}