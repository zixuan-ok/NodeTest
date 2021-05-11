; (async function () {
    /* 
    1.下载mongoose库(a.npm init
                     b.npm i mongoose)
    */
    // 2.引入mongoose数据库
    // 3.连接数据库
    const db = require('../db')
    // 数据库连接成功再往下执行创建model
    await db
    console.log('成功');
    // 4.创建模型model
    const usersModel = require('../model')
    // 5.导入数据(所有的增删改查都是异步执行，所以用await，不在增删改查的方法里写回调函数)
    await usersModel.create({
        name: '嘿嘿',
        age: 18
    })
    // 6.查询导出的数据，find()返回值是promise对象
    const users = await usersModel.find()
    console.log(users);
})()