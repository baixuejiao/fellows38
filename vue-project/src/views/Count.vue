<template>
  <div>
    <h1>计数器</h1>
    <p> count: {{ $store.state.count }} </p>
    <!-- <button @click="fun">点击count+1</button> -->
    <button @click="add">点击count+1</button>
    <button @click="$store.commit('addFun', 3)">调用addFun</button>
    <p> count: {{ count }} </p>
    <p> num: {{ num }} </p>
    <button @click="reduceFun">调用reduceFun</button>
    <p>result: {{result}} </p>
  </div>
</template>

<script>

import { mapState, mapMutations, mapActions, mapGetters} from 'vuex'

export default {
  data () {
    return {
      msg: ''
    }
  },
  computed: {
    // mapState 对state进行映射
    ...mapState(['count', 'num']),
    ...mapGetters(['result']),
    sum() {
      return 111
    }
  },
  methods: {
    // mapMutations 对mutations进行映射
    ...mapMutations(['add', 'addFun']),
    // mapActions 对actions进行映射
    ...mapActions(['reduceFun']),
    fun() {
      // $store.commit 调用mutations里的方法
      this.$store.commit('add')
    },
  }
}
</script>

<style>

</style>