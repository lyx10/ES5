// 重写push方法
;(function(){
  Array.prototype.myPush = function () {
    for(var i = 0; i < arguments.length; i++){
      this[this.length] = arguments[i];
    }
    return this.length;
  };
  var arr = [];
  arr.myPush('a', 1, [1, 2]);
  console.log(arr);

})();
// splice传1个参
(function(){
  var arr = [1, 2, 3, 4];
  arr.splice(2);
  console.log(arr);  //[1, 2]
})();
// splice传2个参
(function(){
  var arr = ['a', 'b', 'c', 'd'];
  arr.splice(1,2);
  console.log(arr);  //['a', 'd']

})();
// splice传2个以上的参
(function(){
  var arr = ['a', 'b', 'c', 'e'];
  arr.splice(1, 1, 'd');
  console.log(arr);  // ['a', 'd', 'c', 'e']
})();
// splice第1个参传负数
(function(){
  var arr = ['a', 'b', 'c', 'e'];
  arr.splice(-1, 0, 'd');
  console.log(arr);  // ['a', 'b', 'c', 'd', 'e']
})();
// splice如何判断下标的位置，特别是为负数的时候?

(function(){
  function spliceIdx(arr, index) {
    return index < 0 ? (index += arr.length) : (index += 0);
  }
  var arr1 = [1, 2];
  console.log(spliceIdx(arr1, -1));
})();

// var arr = [27, 49, 5, 7];
// 用sort()升序排列
// sort 可以传一个函数
// 函数需要有2个值，a, b
// 需要有返回值 ：负数，a排前面
//               正数，b排前面
//                0， 位置不变
(function(){
  var arr = [27, 49, 5, 7];
  // arr.sort(function(a, b){
  //   if(a > b){
  //     return 1
  //   }else{
  //     return -1
  //   }
  // });
  
  arr.sort((a, b) => {return a - b});

  console.log(arr);
})();

// var arr = [1, 2, 3, 4, 5, 6];
// 随机排序
(function(){
  var arr = [1, 2, 3, 4, 5, 6];
  // arr.sort(function(a, b){
  //   var ran = Math.random();
  //   if(ran > 0.5){
  //     return 1
  //   }else{
  //     return -1
  //   }
  // });

  arr.sort(function(a, b){
    var ran = Math.random();
    return ran - 0.5;
  });

  console.log(arr);

})();

// var arr = [
//   {
//     name: 'Jenny',
//     age: 18
//   },
//     {
//     name: 'Tony',
//     age: 10
//   },
//     {
//     name: 'Jone',
//     age: 26
//   },
//     {
//     name: 'Ben',
//     age: 1
//   },
//     {
//     name: 'Coco',
//     age: 9
//   }
// ];
// 按照年龄大小排序（升序）
(function(){
  var arr = [
  {
    name: 'Jenny',
    age: 18
  },
    {
    name: 'Tony',
    age: 10
  },
    {
    name: 'Jone',
    age: 26
  },
    {
    name: 'Ben',
    age: 1
  },
    {
    name: 'Coco',
    age: 9
  }
];
arr.sort(function(a, b){
  return (a['age'] - b['age'])
});

console.log(arr);

})();

// var arr = ['12345', '1', '1234', '12', '765432'];
// 按照元素长度排序（升序）
(function(){
  var arr = ['12345', '1', '1234', '12', '765432'];
  arr.sort(function(a, b){
    return a.length - b.length
  });
  console.log(arr);
})();