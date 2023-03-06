// 构造函数内部集成方法
function compute(){
  compute.plus = function(a, b){
    return a + b;
  };
  compute.mins = function(a, b){
    return a - b;
  };
  compute.mul = function(a, b){
    return a * b;
  };
  compute.div = function(a, b){
    return a / b;
  };
  return function(type, a, b){
    compute[type](a, b); 
  }
}