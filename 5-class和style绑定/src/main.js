//主要介绍与html中的class绑定下的对象
import './class_Object.js';

//主要介绍与html中的class绑定下的数组语法
//缺少组件中使用，需要先去学习组件，再来补充2018-1-24
import './class_Array.js'

//主要介绍使用对象语法绑定在html中的style属性
import './style_Object.js'

//主要介绍使用数组语法绑定在html中的style属性
import './style_Array.js'

/**********************************与html中的class属性绑定****************************/
/**
 *  1:通过大括号，key值是需要添加的样式名称,value值为Vue属性值，该属性值必须为true/false，
 *  html:
 *  v-bind:class="{ active: isActive }"   active:是需要添加的样式，isActive是Vue属性，属性值为true/false
 *  js:
 *  data:{
      isActive:true
    }
 *
 *
 *  2:通过对象绑定    对象中的key值为需要插入的样式名称，对象中的value值为true/false,值的真假作为是否插入key样式的依据
 *  html:
 *    <div v-bind:class="classObject2"></div>
 *  js:
 *  data:{
 *     classObject2:{             //classObject2是对象
 *       active2:true,            //对象下有active2属性，该属性就是需要插入的样式名称，值为true/false  如果为true就插入active2样式
 *       "text-danger2":true      //对象下有text-danger2属性，该属性就是需要插入的样式名称，值为true/false，如果为true就插入text-danger2样式
 *     }
 *
 *
 *  3：通过computed对象，自动创建以该computed创建的方法名的属性对象，对象类似上面的classObj2的作用
 *  html:
 *  <div v-bind:class="classObject"></div>
 *  js:
 *  computed:{
        classObject:function () {
          var obj ={
            active:this.isActive && this.msg !=null,          //activie:是需要插入的样式名称，后面的值true/false，是插入的依据
            'text-danger':this.msg && this.msg === 'success'  //text-danger:是需要插入的样式名称，后面的值true/false,是插入的依据
          };
          return obj;
        }
      }
 *
 *
 *  4：数组语法
 *  html:
 *  <div v-bind:class="[{active:isActive},errorClass]"></div>
 *
 *  data:{
      isActive:true,
      errorClass:'text-danger'
    }
 *
 *
 */

/*************************************与内联style绑定**************************/
/**
 *
 *
 *
 */

