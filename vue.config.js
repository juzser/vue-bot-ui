const webpack = require('webpack')
const isDev = process.env.NODE_ENV === 'development'

module.exports = {
  devServer: {
    port: 1901
  },
  productionSourceMap: false
}
