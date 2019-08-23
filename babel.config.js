module.exports = {
  presets: [
    [
      '@babel/preset-env',
      {
        useBuiltIns: 'usage',
        targets: { browsers: ['last 2 Chrome version'] },
        corejs: {
          version: 3,
        },
      },
    ],
    '@babel/preset-react',
  ],
  plugins: ['@babel/plugin-proposal-object-rest-spread'],
}
