/**
 * 命名视图（https://router.vuejs.org/zh-cn/essentials/named-views.html）
 *
 * 在线案例（https://jsfiddle.net/posva/6du90epg/）
 */

import VueRouter from 'vue-router'

Vue.use(VueRouter);

/**
 * 1:定义组件
 */
var Home = {
  template: "<div>首页---{{$route.fullPath}}</div>"
};

var DianShiJu = {
  template: "<div>电视剧---{{$route.fullPath}}"
};

var DianYing = {
  template: "<div>电影---{{$route.fullPath}}</div>"
};


/**
 * 2定义路由
 * 每个路由应该映射一个组件，就是component
 */
const routes = [
  {
    path: '/user/:userName',
    /**
     * 根据一个视图，只能同时渲染一个组件的原则
     * 如果，一个路由，对应多个视图，
     * 那么，一个路由，就对应多个组件，这时候就需要使用components来配置多个组件,渲染在不同的视图里面了
     */
    components: {
     // default: Home,
      //dianshiju: DianShiJu,
      dianying: DianYing
    }
  },
  {
    path:'/center/:userName',
    components:{
      default:DianShiJu,
      dianshiju:Home,
      dianying:DianYing
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
 * 默认加载首页
 */
router.push("/user/chentong?type=首页");


/**
 *  4:创建和挂载根实例
 */
const app = new Vue({
  router: router
}).$mount("#app");
