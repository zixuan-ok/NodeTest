// 1.引入http模块
const { diffieHellman } = require('crypto')
const http = require('http')
const queryString = require('querystring')
// 2.创建服务器对象
const server=http.createServer((request,response)=>{
    // request记录请求的信息
    let str=request.url
    let arr=str.split('?')
     // 这句话,可以解决中文乱码的问题
    const res=queryString.parse(arr[1])
    console.log(res);
    //用end方法响应客户端的问题
    response.setHeader('content-type', 'text/html;charset=utf-8')
    response.end('服务器响应dfc ')
})
// 3.开启服务器
server.listen(5000,(err)=>{
if(err) console.log('失败',err);
else console.log('成功');
})