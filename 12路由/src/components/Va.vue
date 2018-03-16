<template>
  <a
    v-bind:href="href"
    v-bind:class="{active:isActive}"
    v-on:click="go"
  >
    <!--此处开放一个插槽，如果外部有自定义的标签，可以插入在这里-->
    <slot></slot>
  </a>

</template>

<script>
  import routes from '../routes/routes.js'

  export default{
    props: {
        /**
         * 对外开放属性，谁调用当前组件，就需要传入该值
         */
      href: {
        type: String,
        required: true
      }
    },
    computed:{
      /**
       * 主要是为了在点击a标签的时候，判断外部调用此组件的Vue对象的currentRoute，这个属性就是网页当前的地址
       * 如果网页当前的地址与当前的a标签的地址一致，那就触发这个isActive属性值，
       * 如果值为真，就加上active类样式
       * 如果值为假，就删除active类样式
       * @returns {boolean}
       */
        isActive:function () {
          return this.href === this.$root.currentRoute;
        }
    },
    methods:{
      /**
       * 屏蔽默认时间
       * 同时，每次点击，控制外部调用此组件的Vue对象的currentRoute的属性值为，当前此组件的href属性，保持一致
       * 同时，为了模拟真实的页面跳转，所以在浏览器历史记录里面添加改访问记录，这样如果控制浏览器的前进后退，也能保持页面在前进后退，
       * 其实，我们由于屏蔽的真实的页面跳转，所以不存在页面访问新的页面，所以为什么要在历史记录里面添加
       *
       * 如果不在历史记录里面添加，会导致，每次点击此组件，页面没有访问记录，那么控制前进后退，也就没有意义了
       * @param event
       */
        go:function (event) {
          event.preventDefault();
          this.$root.currentRoute = this.href;
          window.history.pushState(
            null,
            routes[this.href],
            this.href
          )
        }
    }
  }

</script>
<style scoped>
  /*当点击当前的a标签，就会赋予此类样式，用于区分其他没有点击的a标签*/
  .active {
    color: cornflowerblue;
  }
</style>
