// 创建模型之前要先创建Schema对象（约束属性）
const mongoose = require('mongoose')
const Schema = mongoose.Schema
const usersSchema = new Schema(
    {
        name: {
            type: String,
            required: true,
        },
        age: {
            type: Number,
            required: true,
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
        },
    },
    {
        collection: 'user'
    }
)
// 创建集合对象
const usersModel = mongoose.model('user', usersSchema)
// 导出集合对象
module.exports = usersModel