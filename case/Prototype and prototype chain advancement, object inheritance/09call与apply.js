// call(),apply()更改this的指向，apply中，构造函数的配置参数以数组形式传入。
function Car(brand, color){
  this.brand = brand;
  this.color = color;
}
var newCar1 = {};
var newCar2 = {};
Car.call(newCar1,'Benz','red');
Car.apply(newCar2,['Benz','red']);
// console.log(newCar1, newCar2);

// 案例
// function Compute(){
//   this.plus = function(a, b){
//     console.log(a + b);
//   }
//   this.mins = function(a, b){
//     console.log(a - b);
//   }
// }
function Compute(){};
Compute.prototype = {
  plus: function(a, b){
    console.log(a + b);
  },
  mins: function(a, b){
    console.log(a - b);
  }
}
function FullCompute(){
  Compute.apply(this);
  this.mul = function(a, b){
    console.log(a * b);
  }
  this.div = function(a, b){
    console.log(a / b);
  }
}
var compute = new FullCompute();

//compute.plus(1,2);    
//compute.mins(1,2);    
compute.mul(1,2);     //2
compute.div(1,2);     //0.5

var compute2 = new Compute();
compute2.plus(3,2);
compute2.mins(3,1);