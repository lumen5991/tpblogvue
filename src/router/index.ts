import { createRouter, createWebHistory } from 'vue-router'
/* import HomeView from '../views/HomeView.vue' */
/* import { Articles } from "../views/Articles.vue"; */
import NewArticle from "@/views/NewArticle.vue";
import Blog from "@/views/Blog.vue";
import Details from "@/views/Details.vue";
import Profile from "@/views/Profile.vue";
import Profile2 from "@/views/Profile2.vue";
import Accueil from "@/views/Accueil.vue";
import Apropos from "@/views/Apropos.vue"


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    /*     {
          path:'/',
          component : Articles
        } */
    
        {
          path: '/newarticle',
          component: NewArticle
        },
        {
          path: '/blog',
          component: Blog
        },
        {
          path: '/details/:id',
          component: Details
        },
        {
          path: '/accueil',
          component: Accueil
        },
        {
          path: '/apropos',
          component: Apropos
        },
        {
          path: '/profile',
          component: Profile
        },
        {
          path: '/profile2',
          component: Profile2
        }
  ]
})

export default router
