function foo(){
  // arguments -> [1, 2, 3, 4, 5]
  bar.apply(null, arguments);
}
function bar(){
  console.log(arguments);
}
foo(1, 2, 3, 4, 5); //[1, 2, 3, 4, 5,callee....]
// -------------------------------------------
// JS的typeof()可能的值：object、number 、string、Boolean、function、undefined
// ---------------------------------------------

function b(x, y, a){
  arguments[2] = 10;
  alert(a);  
}
b(1, 2, 3);  //10

function b(x, y, a){
  a = 10;
  alert(arguments[2]);
}
b(1, 2, 3); //10
// ----------------------------------------------
var f = (
  function f(){
    return '1';
  },
  function g(){
    return 2;
  }
);
// f = (f(), g())  -> g()
console.log(typeof(f));  //function

var f = (
  function f(){
    return '1';
  },
  function g(){
    return 2;
  }
)();
// f = (f(), g())();  -> (g())(); -> 2
console.log(typeof(f));  //number
// ------------------------------------

console.log(undefined == null);  //true
console.log(undefined === null); //false
console.log(isNaN('100'));       //false
console.log(parseInt('1a') == 1);//true

// ------------------------------------
// 实现isNaN功能
function isNaN1(num){
  var res = Number(num) + '';
  if(res == 'NaN'){
    return true;
  }else{
    return false;
  }
}

// -------------------------------------
console.log({} == {});  //false

// 为什么不相等？
// 对象是引用值类型，比较的是引用值的地址，两个空对象分配的空间不同，所对应的引用值地址不同，所以不相等。

// 怎么样才相等
var obj1 = {};
var obj2 = obj1;
console.log(obj1 == obj2);

// ----------------------------
var a = '1';
function test(){
  var a = '2';
  this.a = '3';
  console.log(a);
}
test();       //2
new test();   //2
console.log(a);  //3

// -------------------------------
var a = 5;
function test(){
  a = 0;
  console.log(a);
  console.log(this.a);
  var a;
  console.log(a);
}
test();
// AO = {
//   a:undefined,
//   a:0
// }

// GO = {
//   a:5
// }

// 普通函数中的this执行window，全局的this指向window
// this.a === window.a -> 5

// 实例化对象的this指向对象本身
// 前后console.log(a)都是0
// console.log(this.a)在对象中找a属性的值，没有a属性 -> undefined