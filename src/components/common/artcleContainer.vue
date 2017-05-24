<template>
  <div class="container">
    <!-- 新版本必须要设置:key否则有警告 -->

    <artcle-summary
      v-for="(page_content, index) in page_contents"
      :key="index"
      :page-summary="page_content.summary"
      :page-title="page_content.title"
      :created-at="page_content.created"
      :tags="page_content.tags"
      :page-id="page_content.id">
    </artcle-summary>
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
import ArtcleSummary from './artcleSummary.vue'
import Pagination from './pagination.vue'
export default {
  data () {
    return {
      // 每页显示条数
      pageSize: 4,
      // 总记录数
      count: 0
    }
  },
  mounted () {
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
</style>
