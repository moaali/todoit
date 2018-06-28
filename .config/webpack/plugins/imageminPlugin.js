import ImageminPlugin from 'imagemin-webpack-plugin'
import path from 'path'
import { paths, IS_DEVELOPMENT } from '../manifest'

export default new ImageminPlugin({
  disable: IS_DEVELOPMENT,
  test: path.join(paths.publicAssets, '**'),
})
