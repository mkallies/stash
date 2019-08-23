const webpack = require('webpack')

module.exports = {
  devServer: {
    contentBase: './dist',
    historyApiFallback: true,
    hot: true,
    port: 4200,
  },
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
