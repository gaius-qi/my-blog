import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import ArtcleContainer from '../components/common/artcleContainer'
import ArtcleContent from '../components/common/artcleContent'
import CreateArticle from '../components/common/createArtcle'
import ArtcleArchive from '../components/common/artcleArchive'
import ArtcleTag from '../components/common/artcleTag'
import TagContainer from '../components/common/tagContainer'
import CategoryContainer from '../components/common/categoryContainer'
import ArtcleCategory from '../components/common/artcleCategory'
import Cv from '../components/Cv'
import Cv2 from '../components/Cv2'
import store from '../store'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  saveScrollPosition: true,
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
          path: '/',
          component: ArtcleContainer
        },
        {
          path: '/pages/:id',
          component: ArtcleContent
        },
        {
          name: 'createArticle',
          path: '/user/:user_id/pages',
          component: CreateArticle
        },
        {
          name: 'archive_pages',
          path: '/archive_pages/:date',
          component: ArtcleArchive
        },
        {
          path: '/tag_pages/:tag_name',
          component: ArtcleTag
        },
        {
          path: '/tags',
          component: TagContainer
        },
        {
          path: '/category',
          component: CategoryContainer
        },
        {
          path: '/category_pages/:category_id',
          component: ArtcleCategory
        }
      ]
    },
    {
      path: '/cv',
      name: 'cv',
      component: Cv
    },
    {
      path: '/cv2',
      name: 'cv2',
      component: Cv2
    }
  ]
})

// localStorage中取userInfo看是否过期
let user = localStorage.getItem('user')
if (user) {
  let userInfo = JSON.parse(user)
  let date = new Date(userInfo.time)
  if (date > new Date()) {
    store.state.user = userInfo.data
  } else {
    localStorage.removeItem('user')
  }
}

// 路由拦截器
router.beforeEach((to, from, next) => {
  if (to.matched.some(r => r.name === 'createArticle')) {
    if (store.state.user.token) {
      next()
    } else {
      next({
        path: '/'
      })
    }
  } else {
    next()
  }
})

export default router
