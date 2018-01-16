// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.

//data 和 methods
import dam  from './dataAndMethods.js'

import gouzi  from './gouzi.js'

Vue.config.productionTip = false


var data = {a:1};

//将data对象添加到vue实例上
var vm = new Vue({data});

//判断vue中的a属性是否与data对象的a属性一致
console.log(vm.a === data.a);//true

//问题：如果改变data对象的属性，会不会导致vue实例的属性同时改变呢？
data.a = 2;
console.log(vm.a);//2，
// 答案是会同时改变

//问题：如果改变Vue实例的属性，会不会导致data对象的属性同时改变呢？
vm.a = 3;
console.log(data.a);//3
// 答案是会同时改变

//问题：如果Vue实例创建之后，再给data对象新增属性，那么Vue实例会不会同时新增属性呢？
//给data对象赋予新属性
data.b = 1;
//检查Vue是否存在b属性
console.log(vm.b);//undefined,
// 说明：如果实例已经创建，那么只有那些 data 中的原本就已经存在的属性，才是响应式的。也就是说，如果在实例创建之后，添加一个新的属性，不会触发任何视图更新

//如上问题的解决方案是，我们需要提前设置一些初始值
//例如
data ={
  newTodoText: '',
  visitCount: 0,
  hideCompletedTodos: false,
  todos: [],
  error: null
};

dam();
gouzi();

