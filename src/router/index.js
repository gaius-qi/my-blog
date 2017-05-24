import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import ArtcleContainer from '../components/common/artcleContainer'
import ArtcleContent from '../components/common/artcleContent'
import CreateArticle from '../components/common/createArtcle'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
      children: [
        {
          path: '',
          component: ArtcleContainer
        },
        {
          path: '/pages/:id',
          component: ArtcleContent
        },
        {
          path: 'user/:user_id/pages',
          component: CreateArticle
        }
      ]
    }
  ]
})
