//写一个函数，接收任意字符串，计算出这个字符串的总字节数，
//提示，用string.charCodeAt()和for循环
function getBytes(str){
  var bytes = str.length;
  for(var i = 0; i < str.length; i++){
    var codeAt = str.charCodeAt(i);
    if(codeAt > 250){
      bytes += 1;
    }
  }
  return bytes;
}
var str1 = '你好，JavaScript'
getBytes(str1);