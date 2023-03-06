// 协同开发
// 1.打印一个参数值以内能被3或5或7整除的数
// 2.斐波那契数列第n位
// 3.打印从0到n的累加值

// 1.打印一个参数值以内能被3或5或7整除的数
var initCompute = (function(){
   function compute(n){
    var result = [];
    for(var i = 0; i < n; i++){
      var item = (i % 3 === 0) || (i % 5 === 0) || (i % 7 === 0);
      if(item){
        result.push(i);
      }
    }
    console.log(result);
    return result;
  }
  return compute;
})();

// 2.斐波那契数列第n位
var initFibo = (function(){
  function fibo(n){
    if(n <= 0){
      // console.log(0);
      return 0;
    }else if(n <= 2){
      // console.log(1);
      return 1;
    }else if( n > 2){
      var n1 = 1,
          n2 = 1,
          n3;
      var temp = 0;
      for(var i = 2; i < n; i++){
        n3 = n2 + n1;
        temp = n2;
        n2 = n3;
        n1 = temp;
      }
      console.log(n3);
      return n3;  
    }
  }
  return fibo;
})();

// 3.打印从0到n的累加值
var initSum = (function(){
  function add(n){
    var sum = 0;
    for(var i = 0; i <= n; i++){
      sum += i;
    }
    console.log(sum);
    return sum;
  }
  return add;
})();

window.onload = init();
function init(){
  initCompute(30);
  initFibo(10);
  initSum(100);
}
