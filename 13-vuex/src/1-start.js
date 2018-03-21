/**
 * Created by cherish on 2018/1/24.
 */

import Vuex from 'vuex'
Vue.use(Vuex);

let init = (function () {
  console.log("\n\n/***************************1-start.js  start****************************************/\n\n");
  const store = new Vuex.Store({
    state: {
      count: 0
    },
    mutations: {
      increment: function (state) {
        state.count++;
      }
    }
  });

  store.commit('increment');
  console.log(store.state.count);

  console.log("\n\n/***************************1-start.js  end****************************************/\n\n");

})();
export  default init;
