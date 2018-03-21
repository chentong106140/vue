<template>
  <div>
    <h2>{{msg}}</h2>
    <slot></slot>
    <hr/>
    <h3>$store.state.count---{{$store.state.count}}</h3><br/>
    <h3>在computed中的mapState中匹配state中的共享的count---{{count}}</h3><br/>
    <h3>在computed中的mapState中自定义myCount---{{myCount}}</h3>
    <hr/>
    <span>直接调用store.commit()</span>---
    <button @click="$store.commit('add',10)">+</button>
    <button @click="$store.commit('reduce')">-</button>
    <br/>
    <span>调用mapMutations中获取的方法</span>
    <button @click="add(10)">+</button>
    <button @click="reduce">-</button>
    <br/>
    <span>调用methods中自定义的方法</span>
    <button @click="myAdd(10)">+</button>
    <button @click="reduce">-</button>
    <br/>
    <span>调用mapActions中获取的方法</span>
    <button @click="addAction(10)">+</button>
    <button @click="reduceAction">-</button>

  </div>
</template>
<script>
  import store from '../store/store.js'
  /**
   * mapState：
   *          用于将store状态属性共享给组件中的computed，与computed配合使用
   *     前提: mapState([])中数组参数名必须与state中的状态属性名一致
   *
   * mapGetters:
   *          用于将store状态属性进行过滤之后共享给组件中的computed，与computed配合使用
   *     前提：mapState([])中数组参数名必须与getters中的key值保持一致，而key值是用来监听state中的状态属性，最终也是需要与state中的状态属性名一致
   *
   * mapMutations:
   *          用于将store中定义的方法共享给组件中的methods，与menthods配合使用
   *     前提：mapMutations([])中数组参数名必须与mutations中的方法名保持一致
   */
  import {mapState,mapGetters, mapMutations,mapActions} from 'vuex'
  export default {
    data: function () {
      return {
        msg: 'Hello Vuex'
      }
    },
    /**
     * computed写法一：
     * 将store中的状态属性通过computed共享给组件属性
     * 通过this.$store.state对象来赋值
     * 将store中共享的数据与组件的数据进行绑定，这样就可以直接使用{{count}}访问了
     */
      /*    computed: {
      count: function () {
        return this.$store.state.count;
      },
      myCount: function () {
        return this.$store.state.count;
      }
    },*/

    /**
     * computed写法二：
     * 将store中的状态属性通过computed共享给组件属性
     * 通过mapState的对象来赋值
     * 将store中共享的数据与组件的数据进行绑定，这样就可以直接使用{{count}}访问了
     */
    /*    computed: mapState({
     count: function (state) {
     return state.count;
     },
     /!**
     * 自定义属性
     *!/
     myCount: function (state) {
     return state.count;
     }
     }),*/

    /**
     * computed写法三：
     * 将store中的状态属性通过computed共享给组件属性
     * 当组件属性与state中共享的属性名称一样时，可以通过mapState的数组来赋值
     * 将store中共享的数据与组件的数据进行绑定，这样就可以直接使用{{count}}访问了
     */
    computed: {
      /**
       * 将store中的状态属性count通过mapState共享给组件属性count
       */
      ...mapState(['count']),
      /**
       * getters写法一：
       * 由于上面的...mapState会将共享参数count赋值给组件属性count,
       * 而我们在下面又重新定义了一个组件属性count，所以下面的会覆盖上面的定义，其实上面写在这里其实没有作用了
       *
       * 通过this.$store.getters获取store中getters过滤后的共享参数count
       *
       * 也就是说，当每次改变store的共享参数count，都会先进行一次过滤，而本案例中每次将count自增10，都会继续加上100
       * 而加上100这个操作，就是在store中的getters中定义的
       *
       * 这里说的每次改变store的共享参数count，本案例是在调用store的mutations中的方法对共享参数进行了改变
       */
      /*count:function () {
        return this.$store.getters.count;
      },*/

      /**
       * getters写法二：
       * 由于写法一这种将store中的状态属性共享给组件属性count，写法过于复杂，需要定义方法，在方法里面还要调用this.$store.getters.count
       * 所以，mapGetters就省去了该操作，直接通过数组传参即可。
       *
       * 由于上面的...mapState会将共享参数count赋值给组件属性count,
       * 而我们在下面又重新定义了一个组件属性count，所以下面的会覆盖上面的定义，其实上面...mapState写在这里其实没有作用了
       *
       * 与mapState作用差不多，都是将store中的状态属性，共享给组件属性
       * 区别就是：
       *      mapGetters会将共享的状态属性进行一次过滤，只要当store对状态属性进行了改变，都会进行一次过滤
       *      本案例，通过mutations中的方法对count状态属性做了改变，也就是，每次改变之后都会触发getters中的过滤操作，加上100
       */
      ...mapGetters(['count']),

      /**
       * 这里定义组件一个myCount自定义属性，这个属性与store中state中的count共享参数进行了数据绑定
       * 如果使用了this.$store.getter.count对共享参数进行了过滤操作，
       * 那么this.$store.state.count值也会被改变，
       * 所以 就得出如下结论：
       * myCount = this.$store.state.count = this.$store.getters.count
       */
      myCount: function () {
        return this.$store.state.count;
      }
    },

    /**
     * 将store中的mutations方法共享给组件，直接通过@click='add'调用mutations中定义的方法
     */
    methods: {
      /**
       * 将store中的mutations方法add与方法reduce，通过mapMutations共享给组件方法
       */
      ...mapMutations(['add', 'reduce']),
      /**
       * 将store中的actions方法addAction和方法reduceAction，通过mapActions共享给组件方法
       */
      ...mapActions(['addAction','reduceAction']),
      /**
       * 自定义方法
       */
      myAdd: function (nums) {
        this.$store.commit('add', nums);
      },
      myReduce: function () {
        this.$store.commit('reduce');
      }
    },


    store
  }
</script>
