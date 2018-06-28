const rule = {
  test: /\.(eot|svg|ttf|woff2?)$/,
  loader: 'url-loader',
  options: {
    limit: 10 * 1024,
    name: 'assets/[hash].[ext]',
  },
}

export default rule
