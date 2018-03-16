/**
 * Created by cherish on 2018/1/24.
 */

let init = (function () {
  console.log("\n\n/***************************1-v-model-basic  start****************************************/\n\n");

  /**
   * 单行文本
   */
  var vm1 = new Vue({
    el:"#v-model-1",
    data:{
      msg:""
    }
  });

  /**
   * 多行文本
   */
  var vm2 = new Vue({
    el:"#v-model-2",
    data:{
      msg:""
    }
  });

  /**
   * 单选
   */
  var vm3 = new Vue({
    el:"#v-model-3",
    data:{
      checked:true
    }
  });

  /**
   * 多选
   */
  var vm4 = new Vue({
    el:"#v-model-4",
    data:{
      checkedNames:[]
    }
  });

  /**
   * radio
   */
  var vm5 = new Vue({
    el:"#v-model-5",
    data:{
      picked:''
    }
  });

  /**
   * 单选 select
   */
  var vm6 = new Vue({
    el:"#v-model-6",
    data:{
      selected:''
    }
  });
  /**
   * 多选 select（绑定到一个数组）
   */
  var vm7 = new Vue({
    el:"#v-model-7",
    data:{
      selected:[]
    }
  });


  /**
   * 使用 v-for 渲染动态的 option
   */
  var vm8 = new Vue({
    el:"#v-model-8",
    data:{
      selected:'',
      options:[
        { text: 'One', value: 'A' },
        { text: 'Two', value: 'B' },
        { text: 'Three', value: 'C' }
      ]
    }
  });
  console.log("\n\n/***************************1-v-model-basic  end****************************************/\n\n");

})();
export  default init;
