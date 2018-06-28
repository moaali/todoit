import ExtractTextPlugin from 'extract-text-webpack-plugin'
import { outputFiles } from '../manifest'

export default new ExtractTextPlugin({
  filename: outputFiles.css,
  allChunks: true,
})
