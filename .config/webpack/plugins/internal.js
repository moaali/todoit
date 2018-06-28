import webpack from 'webpack'
import { IS_DEVELOPMENT } from '../manifest'

// ---------------
// @Common Plugins
// ---------------

const plugins = []

plugins.push(
  new webpack.ProvidePlugin({
    fetch:
      'imports-loader?this=>global!exports-loader?global.fetch!whatwg-fetch',
  }),
)

// ----------------------------
// @Merging Development Plugins
// ----------------------------

if (IS_DEVELOPMENT) {
  plugins.push(
    new webpack.NamedModulesPlugin(),
    new webpack.HotModuleReplacementPlugin(),
  )
}

// -----------------
// @Exporting Module
// -----------------

export default plugins
