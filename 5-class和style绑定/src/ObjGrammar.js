/**
 * Created by cherish on 2018/1/18.
 */

//使用对象的方式动态的添加class属性
let init = setTimeout(function () {
  console.log("\n\n/***************************ObjGrammar.js  start****************************************/\n\n");
  var log = "ObjGrammar";
  var vm1 = new Vue({
    el:"#ObjGrammar1",
    data:{
      isActive:true,
      hasError:true}
  });

  var vm2 = new Vue({
    el:"#ObjGrammar2",
    data:{
      /**
       * 通过对象语法，直接在v-bind:class="classObject2"来绑定
       * 输出的class效果为class="active2
       */
      classObject2:{
        active2:true,
        "text-danger2":true
      }
    }
  });


  console.log("\n\n/***************************ObjGrammar.js  end****************************************/\n\n");

},1);
export  default init;
