// 数组
var arr = [9, 8, 7, 6];

// 取值
console.log(arr[3]);    //  6

// 赋值
arr[4] = null;
console.log(arr[4]);

// 取长度
console.log(arr.length);

// 取数组中的每一位,并加1
for(var i = 0; i < arr.length; i++){
  // console.log(arr[i]);
  arr[i] += 1;
}
console.log(arr);

// 对象
var person = {
  name: 'xiyang',
// 属性名（键名）: 属性值（键值）
  age: 32,
  height: 180,
  weight: 120,
  job: 'web开发工程师'
}
// 取值
console.log(person.name);
console.log(person['age']);

// 赋值
person.name = '汐扬';
person['age'] = 24;
console.log(person);