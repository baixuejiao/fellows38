<template>
  <div id="book">
    <Swiper v-if="imgs.length > 0" :showIndicator="false">
      <Slide v-for="(item,index) in imgs" :key="index">
        <img :src="item" alt="">
      </Slide>
    </Swiper>
  </div>
</template>

<script>
import { Swiper, Slide } from 'vue-swiper-component';

export default {
  data() {
    return {
      imgs: [
        "https://img3.doubanio.com/lpic/s24468373.jpg",
        "https://img3.doubanio.com/lpic/s27102925.jpg",
        "https://img3.doubanio.com/lpic/s6989253.jpg"
      ]
    }
  },
  components: {
    Swiper,
    Slide
  }
}
</script>

<style>
  
</style>