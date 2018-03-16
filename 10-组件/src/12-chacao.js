/**
 * Created by cherish on 2018/1/24.
 */

import chacao01 from './components/chacao01.vue'
import chacao02 from './components/chacao02.vue'

let init = (function () {
  console.log("\n\n/***************************12-chacao  start****************************************/\n\n");

  var vm1 = new Vue({
    el:"#chacao-1",
    components:{
      chacao01
    }
  });

  var vm2 = new Vue({
    el:"#chacao-2",
    components:{
      chacao01
    }
  });

  var vm3 = new Vue({
    el:"#chacao-3",
    components:{
      chacao02
    }
  });

  console.log("\n\n/***************************12-chacao  end****************************************/\n\n");

})();
export  default init;
