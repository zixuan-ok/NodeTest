/* 
在Jquery的原型上面创建手风琴的函数
*/
$.fn.accordion = function (obj) {
    /* 
    需求：1.根据传入的参数，给li标签添加颜色
         2.当鼠标移入的时，计算被移入的Li标签的最大宽度，
         和其他被压缩得li标签的最小宽度
         把宽度添加上去
         3.当鼠标移出时，恢复原位（平均宽度）
    */
    // 1.根据传入的参数，给li标签添加颜色
    // 1.1 获取li标签，进行遍历，给每个li标签添加颜色
    var lis = this.find('li')
    console.log(lis);
    //页面刚打开的时候，就固定好宽度
    var avgWidth = this.width() / lis.length
    lis.css({ width: avgWidth })

    lis.each(function (index, element) {
        $(element).css({
            backgroundColor: obj.colors[index]
        })
    })
    /* 
     2.当鼠标移入的时，计算被移入的Li标签的最大宽度，
         和其他被压缩得li标签的最小宽度
         把宽度添加上去
    */
    obj.minWidth = obj.minWidth || 100
    var maxWidth = this.width() - (lis.length - 1) * obj.minWidth
    lis.on('mouseenter', function () {
        $(this).stop(true).animate({ width: maxWidth }).siblings().stop(true).animate({ width: obj.minWidth })
    })

    this.on('mouseleave', function () {
        lis.stop(true).animate({ width: avgWidth })
    })
}