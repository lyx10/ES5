var a = false + 1;
console.log(a);  //1

var b = false == 1;
console.log(b);  //false

if(typeof(a) && (-true) + (+undefined) + ''){
  console.log('通过了');
}else{
  console.log('没通过');
}

// 结果：通过了
//分析
//typeof(a)->'undefined'
//-ture -> -1
//+undefined -> NaN
//-1 + NaN -> NaN
//NaN + '' -> 'NaN'
//if('undefined' && 'NaN') ->true

if(1 + 5 * '3' === 16){
  console.log('通过了');
}else{
  console.log('未通过');
}
//结果
//通过了
//分析： 5 * '3' ->先隐式进行Number('3');
//所得结果是number类型的15
//15 + 1 -> 16 number类型

console.log(!!' ' + !!'' - !!false || '未通过');
// 结果 1
// !!' ' -> true
// !!'' -> false
// !!false -> false
// true + false + false -> 1
// 1 || '未通过' ->1 
// ||运算，遇假往后走