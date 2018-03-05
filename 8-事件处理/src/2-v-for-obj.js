/**
 * Created by cherish on 2018/1/24.
 */

let init = (function () {
  console.log("\n\n/***************************2-v-for-obj start****************************************/\n\n");

  var vm1 = new Vue({
    el:"#v-for-obj-1",
    data:{
      obj:{
        one:1,
        two:2,
        three:3,
        four:4
      }
    }
  });

  /**
   * 向Vue对象中动态添加属性
   */
  //直接添加属性，看是否生效
  vm1.obj.five = 5;
  //答案是，并没有生效
  //我们使用Vue.set方法,这样就可以添加了
  Vue.set(vm1.obj,'six',6);
  //或者使用vm1.$set方法
  vm1.$set(vm1.obj,'seven',7);

  var vm2 = new Vue({
    el:"#v-for-obj-2",
  });

  console.log("\n\n/***************************2-v-for-obj  end****************************************/\n\n");

})();
export  default init;
