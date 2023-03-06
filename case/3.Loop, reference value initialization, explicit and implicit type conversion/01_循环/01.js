// 1.求累加和小于100的最大数
// var sum = 0;
// for(var i = 0; i < 100; i++){
//   sum += i;
//   if(sum >= 100){
//     break;
//   }
//   console.log(i + '--' + sum);
// }

// 2.求100以内不能被7整除且个位数不为7的数
// var result = []
// for(var i = 1; i < 100; i++){
//   if(i % 7 === 0 || i % 10 === 7){
//     continue;
//   }
//   result.push(i);
// }
// console.log(result);

// 3.求累加
// var n = Number(window.prompt('请输入一个整数'));
// var sum = 0;
// for(var i = 0; i <= n; i++){
//   sum += i;
// }
// console.log(sum);

// 4.50以内可以被4、5、6整除的数
// var result = []
// for(var i = 1; i < 50; i++){
//   if(i % 4 === 0 || i % 5 === 0 || i % 6 === 0 ){
//     result.push(i);
//   }
// }
// console.log(result);

// 5.打印0-10，
// 要求：()只能有一句，不能比较，{}不能出现i++,或i--
// var i = 11;
// for(;i--;){
// console.log(i);
// }

// 6.10的n次方
// var n = 5,
//     num = 1;
// for (var i = 0; i < n; i++){
//   num *= 10;
// }

// 7.n的阶乘
// var n = 6;
// var num = 1;
// for(var i = 1; i <= n; i++){
//   num *= i;
// }

// 8.翻转789
// var num = 789;
// var num1 = num % 10;
// var num2 = (num - num1) % 100 / 10;
// var num3 = (num - (num % 100)) / 100;
// var num4 = num1 * 100 + num2 * 10 + num3;
// console.log(num4);

// 9.求3个数中的最大数
// function compare(a, b, c){
//   if(a > b){
//     if(a > c){
//       console.log(a);
//     }else {
//       console.log(c);
//     }
//   }else if(b > c){
//     console.log(b);
//   }else {
//     console.log(c);
//   }
// }
// compare(-12, 12, 20);

// 10. 打印n以内的质数
function prime(n){
  var count = 0;
  var result = [];
  for(var i = 2; i < n; i++){
    for(var j = 1; j <= i; j++ ){
      if(i % j === 0){
        ++ count;
      }
    }
    if(count === 2){
      result.push(i);
    }
    count = 0;
  }
  document.write(result);
  return result;
}
prime(20);