function Car(opt){
  this.brand = opt.brand;
  this.color = opt.color;
  this.displacement = opt.displacement;
}

function Person(opt){
  this.name = opt.name;
  this.age = opt.age;
  this.car = {};
  Car.call(this.car,opt.carOpt);
  this.selectCar = function(){
    var str = `年龄为${this.age}岁的${this.name}买了一辆排量为${this.car.displacement}的${this.car.color}的${this.car.brand}牌子的车`;
    // console.log(str);
    document.write(str)
  }
  this.selectCar();
} 
var opts = {
  name: 'perter',
  age: 33,
  carOpt: {
    brand: 'Toyota',
    color: '白色',
    displacement: '2.0'
  }
}
var perter = new Person(opts);
// perter.selectCar();
// ____________________________________________________

function Car(brand, color, displacement){
  this.brand = brand;
  this.color = color;
  this.displacement = displacement;
}

function Person(opt){
  this.name = opt.name;
  this.age = opt.age;

  Car.apply(this,[opt.brand, opt.color, opt.displacement]);
  this.selectCar = function(){
    var str = `年龄为${this.age}岁的${this.name}买了一辆排量为${this.displacement}的${this.color}的${this.brand}牌子的车`;
    // console.log(str);
    document.write(str);
  }
  this.selectCar();
} 

var opts = {
  name: 'perter',
  age: 33,
  brand: '奔驰',
  color: '白色',
  displacement: '2.0'
  
}
var perter = new Person(opts);