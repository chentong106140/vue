/**
 * Created by cherish on 2018/1/18.
 */

let init = setTimeout(function () {
  console.log("\n\n/***************************style_Object.js  start****************************************/\n\n");

  /**
   * 在style中插入样式属性，此时就没有true/false的概念了，Vue属性值就是样式的属性值
   *<div v-bind:style="{ color: activeColor, fontSize: fontSize + 'px' }"></div>
   */
  var vm1 = new Vue({
    el:"#ObjGrammar5",
    data:{
      activeColor: 'red',
      fontSize: 30
    }
  });

  /**
   * styleObject的对象语法，与上面的区别就是，return的对象中的属性名必须是原生的属性名称，相当于原生的style样式都写在了return的对象里
   * <div v-bind:style="styleObject"></div>
   * 效果：
   * <div style="color: red; font-size: 30px;"></div>
   */
  var vm2 = new Vue({
    el:"#ObjGrammar6",
    computed:{
      styleObject:function () {
        return {
          color: 'red',
          /**
           * 切记：必须写’30px',否则，不会添加fontSize样式
           */
          fontSize: '30px'
        };
      }
    }
  });

  console.log("\n\n/***************************style_Object.js  end****************************************/\n\n");

},3);
export  default init;
