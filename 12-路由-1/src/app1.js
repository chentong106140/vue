import VueRouter from 'vue-router'

Vue.use(VueRouter);

/**
 * 1定义路由组件
 */
const Foo = {template: "<div>foo</div>"};
const Bar = {template: "<div>bar</div>"};

/**
 * 2定义路由
 * 每个路由应该映射一个组件，就是component
 */
const routes = [
  {
    path: '/foo',
    component: {
      template:"<div>foo</div>"
    }
  },
  {
    path:'/bar',
    component:Bar
  }
];

/**
 * 3创建路由配置
 */
const router = new VueRouter({
  routes:routes
});

/**
 *  4:创建和挂载根实例
 */
const app = new Vue({router:router}).$mount("#app");
