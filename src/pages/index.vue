<template>
<div>
  <h1>首页</h1>
  <h2>实现DEMO</h2>
  <ul class="list">
    <router-link tag='li' :to="{name:'page'}">
      分页组件
    </router-link>
    <router-link tag='li' :to="{name:'testParam2'}">
      多参数路由
    </router-link>
    <router-link tag='li' :to="{name:'media'}">
      媒体查询&vue
    </router-link>
  </ul>

</div>
</template>

<script>
    export default {
        name: "index",

    }
</script>

<style scoped lang="stylus">
 .list {
   li {
     cursor: pointer
     margin-bottom 5px
   }
   li:hover {
     color: orange
   }
   }
</style>
