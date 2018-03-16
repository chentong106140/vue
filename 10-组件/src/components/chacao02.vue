//具名插槽
<template>
  <div class="color">
    <!--指定名称，插入指定位置-->
    <slot name="header"></slot>
    <slot></slot>
    <slot name="footer"></slot>
  </div>
</template>

<script>

</script>

<style scoped>
  .color{
    color:red;
  }
</style>
