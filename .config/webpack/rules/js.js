const rule = {
  test: /\.(jsx?)$/,
  exclude: /(node_modules|build\/)/,
  use: [
    {
      loader: 'babel-loader',
      options: {
        cacheDirectory: true,
        plugins: ['react-hot-loader/babel'],
      },
    },
  ],
}

export default rule
