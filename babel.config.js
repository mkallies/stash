module.exports = {
  presets: [
    ['@babel/preset-env', { targets: { browsers: ['last 2 Chrome version'] } }],
    '@babel/preset-react',
  ],
  plugins: [
    'react-hot-loader/babel',
    '@babel/plugin-proposal-class-properties',
    '@babel/plugin-proposal-object-rest-spread',
  ],
}
