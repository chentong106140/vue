/**
 * 重定向 和 别名（https://router.vuejs.org/zh-cn/essentials/redirect-and-alias.html）
 */

import VueRouter from 'vue-router'

Vue.use(VueRouter);


/**
 * 2定义路由
 * 每个路由应该映射一个组件，就是component
 */
const routes = [
  /**
   * 通过命名来重定向
   * 重定向后，地址变更为：/user/chentong
   */
  {
    path:"/redirect-chentong",
    redirect:{name:"chentong"}
  },
  /**
   * 通过命名来重定向
   * 重定向后，地址变更为：/user/libai
   */
  {
    path:"/redirect-libai",
    redirect:{name:"libai"}
  },
  /**
   * 通过别名来重定向
   * 重定向后，地址保持为：/ct
   */
  {
    path:"/redirect-ct",
    redirect:"/ct"
  },
  /**
   * 通过别名来重定向
   * 重定向后，地址保持为：/lb
   */
  {
    path:"/redirect-lb",
    redirect:"/lb"
  },
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
        template:"<div>进入到chentong---{{$route.fullPath}}</div>"
      }
    }
  },
  {
    /**
     * 命名
     */
    name:"libai",
    /**
     * 路径
     */
    path:"/user/libai",
    /**
     * 别名
     */
    alias:"/lb",
    components:{
      center:{
        template:"<div>进入到libai---{{$route.fullPath}}</div>"
      }
    }
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
