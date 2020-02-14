<template>
  <header class="header" :style="{ backgroundColor: curMenu.bgColor }">
    <span class="header-home" @click="goHome">首页</span>
    {{ curMenu.name }}
  </header>
</template>

<script>
import { mapState, mapMutations } from 'vuex'

export default {
  computed: {
    ...mapState(['curMenu'])
  },
  methods: {
    ...mapMutations(['setCurMenu']),
    goHome() {
      this.setCurMenu({
        name: '电影',
        bgColor: '#ff0000'
      })
      this.$router.push('/')

    }
  }

}
</script>

<style lang="scss" scoped>
  .header{
    width: 100%;
    height: 1rem;
    line-height: 1rem;
    text-align: center;
    color: #fff;
    background: red;
    position: fixed;
    top: 0;
    left: 0;

    .header-home{
      position: absolute;
      left: .2rem;
    }
  }

</style>