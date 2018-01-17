/**
 * Created by cherish on 2018/1/17.
 */
//文本插入值
//module.exports是node.js写法
module.exports = (function () {
    var data = {msg1:"我是msg1",msg2:"我是msg2"};
    new Vue({
      el:"#interpolations",
      data:function () {
        return data;
      },
      methods:{
        reverseMessage:function () {
          data.msg1 ="我发生改变了！";
          data.msg2 = "我也发生改变了";
        }
      }
    });


})();
