<template>
  <footer class="footer" :style="{backgroundColor: curMenu.bgColor}">
    <!-- 在v-for 循环中 需要绑定一个key属性 且key必须是唯一的不允许重复 一般会把数据库中的id来当作key -->
    <div v-for="obj in menuList" :key="obj.path" @click="changeMenu(obj)">
      <router-link :to="obj.path" >{{ obj.name }}</router-link>
    </div>
  </footer>
</template>

<script>

import { mapMutations, mapState } from 'vuex'

export default {
  data () {
    return {
      path: this.$route.path,
      // 当前被选中菜单的背景色
      curColor: '#ff0000',
      menuList: [
        {
          name: '电影',
          path: '/',
          bgColor: '#ff0000'
        },
        {
          name: '音乐',
          path: '/music',
          bgColor: '#ff00ff'
        },
        {
          name: '图书',
          path: '/book',
          bgColor: '#00ffff'
        },
        {
          name: '图片',
          path: '/photo',
          bgColor: '#ff8907'
        }
      ]
    }
  },
  computed: {
    ...mapState(['curMenu'])
  },
  methods: {
    ...mapMutations(['setCurMenu']),
    // 切换菜单时，获取当前被选中的菜单的信息
    // 利用事件冒泡 点击 router-link时触发了父元素的点击事件
    changeMenu(obj) {
      this.curColor = obj.bgColor
      this.setCurMenu(obj)
    }
  },
  created () {
    console.log(this.path)
    this.menuList.forEach((value, index) => {
      console.log(index)
      if(value.path == this.path) {
        this.setCurMenu(value)
      }
    })
  },
  // watch: {
  //   path: function( newValue, oldValue) {
  //     console.log(newValue, oldValue)
  //   }
  // }
}
</script>

<style lang="scss" scoped>
  .footer{
    display: flex;
    width: 100%;
    height: 1rem;
    line-height: 1rem;
    background: red;
    position: fixed;
    left: 0;
    bottom: 0;

    div{
      flex: 1;
      text-align: center;

      a{
        color: #000;
      }
      .router-link-exact-active {
        color: #fff;
      }
    }
  }
</style>