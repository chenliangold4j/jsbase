import Vue from 'vue'
import App from './App.vue'
import router from './router'

Vue.config.productionTip = false
//提示信息。

// const cpn={
//   template:`<div>{{message}}</div>`,
//   data(){
//     return {
//       message:"test"
//     }
//   }
// }

new Vue({
  router,

  // render:function(createElement){
  //   // 1 普通用法
  // return createElement("h2",
  //   {class:'box'},
  //   ['hello world',createElement('button',['按钮'])]);
  //   //2传入组件对象
  //   // return createElement(cpn);
  // }
  render: h => h(App)
}).$mount('#app')
