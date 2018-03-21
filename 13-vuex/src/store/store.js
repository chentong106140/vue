/**
 * Created by cherish on 2018/3/21.
 */

import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);

/**
 * state（定义状态属性）——>mutations（定义方法，同步修改状态属性）——>actions(异步调用matations方法)——>getters(状态属性被修改进行过滤操作，返回状态属性最新值)
 */


/**
 * 主要作用：将需要共享出来的状态属性存储在state中
 */
const state = {
  count: 0
};

/**
 * 主要作用：当state中的状态值被修改或初始化的时候被执行
 * 可以理解为当状态值被修改之后，需要进行过滤操作，状态属性值以getters中方法的返回值为准
 *
 * 例如，修改state.count属性值，getters.count()方法会被立即执行
 *
 * 一般配合组件的computed来使用，通过getter返回过滤之后的状态属性，赋值给组件的computed
 */
const getters = {
  count: function (state) {
    console.log('getters.count()本方法被执行', state, state.count);
    return state.count += 100;
  }
};

/**
 * 主要作用：用来需要对状态属性进行操作的时候，定义操作的方法
 */
const mutations = {
  /**
   * 通过
   * $store.commit('add',10)
   * 或者
   * this.$store.commit('add',10)
   * 进行传值，来触发在mutations中定义的方法时，传入自定义参数
   * @param state
   * @param nums
   */
  add: function (state, nums) {
    console.log('mutations.add()本方法被执行', state, state.count);
    state.count += nums;

  },
  reduce: function (state) {
    console.log('mutations.reduce()本方法被执行', state, state.count);
    --state.count;
  }
};
/**
 * 主要作用：actions没有主动修改状态属性，而是通过调用matations中的方法去修改状态属性
 *
 * 触发actions中的方法，可以通过$store.dispatch('addAction')
 *
 */
const actions = {
  addAction: function (context, nums) {
    console.log('actions.addAction()本方法被执行', context, context.state.count, nums);
    setTimeout(function () {
      context.commit("add", nums);
      console.log('actions.addAction()本方法延迟执行完成');
    }, 3000);
    console.log('actions.addAction()本方法执行完成');
  },
  reduceAction: function ({commit}) {
    console.log('actions.reduceAction()本方法被执行', commit);
    setTimeout(function () {
      commit('reduce');
      console.log('actions.reduceAction()本方法延迟执行完成');
    }, 3000);
    console.log('actions.reduceAction()本方法执行完成');
  }
};

export default new Vuex.Store({
  state,
  mutations,
  actions,
  getters
});
