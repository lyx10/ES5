// 第一题
function Foo(){
  getName = function(){
    console.log(1);
  }
  return this;
}
Foo.getName = function(){
  console.log(2);
}
Foo.prototype.getName = function(){
  console.log(3);
}
var getName = function(){
  console.log(4);
}
function getName(){
  console.log(5);
}

// 写出答案以及理由
Foo.getName();              //2,访问Foo里面的getName属性，并执行属性对应的方法,打印2。
getName();                  //4,预编译时先声明了变量getName，先是函数体，后面变量赋值，把原来的函数体覆盖了
Foo().getName();            //x//2,Foo()执行,未用var声明的getName被提到全局，把原来的匿名函数覆盖了，然后执行这个函数，打印出1
new Foo.getName();          //2,·的优先级大于new,所以先执行Foo.getName();打印2，new一个数字没有用，所以只打印2
new Foo().getName();        //x//()的优先级大于点.所以先new Foo(),找getName,实例对象里面没有这个方法，到原型上找，原型上有，打印3.
new new Foo().getName();    //x//也是()优先级高，到.的优先，最后到new,不是构造函数，new不起作用，所以仍然打印3

// GO = {
//   getName: undefined,
//            ->function(){console.log(5);}
//            ->function(){console.log(4);}
              // ->function(){console.log(1);}
//   Foo: function(){...},
// }

// Foo = function(){
//   function getName(){
//     console.log(1);
//   };
//   this.getName = function(){
//     console.log(2);
//   }
// }
// Foo.prototype.getName = function(){
//   console.log(3);
// }



/**
// function Foo(){
  getName = function(){
    console.log(1);
  }
  return this;
}
Foo.getName = function(){
  console.log(2);
}
Foo.prototype.getName = function(){
  console.log(3);
}
var getName = function(){
  console.log(4);
}
function getName(){
  console.log(5);
}
**/

// Foo.getName();  //2      Foo.getName = function(){...} 可以理解为执行Foo的方法
      
// getName(); // 4 与编译，函数声明优先于赋值，所以被字面量覆盖了
// GO = {
//  1 -> getName:undefined
//  2 -> getName:function getName() { console.log(5); }
//  3 -> getName:function getName() { console.log(4); }
//  2 -> Foo:function Foo() {...}
//  3 -> Foo:function Foo() {}
// }                 
// Foo().getName();   //Foo() ->  getName:function getName() { console.log(1); } this -> window ;Foo().getName() -> window.getName() -> getName()   //1     
// new Foo.getName();   // .比new优先级高， Foo.getName();打印2，之后的new就没有用处了
// new Foo().getName(); //()优先级比.高，所以先执行new Foo(),new实例化出一个对象,对象里面没有自己的属性和方法，但是它的原型上有getName方法（Foo.prototype.getName），用原型的  //3 
// new new Foo().getName();      //同样，先new Foo()，再找沿着原型链找getName方法，打印3，其余的new没有用。

//优先级：() > . > new