/**
 * Created by cherish on 2018/1/17.
 */

//指令 v-bind v-on
export default (function () {

  new Vue({
    el:"#zhiling",
    data:{
      url:"http://www.baidu.com",
    },
    methods:{
      doSomething:function (event) {
        console.log(event.target.href);
        return false;
      }
    }
  });
})()
