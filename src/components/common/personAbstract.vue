<template>
<div class="container">
  <img class="avatar" src="../../assets/image/person-photo.jpeg"></img>
  <a @click="create_page">
    <h3 class="nick-name" @click="scroll">Gaius</h3>
  </a>
  <a @click="login_out">
    <p class="desc">Fear always springs from ignorance.</p>
  </a>
  <div class="post-info">
    <div class="info-inner">
      <router-link :to="{ path: '/' }">
        <div class="info-num" @click="scroll">{{page_count_total}}</div>
        <div class="info-name">文章</div>
      </router-link>
    </div>
    <div class="info-inner">
      <router-link :to="{ path: `/category` }">
        <div class="info-num" @click="scroll">{{category_count}}</div>
        <div class="info-name">分类</div>
      </router-link>
    </div>
    <div class="info-inner">
      <router-link :to="{ path: '/tags' }">
        <div class="info-num" @click="scroll">{{tags_count}}</div>
        <div class="info-name">标签</div>
      </router-link>
    </div>
  </div>
  <div class="info-links">
    <div class="info-link">
      <a href="https://github.com/gaius-qi" target="_blank">
        <div class="icon-style" data-icon="ei-sc-github" data-size="s"></div>
        <span>Githup</span>
      </a>
    </div>
    <div class="info-link">
      <a href="https://twitter.com/gaius_qi" target="_blank">
        <div class="icon-style" data-icon="ei-sc-twitter" data-size="s"></div>
        <span>Twitter</span>
      </a>
    </div>
  </div>
</div>
</template>

<script>
import {
  mapActions,
  mapGetters,
  mapState,
  mapMutations
} from 'vuex'
import smoothScroll from 'smoothscroll'

export default {
  created () {
    this.get_tags_info()
    this.get_pages_info(1)
  },
  mounted () {
    this.downElm = document.querySelector('.second-paper')
  },
  data () {
    return {
      downElm: null
    }
  },
  computed: {
    ...mapGetters([
      'tags_count',
      'page_count_total',
      'category_count'
    ]),
    ...mapState([
      'user'
    ])
  },
  methods: {
    ...mapActions({
      get_tags_info: 'getTagsInfo',
      get_pages_info: 'getPagesInfo'
    }),
    ...mapMutations([
      'DELETE_SESSION'
    ]),
    scroll () {
      smoothScroll(this.downElm, 600)
    },
    create_page (e) {
      if (this.user.login) {
        this.$router.push('/user/' + this.user.user.id + '/pages')
      } else {
        e.preventDefault()
      }
    },
    login_out () {
      // 登出State中user置空login = false, localStroage中user也清空
      this.DELETE_SESSION()
    }
  }
}
</script>

<style lang="stylus" scoped>
.container
  margin 2rem 1rem 1rem 1rem
  height auto
  border 0
  box-shadow 0 0 0.7rem rgba(0, 0, 0, 1)
  border-radius 2rem
  padding-bottom 1.5rem

.avatar
  margin-top 1.2rem
  border-radius 50%
  width 6rem
  height 6rem
  box-shadow 0 0 0.5rem rgba(0, 0, 0, 1)
  transition all 1s ease-in-out
  &:hover
    transform rotateY(360deg)

.nick-name
  margin-top 0.8rem
  font-size 1.2rem

.desc
  margin -0.7rem auto 0 auto
  font-size 0.9rem
  width 90%

.post-info
  margin 1.2rem auto 0 auto
  display flex
  width 70%

.info-inner
  flex-grow 1
  border-left 0.08rem solid rgba(0, 0, 0, 0.3)

.info-num
  font-size 1.2rem
  font-weight bold
  transition all 0.5s ease
  &:hover
    transform scaleX(1.2) scaleY(1.2)
    color #00fa9a
    cursor pointer

.post-info .info-inner:·nth-child(1)
  border none

.info-links
  display flex
  justify-content space-around
  width 60%
  margin 0.6rem auto 0 auto

.info-name
  font-family 'SentyMARUKO'

span
  font-family "Monda", "PingFang SC"
  font-weight bold
  font-size 0.8rem
  margin-left -0.3rem

a:hover
  cursor default

</style>
