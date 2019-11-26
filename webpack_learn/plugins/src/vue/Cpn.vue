<template>
  <div>
    <h2 class="title">{{message}}</h2>
    <span>{{name}}</span>
  </div>
</template>

<script>
export default {
  name: "Cpn",
  data() {
    return {
      message: "hello web 组件",
      name: "componet"
    };
  }
};
</script>

<style scoped>
.title {
  color: red;
}
</style>