/**
 * Created by cherish on 2018/1/24.
 */
let init = (function () {
  console.log("\n\n/***************************8-events-form-anli  start****************************************/\n\n");
  Vue.component("my-quanju-9", {
    /**
     * 定义组件模板
     */
    template: '\
    <div>\
      <label v-if="label">{{ label }}</label>\
      $\
      <input\
        ref="input"\
        v-bind:value="value"\
        v-on:input="updateValue($event.target.value)"\
        v-on:focus="selectAll"\
        v-on:blur="formatValue"\
      >{{tip}}\
    </div>\
  ',
    /**
     * 定义组件属性
     */
    props: {
      value: {
        type: Number,
        default: 0
      },
      label: {
        type: String,
        default: ''
      },
      tip: {
        type: String,
        default: ''
      }
    },
    /**
     * 声明周期钩子
     */
    mounted: function () {
      this.formatValue()
    },
    methods: {
      /**
       * 负责输入验证
       * @param value
       */
      updateValue: function (value) {
        if (validator.isNumeric(value)) {
          this.$refs.input.value = value;
          this.$emit('input', value)
        } else {
          this.tip = '输入错误：' + value;
        }
      },
      /**
       * 负责表单失去焦点时，进行格式化
       */
      formatValue: function () {
        this.$refs.input.value = parseFloat(this.$refs.input.value).toFixed(2);
      },
      /**
       * 负责表单获取焦点时，将目标元素选中
       * @param event
       */
      selectAll: function (event) {
        setTimeout(function () {
          event.target.select()
        }, 0)
      }
    }
  });
  new Vue({
    el: '#events-form-anli',
    data: {
      price: 0,
      shipping: 0,
      handling: 0,
      discount: 0
    },
    computed: {
      /**
       * 新建total属性，与data中的属性进行数据绑定
       * @returns {string}
       */
      total: function () {
        return ((this.price + this.shipping + this.handling + this.discount ) / 100).toFixed(2);
      }
    }
  });

  /**
   * 总结：
   * 一：注册全局组件
   *     1：在组件内部定义props属性用于父组件向子组件传递数据
   *     2：定义methods方法
   *     3：定义template,模板，模板中只有一个表单元素
   *
   * 二：实例Vue实例，实例中定义data数据，
   *      用于实例数据往组件内传递数据
   *
   * 三：在html中调用多次全局组件
   *      通过v-model与组件内的value属性进行数据绑定
   *      通过props属性名="属性值"，传递字符串数据
   */



  console.log("\n\n/***************************8-events-form-anli  end****************************************/\n\n");

})();
export  default init;
