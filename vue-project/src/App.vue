<template>
  <div id="app">
    <!-- <router-view/> -->
    <div id="nav">
      <!-- to属性 代表对应页面的路由地址 -->
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link> | 
      <router-link to="/course">课程分类</router-link> | 
      <!-- <router-link to="/user">用户详情</router-link> -->
      <!-- 
        路由传参
        path + query 链接上带有参数 页面刷新参数不会丢失
       -->
      <router-link :to="{ path: '/user', query: { name: 'zs', age: 18 }  }">用户详情</router-link> | 
      <!-- 
        路由传参
        name + params 页面连接上不会带有参数 并且刷新页面后 传递的参数会丢失
       -->
      <!-- <router-link :to="{ name: 'User', params: { name: 'zs', age: 18 }  }">用户详情</router-link> |  -->
      <!-- 
        路由传参
        页面链接会带有参数 并且刷新页面参数不会丢失
       -->
      <router-link to="/details/101/16900">课程详情</router-link> | 
      <!-- <router-link to="/test/101/16900"> 测试页面</router-link> -->
      <router-link to="/test"> 测试页面</router-link> | 
      <router-link to="/aaa"> aaa</router-link>

    </div>
    <router-view/>
  </div>
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
