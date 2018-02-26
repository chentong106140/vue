/**
 * Created by cherish on 2018/1/24.
 */

let init = (function () {
  console.log("\n\n/***************************6-not-props.js  start****************************************/\n\n");


  /**
   * 注册全局组件
   */
  Vue.component("my-quanju-6",{
    template:'<input type="date" class="form-control">'
  });

  var vm1 = new Vue({
    el:"#not-props",
  });


  /**
   * 总结：
   * 我们如果没有定义全局组件中props属性，而是自定义在调用全局组件的时候，自定义传入属性，此时，我们会有疑问，vue会做什么？
   * 1：注册全局组件my-quanju-6
   *
   * 2：定义全局组件模板
   *    template:'<input type="date" class="form-control">'
   *    注意：模板中的根元素是input
   *
   * 3：使用全局组件，并且自定义参数传递数据给组件
   *    <my-quanju-6 data-3d-date-picker="true" class="date-picker-theme-dark"></my-quanju-6>
   *    注意：
   *         这里我们自定义了data-3d-date-picker属性，
   *         添加了date-picker-theme-dark样式
   *
   *    问题：
   *        如果这边追加了class样式，是否会覆盖组件根元素的class样式？
   *        如果我们自定义了属性在全局组件上，Vue会怎么利用这个自定义的属性
   *
   * 4：页面渲染效果
   *    <input class="form-control date-picker-theme-dark" data-3d-date-picker="true" type="date">
   *     总结：
   *          我们没有通过props定义属性，进行数据传递，而是自定义一个属性在全局组件上面，
   *
   *          1）如果我们自定义属性给组件的class添加样式，结局是如果组件根元素内已经有class样式了，例如（form-control）
   *          Vue不会覆盖原本的样式属性，会自动在原本的样式后面继续追加样式
   *
   *          2）我们自定义的属性在组件上面，最终他会自动添加在组件根元素的属性上，例如data-3d-date-picker="true"
   *
   *  总结：非props定义属性和props定义属性的区别是：
   *        1）非Props定义的属性，会在组件根元素上面加上这个属性，无法在其他地方用到
   *        2）props定义的属性，在使用组件的属性上面进行传递数据，数据可以在组件内部通过{{属性名}}活动
   *           同时还可以，定义数据类型，绑定数据，可以通过Vue实例的this调用属性
   *
   */


  console.log("\n\n/***************************6-not-props.js  end****************************************/\n\n");

})();
export  default init;
