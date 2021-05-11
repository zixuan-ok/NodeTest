const express=require('express')
const app=express()

// 静态中间件
app.use(express.static('../public'))

app.listen(5000,(err)=>{
if(err) console.log(err)
else console.log('成功');
})