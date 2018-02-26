/**
 * Created by cherish on 2018/1/24.
 */

let init = (function () {
  console.log("\n\n/***************************7-events-v-on  start****************************************/\n\n");

  /**
   * 注册全局组件
   */
  Vue.component("my-quanju-7", {
      /**
       * 定义模板，该模板内部执行全局组件的incrementCounter方法，并且,显示全局组件的属性counter
       */
      template: '<button v-on:click="incrementCounter">{{ counter }}</button>',
      /**
       *  给全局组件定义属性counter
       */
      data: function () {
        return {
          counter: 0
        };
      },
      methods: {
        /**
         * 给全局组件定义方法，方法内部，控制全局组件的counter变量自增，并且，组件方法中，触发increment事件
         */
        incrementCounter: function () {
          //控制组件属性自增
          ++this.counter;
          //$emit()，触发组件事件，该事件，定义在使用全局组件的属性上面，v-on:increment="incrementTotal"
          this.$emit('increment');
        }
      }
    }
  );

  /**
   * 创建Vue实例
   */
  var vm1 = new Vue({
    el: "#events-v-on",
    /**
     * 给Vue实例申明total属性
     */
    data: {
      total: 0
    },
    methods: {
      /**
       * 给Vue实例，创建方法，该方法内部，控制实例的属性total自增
       */
      incrementTotal: function () {
        ++this.total;
      },
      doSomething:function () {
        alert("你来了"+this.total);
      }
    }
  });

  /**
   * 总结：
   *  $emit("事件名称”，"事件传值1”,"事件传值2”)   触发事件
   *
   *  1：注册全局组件
   *      Vue.component("my-quanju-7",{});
   *
   *  2：在全局组件中注册methods属性，属性中注册组件方法
   *      methods: {incrementCounter()}
   *
   *  3：调用全局组件，使用v-on自定义事件
   *      <my-quanju-7 v-on:increment="incrementTotal"></my-quanju-7>
   *      事件名称：increment
   *      事件执行方法：incrementTotal   该方法是Vue实例中定义的方法
   *
   *  4：创建Vue实例 定义methods方法，给组件事件调用
   *      new Vue({methods:{incrementTotal()}});
   *
   *
   *  5：某个组件的根元素能够监听到原生事件，使用.native修饰
   *      例如：监听鼠标点击事件 v-on:mousedown.native
   *      <my-quanju-7 v-on:mousedown.native="doSomething"></my-quanju-7>
   */


  console.log("\n\n/***************************7-events-v-on  end****************************************/\n\n");

})();
export  default init;
