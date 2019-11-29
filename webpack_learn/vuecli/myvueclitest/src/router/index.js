import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../components/Home'
import About from '../components/About'
// import Test from '../components/Test'
// import User from '../components/User'

let HomeNews = ()=> import('../components/HomeNews');
let HomeMessage =()=>import('../components/HomeMessage');
Vue.use(VueRouter)

//2.创建对象，之后一个url一直组件。对应隐射关系。
const routes = [
  // {
  //   path:'/',
  //   redirect:"/home"
  // },
  {
    path:'/',
    redirect:"/home"
    // component:Home
  },
  {
    path:"/home",
    component:Home,
    children:[
      {
        path:'',
        redirect:'news'
      },
      {
        path:'news',
        component: HomeNews
      },
      {
        path:'message',
        component: HomeMessage
      }
    ]
  },
  {
    path:"/test",
    // 路由懒加载
    component:()=>import('../components/Test')
  }
  ,{
    path:"/about",
    component:About
  },
  {
    path:"/user/:userId",
    component:()=>import('../components/User')
  }
]

//配置路由和组件之间的关系。
const router = new VueRouter({
  routes,
  mode:'history'
})

export default router
