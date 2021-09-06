const express = require('express');
const router = express.Router();
const { getGoods } = require('../../module/service/goodService.js');
const { getSide } = require('../../module/service/listService.js')
const { getHotMovie } = require('../../module/service/movieService.js');
const { getRecommend } = require('../../module/service/recommendService.js');
router.get('/index/nav', async function(req, res) {
    const data = await getSide();
    for (const o of data) {
        const arr = o.subtype.split(',');
        o.subtype = [{
            title: arr[0],
            items: arr.slice(1)
        }]
    }
    res.send({
        msg: '成功',
        status: 'success',
        data
    });
})
router.get('/index/movie', async function(req, res) {
    const data = await getHotMovie();
    res.send({
        msg: '成功',
        status: 'success',
        data
    })
})
router.get('/index/recommend', async function(req, res) {
    const data = await getRecommend();
    res.send({
        msg: '成功',
        status: 'success',
        data
    })
})
router.get('/list/goodsList/:id', async function(req, res) {
    // console.log(req.query)
    console.log(req.params)
    const data = await getGoods();
    res.send({
        msg: '成功',
        status: 'success',
        data
    })
})
exports.router = router;