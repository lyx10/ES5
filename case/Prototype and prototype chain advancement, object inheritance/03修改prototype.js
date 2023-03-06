Professor.prototype.tSkill = 'JAVA';
function Professor(){};
var professor = new Professor();

Teacher.prototype = professor;
function Teacher(){
  this.mSkill = 'JS/JQ';
  this.success = {
    alibaba: 28,
    tencent: 30
  };
  this.students = 500;
  this.job = 'teacher';
};
var teacher = new Teacher();

Student.prototype = teacher;
function Student(){
  this.pSkill = 'HTML/CSS';
}
var student = new Student();
console.log(teacher, student);
// student.success.baidu = 100;
student.success.alibaba = 29;
student.students = 500;   // 增
delete student.job;       // 删
student.job = 'null';     // 改   
// student.students++;    
// student.students = student.students + 1;
// 等号前面的student.students是在Student构造函数中增加新属性
// 等号后面的student.students是访问该属性，在student中没有，会去student的原型上找。
console.log(teacher, student);


function Test(){}
Test.prototype.name = 'prototype';
var test = new Test();
test.num = 1;
// console.log(Test.prototype, test);

// 总结:实例不能直接修改prototype上的属性（增删改都不行）。但是可以修改属性里面的对象的属性。
