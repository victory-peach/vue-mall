const express = require('express');
const service = require('../services/UserService')
const product = require('../services/ProductService')
const category = require('../services/CategoryService')
const formidable = require("formidable")
const path = require("path")
const router = express.Router();
router.post('/passport/login', async function(req, res) {
    const data = await service.login(req.body.email, req.body.password);
    res.send(JSON.stringify(data));
})
router.post('/passport/logon', async function(req, res) {
    // console.log(req.body);
    const data = await service.logon(req.body);
    res.send('ok');
})
router.get('/category/all', async function(req, res) {
        const data = await category.findCategory();
        // console.log(data);
        res.setHeader('Access-Control-Allow-Origin', req.headers.origin);
        res.send({
            data,
            status: '200',
            msg: '查询成功'
        })
    })
    //获取侧边栏
router.get('/getsidebar', async function(req, res) {
        // console.log(req.query);
        const data = await category.findTarget(req.query.type);
        // console.log(JSON.parse(JSON.stringify(data)).c_items);
        const result = JSON.parse(JSON.stringify(data)).c_items.split(',')
        res.setHeader('Access-Control-Allow-Origin', req.headers.origin);
        res.send([2, ...result])
    })
    //默认搜索
router.get('/search', async function(req, res) {
        // console.log(req.query);
        const data = await product.search(req.query.type);
        // console.log(JSON.parse(JSON.stringify(data)).c_items);
        const result = JSON.parse(JSON.stringify(data));
        for (const item of result) {
            item.tags = item.tags.split(' ');
            item.images = item.images.split(',');
        }
        res.setHeader('Access-Control-Allow-Origin', req.headers.origin);
        // console.log(result);
        res.send(result)
    })
    //用户输入关键词搜索
    //获取商品列表

router.get('/likeSearch', async function(req, res) {
    console.log(req.query);
    const data = await product.search(req.query.likeValue);
    // console.log(JSON.parse(JSON.stringify(data)).c_items);
    const result = JSON.parse(JSON.stringify(data));
    for (const item of result) {
        item.tags = item.tags.split(' ');
        item.images = item.images.split(',');
    }
    res.setHeader('Access-Control-Allow-Origin', req.headers.origin);
    // console.log(result);
    res.send(result)
})
router.get('/getGoodsList', async function(req, res) {
        // console.log(req.query);
        const data = await product.findList(req.query.type, req.query.page, req.query.size, req.query.sort, req.query.category);
        // console.log(req.query.category);
        const result = JSON.parse(JSON.stringify(data));
        for (const item of result) {
            item.tags = item.tags.split(' ');
            item.images = item.images.split(',');
        }
        res.setHeader('Access-Control-Allow-Origin', req.headers.origin);
        // console.log(result);
        res.send(result)
    })
    //查询购物车列表
router.get('/getGoodsByIds', async function(req, res) {
        console.log(req.query);
        let idarr = req.query.value.split(',').map((item) => {
            return { id: item }
        })
        console.log(idarr);
        let data = await product.findCart(idarr);
        const result = JSON.parse(JSON.stringify(data));
        for (const item of result) {
            item.tags = item.tags.split(' ');
            item.images = item.images.split(',');
        }
        console.log(JSON.parse(JSON.stringify(data)))
        res.send(result)
    })
    //图片上传接口
router.post('/upload/images', (request, response) => {
        const form = formidable({
                multiples: true,
                uploadDir: path.join(__dirname, "upload"),
                keepExtensions: true
            })
            // console.log(path.resolve(__dirname));
            // const form = new formidable.IncomingForm();
            // form.uploadDir = path.join(__dirname, "upload");//上传文件的保存路径
            // console.log(path.join(__dirname));
            // form.keepExtensions = true;//保存扩展名
            // form.maxFieldsSize = 20 * 1024 * 1024;//上传文件的最大大小
        form.parse(request, (err, fields, files) => {
            console.log('jhsdf', fields, files);
            let res = fields
                // 说明上传了图片
            if (Object.keys(files).length > 0) {
                const basename = path.basename(files.avatar.path)
                const originUrl = request.headers.host
                const file_url = `http://${originUrl}/api/upload/${basename}`
                const fileObj = {
                    avatar: file_url
                }
                res = {...res, ...fileObj }
            }
            console.log('res' + res);
            response.send(res)
        })
    })
    //返回图片文件
router.get('/upload/*', function(req, res) {
        res.sendFile(__dirname + "/" + req.url);
        // console.log("Request for " + req.url + " received.");
    })
    //查询产品列表
router.get('/products/all', async function(req, res) {
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
router.post('/products/add', async function(req, res) {
        console.log(req.body);
        const data = await product.addProduct(req.body.data);
        if (data) {
            res.send(data);
        }
    })
    //url: /products/edit
    //编辑产品接口 用来提交编辑后的数据
    //method: PUT
router.put('/products/edit', async function(req, res) {
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
router.delete('/products/:id', async function(req, res) {
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
router.get('/products/:id', async function(req, res) {
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