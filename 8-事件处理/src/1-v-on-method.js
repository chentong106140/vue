/**
 * Created by cherish on 2018/1/24.
 */

let init = (function () {
  console.log("\n\n/***************************1-v-on-method.js  start****************************************/\n\n");

  var vm1 = new Vue({
    el:"#v-on-method-1",
    data:{
      name:"Vue.js"
    },
    methods:{
      /**
       * 直接使用greet调用
       * v-on:click="greet"
       * @param event
       */
      greet:function (event) {
        alert("Hello:"+this.name+"!");
        if(event)
        {
          alert(event.target.tagName);
        }
      },
      /**
       * 行内调用该方法
       * v-on:click="say('你好！')"
       * @param msg
       */
      say:function (msg) {
        alert(msg);
      },
      /**
       * 手动传递DOM事件对象$event
       * v-on:click="warn('执行点击完成！',$event)"
       * @param msg
       * @param event
       */
      warn:function (msg, event) {
        if(event)
        {
          alert("拦截到DOM事件对象！")
          event.preventDefault();
        }
        alert(msg);
      }
    }
  });


  console.log("\n\n/***************************1-v-on-method.js  end****************************************/\n\n");

})();
export  default init;
