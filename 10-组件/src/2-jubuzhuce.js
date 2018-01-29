/**
 * Created by cherish on 2018/1/24.
 */

let init = (function () {
  console.log("\n\n/***************************2-jubuzhuce.js  start****************************************/\n\n");

  //定义组件
  var Child = {
    template: '<div><h1>这是我创建的第一个局部组件my-component1</h1></div>'
  };

  //将局部组件注册到实例
  new Vue({
    el:"#jubuzhuce",
    components: {
      // 只能在父级模板中使用 <my-component1>
      'my-component1': Child,
      'my-component2':{
        template:'<div><h1>这是我创建的第二个局部组件my-component2</h1></div>'
      }
    }
  });

  /**
   * 局部注册步骤：
   * 1：直接在Vue实例内的components对象下面注册组件
   *
   * 2：在html中使用
   * <div id="jubuzhuce"  style="border:1px solid red;">
         <!--使用局部组件-->
         <my-component1></my-component1>
         <my-component2></my-component2>
         <!--使用全局组件-->
         <my-component></my-component>
     </div>
   *
   *
   * 最终渲染：
   * <div><h1>这是我创建的第一个局部组件my-component1</h1></div>
   * <div><h1>这是我创建的第二个局部组件my-component2</h1></div>
   * <div><h1>这是我创建的第一个全局组件</h1><h2>这是全局组件中的第二个元素</h2></div>
   */



  console.log("\n\n/***************************2-jubuzhuce.js  end****************************************/\n\n");

})();
export  default init;
