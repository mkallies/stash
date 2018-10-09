const webpack = require('webpack')
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

const ROOT = path.resolve(__dirname, '../../')

module.exports = {
  entry: ROOT + '/src/index.js',
  output: {
    filename: '[name].bundle.js',
    path: path.join(ROOT, 'dist'),
    publicPath: '/',
  },
  resolve: {
    extensions: ['.js'],
  },
  devServer: {
    contentBase: './dist',
    historyApiFallback: true,
    hot: true,
    port: 4200,
  },
  plugins: [
    new webpack.NamedModulesPlugin(),
    new HtmlWebpackPlugin({
      title: 'Get Stash',
      template: './src/index.html',
      inject: 'body',
    }),
  ],
  module: {
    rules: [
      {
        enforce: 'pre',
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'eslint-loader',
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.css$/,
        include: /node_modules/,
        exclude: /src/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(png|jpg|gif)$/,
        use: [
          {
            loader: 'file-loader',
            options: {},
          },
        ],
      },
    ],
  },
}
