var init = (function () {
  var vm = new Vue({
    el: '#computed',
    data: {
      message: 'Hello'
    },
    computed: {
      /** 一个 computed 属性的 getter 函数
       *虽然这里写的是reversedMessage方法，
       *但是computed属性的作用可以将reversedMessage函数的名称作为Vue的属性，在这里注册reversedMessage方法，就会自动给Vue添加一个这个方法名的属性reversedMessage*/
      reversedMessage: function () {
        console.log("reversedMessage执行了");  //这里输出日志，是为了验证reversedMessage方法执行一次就输出
        return this.message.split('').reverse().join('')
      },
      now:function () {
        return Date.now();
      }
    }
  })

  /**验证reversedMessage属性依赖于message属性
   *只要message属性发生变化，reversedMessage属性就立即变化*/
  //测试reversedMessage值
  console.log(vm.reversedMessage) // => 'olleH'
  //修改message的值
  vm.message = 'Goodbye'
  console.log(vm.reversedMessage) // => 'eybdooG'
  //我们发现reversedMessage也同时更新了，
  //vm.reversedMessage 的值总是依赖于 vm.message 的值。


  /**验证reversedMessage方法执行多少次，也就是验证reversedMessage属性是否具备缓存功能
   * 我们发现reversedMessage方法中的日志只执行了2次，
   * 这两次都是因为上面对message属性发生改变，才会执行reversedMessage方法，
   * 也就是能够证明reversedMessage属性缓存了上一次得到的reversedMessage值
   * 只有message属性发生编号，reversedMessage方法才会重新执行，
   * 如果只是使用vm.reversedMessage获取值，是不会执行在computed中注册的方法的
   * */
  console.log(vm.reversedMessage);  // => 'eybdooG'
  console.log(vm.reversedMessage);  // => 'eybdooG'
  console.log(vm.reversedMessage);  // => 'eybdooG'


  /**
   * 通过now属性也能过说明computed属性可以缓存Vue的属性值
   * 如下案例，由于Date.now()函数能够获取实时的时间搓，但是vm.now属性获取的永远是一个值，也就是说，这个值被缓存了
   * 但是为什么这个值一直被缓存，而无法更新呢？
   * 答案是由于now方法，内部没有与Vue的属性产生依赖关系
   */
  console.log(vm.now);  // => 1516184717138
  console.log(vm.now);  // => 1516184717138
  console.log(vm.now);  // => 1516184717138

})();

export default init;
