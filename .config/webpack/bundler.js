// This will compile all the subsequent required files to ES5 on the fly.
// Necessary for writing `config.js` using ES6.

require('@babel/register')

module.exports = require('./config.js')
