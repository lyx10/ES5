var num = 1;
var obj1 = {};
var obj2 = Object.create(null);
document.write(num);    
document.write(obj1);   //1[object Object]
// document.write()会进行隐式转换，把内容转换成string在渲染到页面上。
document.write(obj2);   //这里会报错 Cannot convert object to primitive value  无法将对象转换为原始值
// obj2 没有属性，不能继承Object.prototype,所以它就没有toString()方法，也就无法隐式转换成string

// 显式地给obj2加一个toString()方法
obj2.toString = function() {
  return '[object Object]';
}
document.write(obj2.toString());

// 在控制台打印以下内容
Object.prototype.toString.call(1);              //'[object Number]'
Object.prototype.toString.call('a');            //'[object String]'
Object.prototype.toString.call(true);           //'[object Boolean]'
Object.prototype.toString.call([1, 2]);         //'[object Array]'
Object.prototype.toString.call({name:'obj'});   //'[object Object]'
Object.prototype.toString.call(function(){});   //'[object Function]'

Number.prototype.toString.call(1);              //'1'
// 各类型的构造函数在自己原型重写toString方法的原因：Object()的toString满足不了新的需求。