// 1 用splice方法重写数组原型上的unshift方法，命名为myUnshift
Array.prototype.myUnshift = function(){
  var pos = 0;
  for(var i = 0; i < argumemts.length; i++){
    this.splice(pos,0,argumemts[i]);
    pos++;
  }
 return this.length;
}
// 用concat()实现unshift方法
;(function(){
  Array.prototype.myUnshift = function() {
    // 将arguments类数组变成数组
    var argArr = Object.prototype.slice.call(arguments);
    var newArr = argArr.concat(this);
    return newArr;
  } 
})()


// 2 请按照字节数排序下列数组
// ['我爱你', 'OK', 'Hello', '你说WHAT', '可以'];
// charCodeAt

var initSort = (function(){
  function getByts(str){
    var len = str.length;
    var byts = len;
    for(var i = 0; i < len; i++){
      if(str.charCodeAt(i) > 255){
        byts ++;
      }
    }
    return byts;
  }
  function charSort(theArr){
    theArr.sort(function(a, b){
      return getByts(a) - getByts(b);
    });
    return theArr;
  }
  return charSort;
})();
var arr = ['我爱你', 'OK', 'Hello', '你说WHAT', '可以'];
// var str = '你说WHAT';
console.log(initSort(arr));