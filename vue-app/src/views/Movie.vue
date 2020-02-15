<template>
  <div id="movie">
    <ul id="movie-wrapper">
      <li v-for="obj in movieList" :key="obj.id" class="movie-list" @click="goDetails(obj.id)">
        <img class="movie-img" :src="obj.images.medium" alt="">
        <div class="movie-info">
          <h3>{{obj.title}}</h3>
          <p> 上映年份： {{ obj.year}}</p>
          <p> 演员： <span v-for="item in obj.casts" :key="item.id">{{ item.name }}</span> </p>
        </div>
      </li>
    </ul>
    <img v-show="isShow" class="movie-loading" src="@/assets/images/loading.gif" alt="">
  </div>
</template>

<script>
// @ is an alias to /src

import axios from 'axios'

export default {
  data () {
    return {
      movieList: [],
      isShow: false
    }
  },
  methods: {
    getList() {
      // 协议 域名 端口号 有一个不相同就出现了跨域问题
      // start 表示从第几条数据开始请求 count 表示每次请求几条数据
      this.isShow = true
      axios.get(`https://bird.ioliu.cn/v1?url=https://douban.uieee.com/v2/movie/top250?start=${this.movieList.length}&count=10`)
      .then(res => {
        console.log(res)
        this.isShow = false
        this.movieList = [...this.movieList,...res.data.subjects]
        // this.movieList.push(res.data.subjects)
      })
      .catch( err => {
        console.log(err)
      } )
    },
    // 进入到详情页面
    goDetails(id) {
      this.$router.push('/moviedetails/'+id)
    }
  },
  created () {
    this.getList();

    window.onscroll = () => {
      // 页面可视区域高度
      let height = document.documentElement.clientHeight;
      // 滚动条滚动出去的高度
      let top = document.documentElement.scrollTop;
      // 页面可滚动高度
      let tall = document.documentElement.scrollHeight;

      // 判断页面滚动到底部
      if( tall == height + top) {
        this.getList()
      }
    }
  }
}
</script>

<style lang="scss" scoped>
  #movie{
    background: #fff;

    .movie-list{
      display: flex;
      padding: .2rem .4rem;
      position: relative;

      &::after{
        content: '';
        display: block;
        border-bottom: 1px solid #ccc;
        position: absolute;
        left: .4rem;
        right: .4rem;
        bottom: 0;
        transform: scaleY(0.5);
      }

      .movie-img{
        width: 2rem;
      }
      .movie-info{
        flex: 1;
        padding-left: .2rem;
      }
    }
    .movie-loading{
      width: 1.5rem;
      position: fixed;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
    }
  }
</style>