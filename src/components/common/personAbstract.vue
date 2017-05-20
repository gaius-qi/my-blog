<template>
<div class="container">
  <img class="avatar" src="../../assets/image/img03.png"></img>
  <h3 class="nick-name">Isaac</h3>
  <p class="desc">Fear always springs from ignorance.</p>
  <div class="post-info">
    <div class="info-inner">
      <div class="info-num">{{page_count_total}}</div>
      <div class="info-name">文章</div>
    </div>
    <div class="info-inner">
      <div class="info-num">{{category_count}}</div>
      <div class="info-name">分类</div>
    </div>
    <div class="info-inner">
      <div class="info-num">{{tags_count}}</div>
      <div class="info-name">标签</div>
    </div>
  </div>
  <div class="info-links">
    <div class="info-link">
      <a href="https://github.com/qwbtc" target="_blank">
        <div class="icon-style" data-icon="ei-sc-github" data-size="s"></div>
        <span>Githup</span>
      </a>
    </div>
    <div class="info-link">
      <a href="https://github.com/qwbtc" target="_blank">
        <div class="icon-style" data-icon="ei-sc-twitter" data-size="s"></div>
        <span>Twitter</span>
      </a>
    </div>
  </div>
</div>
</template>

<script>
import { mapActions, mapState, mapGetters } from 'vuex'

export default {
  created () {
    this.get_tags_info()
  },
  computed: {
    ...mapGetters([
      'tags_count',
      'page_count_total',
      'category_count'
    ])
  },
  methods: {
    ...mapActions({
      get_tags_info: 'getTagsInfo'
    })
  }
}
</script>

<style lang="stylus" scoped>
.container
  margin 2rem 1rem 1rem 1rem
  height auto
  border 0
  box-shadow 0 0 2.5rem rgba(0, 0, 0, 1)
  border-radius 2rem
  padding-bottom 1.5rem

.avatar
  margin-top 1.2rem
  border-radius 50%
  width 6rem
  height 6rem
  box-shadow 0 0 0.5rem rgba(0, 0, 0, 1)

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
</style>
