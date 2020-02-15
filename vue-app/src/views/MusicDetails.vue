<template>
  <div id="music-details">
    <aplayer v-if="list.length>0" 
      autoplay
      :music="list[0]"
      :list="list"
    />
  </div>
</template>

<script>
import axios from 'axios'
import Aplayer from 'vue-aplayer'
export default {
  data () {
    return {
      list: []
    }
  },
  components: {
    Aplayer
  },
  created () {
    axios.get('/data/musicdata.json')
      .then(res => {
        console.log(res)
        res.data.musicData.forEach(value => {
          value.artist = value.author
          value.pic = value.musicImgSrc
        })
        this.list = res.data.musicData
      })
      .catch(err => {
        console.log(err)
      })
  }
}
</script>

<style>

</style>