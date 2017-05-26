<template>
  <div class="container">
    <!-- 新版本必须要设置:key否则有警告 -->

    <!-- 组件复用的过渡需要对组件标示不同的:key，让其认为是不同的组件所以进行过渡渲染，
    实际上组件是复用的，key不同：过渡认为切换的时候不是同样的标签所以进行过渡，
    但组件是复用的所以没有生命周期。
    对于v-for需要用transition-group对其中循环的每个组件进行渲染，否则用transition
    只渲染第一个组件 -->
    <transition-group name="slide-fade">
      <artcle-summary
        v-for="(page_content, index) in page_contents"
        :key="page_content.id"
        :page-summary="page_content.summary"
        :page-title="page_content.title"
        :created-at="page_content.created"
        :tags="page_content.tags"
        :page-id="page_content.id">
      </artcle-summary>
    </transition-group>
    <pagination
      :page-index="current_page"
      :total="page_count_total"
      :page-size="pageSize"
      @change="pageChange"
      class="paging">
    </pagination>

  </div>
</template>

<script>
import { mapActions, mapGetters, mapMutations, mapState } from 'vuex'
import ArtcleSummary from '../artcle/artcleSummary.vue'
import Pagination from '../util/pagination.vue'
export default {
  data () {
    return {
      // 每页显示条数
      pageSize: 4,
      // 总记录数
      count: 0
    }
  },
  created () {
    this.getPagesInfo(this.current_page)
  },
  methods: {
    ...mapActions([
      'getPagesInfo'
    ]),
    ...mapMutations([
      'SET_CURRENT_PAGE'
    ]),
    pageChange (page) {
      this.currentPage = page
      this.getPagesInfo(this.currentPage)
      this.SET_CURRENT_PAGE(this.currentPage)
    }
  },
  computed: {
    ...mapGetters([
      'page_contents',
      'page_count_total'
    ]),
    ...mapState([
      'current_page'
    ])
  },
  components: {
    'artcleSummary': ArtcleSummary,
    'pagination': Pagination
  }
}
</script>

<style lang="stylus" scoped>
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
