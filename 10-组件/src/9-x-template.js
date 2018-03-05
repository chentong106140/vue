/**
 * Created by cherish on 2018/1/24.
 */
let init = (function () {
  console.log("\n\n/***************************9-x-template  start****************************************/\n\n");

  Vue.component("my-quanju-10",{
    template:"#my-quanju-10",
    props: ['myMessage'],
    data:function () {
      return {
        name:"使用x-template定义的全局组件！"
      };
    }
  });

  var vm = new Vue({
    el:"#x-template",
    data:{
      msg:"我是x-template类型的javascript标签"
    }
  });
  console.log("\n\n/***************************9-x-template  end****************************************/\n\n");

})();
export  default init;
