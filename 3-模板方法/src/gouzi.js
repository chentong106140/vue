//实例生命周期钩子函数  https://vuefe.cn/v2/guide/instance.html#%E5%AE%9E%E4%BE%8B%E7%94%9F%E5%91%BD%E5%91%A8%E6%9C%9F%E9%92%A9%E5%AD%90%E5%87%BD%E6%95%B0


module.exports = function () {

  //在实例创建后将调用 created 钩子函数
  new Vue({
    data:{a:1},
    created:function () {
      //this指向的是Vue实例对象
      console.log("属性a的值为"+this.a);//属性a的值为1
    }
  });
};




























