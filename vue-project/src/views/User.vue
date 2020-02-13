<template>
  <div id="user">
    <h1>用户详情页面</h1>
    <p>姓名： {{ $route.query.name }} </p>
    <p>年龄： {{ $route.query.age }} </p>
    <!-- <p>姓名： {{ $route.params.name }} </p>
    <p>年龄： {{ $route.params.age }} </p> -->
  </div>
</template>

<script>
export default {
  data () {
    return {
      params: this.$route.params,
      query: this.$route.query
    }
  }
}
</script>

<style>

</style>