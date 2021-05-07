var todolist = [
  {
    id: 1,
    todoName: '123',
    isDone: true,
  },
  {
    id: 2,
    todoName: '456',
    isDone: false,
  },
]


function content() {
  /* 
需求1：将todolist里的数据展示在mian里面
1.遍历todolist数组，获取到里面的数据
2.根据里面的字符串生成相应的标签
*/
  if (todolist.length) {
    let htmlArr = todolist.map(function (item, index) {
      if (item.isDone) {
        // 生成相应的字符串
        return (`<li>
      <label >
        <input type="checkbox" checked>
        <span class="done">`+ item.todoName + `</span>
      </label>
      <button class="btn btn-danger">删除</button>
    </li>`)
      } else {
        return (`<li>
      <label >
        <input type="checkbox">
        <span>`+ item.todoName + `</span>
      </label>
      <button class="btn btn-danger">删除</button>
    </li>`)
      }
    })
    var oMain = document.querySelector('.todo-main')
    oMain.innerHTML += htmlArr
  } else {
    hide()
  }
}
content()

function hide() {
  // 当没有任务的时候，提示一声恭喜
  let str = `<h1>恭喜没有任务</h1>`
  var oMain = document.querySelector('.todo-main')
  let oLis = document.querySelectorAll('.todo-main li')
  console.log(oLis);
  let oH1 = document.querySelectorAll('.todo-main h1')
  console.log(oH1);
  if (oLis.length === 0 && oH1.length === 0) {
    oMain.innerHTML += str
  } else {
    // oH1.parentNode.removeChild(oH1)
    console.log(oMain);
    console.log(oH1);
    // oMain.removeChild(oH1)
  }

}


function add() {
  /* 
需求2：实现添加事件
当在header里面的input输入内容的时候点击回车，
可以根据内容自动创建标签
1.先获取输入的内容
2.再根据内容添加标签
*/
  let oCon = document.querySelector('#root .todo-header input')
  oCon.addEventListener('keyup', function (e) {
    // 键盘绑定事件，绑定回车事件
    if (e.keyCode === 13) {
      // 只有抬起的键盘的回车键才会创建标签
      // 健壮性处理，input输入的内容要去掉空格
      let value = oCon.value.trim()
      let str = ` <li>
      <label >
        <input type="checkbox" >
        <span >`+ value + `</span>
      </label>
      <button class="btn btn-danger">删除</button>
     </li>`
      let oMain = document.querySelector('.todo-main')
      oMain.innerHTML += str
    } else {
      return
    }
  })
  hide()
  // checked()
}
add()

// function newState() {
//   /* 
//   需求：检测ul里的中的input,当点击的时候，增加css样式
//   1.遍历ul中的input标签
//   2.检测input的状态
//   2.被点击的添加状态(添加class类名)
//   */
//   let oInput = document.querySelectorAll('.todo-main li label input')
//   let oSpan = document.querySelectorAll('.todo-main li label span')
//   // var oSpan = document.querySelectorAll('li label span')
//   console.log(oSpan);
//   let arr=Array.from(oSpan)
//   oInput.forEach(function (it,index) {
//     //  检测当前的input有没有被点击
//     // console.log(item.hasAttribute('checked'));//返回布尔值

//       // 当检测到时true的时候，给span添加类名
//       // 遍历span
//       // oSpan.forEach(function(item,i){
//         if (it.checked) {
//           // arr[index].className='done'
//          it.nextElementSibling.classList.add('done')
//         }else{
//           it.nextElementSibling.classList.remove('done')
//         }

//       // })

//   })
// }
// newState()

// 最后一行,
function checked() {
  /* 
  需求：全选的时候，复选框选中，有一个没有选中就不用选
  1.先获取todo-main里li的状态
  2.给footer的input修改状态
  */
  // let oLis = document.querySelectorAll('.todo-main li label input')
  let oMain = document.querySelector('.todo-main')

  //给todo-main上加一个事件监听事件
  oMain.addEventListener('click', function (e) {
    // main里的input
    let oLis = oMain.getElementsByTagName('input')
    let arr = Array.from(oLis)
    console.log(oLis);
    let ofooterInput = document.querySelector('.todo-footer label input')
    // ofooterInput.checked = arr.every(item => item.checked)
    let re = arr.every(function (item) {
      // 全部都选中最后一行才能被选中
      return item.hasAttribute('checked')
    })
    if (re) {
      console.log(ofooterInput);
      ofooterInput.checked = true
    } else {
      ofooterInput.checked = false
    }




    // const checked = e.target.checked
    // if (e.target.nodeName === 'INPUT') {
    //   console.log(e.target.checked)
    //   e.target.checked = checked

    // const text = e.target.parentElement.lastElementChild
    // console.log(text)
    // checked ? text.classList.add('done') : text.classList.remove('done')
    // e.target.nextSibling
    // }

    // console.log(e.target.nodeName)
    // let ofooterInput = document.querySelector('.todo-footer label input')
    // ofooterInput.checked = arr.every(item => item.checked)
    // let re = arr.every(function (item) {
    //   全部都选中最后一行才能被选中
    //   return item.hasAttribute('checked')
    // })
    // if (re) {
    //   console.log(ofooterInput);
    //   ofooterInput.checked = true
    // } else {
    //   ofooterInput.checked = false
    // }
  })
}
checked()