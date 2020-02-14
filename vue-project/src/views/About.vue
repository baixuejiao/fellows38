<template>
  <div class="about">
    <h1>This is an about page</h1>
    <button @click="goForward">前进</button>

    <p> count: {{ $store.state.count }} </p>
  </div>
</template>

<script>
export default {
  data () {
    return {
      msg: ''  
    }
  },
  methods: {
    goForward() {
      this.$router.forward()
    }
  },
  beforeRouteEnter: (to, from, next) => {
    console.log(to )
    console.log(from)
    next()
  },
  beforeRouteLeave: (to, from, next) => {
    console.log(to )
    console.log(from)
    next()
  }
}
</script>
