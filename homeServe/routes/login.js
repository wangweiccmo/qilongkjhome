const userModel = require('../model/userModel')
const evn = require('../config/evn')
const jwt = require('jwt-simple')
const router = require('koa-router')()
router.prefix('/login')


router.post('/',async function (ctx, next) {

    const user = ctx.request.body;
    console.log(user)

    if(user && user.uname){
        const dbUser = await userModel.getUserByName(user.uname);
        if(dbUser && dbUser.upwd == user.upwd){
            let tokenUser = {id:dbUser.id,uname:dbUser.uname,exp:Date.now() + evn.tokenExpiresTime};
            let token = jwt.encode(tokenUser, evn.jwtSecret);
            ctx.body = {
                success: true,
                code: 0,
                token:token,
                ret: tokenUser
            }
        }
    }else{
        ctx.body = {
            success: false,
            code: 1,
            ret: null
        };

    }
    next();


})



module.exports = router
