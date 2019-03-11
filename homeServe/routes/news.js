const evn = require('../config/evn')
const jwt = require('jwt-simple')
const router = require('koa-router')()

const newsModel = require('../model/newsModel')
const newsOnlyModel = require('../model/newsOnlyModel')

router.prefix('/news')

router.post('/add', async function (ctx, next) {
    let params = ctx.request.body;
    const ret = await newsModel.add(params);

    ctx.body = {
        success: false,
        code: 0,
        ret: ret
    }
})

router.post('/all', async function (ctx, next) {
    const ret = await newsOnlyModel.getAll();
    ctx.body = {
        success: false,
        code: 0,
        ret: ret
    }
})

router.post('/allByPage', async function (ctx, next) {
    let page = ctx.request.body.page;
    let pageSize = ctx.request.body.pageSize;
    let limit = [(page-1)*pageSize,page*pageSize];
    const ret = await newsOnlyModel.getAllByPage(limit);
    ctx.body = {
        success: false,
        code: 0,
        ret: ret
    }
})

router.post('/get/:id', async function (ctx, next) {
    let id = ctx.params.id;
    const ret = await newsModel.getNewsById(id);
    ctx.body = {
        success: false,
        code: 0,
        ret: ret
    }
})

router.post('/del/:id', async function (ctx, next) {
    let id = ctx.params.id;
    const ret = await newsModel.delNewsById(id);
    ctx.body = {
        success: false,
        code: 0,
        ret: ret
    }
})

router.post('/edit', async function (ctx, next) {
    let params = ctx.request.body;
    console.log(params)
    const ret = await newsModel.editNewsById(params);

    ctx.body = {
        success: false,
        code: 0,
        ret: ret
    }
})

module.exports = router
