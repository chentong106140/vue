<template>
  <div class="container">
    <ul>
      <li>
        <v-a href="/">main</v-a>
        <v-a href="/other">other</v-a>
      </li>
    </ul>
    <slot></slot>
  </div>

</template>
<script>
  import VA from '../components/Va.vue'

  export default {
      components:{
        VA
      }
  }

</script>
<style scoped>
  .container {
    max-width: 600px;
    margin: 0 auto;
    padding: 15px 30px;
    background: #f9f7f5;
  }
</style>
