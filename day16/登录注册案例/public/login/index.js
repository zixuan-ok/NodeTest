// 需求：判断输入框,判断输入的内容是否符号条件
// 1.先获取input元素
const username = document.querySelector('input[type=text]')
const password = document.querySelector('input[type=password]')
const useSpan = document.querySelector('#tip-username')
const pswSpan = document.querySelector('#tip-password')
const submit = document.querySelector('input[type=submit]')


// 2.判断input元素内容，显示span提示语(在鼠标失去焦点的时候判断)
username.onblur = function () {
    // 判断用户名,使用正则去校验(可以是数字,字符,下划线)8~16位
    let reg = /^\w{8,16}$/
    let value = username.value.trim()//要去空格
    if (!value) return
    if (reg.test(value)) {
        useSpan.textContent = '输入正确'
        useSpan.style.color = 'green'
    } else {
        useSpan.textContent = '输入错误'
        useSpan.style.color = 'red'
    }
}


password.onblur = function () {
    // 判断密码 使用正则去校验(字母,数字)8~16位
    let reg = /^[A-Z]+\w{7,15}$/
    let value = password.value.trim()
    if (!value) return
    if (reg.test(value)) {
        pswSpan.textContent = '输入正确'
        pswSpan.style.color = 'green'
    } else {
        pswSpan.textContent = '输入错误'
        pswSpan.style.color = 'red'
    }
}

// 3.提交数据的时候，只有两个数据填写的都符合规则才可以提交到后台
submit.onclick = function (e) {
    // 判断两个数据有没有style
    if (!useSpan.style.color || !pswSpan.style.color) return e.preventDefault()

    // 判断两个数据有没有style-color，颜色是不是绿色
    if (!(useSpan.style.color === 'green' && pswSpan.style.color === 'green')) return e.preventDefault()
}
