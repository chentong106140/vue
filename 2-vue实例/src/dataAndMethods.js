//data 和 methods https://vuefe.cn/v2/guide/instance.html#data-%E5%92%8C-methods
export default ()=>{

  //常用实例属性 与方法，这些属性都具有前缀"$",以便与用户自定义的属性有区分
  var data = {a:1};
  var vm = new Vue({
    el:"#app",
    data:function () {
      return data;
    }
  });

  //$data属性
  console.log(vm.$data === data); //true

  //$el属性
  console.log(vm.$el === document.getElementById("app")); //true

  //$watch方法,当某个属性发生改变之后调用
  vm.$watch('a',(newValue,oldValue) => {
    console.log("属性a发生改变",newValue,oldValue); //属性a发生改变 2 1
  });

  //手动控制属性a变化
  data.a = 2;

};
