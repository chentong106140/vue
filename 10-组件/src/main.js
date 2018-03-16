
//创建全局组件
import './1-quanjuzhuce.js'

//局部注册组件
import './2-jubuzhuce.js'

//全局组件中的data属性，vue实例可以调用data函数中返回的属性值，必须是一个函数，并且该函数内使用return 数据
import './3-quanjuzhuce-data.js'

//在组件中，使用props传递数据，同时，支持驼峰式命名，串联式使用，通过{{}}方式获取传递的数据
//props 向下父——>子，events 向上子——>父
import './4-props-chuanCanShu.js'

//动态props赋值，传递数据使用简写方式 组件传递数据是动态获取到的   v-bind:msg="12"与msg="12"区别
import './5-props-object.js'

//非props属性
import './6-not-props.js'

//自定义事件 v-on  修饰符.native
import './7-events-v-on.js'

//自定义表单控件
import './8-events-form.js'

//自定义表单控件,完整案例
import './8-events-form-anli.js'

//在 JavaScript 标签里定义模板
import './9-x-template.js'

//使用template标签订购模板
import './10-template.js'

import './11-template.js'

//插槽
import './12-chacao.js'



/**
 * 组件的作用就是，
 * 组件可以帮助你扩展基本的 HTML 元素，以封装可重用代码
 *
 * 其实就是可以将Html写在js中，这段html代码可以是重用的代码，也可以是按逻辑生成的html代码
 * 同时，注册好组件后，在html页面中直接以新的标签写进去
 * 例如：
 * <my-component></my-component>
 *
 */
