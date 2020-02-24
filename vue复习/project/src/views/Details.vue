<template>
  <div>
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
    // 当前页面路由信息在$route
    let id = this.$route.params.id || this.$route.query.id
    axios.get('https://bird.ioliu.cn/v1?url=https://douban.uieee.com/v2/movie/subject/'+id)
      .then(res => {
        // axios会把返回信息处理 把所有返回的内容存在了data字段中
        console.log(res.data)
        this.details = res.data
      })
      .catch(err => {
        console.log(err)
      })
  }
}
</script>

<style>

</style>