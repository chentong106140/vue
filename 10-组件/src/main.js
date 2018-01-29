
//创建全局组件
import './1-quanjuzhuce.js'

//局部注册组件
import './2-jubuzhuce.js'

//全局组件中的data属性，vue实例可以调用data函数中返回的属性值，必须是一个函数，并且该函数内使用return 数据
import './3-quanjuzhuce-data.js'

//在组件中，使用props传递数据，同时，支持驼峰式命名，串联式使用，通过{{}}方式获取传递的数据
//props 向下父——>子，events 向上子——>父
import './4-props-chuanCanShu.js'


import './5-props-object.js'


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
