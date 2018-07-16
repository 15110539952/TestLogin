<template>
  <div class="hello">
    <h1>{{msg}}</h1>
    <h3><router-link :to="{ name: 'login'}">element登录</router-link></h3>
    <h3><router-link :to="{ name: 'Parent'}">子父组件数据传递</router-link></h3>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
