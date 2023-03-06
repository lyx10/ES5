function test() {
  console.log(foo);
  var foo = 2;
  console.log(foo);
  console.log(a);
}
test();
// undefined
// 2
// 报错 a is not defined
// typeof(a) \ window.a 才打印undefined
// -------------------------------------

function a() {
  var test;
  test();
  function test() {
    console.log(1);
  }
}
a();  //1
// AO = {
//   1->test:undefined
//   3->test:function test() {...}
//   4->test() -> 1
// }
// ------------------------------------

var name = '222';
var a = {
  name: '111',
  say: function(){
    console.log(this.name);
  }
}

var fun = a.say;
fun();   //'222'
a.say();  //'111'
var b = {
  name: '333',
  say: function(fun){
    fun();
  }
}
b.say(a.say);  //'222'
//   say: function(fun){
// 里面这个是孤立的函数，它不属于对象b,所以它的this指向window
//          function(){
//            console.log(this.name);
//          }
//   }
b.say = a.say;
// b = {
//   name: '333',
//   say: function(){
  //   console.log(this.name);
  // }
// }
// 相当于重写了b里面的say方法，b调用，this指向b
b.say();       //'333'
// -----------------------------------

function test(){
  var marty = {
    name: 'marty',
    printName: function() {
      console.log(this.name);
    }
  }
  var test1 = {
    name : 'test1'
  }
  var test2 = {
    name : 'test2'
  }
  var test3 = {
    name : 'test3'
  }
  test3.printName = marty.printName;
  marty.printName.call(test1);  //test1
  marty.printName.apply(test2); //test2
  marty.printName();     //marty
  test3.printName();     //test3

}
test();
// ------------------------------
var bar = {
  a: '1'
};
function test(){
  bar.a = 'a';
  Object.prototype.b = 'b';
  return function inner(){
    console.log(bar.a);
    console.log(bar.b);
  }
}
test()();  
// a
// b