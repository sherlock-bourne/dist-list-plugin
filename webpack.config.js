let path = require('path')
// const CopyrightWebpackPlugin = require('./plugins/copyright-webpack-plugin.js')
// FileListPlugin
const { distListPlugin } = require('./plugins/dist-list-plugin.js')

module.exports = {
  mode: 'development',
  entry: './src/index.js',
  plugins: [
    new distListPlugin({yourOption:'版本号是"1.0.1",环境是"uat"'})
  ],
  // output: {
  //   filename: 'build.js',
  //   path: path.resolve(__dirname,'dist')
  // }
}