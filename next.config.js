const withImages = require('next-images');
const withTM = require('next-transpile-modules')(['react-spring', '@babel/runtime']);

module.exports = withImages(withTM())
