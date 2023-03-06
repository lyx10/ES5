console.log(foo);   
//function foo() {
  // console.log("C");
  // }
var foo = "A";
console.log(foo);
// A
var foo = function () {
  console.log("B");
};
console.log(foo);

// function () {
//   console.log("B");
// };

foo();
  console.log("B");
// B
function foo() {
  console.log("C");
}
console.log(foo);
foo();

// B

// GO = {
//   1:foo:undefined, 
//   -> 
//   3:function foo() {
//     console.log("C");
//   }

// function () {
//   console.log("B");
// };

// }


// -----------------------------
function fn(a, c) {
  console.log(a);
  // a() {}
  var a = 123;
  console.log(a);
  // 123
  console.log(c);
  // c() {}
  function a() {}
  if (false) {
    var d = 678;
  }
  console.log(d);
  // undefined
  console.log(b);
  // undefined
  var b = function () {};
  console.log(b);
  // function () {}
  function c() {}
  console.log(c);
  // c() {}
}
fn(1, 2);



// AO = {
//   a:undefined,
//   a:1,
//   a() {}
//   b:undefined,
//   c:undefined,
//   d:undefined,
//   c:2,
//   c:c() {}

// }

// 什么是插件化开发？
// 插件化开发的基于功能的拓展
// 组件化开发是基于视图的
// 模块化开发是代码组织方式


(function(){
  function Test(){}
  Test.prototype = {
    test: function(){}
  }
  window.Test = Test;
})();

// 什么是组件化开发


// 深拷贝
// JSON.stringif()
// JSON.parse()
// loash

//1. 递归循环对象; //2. JSON.stringify  // 3._lodash.deepClone
// 4. jQuery   extend   //5. Map
var obj = {
  a: 1,
  b: 2,
}

function deepColne(target,orign){
  var len = org.length,
      tar = target ? target : {},
      item;
  for(var key in org){
    item = orign[key];
    if(orign.hasOwnProperty(key)){
      if(typeof(item) === 'object' && item !== null){

      }
    }
  }
}

// 继承

// 1.原型链继承

function Test(){}
Test.prototype = {
  a : 1
}
var test = new Test();
test.a;


// 2.call/apply
function Test2(){
  
}
// 3.圣杯
function Teacher(){}
Teacher.prototype = {

}



// 4.ES6 extend

// myTypeof

function myTypeof(value){
  var type = typeof(value),
      toStr = Object.prototype.toString,
      ret = {
        'object Object': 'object',
        'object Array': 'array',
        'object String': 'Object-string',
        'object Boolean': 'Object-boolean',
        'object Number': 'Object-number'
      };

  if(type === 'object' && value !== null){
    res = toStr.call(value);
    return ret[res];
  }else{
    return type;
  }
}