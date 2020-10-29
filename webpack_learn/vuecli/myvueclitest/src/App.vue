<template>
  <div id="app">
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
