function Car(){};
console.log(Car.prototype);
var car = new Car();
console.log(car.__proto__)
// console.log(Car.prototype === car.__proto__);
// Car.prototype === car.__proto__
// 所有的对象都有自己的的原型，包括原型本身。
