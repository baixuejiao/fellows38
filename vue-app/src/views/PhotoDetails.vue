<template>
  <v-touch v-on:swipeleft="onSwipeLeft" v-on:swiperight="onSwipeRight">
    <div v-if="photoList.length>0" id="photo-details" :style="{backgroundImage: `url(${photoList[index].src})`}"></div>
  </v-touch>
</template>

<script>
import { mapState } from 'vuex'
import Vue from 'vue'
import VueTouch from 'vue-touch'
Vue.use(VueTouch, {name: 'v-touch'})

export default {
  data () {
    return {
      index: this.$route.params.index
    }
  },
  computed: {
    ...mapState(['photoList'])
  },
  methods: {
    onSwipeLeft() {
      if(this.index == this.photoList.length-1) return
      this.index++
    },
    onSwipeRight() {
      if (this.index == 0) {
        return
      }
      this.index--
    }
  }
}
</script>

<style lang="scss" scoped>
  #photo-details{
    // width: 100%;
    // height: 100%;
    // background-image: url("http://localhost:8081/img/photo/1.jpg");
    background-size: contain;
    background-position: center;
    background-repeat: no-repeat;
    background-color: #666;
    position: absolute;
    top: 1rem;
    bottom: 1rem;
    left: 0;
    right: 0;
  }
</style>