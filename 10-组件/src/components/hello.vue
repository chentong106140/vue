<template>
  <h1>{{myMessage}}---{{desc}}</h1>
</template>

<script type="text/javascript">
  export default {
    name:"myVueTemplate",
    props: ['myMessage'],
    data:function () {
      return {
        desc:"使用单文件组件定义的全局组件！"
      };
    }
  }
</script>
<style scoped>
  h1{
    color:red;
  }
</style>
