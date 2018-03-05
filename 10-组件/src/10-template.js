/**
 * Created by cherish on 2018/1/24.
 */
let init = (function () {
  console.log("\n\n/***************************10-template  start****************************************/\n\n");

  Vue.component("my-quanju-11",{
    template:"#my-quanju-11",
    props: ['myMessage'],
    data:function () {
      return {
        name:"使用template标签定义的全局组件！"
      };
    }
  });

  var vm = new Vue({
    el:"#template",
    data:{
      msg:"我是template标签"
    }
  });
  console.log("\n\n/***************************10-template  end****************************************/\n\n");

})();
export  default init;
