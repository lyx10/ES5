// Professor.prototype. ;
function Professor(){
  this.tSkill = 'JAVA';
};
var professor = new Professor();

function Teacher(){
  this.mSkill = 'JS/JQ';
};
Teacher.prototype = professor;

var teacher = new Teacher();

function Student(){
  this.pSkill = 'HTML/CSS';
}
Student.prototype = teacher;
var student = new Student();

console.log(student);
// 沿着__proto__这条线往上去找相应的原型的属性值的链条，就叫原型链。