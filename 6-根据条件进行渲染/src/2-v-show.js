/**
 * Created by cherish on 2018/1/24.
 */

let init = (function () {
  console.log("\n\n/***************************2-v-show start****************************************/\n\n");

  var vm1 = new Vue({
    el:"#v-show-1",
    data:{
      ok:false,
      error:true,
      type:'A'
    }
  });


  console.log("\n\n/***************************2-v-show  end****************************************/\n\n");

})();
export  default init;
