function Person(){
  this.smoke = function() {
    this.weight--;
  }
}
Person.prototype = {
  weight: 130
}
var person = new Person(); //构造函数实例化以后，返回的是this，和普通函数不同
person.smoke();   //在控制台执行的结果是 undefined，因为函数的默认返回值是 undefined
//执行somke()的时候，相当于先在自己的this对象里面添加一个weight属性，然后再-1，打印出的是自己身上的weight,并不会影响原型上的weight属性
console.log(person.weight);
console.log(Person.prototype.weight);
