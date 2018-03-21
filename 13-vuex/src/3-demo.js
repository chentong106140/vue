/**
 * http://blog.csdn.net/h5_queenstyle12/article/details/75386359
 * Created by cherish on 2018/1/24.
 */
import Count from './components/count.vue'
import store from './store/store.js'

let init = (function () {
  console.log("\n\n/***************************3-demo.js  start****************************************/\n\n");
  const vm = new Vue({
    el: "#app",
    components: {
      Count
    },
    store,
    template: '<count>{{$store.state.count}}</count>'
  });

  console.log(vm.$store.getters.count);
  console.log(vm.$store.state.count);
  console.log(vm.$store.getters.count);
  console.log("\n\n/***************************3-demo.js  end****************************************/\n\n");

})();
export  default init;
