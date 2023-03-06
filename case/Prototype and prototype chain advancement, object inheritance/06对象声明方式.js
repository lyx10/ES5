var obj1 = {};
var obj2 = new Object();  //一般情况下，企业开发不用这种形式，因为它添加属性它麻烦，要一个一个添加
console.log(obj1, obj2);  //生成的两个对象内容是一样的，但是它们对应的引用地址不同。

function Obj(){};
var obj3 = new Obj();
var proto = Obj.prototype;
console.log(proto.__proto__);
// obj1和obj2的constructor都指向Object(),obj3的constructor指向Obj();
// 原型（proto）
// 原型的原型（proto.__proto__）是是由系统自带的Object()构造出来的。