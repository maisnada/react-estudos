(() => {
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __esm = (fn, res) => function __init() {
    return fn && (res = (0, fn[__getOwnPropNames(fn)[0]])(fn = 0)), res;
  };
  var __commonJS = (cb, mod) => function __require() {
    return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
  };

  // src/somar.js
  function somar(a, b) {
    return a + b;
  }
  var init_somar = __esm({
    "src/somar.js"() {
    }
  });

  // src/main.js
  var require_main = __commonJS({
    "src/main.js"() {
      init_somar();
      console.log("teste");
      var res = somar(4, 6);
      console.log(res);
    }
  });
  require_main();
})();
