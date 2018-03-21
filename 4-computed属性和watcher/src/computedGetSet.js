98/**
 * Created by cherish on 2018/1/18.
 */
//computed 属性默认只设置 getter 函数，不过在需要时，还可以提供 setter 函数：
let init  = setTimeout(function () {
  console.log("\n\n/***************************computedGetSet.js  start****************************************/\n\n");
    var obj ={
      firstName :"陈",
      lastName:"通"
    };

    var vm = new Vue({
      data:obj,
      computed:{
        fullName:{
          /**
           * get方法，通过使用vm.fullName获取到的值，就是执行的get方法
           * 需要return
           */
          get:function () {
            console.log("fullName的get方法被执行！");
            return this.firstName + ' ' + this.lastName;
          },
          /**
           * set方法，通过vm.fullName="xx",设置值，就会执行set方法
           * @param newValue
           */
          set:function (newValue) {
              console.log("fullName的set方法被执行！",newValue);
              let arrys = newValue.split('');
              this.firstName = arrys[0];
              this.lastName = arrys[1];
          }
        }
      }
    });

  /**
   * 测试获取fullName值
   */
  setTimeout(function () {
    console.log("computedGetSet.js setTimeout vm.fullName1"+vm.fullName);
    console.log("computedGetSet.js setTimeout vm.fullName1"+vm.fullName);
    console.log("computedGetSet.js setTimeout vm.fullName1"+vm.fullName);
    console.log("computedGetSet.js setTimeout vm.fullName1"+vm.fullName);
  },0);

  /**
   * 如上，写法，获取fullName值获取了4次，但是对于的get方法并没有执行
   * 说明，computed属性已经把fullName进行缓存了
   * 如果我们修改fullName的依赖的属性值呢？get/set方法会如何执行呢？
   */

  setTimeout(function () {
    /**
     * 在这里，我们修改fullName所依赖的两个属性值，
     * 一旦所依赖的属性值发生变化，那么computed属性下的get方法就会立即执行，
     */
    vm.firstName = "猪";
    vm.lastName = "八戒";
    console.log("computedGetSet.js setTimeout vm.fullName2"+vm.fullName);
    console.log("computedGetSet.js setTimeout vm.fullName2"+vm.fullName);
    console.log("computedGetSet.js setTimeout vm.fullName2"+vm.fullName);
    console.log("computedGetSet.js setTimeout vm.fullName2"+vm.fullName);
  },0);

  /**
   * 验证setter方法
   */

  setTimeout(function () {
    vm.fullName = "唐僧";
    console.log("computedGetSet.js setTimeout vm.fullName3"+vm.fullName);
  },0);

  /**
   * 如上，我们通过vm.fullName=“唐僧”，进行修改值
   * 我们发现，fullName的set方法就会被立即执行，
   * 此时，会导致firstName/lastName被修改，
   * 如果通过vm.fullName去读取这个值的话，get方法就理解会被执行，因为，firstName/lastName被修改了
   */

  console.log("\n\n/***************************computedGetSet.js  end****************************************/\n\n");

},3);
export  default init;
