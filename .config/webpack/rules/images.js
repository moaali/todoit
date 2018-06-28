const rule = [
  {
    test: /\.(jpe?g|png|gif|svg)$/,
    loader: 'image-webpack-loader',
    enforce: 'pre',
  },
  {
    test: /\.svg$/,
    loader: 'svg-url-loader',
    options: {
      limit: 10 * 1024,
      noquotes: true,
    },
  },
  {
    test: /\.(jpe?g|png|gif)$/,
    loader: 'url-loader',
    options: {
      limit: 10 * 1024,
      name: 'assets/[hash].[ext]',
    },
  },
]

export default rule
