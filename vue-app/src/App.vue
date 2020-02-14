<template>
  <div id="app">
    <common-header/>

    <div id="container">
      <router-view/>
    </div>

    <common-footer/>

  </div>
</template>

<script>
import commonHeader from '@/components/CommonHeader.vue'
import commonFooter from '@/components/CommonFooter.vue'

export default {
  components: {
    commonHeader,
    commonFooter
  }

}
</script>

<style lang="scss">
  #container{
    margin-top: 50px;
  }
</style>
