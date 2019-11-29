<template>
  <div id="app">
    <h2>ha ha ha</h2>
    <router-link to="/home" tag="button" replace>首页</router-link>
    <router-link v-bind:to="'/user/'+userId" tag="button" replace>用户</router-link>
    <router-link to="/about" tag="button" replace>关于</router-link>
    <button @click="testClick">测试</button>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      userId:"zhangsan"
    };
  },
  methods: {
    testClick() {
      console.log("test click");
      //通过代码修改  这样没有router-link-active样式
      this.$router.push("/Test"); //push 可以换成replace
    }
  }
};
</script>

<style>
.router-link-active {
  color: red;
}
</style>
