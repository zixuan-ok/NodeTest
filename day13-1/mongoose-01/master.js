// 1.下载mongoose工具包到node_modules
// 2. 引入mongoose包用（require）
const mongoose = require('mongoose')
// 3.连接数据库
mongoose.connect('mongodb://127.0.0.1:27017/Person', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})

    // 判断数据库是否连接成功
    ; (
        async function () {
            const mongoose = require('mongoose')
            try {
                // 连接数据库
                await mongoose.connect('mongodb://127.0.0.1:27017/Person', {
                    useNewUrlParser: true,
                    useUnifiedTopology: true,
                })

                console.log('成功了');
                // 数据库连接成功之后要上传数据才可以创建库

                // 但要对数据库进行操作首先要先创建Schema对象和model对象
                const Schema=mongoose.Schema
                const usersSchema=new Schema({
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
                      }
                })
                // 创建集合对象要使用Schema
                const usersModel=mongoose.model('test',usersSchema)

                // 往集合中添加数据
                usersModel.create(
                    {
                        name:'哈哈哈',
                        age:18
                    },
                    (err,data)=>{
                        console.log(err,data);
                    }
                )
            } catch (error) {
                console.log('失败');
            }
        }
    )()

