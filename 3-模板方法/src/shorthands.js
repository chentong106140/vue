/**
 * Created by cherish on 2018/1/17.
 */

//指令属性简写方式
export default (function () {
  new Vue({
    el:"#shorthands",
    data:{
      url:"http://www.baidu.com"
    },
    methods:{
      doSomething:function () {
        console.log("点击了");
      }
    }
  });
})()
