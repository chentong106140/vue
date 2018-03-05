/**
 * Created by cherish on 2018/1/24.
 */

import myVueTemplate from './components/hello.vue'

let init = (function () {
  console.log("\n\n/***************************11-template  start****************************************/\n\n");
  console.log(myVueTemplate)

  var vm = new Vue({
    el:"#template-2",
    data:{
      msg:"我是vue单文件组件"
    },
    /**
     * 注意：
     *    1：此处创建局部组件没有使用key-value方式写，会自动以"myVueTemplate":myVueTemplate创建
     *    2：这里的key是myVueTemplate，写法是驼峰式的，所以在调用此组件的时候，需要使用-符号进行分割，my-vue-template
     */
    components:{
      myVueTemplate
    }
  });
  console.log("\n\n/***************************11-template  end****************************************/\n\n");

})();
export  default init;
