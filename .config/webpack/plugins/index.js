import imageminPlugin from './imageminPlugin'
import htmlPlugin from './htmlPlugin'
import internal from './internal'
import caseSensitivePlugin from './caseSensitivePlugin'
import extractPlugin from './extractPlugin'
import cleanPlugin from './cleanPlugin'
import webAppPlugin from './webAppPlugin'

const development = [...internal, htmlPlugin, caseSensitivePlugin, webAppPlugin]

const plugins = {
  development,
  production: [...development, cleanPlugin, extractPlugin, imageminPlugin],
}

export default plugins
