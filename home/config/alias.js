const path = require('path')
function resolve (dir) {
  return path.join(__dirname, '../'+dir)
}
module.exports = {
  '_mixin': resolve('src/components/mixin'),
  '_api': resolve('src/api'),
  '_src': resolve('src'),
  '_cmp': resolve('src/components'),
  '_dialog': resolve('src/components/dialog')
}