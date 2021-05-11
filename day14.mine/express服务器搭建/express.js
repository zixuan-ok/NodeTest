// 1.引入express包
const express = require('express')
// 2.使用express创建一个应用对象
const app = express()
// console.log(app);
// 3.监听get请求 第一个参数是请求的路径
app.get('/', (request, reponse) => {
    // console.log(request.query)
    console.log('/', request.query);//query就是get请求的查询字符串
    reponse.send('<h3>express1返回的数据</h3>')
})

app.get('/abc', (request, response) => {
    console.log('/abc-get', request.query)
    response.send('<h1>/abc的get请求响应的内容</h1>')
})

// 虽然路径和上面的是一样的,但是请求方式不同
app.post('/abc', (request, response) => {
    console.log('post请求/abc')
    response.send('<h1>post请求响应的数据</h1>')
})

// 3.开启服务器
app.listen(5000, (err) => {
    if (err) console.log('失败');
    else console.log('启动成功');
})