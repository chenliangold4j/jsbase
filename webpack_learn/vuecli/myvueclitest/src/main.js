import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false
//提示信息。

console.log(App);
// const cpn={
//   template:`<div>{{message}}</div>`,
//   data(){
//     return {
//       message:"test"
//     }
//   }
// }

new Vue({
  render: h => h(App),
  // render:function(createElement){
  //   // 1 普通用法
  // return createElement("h2",
  //   {class:'box'},
  //   ['hello world',createElement('button',['按钮'])]);

  //   //2传入组件对象
  //   // return createElement(cpn);
  // }
}).$mount('#app')
