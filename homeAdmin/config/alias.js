const path = require('path')
function resolve (dir) {
  return path.join(__dirname, '../'+dir)
}
module.exports = {
  '_api': resolve('src/api'),
  '_src': resolve('src'),
  '_cmp': resolve('src/components')
}