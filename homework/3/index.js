// 给定正整数n,求斐波那契数列第n项
function fb(n){
  var n1 = 1,
      n2 = 1,
      n3;
  if(n < 0){
    return 0;
  }
  if (n === 1 || n === 2) {
    return 1;
  }else {
    for(var i=2; i<n; i++){
      n3 = n1 + n2;
      n1 = n2;
      n2 = n3;
    }
    return n3
  }

}
var N = parseInt(window.prompt('请输入一个正整数'),10);
var result = fb(N);
alert(`斐波那契数列第${N}项是${result}`);
console.log(result);