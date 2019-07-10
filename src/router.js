import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Library from './views/Library.vue'
import Executives from './views/Executives.vue'
import NewsEvents from './views/News&Events.vue'
import Gallery from './views/Gallery.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [{
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/Library',
      name: 'Library',
      component: Library

    },

    {
      path: '/Gallery',
      name: 'Gallery',
      component: Gallery

    },
    {
      path: '/News&Events',
      name: 'News&Events',
      component: NewsEvents

    },
    {
      path: '/Executives',
      name: 'Executives',
      component: Executives

    }
  ]
})