/**
 * 嵌套路由（https://router.vuejs.org/zh-cn/essentials/nested-routes.html）
 * 在线案例（https://jsfiddle.net/yyx990803/L7hscd8h/）
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
     * 当多个路由都用到了该组件，所以需要配置成动态路由，保持前缀/user/一样，后面的:userName就是动态路由参数
     */
    path: '/user/:userName',
    /**
     * 配置组件，也可以通过import组件来配置，这里是直接创建组件
     */
    component: {
      template: "<div>" +
      "<h2>{{$route.params.userName}}</h2>" +
      "<router-view></router-view>" +
      "</div>"
    },
    /**
     * 当一个组件内嵌套许多其他路由的组件
     * 例如：外部定义入口<router-link to="/user/chentong/dianshiju">进入电视剧页面</router-link>
     * 它想进入/user/chentong/下面的dianshiju路由，对应加载来的dianshiju路由组件，需要在/user/chentong/下面渲染
     * 所以需要
     * 1:在父路由对应的组件模板下给一个出口<router-view></router-view>
     * 2:配置children属性，定义该路由下所有的子路由
     *
     */
    children:[
      {
        /**
         * 此处的子路由path属性定义的为一个空字符，
         * 作用：
         * 如果路由地址入口<router-link to属性写的是/user/chentong
         * 那么就默认渲染该子路由，官方说法是，如果父路由地址是一个根路径地址，例如/user/chentong
         * 那么就代表默认渲染path为''的子路由对应的模板内容
         */
        path:'',
        component:{
          template:"<div>{{$route.params.userName}}--主页</div>"
        }
      },
      {
        /**
         * 定义子路由，路径为dianshiju,
         * 入口访问路径为：/user/chentong/dianshiju
         */
        path:':children',
        component:{
          template:"<div>{{$route.query.type}}---{{$route.fullPath}}--->{{$route.params.children}}</div>"
        }
      }
    ]
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
  router: router,
  created: function () {
  }
}).$mount("#app");
