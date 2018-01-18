/**
 * Created by cherish on 2018/1/18.
 */

//使用对象的方式动态的添加class属性
let init = setTimeout(function () {
  console.log("\n\n/***************************ObjGrammar.js  start****************************************/\n\n");
  /**
   * 通过属性的true或false，决定是否加入class
   * @type {string}
   */
  var log = "ObjGrammar";
  var vm1 = new Vue({
    el:"#ObjGrammar1",
    data:{
      /**
       *  自动添加class属性=""  如果isActive值为真，就加入active样式
       *  <div v-bind:class="{ active: isActive }"></div>   效果    <div class="active"></div>
       *
       *  自动合并样式： 如果isActive为真，hasError为真，就加入active,text-danger样式
       *  <div class="static" v-bind:class="{ active: isActive, 'text-danger': hasError }"> </div>  效果  <div class="static active"></div>
       */
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

  /**
   *  通过computed对象添加方法，给Vue绑定该方法名的属性对象classObject
   *
   *  <div v-bind:class="classObject"></div> 效果 <div class="active text-danger"></div>
   */
  var vm3 = new Vue({
    el:"#ObjGrammar3",
    data:{
      isActive: true,
      msg: 'success'
    },
    computed:{
      classObject:function () {
        var obj ={
          /**
           * 如果isActive为真，并且msg不等于null，就插入active样式
           */
          active:this.isActive && this.msg !=null,
          /**
           * 如果msg属性有值，并且等于success，插入text-danger样式
           */
          'text-danger':this.msg && this.msg === 'success'
        };
        //一定要记得返回 return
        return obj;
      }
    }
  });


  console.log("\n\n/***************************ObjGrammar.js  end****************************************/\n\n");

},1);
export  default init;
