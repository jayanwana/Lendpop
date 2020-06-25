// const env = require('./env-config')
const options = {
  "libraryName": "@material-ui/core",
  "ssr": false,
  "preprocess": false
}
module.exports = {
  presets: ['next/babel'],
  // "plugins": [['transform-define', env]]
}

// "plugins": [
//   [
//     "module:@material-ui/core",
//     { "ssr": true, "displayName": true, "preprocess": false }
//   ]]
