typeof(123);          //'number'
typeof('123');        //'string'
typeof(true);         //'boolean'
typeof(undefined);    //'undefined'
typeof(null);         //'object'
typeof({});           //'object'
typeof([]);           //'object'
typeof(function(){}); //'function'

console.log(a);       //报错 引用类型错误
console.log(typeof(a)); //undefined
console.log(typeof(typeof(a)))    //string