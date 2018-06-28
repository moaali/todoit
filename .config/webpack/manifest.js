import path from 'path'
import yargs from 'yargs'
import fs from 'fs'

// --------------------
// @Environment Holders
// --------------------

const { env } = yargs.argv
const IS_DEVELOPMENT = env === 'development'
const IS_PRODUCTION = env === 'production'

// ----------
// @Root Path
// ----------

const root = path.join(__dirname, '..', '..')

// ----------
// @App Paths
// ----------

const paths = {
  root,
  src: `${root}/client/src`,
  build: `${root}/client/build`,
  publicAssets: `${root}/client/build/assets`,
  favicon: `${root}/client/src/shared/static/images/favicon.png`,
  publicPath: '/',
}

// -------------------
// @Output Files Names
// -------------------

const outputFiles = {
  bundle: 'bundle.js',
  vendor: 'vendor.js',
  css: 'style.css',
}

// --------------------
// @Entries Files Names
// --------------------

const entries = {
  js: 'index.js',
}

// -----------------
// @Exporting Module
// -----------------

export {
  paths,
  outputFiles,
  entries,
  // ---- env,
  IS_DEVELOPMENT,
  IS_PRODUCTION,
}
