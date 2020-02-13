<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <transition>
      <HelloWorld msg="Welcome to Your Vue.js App"/>
    </transition>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'Home',
  components: {
    HelloWorld
  }
}
</script>
