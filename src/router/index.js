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

Vue.use(Router)

export default new Router({
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
    }
  ]
})
