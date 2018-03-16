/**
 * 编程式的导航（https://router.vuejs.org/zh-cn/essentials/navigation.html）
 *
 * 原来指定跳转的方式为：<router-link to="/user/chentong">进入首页</router-link>
 * 相当于把to的属性使用了router.push("/user/chentong")了，通过js来控制跳转
 *
 * Js控制跳转的方法为：
 * this.$router.history.push("/user/chentong");
 * 或者
 * router.push("/user/chentong");
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
         * 命名路由
         */
        name:"user",
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
 * 默认加载首页
 */
router.push("/user/chentong");

/**
 *  4:创建和挂载根实例
 */
const app = new Vue({
  router: router,
  methods:{
    /**
     * 前往首页方法
     */
    goHome:function () {
      this.$router.history.push("/user/chentong");
    },
    /**
     * 前往首页下面的子路由-电视剧
     */
    goDianshiju:function () {
      /**
       * 使用path与query的目的：手动写完整的地址，同时在地址后面追加查询参数type=电视剧
       * 完整的地址为：/user/chentong/dianshiju?type=电视剧
       */
      this.$router.history.push({path:"/user/chentong/dianshiju",query:{type:"电视剧"}});
    },
    /**
     * 前往首页下面的子路由-电影
     */
    goDianying:function () {
      /**
       * 1：使用命名式路由，就不要写完整的url地址了，直接写他的name就可以了
       * 2：path与params属性不能同时使用，所以用了params，就不能使用path指定完整地址
       *
       * 完整地址为：/user/chentong/dianying?type=电影
       *
       * 注意：这里没有指定父路由的:userName参数为chentong，但是最终生成的地址，他却帮我们添加了chentong
       */
      this.$router.history.push({name:"user",params:{children:"dianying"},query:{type:"电影"}});
    }
  }
}).$mount("#app");
