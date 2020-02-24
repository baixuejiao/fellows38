<template>
  <div>
    <ul>
      <li class="movie-list" v-for="obj in list" :key="obj.id">
        <h3>{{obj.title}}</h3>
        <button @click="goDetails(obj.id)">进入电影详情</button>
      </li>
    </ul>

  </div>
</template>

<script>
import axios from 'axios'
export default {
  data () {
    return {
      list: []
    }
  },
  methods: {
    goDetails(id) {
      // this.$router.push(`/details/${id}`) 

      // name/path + query 参数会拼接在url中 通过 $route.query获取参数 刷新时参数不会丢失 http://localhost:8080/details?id=1292052
      this.$router.push({
        name: 'details',
        query: {
          id
        }
      })

      // name + params 参数存在$route里 链接中不显示 通过 $route.params获取参数 刷新时参数丢失 http://localhost:8080/details
      // this.$router.push({
      //   name: '/details',
      //   params: {
      //     id
      //   }
      // })

    }
  },
  created() {
    axios.get('https://bird.ioliu.cn/v1?url=https://douban.uieee.com/v2/movie/top250?start=0&count=10')
      .then(res => {
        console.log(res)
        this.list = res.data.subjects
      })
      .catch(err => {
        console.log(err)
      })
  }
}
</script>

<style lang="scss" scoped>
  .movie-list{
    padding: 10px;
    border-bottom: 1px solid red;
  }
</style>