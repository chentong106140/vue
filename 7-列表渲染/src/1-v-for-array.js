/**
 * Created by cherish on 2018/1/24.
 */

let init = (function () {
  console.log("\n\n/***************************1-v-for-array.js  start****************************************/\n\n");

  var vm1 = new Vue({
    el:"#v-for-array-1",
    data:{
      msg:"你好",
      items:[
        {msg:"第1行"},
        {msg:"第2行"},
        {msg:"第3行"}
      ]
    }
  });


  console.log("\n\n/***************************1-v-for-array.js  end****************************************/\n\n");

})();
export  default init;
