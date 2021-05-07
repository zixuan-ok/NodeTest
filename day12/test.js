const uniq = require('uniq')
let arr = [1, 2, 2, 3, 4, 4, 6, 3, 1, 9, 34, 2]
let newArr = uniq(arr)
console.log(newArr);