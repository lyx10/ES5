//写一个构造函数，接收数字类型的参数，参数数量不确定，完成参数相乘和相加的功能
function Compute(){
  this.args = arguments;
  this.mul = function(){
    var res = 1;
    for(var i = 0; i < this.args.length; i++){
      var val = this.args[i];
      res *= val;
    }
    console.log(res);
    return res;
  };
  this.plus = function(){
    var res = 0;
    for(var i = 0; i < this.args.length; i++){
      var val = this.args[i];
      res += val;
    }
    console.log(res);
    return res;
  }
}

var compute = new Compute(1, 2 , 3, 4);
compute.mul();
compute.plus();

// 优化，将for循环部分提取为一个私有函数。

function Compute(){
  this.mul = function(){
    var res = 1;
    loop(res, arguments, 'minus');
  };
  this.plus = function(){
    var res = 0;
    loop(res, arguments, 'add');
  };
  function loop(res, args, type){
    for(var i = 0; i < args.length; i++){
      var val = args[i];
      if(type === 'minus'){
        res *= val;
      }else if(type === 'add'){
        res += val;
      }
    }
    console.log(res);
    return res;
  }
}

var compute = new Compute();
compute.mul(1, 2, 3, 4);
compute.plus(2, 4, 6, 8);

// 写一个构造车的函数，可设置车的品牌，颜色，排量，再写一个构造消费者的函数，设置用户的名字，年龄，收入，通过选择的方法实例化该用户喜欢的车，再设置车的属性。
function Car(opt){
  this.brand = opt.brand;
  this.color = opt.color;
  this.displacement = opt.displacement;
}
function Person(opt){
  this.name = opt.name;
  this.age = opt.age;
  this.income = opt.income;
  this.selectCar = function(){
    myCar = new Car(opt.carOpt);
    console.log(`我是${this.name},今年${this.age}岁,我的月收入为${this.income},我挑选了一辆排量为${myCar.displacement}的${myCar.color}${myCar.brand}。`);
  }
}
var lucy = new Person(
  {
    name: '芦溪',
    age: 28,
    income: '20k',
    carOpt:{
      brand: '奔驰',
      color:'白色',
      displacement:'2.0'
    
    }
  }
);
lucy.selectCar();