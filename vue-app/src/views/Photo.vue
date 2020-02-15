<template>
  <div id="photo">
    <img v-for="(obj, index) in $store.state.photoList" :key="index" :src="obj.src" alt="" @click="goDetails(index)">
  </div>
</template>

<script>
import axios from 'axios'
export default {
  data () {
    return {
      // photoList: []
    }
  },
  methods: {
    goDetails(index) {
      this.$router.push('/photodetails/'+index)
    }
  },
  created () {
    axios.get('/data/photodata.json')
      .then(res => {
        console.log(res)
        // this.photoList = res.data.photoData
        this.$store.commit('setPhotoList', res.data.photoData)
      })
      .catch(err => {
        console.log(err)
      })
  }
}
</script>

<style lang="scss" scoped>
  #photo{
    img{
      width: 50%;
    }
  }
</style>