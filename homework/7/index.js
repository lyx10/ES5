// 1.用闭包函数写一个累加器，实现执行一次累加1的功能
function plus(){
  var num = 0;
  function add(){
    num++;
    console.log(num);
  }
  return add;
}
var add = plus();
add();
add();
// 2.一个班级，学生名字保存在一个数组里，两个方法写在函数中的一个对象中，
// 第一个方法加入班级，第二个方法离开班级，每次加入或离开，都需要打印新的学生名单
function attendance(){
  var stuList = [];

  var actions = {
    joinClass: function(name){
      stuList.push(name);
      console.log(stuList);
    },
    leaveClass: function(name){
      var idx = stuList.indexOf(name)
      if(idx !== -1){
        stuList.splice(idx, 1);
        console.log(stuList);
      }
    }
  }
  return actions;
}
var attend =attendance();
attend.joinClass('张三');
attend.joinClass('王五');
attend.joinClass('赵六');
attend.leaveClass('王五');

// 老师的思路
(function(){
  var attendance = {
    students: [],
    total:6,
    join: function(name){
      this.students.push(name);
      if(this.students.length === this.total){
        console.log(name + '到课，学生已到齐');
      }else{
        console.log(name + '到课，学生未到齐');
      }
      
    },
    leave: function(name){
      var idx = this.students.indexOf(name);
      if(idx !== 0){
        this.students.splice(idx,1);
        console.log(name + '早退');
        console.log(this.students);
      }
    },
    classOver: function(){
      this.students = [];
      console.log('已下课');
      console.log(this.students);
    }
  }
  attendance.join('张三');
  attendance.join('李四');
  attendance.join('王五');
  attendance.leave('王五');
  attendance.join('赵六');
  attendance.join('李棋');
  attendance.join('林琳');
  attendance.join('杨树');
  attendance.classOver();
})();