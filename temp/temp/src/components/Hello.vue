<template>
  <div class="hello">
      <h1>hello componets {{name}}</h1>
       <el-radio v-model="radio" label="1">备选项</el-radio>
       <el-radio v-model="radio" label="2">备选项</el-radio>
  </div>
    
</template>

<script>
export default {
  data () {
    return {
      name: 'zhangsan',
       radio: '1'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
