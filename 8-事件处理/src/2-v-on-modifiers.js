/**
 * Created by cherish on 2018/1/24.
 */

let init = (function () {
  console.log("\n\n/***************************2-v-on-modifiers  start****************************************/\n\n");


/*
 <!-- 停止点击事件冒泡 -->
 <a v-on:click.stop="doThis"></a>

 <!-- 提交事件不再重新载入页面 -->
 <form v-on:submit.prevent="onSubmit"></form>

 <!-- 修饰符可以链式调用 -->
 <a v-on:click.stop.prevent="doThat"></a>

 <!-- 只有修饰符 -->
 <form v-on:submit.prevent></form>

 <!-- 添加事件监听器时，使用事件捕获模式 -->
 <!-- 也就是说，内部元素触发的事件先在此处处理，然后才交给内部元素进行处理 -->
 <div v-on:click.capture="doThis">...</div>

 <!-- 只有在 event.target 是元素自身时，才触发处理函数。 -->
 <!-- 也就是说，event.target 是子元素时，不触发处理函数 -->
 <div v-on:click.self="doThat">...</div>

*/


  console.log("\n\n/***************************2-v-on-modifiers  end****************************************/\n\n");

})();
export  default init;
