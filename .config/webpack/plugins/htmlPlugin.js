import path from 'path'
import HtmlWebpackPlugin from 'html-webpack-plugin'
import { paths } from '../manifest'

export default new HtmlWebpackPlugin({
  template: path.join(paths.src, 'index.html'),
  path: paths.build,
  filename: `index.html`,
  inject: true,
  hash: true,
  minify: {
    collapseWhitespace: true,
    minifyCSS: true,
    minifyJS: true,
    removeComments: true,
    useShortDoctype: true,
  },
})
