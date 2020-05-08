import Vue from "vue";
import Router from "vue-router";
import Login from "./views/login"
import Layout from "@/components/Layout.vue"
import Home from "./views/home"
import Member from "./views/member"
import Staffa from "./views/staffa"
import Shop from "./views/shop"
import Supplier from "./views/supplier"

Vue.use(Router);

export default new Router({
  routes: [
    {
      path:'/login',
      name:"login",
      component:Login
    },
    {
      path:'/',
      name:"layout",
      component:Layout,
      children:[
        {
          path:'/home',
          component:Home,
        }
      ]
    },
    // 会员管理
    {
      path:"/member",
      component:Layout,
      children:[
        {
          path:"/",
          component:Member,
          meta:{title:"会员管理"}
          
        }
      ]
    },
    // 商品管理
    {
      path:"/shop",
      component:Layout,
      children:[
        {
          path:"/",
          component:Shop,
          meta:{title:"商品管理"}
        }
      ]
    },
    // 供应商管理
    {
      path:"/supplier",
      component:Layout,
      children:[
        {
          path:"/",
          component:Supplier,
          meta:{title:"供应商管理"}
        }
      ]
    },
    // 员工管理
    {
      path:"/staffa",
      component:Layout,
      children:[
        {
          path:"/",
          component:Staffa,
          meta:{title:"员工管理"}
        }
      ]
    },

  ]
});
