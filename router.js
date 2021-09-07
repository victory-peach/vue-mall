const express = require('express');
const service = require('./services/UserService')
const product = require('./services/ProductService')
const category = require('./services/CategoryService')
const formidable = require("formidable")
// const Koa = require("koa")
// const koa_static = require("koa-static")
const path = require("path")
// const app = new Koa()
// const koa_body = require("koa-body")
const multer = require('multer');
var moment = require('moment');
var timestamp = '';
var timepath = moment().format('YYYY-MM-DD');
var destination = '/upload/' + timepath;
var filename = '';

var storage = multer.diskStorage({
    //这里destination是一个字符串
    destination: '.' + destination,
    filename: function (req, file, cb) {
        //自定义设置文件的名字
        timestamp = new Date().getTime();
        let filenameArr = file.originalname.split('.');
        let mimetypename = filenameArr[filenameArr.length - 1];
        filename = 'upload-' + timestamp + '.' + mimetypename;
        cb(null, filename)
    }
});
var upload = multer({
    storage: storage
});

const router = express.Router();
router.post('/passport/login', async function (req, res) {
    const data = await service.login(req.body.email, req.body.password);
    res.send(JSON.stringify(data));
})
router.post('/passport/logon', async function (req, res) {
    console.log(req.body);
    const data = await service.logon(req.body);
    res.send('ok');
})
router.get('/category/all', async function (req, res) {
    const data = await category.findCategory();
    console.log(data);
    res.setHeader('Access-Control-Allow-Origin', req.headers.origin);
    res.send({
        data,
        status: '200',
        msg: '查询成功'
    })
})
//获取侧边栏
router.get('/getsidebar', async function (req, res) {
    // console.log(req.query);
    const data = await category.findTarget(req.query.type);
    // console.log(JSON.parse(JSON.stringify(data)).c_items);
    const result = JSON.parse(JSON.stringify(data)).c_items.split(',')
    res.setHeader('Access-Control-Allow-Origin', req.headers.origin);
    res.send([2, ...result])
})

//获取商品列表
router.get('/getGoodsList', async function (req, res) {
    // console.log(req.query);
    const data = await product.findList(req.query.type, req.query.page, req.query.size, req.query.sort);
    console.log(data);
    const result = JSON.parse(JSON.stringify(data));
    for (const item of result) {
        item.tags = item.tags.split(' ');
    }
    res.setHeader('Access-Control-Allow-Origin', req.headers.origin);
    console.log(result);
    res.send(result)
})
//图片上传接口
router.post('/upload/images', (request, response) => {
    const form = formidable({
        multiples: true,
        uploadDir: path.join(__dirname, "public/updata/images"),
        keepExtensions: true
    })
    console.log(__dirname);
    console.log("....");
    form.parse(request, (err, fields, files) => {
        // console.log(err);
        if (err) {
            console.log("khjk");
            throw err;
          }
        console.log(fields, files);
        let res = fields
        // 说明上传了图片
        console.log("-----")
        if (Object.keys(files).length > 0) {
            console.log("===")
            const basename = path.basename(files.avatar.path)
            const originUrl = request.headers.host
            console.log(basename, originUrl);
            const file_url = `${originUrl}/public/updata/images/${basename}`
            // const file_url = `${originUrl}/router/upload/${basename}`

            const fileObj = {
                avatar: file_url
            }
            res = { ...res, ...fileObj }
        }
        console.log(res);
        response.send(res)
    })
})
//返回图片文件
router.get('/public/updata/images/*', function (req, res) {
    res.sendFile( __dirname + "/" + req.url );
    console.log("Request for " + req.url + " received.");
})
//查询产品列表
router.get('/products/all', async function (req, res) {
    const data = await product.findAllPro();
    // console.log(req);
    res.setHeader('Access-Control-Allow-Origin', req.headers.origin);
    res.send({
        data: data,
        status: '200',
        msg: '查询成功'
    })
})
//新增产品接口
router.post('/products/add', async function (req, res) {
    console.log(req.body);
    const data = await product.addProduct(req.body.data);
    if (data) {
        res.send(data);
    }
})
//url: /products/edit
//编辑产品接口 用来提交编辑后的数据
//method: PUT
router.put('/products/edit', async function (req, res) {
    console.log(req.body.id, req.body.data);
    const data = await product.updateProduct(req.body.id, req.body.data);
    res.send({
        data,
        status: '200',
        msg: '删除成功'
    })
})
// 删除商品
// url: /products/:id
// method: delete
router.delete('/products/:id', async function (req, res) {
    console.log(req.params.id);
    const data = await product.delProduct(req.params.id);
    res.send({
        data,
        status: '200',
        msg: '删除成功'
    })
})


// 查询商品详情 
// url: /products/:id //回填表单数据的
// method: get
router.get('/products/:id', async function (req, res) {
    // console.log(req.params);
    const data = await product.productDetail(req.params.id);
    res.setHeader('Access-Control-Allow-Origin', req.headers.origin);
    res.send({
        data,
        status: '200',
        msg: '查询成功'
    })
})
module.exports = router;
