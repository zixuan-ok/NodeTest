const express = require('express')
// 创建express对象
const app = express()
const path = require('path')

// 配置路由
//   
app.get('/', (req, res) => {
    console.log(req.query);
    console.log('红苹果');
    res.send('get1')
})
app.get('/abc', (req, res) => {
    console.log(req.query);
    console.log('绿苹果');
})
app.post('/getUsers/:page/:pagesize', (req, res) => {
    // 一般分页的时候会用到
    console.log(req.params);//打印路由的路径，以键值对的形式打印出来
    console.log('绿苹果');
    res.send('post')
})

app.listen(5000, (err) => {
    if (err) console.log('错误')
    else console.log('成功')
})


