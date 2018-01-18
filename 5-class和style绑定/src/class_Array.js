/**
 * Created by cherish on 2018/1/18.
 */

//使用对象的方式动态的添加class属性
let init = setTimeout(function () {
  console.log("\n\n/***************************Array.js  start****************************************/\n\n");

  /**
   *
   * <div v-bind:class="[{active:isActive},errorClass]"></div>
   * []:是数组语法，插入class
   * [{active:isActive}] ：是数组语法中同时使用对象语法，如果isActive为真，就插入active样式
   * [errorClass] :是数组语法，这里没有true/false的约束，只有errorClass有值的话就插入对应的值，该值就是样式
   *
   *
   * 效果
   * <div class="active text-danger"></div>
   *
   */
  var vm = new Vue({
    el:"#ObjGrammar4",
    data:{
      isActive:true,
      errorClass:'text-danger'
    }
  });
  console.log("\n\n/***************************Array.js  end****************************************/\n\n");

},2);
export  default init;
