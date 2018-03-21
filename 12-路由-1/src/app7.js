/**
 * 路由组件传参（https://router.vuejs.org/zh-cn/essentials/passing-props.html）
 */

import VueRouter from 'vue-router'

Vue.use(VueRouter);


/**
 * 2定义路由
 * 每个路由应该映射一个组件，就是component
 */
const routes = [
  {
    /**
     * 命名
     */
    name:"chentong",
    /**
     * 路径
     */
    path: '/user/chentong',
    /**
     * 别名
     */
    alias:"/ct",
    components:{
      center:{
        /**
         * 定义调用者给组件传参的参数名
         */
        props:['type'],
        template:"<div>进入到chentong---{{$route.fullPath}}---type:{{type}}</div>"
      }
    },
    /**
     * 通过函数定义外部传参
     * 如果使用了多个视图，对应多个组件components，那么就需要为每个视图定义Props props:{center:function(route){return{type:route.query.type}}}
     * 如果使用一个视图，对应一个组件component,那么就只需要写props:function(route){return {type:route.query.type}}
     */
    props:{
      center:function (route) {
        return {
          type:route.query.type
        }
      }
    }
  },
  {
    /**
     * 命名
     */
    name:"libai",
    /**
     * 路径，并且设置动态参数
     */
    path:"/user/:userName",
    /**
     * 别名
     */
    alias:"/lb",
    components:{
      /**
       * 定义组件显示在名为center的视图上面
       */
      center:{
        /**
         * 定义调用者给组件传参的参数名
         */
        props:['userName'],
        template:"<div>进入到libai---{{$route.fullPath}}---userName:{{userName}}</div>"
      }
    },
    /**
     * 通过设置props为true进行外部传参
     * 如果使用了多个视图对应多个组件components，就需要为每个视图设置props为true props:{center:true}
     * 如果只有一个视图一个组件component,就只需要为props设置为ture  props:true
     */
    props:{center:true}
  }
];

/**
 * 3创建路由配置
 */
const router = new VueRouter({
  routes: routes
});

/**
 *  4:创建和挂载根实例
 */
const app = new Vue({
  router: router
}).$mount("#app");
