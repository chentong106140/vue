/**
 * Created by cherish on 2018/1/24.
 */

let init = (function () {
  console.log("\n\n/***************************1-dwj-gd  start****************************************/\n\n");

  var vm1 = new Vue({
    el:"#dwj-gd-1",
    data:{
      show:true
    }
  });

  MyPlugin.install = function (Vue,options) {
    Vue.myShow　= function () {
      alert("myShow!",options)
    };

  };

  Vue.use(MyPlugin);

  console.log("\n\n/***************************1-dwj-gd  end****************************************/\n\n");

})();
export  default init;
