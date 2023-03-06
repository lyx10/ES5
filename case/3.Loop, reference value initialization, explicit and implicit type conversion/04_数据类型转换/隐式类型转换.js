(function () {
  var a1 = '123';
  a1++;
  console.log(typeof (a1));  //number

  var a2 = '23';
  a2--;
  console.log(typeof (a2));  //number

  var b1 = +'1',
    b2 = -'1',
    b3 = +null;


  console.log(typeof (b1), typeof (b2), typeof (b3));  //number number number
  console.log(b3);  //0

  var c = '12a';
  console.log(isNaN(c));  //true 会先将c隐式进行Number()转换

  var d = '6',
      d1 = d * 1,
      d2 = d / 1,
      d3 = d % 1,
      d4 = d - 1;
  console.log(typeof(d),typeof(d1), typeof(d2), typeof(d3), typeof(d4));
  // string number number number number
  // * / % - 都会先将string转成number类型的值再运算

  var  e = '10',
       e1 = e > 2;
       e2 = '10' > 2 > 0;
       e3 = '10' > '2' > 0;
  console.log(e1);  //true 会先将e隐式进行Number()转换
  // number vs string 或 string vs number 才会隐式转换，两个都是string比较的是对应的ASCII码值

  console.log(e2);  //true
  console.log(e3);  //false
  // 多个值进行比较的，从左向右，先2个值比较 ,如果是number vs string（string vs number）先隐式转换，再比较，然后将结果转成0或1，再和下一位比较

  
})();

(function () {
  var d = '11' + 1;
  console.log(typeof (d));  //string
  console.log(d);          //111
  // 任何值与string类型的值 + ，结果都是一个string类型的值
})();

(function(){
  var a1 = undefined == 0; //false
  var a2 = null == 0;      //false
  var a3 = null == undefined;  //true
  console.log(a1, a2, a3)  //false false true
})();

