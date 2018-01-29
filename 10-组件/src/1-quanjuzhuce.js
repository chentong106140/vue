/**
 * Created by cherish on 2018/1/24.
 */

let init = (function () {
  console.log("\n\n/***************************1-quanjuzhuce.js  start****************************************/\n\n");

  // 注册
  Vue.component('my-quanju-1', {
    /**
     * 切记，必须使用一个根节点，否则报错
     * template: '<h1>这是我创建的第一个全局组件2</h1><h2>这是全局组件中的第二个元素</h2>'  这是错误的写法
     */
    template: '<div><h1>这是我创建的第一个全局组件</h1><h2>这是全局组件中的第二个元素</h2></div>'
  });

  // 创建一个根实例
  new Vue({
    el: '#quanjuzhuce'
  });

  /**
   * 创建全局组件步骤：
   * 1：首先我们需要在模块中先注册一个组件，
   *    使用 Vue.component(tagName, options)
   *
   * 2：创建一个根实例
   *    new Vue({el: '#example'});
   *
   * 3：在html中使用
   *
   *  <div id="quanjuzhuce">
        <my-component></my-component>
      </div>
   *
   * 4：最终渲染
   * <div><h1>这是我创建的第一个全局组件2</h1><h2>这是全局组件中的第二个元素</h2></div>
   *
   */





  console.log("\n\n/***************************1-quanjuzhuce.js  end****************************************/\n\n");

})();
export  default init;
