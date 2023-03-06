// 行程安排
var weekday = window.prompt('请填写星期几');
var time = window.prompt('请选择上午或下午');
var todoList = {
  SunAM: '和朋友逛街',
  SunPM: '去海边看日落',
  MonAM: '去商场购物',
  MonPM: '上游泳课',
  TueAM: '学滑板',
  TuePM: '去果园摘荔枝',
  WedAM: '爬梧桐山',
  WedPM: '和朋友吃饭',
  ThuAM: '跑步',
  ThuPM: '去图书馆',
  FriAM: '做一顿大餐',
  FriPM: '看小说',
  SatAM: '画画',
  SatPM: '上健身课',
};
switch (weekday) {
  case '星期天':
    showPlan(todoList.SunAM, todoList.SunPM);
    break;

  case '星期一':
    showPlan(todoList.MonAM, todoList.MonPM);
    break;

  case '星期二':
    showPlan(todoList.TueAM, todoList.TuePM);
    break;

  case '星期三':
    showPlan(todoList.WedAM, todoList.WedPM);
    break;

  case '星期四':
    showPlan(todoList.ThuAM, todoList.ThuPM);
    break;

  case '星期五':
    showPlan(todoList.FriAM, todoList.FriPM);
    break;

  case '星期六':
    showPlan(todoList.SatAM, todoList.SatPM);
    break;

  default:
    document.write('您输入的内容不正确');
    break;
}
function showPlan(oEvent1, oEvent2) {
  if (time === '上午') {
    document.write(weekday + time + '的安排是：' + oEvent1);
  } else if (time === '下午') {
    document.write(weekday + time + '的安排是：' + oEvent2);
  } else {
    document.write('您输入的内容不正确');
  }
}