<template>
  <article>
    <header>
      <h1>{{page.title}}</h1>
      <aside>
        <i class="fa fa-eye" aria-hidden="true"></i>
        <span>浏览次数&nbsp;{{page_click_count}}</span>&nbsp;&nbsp;|&nbsp;
        <i class="fa fa-calendar-o" aria-hidden="true"></i>
        <time class="release-time" pubdate :datetime="page.created">{{dataTime}}</time>
      </aside>
    </header>
    <div class="content_html" v-html="page.content_html"></div>
  </article>
</template>

<script>
import { mapState, mapActions } from 'vuex'

export default {
  data () {
    return {
      click_count: 0
    }
  },
  created () {
    this.getPageContentInfo(this.$route.params.id)
  },
  methods: {
    ...mapActions([
      'getPageContentInfo',
      'getPageClickCountInfo'
    ])
  },
  computed: {
    ...mapState([
      'page',
      'page_click_count'
    ]),
    dataTime () {
      let pageDate = new Date(this.page.created)
      return pageDate.getFullYear() + '/' + (pageDate.getMonth() + 1) + '/' + pageDate.getDate()
    }
  },
  watch: {
    page (val) {
      this.getPageClickCountInfo(val.id)
    }
  }
}
</script>

<style lang="stylus" scoped>
article
  box-shadow 0 0 2.5rem rgba(0, 0, 0, 1)
  border-radius 2rem
  padding 1rem 3rem 1rem 3rem
  margin 2rem 1rem 0 1rem
  font-family 'SentyMARUKO'
  font-size 1rem

aside
  margin-top -1.3rem
  font-size 0.5rem
  font-family 'Avenir'

h1
  font-family 'SentyMARUKO'
  font-size 1.8rem
  position relative

.content_html
  text-align left

</style>
