; (async function () {
    let mongoose = require("mongoose");
    try {
        let re = await mongoose.connect('mongodb://127.0.0.1:27017/test')
        console.log('成功');
        // console.log(re);

        // 创建Schema对象
        const Schema = mongoose.Schema
        const usersSchema = new Schema({
            name: {
                type: String,
                required: true
            },
            age: {
                required: true,
                type: Number
            },
            gender: {
                type: String,
                default: '男',
            },
            info: {
                type: Schema.Types.Mixed, //表示任何类型
                default: '暂无描述信息',
            },
            date: {
                type: Date,
                default: Date.now(),
            }
        })
        const usersModel = mongoose.model('aaa', usersSchema)
        usersModel.create(
            {
                name: '哈哈',
                age: '20',
              },
              (err, data) => {
                console.log(err, data)
              }
        )
    } catch {
        console.log('失败');
    }
})()