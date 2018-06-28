import CleanWebpackPlugin from 'clean-webpack-plugin'
import { paths } from '../manifest'

const pathsToClean = ['*']

const cleanOptions = {
  root: paths.build,
  verbose: true,
  dry: false,
}

export default new CleanWebpackPlugin(pathsToClean, cleanOptions)
