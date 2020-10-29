import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../components/Home'
import About from '../components/About'
import Login from '../components/login'
import '../assets/css/global.css'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);

import axios from 'axios'
Vue.prototype.$http = axios;
// import Test from '../components/Test'
// import User from '../components/User'

let HomeNews = () => import('../components/HomeNews');
let HomeMessage = () => import('../components/HomeMessage');
Vue.use(VueRouter)

//2.创建对象，之后一个url一直组件。对应隐射关系。
const routes = [
  {
    path: '/',
    redirect: "/login"
    // component:Home
  },
  {
    path: "/home",
    component: Home,
    children: [
      {
        path: '',
        redirect: 'news'
      },
      {
        path: 'news',
        component: HomeNews
      },
      {
        path: 'message',
        component: HomeMessage
      }
    ]
  },
  {
    path: "/test",
    // 路由懒加载
    component: () => import('../components/Test')
  }
  , {
    path: "/about",
    component: About
  },
  {
    path: "/user/:userId",
    component: () => import('../components/User')
  },
  {
    path: "/login",
    component: Login
  }
]

//配置路由和组件之间的关系。
const router = new VueRouter({
  routes,
  mode: 'history'
})

//挂载路由导航守卫
router.beforeEach((to, from, next) => {

  if(to.path === '/login')return next();

  //获取token
  const token = window.sessionStorage.getItem("token");

  if(!token) return next("/login");
  // window.sessionStorage.clear();
  // this.$router.push("/login");

  next();

});

export default router
