<template>
  <div id="movie-detail">
    <img :src="details.images.medium" alt="">

    <h3>{{details.title}}</h3>

    <p>{{details.summary}}</p>
    
  </div>
</template>

<script>
import axios from 'axios'
export default {
  data () {
    return {
      details: {}  
    }
  },

  created () {
    axios.get(`https://bird.ioliu.cn/v1?url=https://douban.uieee.com/v2/movie/subject/${this.$route.params.id}`)
      .then(res => {
        console.log(res)
        this.details = res.data
      })
      .catch( err => {
        console.log(err)
      })
  }
}
</script>

<style>

</style>