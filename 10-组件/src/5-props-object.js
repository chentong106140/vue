/**
 * Created by cherish on 2018/1/24.
 */

let init = (function () {
  console.log("\n\n/***************************5-props-object.js  start****************************************/\n\n");
  Vue.component("my-quanju-5",{
    /**
     * props可以是简单数组，可以是对象，如果是对象的话，可以定义类型，检索等等
     */
    props:{
      /**
       * 使用v-bind:添加该属性v-bind:my-message=""
       * <my-quanju-5 v-bind:my-message="parentMsg"></my-quanju-5>
       */
      myMessage:{
        type:String,
        default: "我是默认值！",
        required: true,
        validator: function (value) {
          console.log(value)
          if(value.length >10)
          {
            return false;
          }else{
            return true;
          }
        }
      },
      //限制数据类型
      msg:Number
    },
    template: '<h1>myMessage：{{myMessage}}&nbsp;&nbsp;&nbsp;msg:{{msg}}</h1>'
  });

  var vm1 = new Vue({
    el:"#props-object",
    data:{
      /**
       * v-model="parentMsg"数据绑定，前提是需要在Vue实例中定义该属性
       */
      parentMsg:''
    }
  });

  /**
   * 总结：
   * 1：可以通过对象的方式，定义props来向子组件传递数据
   *    对象的方式可以检索，可以订购数据类型等等
   *
   * 2：使用v-bind:自定义props名称，向下传递数据
   *    例如：
   *    <input v-model="parentMsg">   绑定数据
   *    <my-quanju-5 v-bind:my-message="parentMsg"></my-quanju-5> 将数据传递给子组件
   *
   * 3：传入props数据的简写方式
   *    例如：
   *    <my-quanju-5 :my-message="parentMsg"></my-quanju-5>
   *
   * 4：调用传递过来的数据  {{myMessage}}
   *    例如：
   *    template: '<h1>myMessage：{{myMessage}}</h1>'
   *
   *
   * 5：msg="12"  与   v-bind:msg="12"  区别：
   *    1):msg="12"  ：这种方式只会向子组件传递一个"12"的字符串
   *        通过msg:Number  类型的限制，也可以凸显这个问题，
   *        由于msg限制了数字类型，但是msg="12",却传递了"12"这个字符串给他，控制台就报错[Vue warn]: Invalid prop: type check failed for prop "msg". Expected Number, got String.
   *
   *    2):v-bind:msg="12" : 这种方式会根据传入的实际的数据类型向子组件传递数据
   *        v-bind:msg="12" 实际传递了12这个整数
   *        通过msg:Number  类型的限制，控制台并没有报错，也证明了数据类型传递成功
   *
   *    3):数据绑定传输区别
   *        v-bind:my-message="parentMsg" 可以将变量parentMsg传入给子组件
   *        my-message="parentMsg"  只会将字符串"parentMsg"传入给子组件
   *
   */

  console.log("\n\n/***************************5-props-object.js  end****************************************/\n\n");

})();
export  default init;
