/**
 * Created by cherish on 2018/1/24.
 */

import Vuex from 'vuex'
Vue.use(Vuex);

let init = (function () {
  console.log("\n\n/***************************2-state.js  start****************************************/\n\n");

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

  const Counter = {
    template: '<div>{{count}}</div>',
    computed: {
      count: function () {
        return this.$store.state.count;
      }
    }
  };

  const app = new Vue({
    el: "#app",
    store,
    components: {
      Counter
    },
    template:
    '<div class="app">' +
        '<counter></counter>' +
    '</div>'
  });

  store.commit('increment')

  console.log("\n\n/***************************2-state.js  end****************************************/\n\n");

})();
export  default init;
