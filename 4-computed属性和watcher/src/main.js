
//验证computed注册的属性能够与Vue属性有依赖关系
//验证computed注册的属性具备缓存功能，不会重复执行
//如果不想有缓存请使用Methods里面注册的方法代替
import './computed.js'

//验证computed与watch的区别
import  './computedAndWatch.js'

//computed的getter/setter方法
//通过修改vm.fullName="新的值"，就会立即执行set方法
//通过获取vm.fullName;就会立即执行get方法，如果内部所依赖的属性没有发生变化，他就不会重复执行，具备缓存能力
import  './computedGetSet.js'

//一个演示watch的案例
//需要导入两个Js插件，详见index.html
import './watch.js'


/**
 * 需要根据观察属性变化时，执行方法逻辑，就是用watch属性
 *    如果需要产生依赖关系，需要提前在data中定义，如何在watch注册的方法中，编写依赖关系逻辑
 *
 *
 * 需要与Vue属性产生依赖关系，就是用computed属性
 *    computed对象添加的方法默认是在Vue中添加该方法名的属性的，所以不能在data中重复定义
 *    computed对象添加的方法，方法中一定要记得return 一个数据，否则Vue得到的对象属性值为undefined
 */
