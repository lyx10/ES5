// 转数字

Number('123');        // 123
Number('true');       // NaN
Number(true);         //1
Number(false);        //0
Number(null);         //0
Number(undefined);    //NaN
Number('');           //0
Number( );            //0
Number('a');          //NaN

parseInt('3.14');     //3
parseInt(true);       //(true/false/null/undefiend/NaN)都是NaN
parseInt('abc123')    //NaN
parseInt('123abc')    //123
parseInt('10',16)     //16

parseFloat('3.1415'); //3.1415

var a = parseFloat('3.1465');
a.toFixed(2);         //'3.15'  四舍五入


// 转字符串
String(123);          //'123'

// toString()
var b = 4;
b.toString();         //'4'
// 注意！！ undefined 和 null没有toString()方法
// toString(radix)  radix 表示转换成多少进制的数

// 转Boolean 
Boolean(1);  //true
//undefined null '' 0 false 都转为false，其余为true