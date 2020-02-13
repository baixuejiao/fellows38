<template>
  <div>
    <button @click="goBack">后退</button>
    <button @click="Go">GO</button>
    <button @click="fun"> 回到首页 </button>
  </div>
</template>

<script>
export default {
  methods: {
    goBack() {
      this.$router.back()
    },
    Go() {
      this.$router.go(-2)
    },
    fun() {
      // this.$router.push('/')
      // this.$router.push({
      //   path: '/user',
      //   query: {
      //     name: 'xm',
      //     age: 18
      //   }
      // })

      this.$router.replace({
        name: 'User',
        params: {
          name: 'xm',
          age: 18
        }
      })
    }
  }
}
</script>

<style>

</style>