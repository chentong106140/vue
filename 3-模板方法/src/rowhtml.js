/**
 * Created by cherish on 2018/1/17.
 */

export default (function () {
  var data = {rowHtml: "<span style='color:red'>这是动态添加的html代码</span>"};
  new Vue({el: "#rowhtml", data: data});
})();
