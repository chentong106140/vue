/**
 * Created by cherish on 2018/1/17.
 */
//插入元素属性值
export default (function () {
  var data ={
    //动态id属性值
    dynamicId:"testID",
    dynamicDisable:"false",
    dynamicValue:"动态value值"
  };
  new Vue({
    el:"#vBind",
    data:data,
    methods:{
      clickShowID:function (event) {
        alert("获取当前元素的动态id属性值："+event.target.id);
      },
      clickShowDisable:function (event) {
        alert("获取当前元素的动态disable属性值："+event.target.disable);
      },
      clickShowValue:function (event) {
        alert("获取当前元素的动态value属性值："+event.target.value);
      },
    }
  });
})()
