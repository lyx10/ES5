// 函数内部集成加减乘除方法一
function compute() {
  function plus(a, b) {
    return (a + b);
  };
  function mins(a, b) {
    return (a - b);
  };
  function mul(a, b) {
    return (a * b);
  };
  function div(a, b) {
    return (a / b);
  };
  return function (type, a, b) {
    switch (type) {
      case 'plus':
        return plus(a, b);
      case 'mins':
        return mins(a, b);
      case 'mul':
        return mul(a, b);
      case 'div':
        return div(a, b);
    }
  };
}
var comp = compute();
var result = comp('plus', 1.3, 2.2);
console.log(result);
document.write(result);