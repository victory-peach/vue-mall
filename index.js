require('./sync/sync')
const express = require('express');
const cors = require('cors');

const app = express();
app.use(express.json());
app.use(cors());
app.use('/api', require('./router/router.js'));
app.listen('9528', function() {
    console.log('正在监听9528端口');
})