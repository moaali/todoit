import path from 'path'
import MinifyPlugin from 'babel-minify-webpack-plugin'
import { paths, entries, IS_PRODUCTION, outputFiles } from './manifest'

import rules from './rules'
import plugins from './plugins'

// ------------------
// @Entry Point Setup
// ------------------

const entry = ['@babel/polyfill', path.join(paths.src, entries.js)]

// ---------------
// @Path Resolving
// ---------------

const resolve = {
  extensions: ['.js', '.scss'],
  modules: [
    path.join(paths.root, 'node_modules'),
    path.join(paths.src, ''),
    path.join(paths.src, 'shared'),
    path.join(paths.src, 'shared/scripts'),
    path.join(paths.src, 'shared/static'),
    path.join(paths.src, 'shared/styles'),
  ],
}

// -----------------
// @Exporting Module
// -----------------

const optimization = {
  splitChunks: {
    cacheGroups: {
      commons: {
        test: /[\\/]node_modules[\\/]/,
        name: 'vendor',
        chunks: 'all',
      },
    },
  },

  minimizer: [new MinifyPlugin()],
}

// -----------------
// @Exporting Module
// -----------------

const config = {
  devtool: IS_PRODUCTION ? false : 'cheap-eval-source-map',
  context: path.join(paths.src, entries.js),
  watch: !IS_PRODUCTION,
  entry,
  optimization,
  output: {
    path: paths.build,
    filename: outputFiles.bundle,
  },
  module: {
    rules,
  },
  resolve,
  plugins: IS_PRODUCTION ? plugins.production : plugins.development,
  devServer: {
    contentBase: IS_PRODUCTION ? paths.build : paths.src,
    historyApiFallback: true,
    port: 3000,
    compress: IS_PRODUCTION,
    inline: !IS_PRODUCTION,
    watchContentBase: true,
    hot: !IS_PRODUCTION,
    host: 'localhost',
    proxy: [{
      context: ['/task', '/tasks'],
      target: 'http://localhost:8000',
      secure: false,
    }],
    disableHostCheck: true,
    overlay: true,
    stats: {
      assets: true,
      children: false,
      chunks: false,
      hash: false,
      modules: false,
      publicPath: false,
      timings: true,
      version: false,
      warnings: true,
      colors: true,
    },
  },
}

export default config
