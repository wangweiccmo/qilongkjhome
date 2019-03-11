const evn = require('../config/evn')
const jwt = require('jwt-simple')
const router = require('koa-router')()
router.prefix('/user')

router.post('/info/:id', async function (ctx, next) {
    let token = ctx.header.authorization
    console.log(token)
    //使用jwt-simple自行解析数据
    let payload = jwt.decode(token.split(' ')[1], evn.jwtSecret);
    console.log(payload)

    ctx.body = {
        token: token,
        user: ctx.state.user
    }
})

module.exports = router
