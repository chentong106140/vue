//单个插槽
<template>
  <div class="color">
    <h5>我是子组件的标题</h5>
    <slot>
      <h5>由于父组件没有插入内容，默认，我就显示了！</h5>
    </slot>
    <h5>{{msg ? msg :'由于父组件没有传入msg消息，所以我显示了！'}}</h5>
  </div>
</template>

<script>

  export default{
      props:{
          msg:''
      }
  }

</script>

<style scoped>
  .color{
    color:red;
  }
</style>
