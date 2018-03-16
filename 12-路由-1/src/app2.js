/**
 * 动态路由配置（https://router.vuejs.org/zh-cn/essentials/dynamic-matching.html）
 * 在线案例（https://jsfiddle.net/yyx990803/4xfa2f19/）
 */

import VueRouter from 'vue-router'

Vue.use(VueRouter);

/**
 * 1定义路由组件
 */
const User = {
  template: "<div v-on:click='show'>User {{$route.params.userName}}</div>",
  computed: {
    /**
     * this.$route.params 获取动态路由参数
     * 例如：/user/chentong 组件内使用this.$route.params.chentong获取
     * @returns {*}
     */
    userName: function () {
      return this.$route.params.userName;
    },
    /**
     * this.$route.query  取路由URL的查询参数
     * 例如：/user/chentong?age=18 组件内使用this.$route.query.age获取
     * @returns {User.computed.age}
     */
    age: function () {
      return this.$route.query.age;
    },
    /**
     * this.$route.fullPath  获取完成解析后的 URL，包含查询参数和 hash 的完整路径
     * @returns {*}
     */
    fullPath: function () {
      return this.$route.fullPath;
    },
    hash: function () {
      return this.$route.hash;
    },
    /**
     * this.$route.name  获取当前路由的名称
     */
    name: function () {
      return this.$route.name;
    }
  },
  methods: {
    show: function () {
      alert("userName:" + this.userName + "-age:" + this.age + "-hash:" + this.hash + "-fullPath:" + this.fullPath + "-name:" + this.name);
    }
  }
};

/**
 * 2定义路由
 * 每个路由应该映射一个组件，就是component
 */
const routes = [
  {
    /**
     * 当多个路由都用到了该组件，所以需要配置成动态路由，保持前缀/user/一样，后面的:userName就是动态路由参数
     * 定义动态路径参数:userName
     * 当我们在router-link的to属性中指定路径为/user/chentong，
     * 那么针对该path动态指定的:userName将会把chentong这个值，塞到$route.params下，通过$route.params.userName来取值
     */
    path: '/user/:userName',
    component: User
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
