function Car(){
  this.brand = 'Benz';
}
Car.prototype = {
  brand : 'Mazda',
  intro: function(){
    console.log(`我是${this.brand}车`);
  }
}
var car = new Car();
car.intro();    //我是Benz车,谁用this，就指向谁。
