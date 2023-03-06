// 1 数组去重 在Array.prototype上添加unique方法
// 提示
// [1, 2, 1, 3, 2, 4, 6, 3, 'a']
// var obj = {
//   1: 1,
//   2: 2,
//   3: 3,
//   4: 4,
//   6: 6,
//   'a': a
// }
Array.prototype.unique = function(){
  var obj = {};
  var arr = [];
  for(var i = 0; i < this.length; i++){
    if(!obj.hasOwnProperty(this[i])){
      obj[this[i]] = this[i];
      arr.push(this[i]);
    }
  }
  return arr;
}

var arr =  [1, 2, 1, 3, 2, 4, 6, 3, 'a'];
arr.unique();
console.log(arr.unique());
// ----------------

// 2 重写typeof方法，如果是undefined、boolean、number、string、function，则直接返回对应类型，如果是包装类,则返回:number -> object-number、boolean -> object-boolean、string -> object-string 
// 数组就返回array，对象返回object

function myTypeof(val) {
  var typeVal = typeof(val);
  var res = {
    '[object Object]': 'object',
    '[object Array]': 'array',
    '[object Number]': 'object-number',
    '[object String]': 'object-string',
    '[object Boolean]': 'object-boolean'
  }
  var toStr = Object.prototype.toString;
  if(val === null){
    return 'null';
  }else if(typeVal === 'object'){
    var ret = toStr.call(val);
    return res[ret];
  }else{
    return typeVal;
  }
}
myTypeof(null);

