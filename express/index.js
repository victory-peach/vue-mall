const express = require('express');
const app = express();
const cors = require('cors')
const { router } = require('./router/router.js');
app.use(cors());
app.use('/api/meituan', router);
app.listen(9527, function() {
    console.log('正在监听9527端口')
})