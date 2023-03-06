// 1.在原型上重写unshift
// 方法1，使用splice方法
; (function () {
  Array.prototype.myUnshift = function () {
    // 定义每次开始剪切的位置
    var pos = 0;
    for (var i = 0; i < arguments.length; i++) {
      this.splice(pos, 0, arguments[i]);
      pos++;
    }
    return this.length
  }
  var arr = ['c', 'd', 'e'];
  arr.myUnshift('a', 'b');
  console.log('1-1: ' + arr);
})()

  // 方法2，用concat
  ; (function () {
    Array.prototype.myUnshift = function () {
      // 将arguments转换成数组
      var argArr = Array.prototype.slice.call(arguments);
      var newArr = argArr.concat(this);
      return newArr;
    }
    var arr = ['c', 'd', 'e'];
    var arr1 = arr.myUnshift('a', 'b');
    console.log('1-2: ' + arr1);

  })()

  // ---------------------------------------------
  // 2.数组按照元素的字节数排序
  ; (function () {
    var arr = ['我爱你', 'OK', 'Hello', '你说WHAT'];
    arr.sort(function (a, b) {
      return getBytes(a) - getBytes(b)
    });
    console.log('2: ' + arr);

    function getBytes(str) {
      var bytes = str.length;
      for (var i = 0; i < str.length; i++) {
        if (str.charCodeAt(i) > 255) {
          bytes++
        }
      }
      return bytes;
    }
  })()

  // --------------------------------------------
  // 3.重写typeof方法，能够准确判断出number、string、boolean、null、undefined、
  // array、object、function、以及包装类object-number、object-string、object-boolean
  ; (function () {
    function myTypeof(val) {
      var typeVal = typeof (val);
      // 先缓存对象的toString方法
      var toStr = Object.prototype.toString;
      var res = {
        '[object Object]': 'object',
        '[object Array]': 'Array',
        '[object Number]': 'object-number',
        '[object String]': 'object-string',
        '[object Boolean]': 'object-boolean'
      }
      // 先将特殊的null排除
      if (val === null) {
        return 'null'
      } else if (typeVal === 'object') {
        // 判断引用类型
        // 用Object.prototype.toString.call()判断引用值的具体类型
        var ret = toStr.call(val);
        // 根据上面的结果在预先设定好的对象中找到对应的自定义值。
        return res[ret];
      } else {
        // 剩下都是能用typeof判断出的值，直接返回typeVal
        return typeVal
      }
    }

    var result = myTypeof({});
    console.log('3: ' + result);
  })()

  // ------------------------------------------------------
  // 4.数组去重，利用对象
  ; (function () {
    // Array.prototype.unique = function() {
    //   var temp = {},
    //       newArr = [];
    //   for(var i = 0; i < this.length; i++){
    //     if(!temp[this[i]]){
    //       // 如果直接将this[i]作为键值，当键值为0时，if里面的条件判断就为true，0就无法去重
    //       temp[this[i]] = '1';
    //       newArr.push(this[i]);
    //     }
    //   }
    //   return newArr
    // }
    Array.prototype.unique = function () {
      var temp = {},
        newArr = [];
      for (var i = 0; i < this.length; i++) {
        if (!temp.hasOwnProperty(this[i])) {
          temp[this[i]] = this[i];
          newArr.push(this[i]);
        }
      }
      return newArr;
    }
    var arr = [0, 0, 11, 21, 11, 20, 3, 'a', 'b', 3];
    console.log('4: ' + arr.unique());
  })()

  // ------------------------------------------
  // 5.字符串去重
  ; (function () {
    String.prototype.unique = function () {
      var temp = {},
        newStr = '';
      for (var i = 0; i < this.length; i++) {
        if (!temp.hasOwnProperty(this[i])) {
          temp[this[i]] = this[i];
          newStr += this[i];
        }
      }
      return newStr;
    }

    var str = '1112244369005';
    console.log('5: ' + str.unique());

  })()

  // ---------------------------------------
  // 6. 找出字符串中第一个不重复的字符
  ; (function () {
    function test(str) {
      var temp = {};
      for (var i = 0; i < str.length; i++) {
        // 如果temp中存在以字符串的字符命名的属性
        if (temp.hasOwnProperty(str[i])) {
          // 属性值加1
          temp[str[i]]++;
        } else {
          // 如果不存在这个属性，就添加属性，并设置属性值为1
          temp[str[i]] = 1;
        }
      }
      console.log(temp);
      // 统计结束后，用for in 找键值为1的key(键名)，只要匹配成功，返回对应的键名,终止程序
      for (var key in temp) {
        if (temp[key] === 1) {
          return key
        }
      }
    }

    var str = 'hellohappy'
    console.log('6: ' + test(str));

  })()

  // --------------------------------------------
  // 7. 闭包
  ; (function () {
    console.log('----7: start ---- ');
    function Test(a, b, c) {
      var d = 0;
      this.a = a;
      this.b = b;
      this.c = c;
      function e() {
        d++;
        console.log(d);
      }
      this.f = e;
    }
    var test1 = new Test();
    test1.f();  //1
    test1.f();  //2
    var test2 = new Test();
    test2.f();  //1
    console.log('----7: end ---- ');
  })()

  // --------------------------------------------
  // 8 typeof(arguments);
  ; (function () {
    function test() {
      console.log('8: ' + typeof (arguments));
    }
    test();    //object
  })()

  // -------------------------------------------
  // 9.函数表达式的函数名的typeof
  ; (function () {
    var test = function a() {
      return 'a';
    }
    console.log('9: ' + typeof (a));
  })()

  // -------------------------------------------
  // 10. 输入1-7，分别打印出星期-至星期天
  // 不用switch？
  ; (function () {
    function test(day) {
      switch (day) {
        case 1:
          console.log('Mon');
          break;
        case 2:
          console.log('Tue');
          break;
        case 3:
          console.log('Wed');
          break;
        case 4:
          console.log('Thu');
          break;
        case 5:
          console.log('Fri');
          break;
        case 6:
          console.log('Sat');
          break;
        case 7:
          console.log('Sun');
          break;
        default:
          console.log('I don\'t konw');
      }
    }
    function test2(day) {
      var weekday = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri','Sat', 'Sun'];
      var res = weekday[day - 1] ? weekday[day - 1] : 'I don\'t konw';
      console.log('10-1: ' + res);
    }
    test2(2);

    // 如果一定要用weekday[day],怎么修改weekday数组？
    // 不能-1，每个元素要往后移一位,在最前面添个‘,’，这样就多出一个空元素。
    // 访问这个空元素，结果是undefined，consolelog(weekday[0])
    function test3(day) {
      var weekday = [,'Mon', 'Tue', 'Wed', 'Thu', 'Fri','Sat', 'Sun'];
      var res = weekday[day] ? weekday[day] : 'I don\'t konw';
      console.log('10-2: ' + res);
    }
    test3(3);
  })()
