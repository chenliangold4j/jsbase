import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../components/Home'
import About from '../components/About'
import Test from '../components/Test'

//使用安装插件
Vue.use(VueRouter)

//2.创建对象，之后一个url一直组件。对应隐射关系。
const routes = [
  // {
  //   path:'/',
  //   redirect:"/home"
  // },
  {
    path:'/',
    // redirect:"/home"
    component:Home
  },
  {
    path:"/home",
    component:Home
  },
  {
    path:"/test",
    component:Test
  }
  ,{
    path:"/about",
    component:About
  }
]

//配置路由和组件之间的关系。
const router = new VueRouter({
  routes,
  mode:'history'
})

export default router
