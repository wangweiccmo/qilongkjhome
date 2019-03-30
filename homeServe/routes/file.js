const multer = require('koa-multer');//加载koa-multer模块

const router = require('koa-router')()
router.prefix('/file')

//文件上传
//配置
var storage = multer.diskStorage({
    //文件保存路径
    destination: function (req, file, cb) {
        cb(null, '/root/koa/qilongkj/public/uploads/')
    },
    //修改文件名称
    filename: function (req, file, cb) {
        var fileFormat = (file.originalname).split(".");
        cb(null,Date.now() + "." + fileFormat[fileFormat.length - 1]);
    }
})
//加载配置
var upload = multer({ storage: storage });

router.get('/aaa', async (ctx, next) => {
    ctx.body = {
        title: 'koa2 json'
    }
})

router.post('/upload', upload.single('img'), async function (ctx, next) {
    ctx.body = {
        filename: '/uploads/'+ctx.req.file.filename//返回文件名
    }
})

module.exports = router
