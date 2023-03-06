var obj1 = Object.create({});
var obj2 = Object.create(null);
// Object.create()参数必需，可填对象或null，用于指定原型
console.log(obj1, obj2);

function Obj(){};
Obj.prototype.num = 1;
var obj3 = Object.create(Obj.prototype);
var obj4 = new Obj();
console.log(obj3, obj4);
console.log(obj3 == obj4);
// obj3和obj4的内容是一样的，但它们的引用地址不一样。

Obj.prototype = {
  num: 2,
  name: 'Obj'
}


var obj5 = new Obj();
// new做了什么？
// 实例化obj5
// 调用构造函数Obj()的初始化属性和方法。
// 指定实例对象obj5的原型
// console.log(obj3, obj5);

// 创建obj1空对象
var obj2 = Object.create(null);   // 它不继承Object.prototype。结论：不是所有对象都继承Object.prototype。
obj2.num = 1;
var obj6 = Object.create(obj2);
// function Obj(){};
// Obj.prototype = obj2;
// var obj6 = new Obj();
console.log(obj6, obj6.num);
console.log(obj6.__proto__);    //  undefined ,Object.create(null)没有原型，所以它实例化出来的对象也没有toString()方法。

var obj = Object.create(null);
obj.__proto__ = obj2;
console.log(obj.num);   //undefined  自己添加的__proto__只是一个普通的属性，并不具备系统自带__proto__的功能。

// null 、 undefined为什么没有toSting()方法？
 var n = new Number(1);
 console.log(n);
//  n.toString();

//  原始值没有属性，但它可以用toString()方法，
// 是因为n经过了包装类new Number(n),创建出了数字对象，它有原型，原型上有toString方法。

// null和undefined不能经过包装类，也没有原型，所以不能继承toString()方法。