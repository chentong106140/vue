/**
 * Created by cherish on 2018/1/24.
 */

let init = (function () {
  console.log("\n\n/***************************3-quanjuzhuce-data.js  start****************************************/\n\n");

  /**
   *  首先我们暴露一个data不是函数时，出现的问题
   */

  //定义data对象
  var data = {
    count :0
  };

  //注册全局组件
  Vue.component('my-quanju-2',{
    template:
    '<div>' +
      '<button v-on:click="++count">点击我，数字自增</button>' +
      '<br/>' +
      '<h1>{{count}}</h1>' +
    '</div>',
    /**
     * 如果直接给data赋值就会报错，无法在组件中调用data中定义的属性
     * data:data    这样写就会报错
     */
    data:function () {
      return data;
    }
  });

  //创建Vue实例
  var vm1 = new Vue({
    el:"#quanjuzhuce-data-1"
  });

  /**
   * 如上案例，我们在页面同时调用了3个全局组件，
   * 点击一个按钮，就会导致count这个属性的会自增1，但是,
   * 如果我们使用了多个这个全局组件my-quanju-2，而每个全局组件my-quanju-2中都调用了count这个变量，
   * 每个组件都共用了count变量，导致，一个组件对这个count变量发生变化的话，其他也使用count变量的组件，也发生了改变
   * 无法实现每一个独立的my-quanju-2组件，属于自己的count变量
   *
   * 如案例中,一个my-quanju-2组件对count自增1，其他my-quanju-2组件中也自增1
   */

  /**
   * 解决方案是，在data函数中，返回独立的data数据，让他们每一个组件的data都是私有的
   */

  //注册全局组件
  Vue.component('my-quanju-3',{
    template:
    '<div>' +
    '<button v-on:click="++count">点击我，数字自增</button>' +
    '<br/>' +
    '<h1>{{count}}</h1>' +
    '</div>',
    data:function () {
      return {
        count : 0
      };
    }
  });

  //创建Vue实例
  var vm1 = new Vue({
    el:"#quanjuzhuce-data-2"
  });

  /**
   * 总结：
   * 1：注册全局组件
   * Vue.component('my-quanju-3',{
        template:
        '<div>' +
        '<button v-on:click="++count">点击我，数字自增</button>' +
        '<br/>' +
        '<h1>{{count}}</h1>' +
        '</div>',
        data:function () {
          return {
            count : 0
          };
        }
      });
   *
   * 2：实例化Vue   也就是那个Vue实例需要使用全局组件
   *   var vm1 = new Vue({
        el:"#quanjuzhuce-data-2"
      });
   *
   * 3：使用全局组件
   * <div id="quanjuzhuce-data-2"   style="border:1px solid red;">
         <!--调用全局组件-->
         <my-quanju-3></my-quanju-3>
         <my-quanju-3></my-quanju-3>
         <my-quanju-3></my-quanju-3>
     </div>
   */


  console.log("\n\n/***************************3-quanjuzhuce-data.js  end****************************************/\n\n");

})();
export  default init;
