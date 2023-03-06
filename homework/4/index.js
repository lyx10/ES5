// 定义一个函数，从wp接收一个饮料名称，函数返回对应的价格
// (function () {
//   var drink = window.prompt('请输入一种饮料名称');
//   function drinkPric(drink) {
//     var pric = 0;
//     switch (drink) {
//       case '可乐':
//         pric = 3;
//         break;
//       case '雪碧':
//         pric = 2.5;
//         break;
//       case '椰汁':
//         pric = 4.5;
//         break;
//       case '果粒橙':
//         pric = 3.5;
//         break;
//       case '芬达':
//         pric = 3.5;
//         break;
//       default:
//         pric = 0;
//         break;
//     }
//     price(drink,pric);
//   }
//   function price(drink,n) {
//     return n === 0?`我不知道${drink}的售价`:`${drink}售价:' ${n}'元`;
//   }
//   var result = drinkPric(drink);
//   alert(result);
// })();
// 2.定义一个函数，从wp中接收第一个数，接收一个运算符（+ - * / %）,接收第二个数，利用函数做运算，并返回结果
// (function () {
//   var firstNum = parseFloat(window.prompt('请输入第一个数'));
//   var operator = window.prompt('请输入+ - * / %中的任意一个');
//   var secondNum = parseFloat(window.prompt('请输入第二个数'));
//   function compute(a, operat, b) {
//     switch (operat) {
//       case '+':
//         return a + b;
//       case '-':
//         return a - b;
//       case '*':
//         return a * b;
//       case '/':
//         return a / b;
//       case '%':
//         return a % b;
//       default:
//         return 'NaN';
//     }
//   }
//   var result = compute(firstNum, operator, secondNum);
//   alert(`${firstNum}${operator}${secondNum}=${result}`);

//   })();
// 3.定义一个函数，从wp中接收一个数n,算出n的阶乘，不能用for循环
// (function(){
//   var N = parseInt(window.prompt('请输入一个正整数'),10);
//   function fact(n){
//     if(n<=0){
//       return '输入错误'
//     }else {
//       if(n === 1){
//         return 1
//       }
//       return (n * fact(n-1));
//     }
//   }

//   var result =fact(N);
//   typeof(result === 'string'?alert(result):alert(`${N}的阶乘为${result}`));
// })();
// 4.定义一个定义一个函数，从wp中接收一个数n，算出斐波那契数列的第n位，不能用for循环
(function(){
  var N = parseInt(window.prompt('请输入一个正整数'),10);
  function fb(n){
    if(n<=0){
      return '输入错误'
    }else {
      if(n === 1 || n === 2){
        return 1
      }
      return (fb(n-1) + fb(n-2)) ;
    }
  }
  var result =fb(N);
  typeof(result === 'string'?alert(result):alert(`斐波那契数列的第${N}位为${result}`));
})();