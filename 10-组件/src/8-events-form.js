/**
 * Created by cherish on 2018/1/24.
 */
//导入全局对象test
import 'src/lib/test.lib.js'
let init = (function () {
  console.log("\n\n/***************************8-events-form  start****************************************/\n\n");
  console.log('验证第三方插件安装成功',validator);
  console.log('验证获取第三方扩展插件jQuery成功',test,$,jQuery);
  Vue.component("my-quanju-8", {
    template: '<span>' +
    '$' +
    /**
     * ref="myInput"将input 的dom对象，赋值给vue下的this.$refs.myInput对象
     */
    '<input  ref="myInput" ' +
    /**
     * v-bind:value 将value变量与input的vale属性进行双向数据绑定，value变量发生变化，就自动赋值给input的value值
     * props中定义的变量名必须是value，只有value才能和父组件中的v-model进行绑定
     */
    ':value="value" ' +
    /**
     * v-on:input 绑定input标签的input事件，当有值输入的时候，自动触发input事件，input事件内执行了组件的updateValue方法
     * $event为事件对象
     */
    '@input="updateValue($event.target.value)" ' +
    '>' +
    '</span>',
    props: ['value'],
    methods: {
      // this.$refs.myInput.value 此方法不是用来直接更新 price，
      // this.$refs.myInput.value 而是用于对 input 的 value
      // 进行格式化和位数限制
      /**
       * this.$emit('input',formattedValue);  通过手动触发input事件，进行与父组件进行数据绑定   将input的value与父组件的price进行数据绑定
       *
       * this.$emit('myevent',formattedValue);  通过手动触发自定义myevent事件，修改父组件的属性
       */
      updateValue: function (value) {
        console.log(value);
        if(validator.isNumeric(value))
        {
          this.$refs.myInput.value = value;
          // 向上触发 input 事件，并传递数字值
          //在这里必须是触发input事件，因为只有input事件才与父组件使用v-model绑定的value值进行数据绑定，
          // 否则在这里设置value值，只会修改子组件下的value值，但是没有同时修改父组件中绑定的数据v-model="price"
          //<input v-model="something"> 使用v-model会被解析成如下这种写法，所以只有input事件才会修改父组件中的属性值
          //<custom-input :value="something" @input="value => { something = value }"></custom-input>
          this.$emit('input',value);
          this.$emit('myevent','输入正确：'+value);
        }else{
          /**
           *  切记：
           *  自定义事件区分大小写，所以，不能写成myEvent
           *  自定义事件必须写在组件html节点上  <my-quanju-8 v-model="price" v-on:my-event="myMenthod"></my-quanju-8>
           */
          this.$emit('myevent','输入错误：'+value);
        }


      }
    }
  });

  var vm1 = new Vue({
    el:"#events-form",
    data:{
      price:10,
      msg:''
    },
    methods:{
      myMenthod:function (value) {
        this.msg = value;
      }
    }
  });

  /**
   *  总结：
   *  一：通过v-model控制父组件的属性值
   *
   *  1：定义具有表单内容的全局组件
   *      template: '<span><input  ref="myInput" v-bind:value="value" v-on:input="updateValue($event.target.value)" </span>>'
   *      注意：
   *          ref="myInput"：将input标签的dom对象传递给this.$refs.myInput
   *          v-bind:value='value'：将Props中定义的属性与input的value值做数据绑定，目的是props中的value变量发生改变，就同时改变input的value值
   *          v-on:input='updateValue($event.target.value)'：绑定input标签的input事件，当输入值的时候，将值传给updateValue方法
   *
   * 2：定义全局组件的props属性，用于父组件向子组件传递数据
   *    props: ['value']
   *    注意：必须是写value这个名称，由于父组件通过v-model与子组件进行数据绑定，而v-model有时通过value来控制数据的，所以必须是value
   *
   * 3：定义全局组件中的methods
   *
   * 4: 通过this.$refs.myInput.value = value;控制表单数据变化
   *
   * 5：通过this.$emit('input',value);手动触发input事件，控制value数据与父组件的v-model进行数据绑定的变量price进行绑定
   *    这里控制了input的value值的变化，同时，父组件中的price变量也发生改变了
   *
   * 二：通过在vue中定义方法，并在组件上自定义事件的方式，控制子组件修改父组件的属性
   *    <my-quanju-8 v-model="price" v-on:myevent="myMenthod"></my-quanju-8>
   *    注意：
   *        这里自定义了myevent事件，通过组件内部，手动触发该事件，
   *        而该事件又执行了Vue的myMenthod方法，该方法内部修改上层对象的属性值
   *
   */


  console.log("\n\n/***************************8-events-form  end****************************************/\n\n");

})();
export  default init;
