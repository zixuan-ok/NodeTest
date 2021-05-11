// 连接数据库
const mongoose = require('mongoose')

// 导出数据库
module.exports = mongoose.connect('mongodb://127.0.0.1:27017/add', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})