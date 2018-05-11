<template>
<div>
  <h1>首页</h1>
  <h1>实现DEMO</h1>
  <ul class="list">
    <router-link tag='li' :to="{name:'page'}">
      分页组件
    </router-link>
    <router-link tag='li' :to="{name:'testParam2'}">
      多参数路由
    </router-link>
  </ul>

</div>
</template>

<script>
    export default {
        name: "index"
    }
</script>

<style scoped lang="stylus">
 .list {
   li {
     cursor: pointer
     margin-bottom 5px
   }
   }
</style>
