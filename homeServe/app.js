const Koa = require('koa')
const app = new Koa()
const views = require('koa-views')
const json = require('koa-json')
const onerror = require('koa-onerror')
const bodyparser = require('koa-bodyparser')
const logger = require('koa-logger')
const koaJwt = require('koa-jwt')
const evn = require('./config/evn')
const static = require('koa-static')

const path = require('path')
const index = require('./routes/index')
const user = require('./routes/user')
const login = require('./routes/login')
const news = require('./routes/news')
const file = require('./routes/file')
// 静态资源目录对于相对入口文件index.js的路径
const staticPath = './public'
// error handler
onerror(app)
// app.use(async (ctx, next) => {
//     ctx.set('Access-Control-Allow-Origin', '*'); // 很奇怪的是，使用 * 会出现一些其他问题
//     ctx.set('Access-Control-Allow-Headers', 'content-type');
//     ctx.set('Access-Control-Allow-Methods', 'OPTIONS,GET,HEAD,PUT,POST,DELETE,PATCH')
//     await next();
// });

// Custom 401 handling if you don't want to expose koa-jwt errors to users
app.use(function(ctx, next){
    return next().catch((err) => {
        if (401 == err.status) {
            ctx.status = 401;
            ctx.body = 'Protected resource, use Authorization header to get access\n';
        } else {
            throw err;
        }
    });
});
// app.use(koaJwt({secret:evn.jwtSecret}).unless({
//     path:[/^\/login*/,/^\/admin/]
// }))
// middlewares
app.use(bodyparser({
    enableTypes:['json', 'form', 'text']
}))
app.use(json())
app.use(logger())

// app.use(require('koa-static')(__dirname + '/public'))


app.use(views(__dirname + '/views', {
  extension: 'pug'
}))

// logger
//app.use(async (ctx, next) => {
//  const start = new Date()
//  await next()
//  const ms = new Date() - start
//  console.log(`${ctx.method} ${ctx.url} - ${ms}ms`)
//})


// routes
// app.use(index.routes(), index.allowedMethods())
app.use(user.routes(), user.allowedMethods())
app.use(login.routes(), login.allowedMethods())
app.use(news.routes(), news.allowedMethods())
app.use(file.routes(), file.allowedMethods())

// 缓存一天
app.use(static(
    path.join( __dirname,  staticPath),{maxage:1000 * 60 * 60 * 24}
))
// error-handling
app.on('error', (err, ctx) => {
  console.error('server error', err, ctx)
});

module.exports = app
