<template>
<div class="container">
  <!-- 新版本必须要设置:key否则有警告 -->
  <!-- artcleArchive artcleContainer artcleTag本来可以是一个组件，但需要点击后的
    过渡动画，如果一个组件的话则组件复用并没有组件的生命周期，所以也就没有动画开始结束
    的表顶点 -->

  <!-- 注意v-for比v-if优先级高，所以优先v-if的时候要包在外面 -->
  <!-- 这一层过渡是当是Array和不是Array切换的时候有过渡效果
  （因为if 和 else都是div相同标签 但是key不同则视为进行过渡） -->
  <transition name="slide-fade">
    <div v-if="category_pages instanceof Array" key="show">
      <!-- 这层过渡是保证每一个是array的for循环可以过渡，也就是重复点击都是Array的时候有过渡效果
      （for循环每个组件的key都不同所以每次重复点击是Array的不同项切换都过渡，
      如果用index当key，则每页4篇文章的key固定不变， 都是0，1，2，3则过渡视为相同标签，不进行过渡效果） -->
      <transition-group name="slide-fade">
        <artcle-summary
          v-for="(page_content, index) in category_pages"
          :key="page_content.id"
          :page-summary="page_content.summary"
          :page-title="page_content.title"
          :created-at="page_content.created"
          :tags="page_content.tags"
          :page-id="page_content.id">
        </artcle-summary>
      </transition-group>
    </div>
    <div v-else key="notFound">
      <article>
        <header>
          <h1>对不起 未找到您的搜索结果</h1>
        </header>
        <button @click="goBack">返&nbsp;回</button>
      </article>
    </div>
  </transition>
</div>
</template>

<script>
import {
  mapActions,
  mapState
} from 'vuex'
import ArtcleSummary from '../artcle/artcleSummary.vue'
export default {
  created () {
    this.getCategoryPagesInfo(this.$route.params.category_id)
  },
  methods: {
    ...mapActions([
      'getCategoryPagesInfo'
    ]),
    goBack () {
      window.scrollTo(0, 726)
      this.$router.go(-1)
    }
  },
  computed: {
    ...mapState([
      'category_pages'
    ])
  },
  components: {
    'artcleSummary': ArtcleSummary
  },
  watch: {
    $route () {
      this.getCategoryPagesInfo(this.$route.params.category_id)
      window.scrollTo(0, 726)
    }
  }
}
</script>

<style lang="stylus" scoped>
.container
  background none

.paging
  margin-top 2.8rem

article
  margin 2rem 1rem 1rem 1rem
  height auto
  border 0
  box-shadow 0 0 2.5rem rgba(0, 0, 0, 1)
  border-radius 2rem

header
  display flex
  justify-content center

h1
  font-size 1.8rem
  font-family 'SentPea'
  margin-top 5rem

button
  background-color rgba(0, 0, 0, 0)
  border 1.5px solid #2c3e50
  outline none
  font-family 'SentyMARUKO'
  font-size 1.8rem
  color #2c3e50
  padding 0.2rem 1rem 0.2rem 1rem
  margin 1rem 0 5rem 0
  border-radius 0.5rem
  transition all 0.5s ease-out
  &:hover
    background-color #2c3e50
    color #ffffff
    cursor pointer

.slide-fade-enter-active
  transition all 2s ease

.slide-fade-leave-active
  transition all 1s ease

.slide-fade-leave-active
  transform translate3d(80rem,0,0)
  opacity 0

.slide-fade-enter
  transform translate3d(-240rem,0,0)
  opacity 0

</style>
