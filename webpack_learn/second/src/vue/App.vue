<template>
  <div>
    <h2 class="title">{{message}}</h2>
    <span>{{name}}</span>
    <Cpn></Cpn>
  </div>
</template>

<script>
import Cpn from "./Cpn";
export default {
  name: "App",
  data() {
    return {
      message: "hello webpack",
      name: "nihao"
    };
  },
  components: {
    Cpn
  }
};
</script>

<style scoped>
.title {
  color: yellow;
}
</style>