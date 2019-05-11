module.exports = {
  presets: [
    ['@babel/preset-env', { targets: { ie: '11' } }],
    '@babel/preset-react',
  ],
  plugins: [
    'react-hot-loader/babel',
    '@babel/plugin-proposal-class-properties',
    '@babel/plugin-proposal-object-rest-spread',
  ],
}
