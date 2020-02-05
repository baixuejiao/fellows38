'use strict';

var tmp = '123';

var fn = function fn() {
  setTimeout(function () {
    var a = 111;
    console.log(a);
  }, 1000);
};
