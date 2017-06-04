<template>
  <div class="container">
    <!-- 新版本必须要设置:key否则有警告 -->

    <transition-group name="slide-fade">
      <artcle-summary
        v-for="(page_content, index) in archive_pages"
        :key="page_content.id"
        :page-summary="page_content.summary"
        :page-title="page_content.title"
        :created-at="page_content.created"
        :tags="page_content.tags"
        :page-id="page_content.id">
      </artcle-summary>
    </transition-group>
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex'
import ArtcleSummary from '../artcle/artcleSummary.vue'
export default {
  data () {
    return {
      date: ''
    }
  },
  // beforeRouteUpdate 可以调用组件的this 而enter则不能调用组件的this， leave可以调用组件的this
  created () {
    this.getArchivePagesInfo(this.$route.params.date)
  },
  mounted () {
    this.$forceUpdate()
  },
  methods: {
    ...mapActions([
      'getArchivePagesInfo'
    ])
  },
  computed: {
    ...mapState([
      'archive_pages'
    ])
  },
  components: {
    'artcleSummary': ArtcleSummary
  },
  watch: {
    // 当路由变化的时候，在执行请求
    // 因为路由变化如果仍是同一组件，则不回再次创建组件而是复用以前的组件，但是请求的数据要变换
    // 则需要watch $route来判断路由变化的时候把 created中请求数据的action重新执行一遍
    $route () {
      this.getArchivePagesInfo(this.$route.params.date)
    }
  }
}
</script>

<style lang="stylus" scoped>
.container
   background none
   
.paging
  margin-top 2.8rem

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
