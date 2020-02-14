<template>
  <div id="course">
    <h1>课程分类</h1>

    <router-link to="/course/fe">Web全栈课程</router-link> | 
    <router-link to="/course/rd">后端课程</router-link>

    

    <transition name="fade">
      <router-view></router-view>
    </transition>

  </div>
</template>

<script>
export default {

}
</script>

<style>
  .fade-enter-active, .fade-leave-active {
    transition: opacity 1s;
  }
  .fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
    opacity: 0;
  }
</style>
