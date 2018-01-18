/**
 * Created by cherish on 2018/1/18.
 */

var init = setTimeout(function () {
  console.log("\n\n/***************************computedAndWatch.js  start****************************************/\n\n");

  var obj = {
    firstName:"陈",
    lastName:"通",
    fullName:"陈 通"
  };

  /**
   * 使用watch属性，能够观察与响应变化的数据
   */
  var vm = new Vue({
    el:"#computedAndWatch",
    data(){
      return obj;
    },
    watch:{
      //观察firstName属性，如果值发生变化，将执行如下方法
      firstName:function (value) {
        this.fullName = value + ' ' + this.lastName;
        console.log("watch中的firstName方法被执行！"+value,vm.fullName,obj.fullName);
      },
      lastName:function (value) {
        this.fullName = this.firstName + ' ' +value;
        console.log("watch中的lastName方法被执行！"+value,vm.fullName,obj.fullName);
      }
    }
  });

  /**
   * 手动控制值变化
   */
  obj.firstName = "柯";
  obj.lastName = "南";

  /**
   *  验证fullName是否变化
   */
  console.log("obj.fullName",obj.fullName);//陈 通
  console.log("vm.fullName",vm.fullName);//陈 通

  /**
   * 我们上面改变两个属性值，但是去获取最新的fullName却还是“陈通”
   * 说明一个问题，当我们修改Vue属性的时候，对应的watch里面的观察方法，并不是立即执行，存在一定延迟
   * 也可以理解为有代码执行先后顺序的问题
   * 如果我们加上延迟执行，再看下结果
   */

  setTimeout(function () {
    /**
     *  验证fullName是否变化
     */
    console.log("computedAndWatch.js setTimeout　obj.fullName",obj.fullName);//柯 南
    console.log("computedAndWatch.js setTimeout vm.fullName",vm.fullName);//柯 南
  },0);

  /**
   * 如上，我们再去获取fullName值，发现确实是变化了，
   * 可以总计一个问题，修改Vue属性，确实能执行watch里面的观察方法，
   * 但是如果我们修改属性的同时去获取其他依赖他的最新的值的时候，并没有立即改变值，说明具有代码执行先后问题
   * watch方法需要等待DOM加载完之后，才能去执行，通过setTimeout也就能够说明这个问题
   */

  /***********************************验证computed与watch是否具有同样的能力***********************************************************/

  /**
   * 我们通过computed，是否也能够实现这个效果呢？
   * 当我们Vue其中一个属性值发生变化，是否能够实现，其他依赖这个属性值的属性呢？
   * 此案例fullName就是依赖firstName和lastName的
   */
  var obj_ = {
    firstName:"陈",
    lastName:"通",
  };

  var vm_ = new Vue({
    el:"#computedAndWatch",
    data(){
      return obj_;
    },
    computed:{
      /**
       * 切记，computed下面定义的方法fullName会自动给Vue添加fullName属性
       * 所以，不能在data下面也定义fullName属性，否则会报错，说fullName属性已经在Vue中定义了
       * @returns {*}
       */
      fullName:function () {
        console.log("computed下的fullName被执行！");
        return this.firstName + this.lastName;
      }
    }
  });

  /**
   * 手动控制值变化
   */
  obj_.firstName = "孙";
  obj_.lastName = "悟空";

  /**
   *  验证fullName是否变化
   */
  console.log("vm_.fullName",vm_.fullName);//陈 通

  /**
   * 如上结果，与watch属性的作用是一样的，
   * 也出现了代码执行被延迟的问题，并不能立即生效，存在代码执行先后的问题
   * 所以我们也通过setTimeout进行延迟获取fullName属性
   * 如下验证
   */
  setTimeout(function () {
    /**
     *  验证fullName是否变化
     */
    console.log("computedAndWatch.js setTimeout vm_.fullName",vm_.fullName);// 孙悟空
  },0);

  /**
   * 如上结果，发现执行了延迟获取fullName值，确实获取到了最新的值
   * 也能过说明，computed与watch的属性具有一样的效果，都能实现属性依赖关系，与，观察值变化能力
   * 而，computed属性，写法更加 优雅
   *
   * 他们的区别在于：
   * computed不能在data中定义需要依赖关系的属性，
   * watch需要在data中定义需要依赖关系的属性
   */


  console.log("\n\n/***************************computedAndWatch.js  end****************************************/\n\n");


},2);
export default init;
