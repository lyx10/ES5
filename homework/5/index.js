// 1
function test(){
  return a;  
  a = 1;
  function a(){}
  var a = 2;
}
console.log(test());  //function a(){}

/**
 * AO = {
 * 1.->a:undefined
 * 3.->a:function a(){}
 * }
 * 
 * **/

// 2
function test1(){
  a = 1;
  function a(){}
  var a = 2;
  return a;  //2
}
console.log(test1());

/**
 * AO = {
 * 1.->a:undefined
 * 3.->a:function a(){}
 * 4.->a:1
 * 4.->a:2
 * }
 *
 *  **/

// 3
a = 1;
function test2(e){
  function e(){}
  arguments[0] = 2;
  console.log(e);  //2
  if(a){  //a:undefined
    var b = 3;
  }
  var c;
  a = 4;
  var a;
  console.log(b);  //undefined
  f = 5;
  console.log(c);  //undefined
  console.log(a);  //4
}
var a;
test2(1);
console.log(a);  //1
console.log(f);  //5

/**
 * GO = {  
 * 1.->a:undefined
 * 3.->a:1
 * 2.test2:function test2(){}
 * 3.->f:5
 * 
 * }
 **/

/**
 * AO = {
 * 1.->e:undefined
 * 2.->e:1
 * 4.->e:2
 * 1.->b:undefined
 * 1.->c:undefined
 * 1.->a:undefined
 * 4.->a:4
 * }
 **/