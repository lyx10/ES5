// 写一个计算加减乘除的插件
;(function(){
  var Compute = function(){};
  Compute.prototype = {
    plus: function(a, b){
      return (a + b);
    },
    minus: function(a, b){
      return (a - b);
    },
    mul: function(a, b){
      return (a * b);
    },
    div: function(a, b){
      return (a / b);
    }
  }
  window.Compute = Compute;
})()
var compute = new Compute;
var result1 = compute.plus(1, 2);
var result2 = compute.minus(1, 2);
var result3 = compute.mul(1, 2);
var result4 = compute.div(1, 2);
console.log(result1, result2, result3, result4);