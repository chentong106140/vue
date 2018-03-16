
import routes from './routes/routes.js'
import vues from './routes/vues.js'

const app = new Vue({
  el:"#app",
  data:{
    currentRoute:window.location.pathname
  },
  computed:{
    ViewComponent:function () {
      const matchingView = routes[this.currentRoute];
      return matchingView ? vues[matchingView] : vues['404'];
    }
  },
  created:function () {
  },
  render (h) {
    console.log(this.ViewComponent)
    return h(this.ViewComponent)
  }
});

/**
 * 添加浏览器前进后退事件
 */
window.addEventListener("popstate",function () {
  console.log(app.currentRoute,window.location.pathname);
  /**
   * 当浏览器进行前进后退的时候，将vue的用于记录当前地址的属性，保持与当前访问链接保持一致
   * 如果不保持一致的话,也就是vue的用于记录当前地址的属性,不会被改变，最终会导致，render渲染函数不会被执行
   * @type {string}
   */
  app.currentRoute = window.location.pathname;
});
