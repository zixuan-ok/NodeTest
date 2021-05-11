var todolist = [
  {
    id: 1,
    todoName: '123',
    isDone: true,
  },

  // {
  //   id: 2,
  //   todoName: '456',
  //   isDone: false,
  // }
]
let str = `<h1>恭喜没有任务</h1>`


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
  checked()
  show()
}
content()

function hide() {
  // 当没有任务的时候，提示一声恭喜

  var oMain = document.querySelector('.todo-main')

  // oMain.onclick=function(){

  let oLis = document.querySelectorAll('.todo-main li')
  // console.log(oLis);
  let oH1 = document.querySelectorAll('.todo-main h1')
  // console.log(oH1[0]);
  console.log(oLis);
  if (oLis.length === 0 && oH1.length === 0) {
    oMain.innerHTML += str
    console.log(oLis.length, oH1.length);
  } else {
    //  console.log(oH1.parentNode);
    // oH1.remove()
    // oH1.style.display = 'none'
  }
  // }
}
hide()


function add() {
  /* 
需求2：实现添加事件
当在header里面的input输入内容的时候点击回车，
可以根据内容自动创建标签
1.先获取输入的内容
2.再根据内容添加标签
*/

  // let oMain=document.querySelector('.todo-main')
  let oCon = document.querySelector('#root .todo-header input')
  oCon.addEventListener('keyup', function (e) {
    // 键盘绑定事件，绑定回车事件
    if (e.keyCode === 13) {
      // 只有抬起的键盘的回车键才会创建标签
      // 健壮性处理，input输入的内容要去掉空格
      let value = oCon.value.trim()
      // 输入空格的时候创建不了li标签，return退出的是最近的函数
      if(!value){
          return
      }
      let stri = ` <li>
      <label >
        <input type="checkbox" >
        <span >`+ value + `</span>
      </label>
      <button class="btn btn-danger">删除</button>
     </li>`
      let oMain = document.querySelector('.todo-main')
      oMain.innerHTML += stri
      let oH1 = document.querySelector('.todo-main h1')
      if (oH1) {
        oMain.removeChild(oH1)
      }
      // 手动输入完之后清空
      oCon.value = ''
    } else {
      return
    }
    show()
    // hide()
    checked()
    remove()
    allremove()
  })

}
add()

function newState() {
  /* 
  需求：检测ul里的中的input,当点击的时候，增加css样式
  1.遍历ul中的input标签
  2.检测input的状态
  2.被点击的添加状态(添加class类名)
  */
  let oMain = document.querySelector('.todo-main')
  oMain.addEventListener('click', function (e) {
    // console.log(e.target);
    if (e.target.checked) {
      // arr[index].className='done'
      e.target.nextElementSibling.className = 'done'
    } else {
      e.target.nextElementSibling.className = ''
      // e.target.nextElementSibling.classList.remove('done')
    }
    show()
  })
  // show()
}
newState()

// 最后一行,
function checked() {
  /* 
  需求：全选的时候，复选框选中，有一个没有选中就不用选
  1.先获取todo-main里li的状态
  2.给footer的input修改状态
  */
  // let oLis = document.querySelectorAll('.todo-main li label input')
  let oMain = document.querySelector('.todo-main')
  // 在外面初始化的时候最后一行也要判断一次
  let oLis = oMain.getElementsByTagName('input')
  let arr = Array.from(oLis)
  // console.log(oLis);
  let ofooterInput = document.querySelector('.todo-footer label input')
  let re = arr.every(function (item) {
    // 全部都选中最后一行才能被选中
    return item.checked
  })
  if (re) {
    ofooterInput.checked = true
  } else {
    ofooterInput.checked = false
  }

  //给todo-main上加一个事件监听事件
  oMain.addEventListener('click', function () {
    // main里的input
    let oLis = oMain.getElementsByTagName('input')
    let arr = Array.from(oLis)
    // console.log(oLis); 
    let ofooterInput = document.querySelector('.todo-footer label input')
    let re = arr.every(function (item) {
      // 全部都选中最后一行才能被选中
      return item.checked
    })
    if (re) {
      ofooterInput.checked = true
    } else {
      ofooterInput.checked = false
    }
  })

  // 最后一行input点击的时候todo-main里的input的checked的状态都要是true
  ofooterInput.onclick = function () {
    // 事件监听最后一行
    console.log(arr);
    arr.forEach(function (item) {
      if (ofooterInput.checked) {
        item.checked = true
        // item.setAttribute('checked','true')
        show()
      } else {
        item.checked = false
        // item.removeAttribute('checked')
      }
    })
  }


  // show()
}
checked()

function show() {
  // 更改最后一行文本内容
  /* 
  1.获取checked的状态是true的input的个数
  2.获取总共input的个数
  */
  // 总共被选中input的个数
  let oInputCheckedLength = document.querySelectorAll('.todo-main li label input:checked').length
  // 所有input的个数
  let oInputLength = document.querySelectorAll('.todo-main li label input').length
  console.log(oInputCheckedLength, oInputLength)
  let beforeContent = document.querySelector('#doneNum')
  let afterContent = document.querySelector('#totalNum')
  beforeContent.innerText = oInputCheckedLength
  afterContent.innerText = oInputLength
}
show()

function remove() {
  // 删除按钮
  /* 
  需求：点击删除按钮删除当前选项
  1.给删除按钮绑定点击事件
  2.当点击的时候，删除按钮所在的li标签
  */
  // let oMain = document.querySelector('.todo-main')
  // 事件委托，实时监视，当增加新的li标签的时候也要监听

  let odanger = document.querySelectorAll('.todo-main li .btn-danger')
  // console.log(odanger);
  let arr = Array.from(odanger)
  arr.forEach((item) => {
    item.onclick = function () {
      // console.log(item.parentNode);
      item.parentNode.remove()
      hide()
    }
  })

}
remove()

function allremove() {
  /* 
  需求：点击全部删除按钮，清除所有li
  1.给全部删除按钮绑定点击事件
  2.当点击的时候选中所有的li标签删除
  */
  let oallremove = document.querySelector('.todo-footer .btn-danger')
  //  给全部删除按钮绑定点击事件
  oallremove.onclick = function () {
    let oInput = document.querySelectorAll('.todo-main li label input:checked')
    //  选中所有的li,并删除
    // console.log(oInput);
    // console.log(oallremove);
    // 遍历li
    let arr = Array.from(oInput)
    arr.forEach((item) => {
      item.parentNode.parentNode.remove()
    })
    hide()
    show()
  }
}
allremove()