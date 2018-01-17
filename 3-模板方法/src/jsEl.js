/**
 * Created by cherish on 2018/1/17.
 */

//在html中的双括号或v-属性值中，写javascript代码
export default (function () {
  new Vue({
    el:"#jsEl",
    data:{
      number:10,
      ok:"yes",
      msg:"你好vue!",
      id:'testID',
      bl:true
    }
  });
})()
