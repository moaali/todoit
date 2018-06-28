import path from 'path'
import { IS_DEVELOPMENT, IS_PRODUCTION, paths } from '../manifest'

const rule = {
  test: /\.scss$/,
  use: [
    {
      loader: 'style-loader',
    },
    {
      loader: 'css-loader',
      options: {
        sourceMap: IS_DEVELOPMENT,
        minimize: IS_PRODUCTION,
      },
    },
    {
      loader: 'postcss-loader',
      options: {
        sourceMap: IS_DEVELOPMENT,
      },
    },
    {
      loader: 'sass-loader',
      options: {
        sourceMap: IS_DEVELOPMENT,
        includePaths: [
          path.join(paths.root, 'node_modules'),
          path.join(paths.src, 'shared', 'styles'),
          path.join(paths.src, ''),
        ],
      },
    },
  ],
}

export default rule
