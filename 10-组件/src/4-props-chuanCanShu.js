/**
 * Created by cherish on 2018/1/24.
 */

let init = (function () {
  console.log("\n\n/***************************4-props-chuanCanShu.js  start****************************************/\n\n");

  /**
   * 定义全局组件
   */
  Vue.component("my-quanju-4",{
    /**
     * 1：声明 props,代表，在props-chuanCanShu节点添加my-message属性
     * 2：Vue是支持自动将驼峰式命名方式（需要使用连字符分割的时候字母大写）转换为串联式命名的（使用连字符-进行分割）
     * 3：props中定义的属性名称，自动也在Vue实例中添加了对应的属性myMessage属性，可以通过this.myMessage获取
     */
    props: ['myMessage'],
    /**
     * 像 data 一样，prop 可以在组件模板内部使用，
     * 并且，还可以在 vm 实例中通过 this.message 访问
     */
    template: '<h1>后面是我通过双大括号获取props中的值：{{ myMessage }}</h1>'
  });

  /**
   * 创建Vue实例
   */
  var vm = new Vue({
    el:"#props-chuanCanShu"
  });

  /**
   * 总结：
   * 1：注册全局组件，并且在注册组件的时候，定义props属性，
   *    该属性是一个数组，数组内部填写需要自定义属性的名称， props: ['自定义属性名称'],
   *    用于在全局组件调用的时候，通过<my-quanju-4  自定义属性名称="这里传值给自定义属性" ></my-quanju-4>
   *
   * 2：props自定义的属性名称，支持驼峰式命名myMessage，
   *    我们在组件中使用该属性的时候，可以通过串联式命名规则去使用：<my-quanju-4  my-message=""><my-quanju-4>
   *
   * 3：使用props自定义属性的值
   *    1)通过在组件模板中使用{{}}方式调用，例如:{{myMessage}}，
   *      切记：调用的时候，props数组内定义的是什么名称，就使用什么名称调用，不能使用串联式调用
   *    2)可以在vue实例方法中，通过this.自定义属性名，的方式调用，例如：this.myMessage
   *      切记：同上。
   */

  console.log("\n\n/***************************4-props-chuanCanShu.js  end****************************************/\n\n");

})();
export  default init;
