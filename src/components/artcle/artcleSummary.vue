<template>
  <article>
    <header>
      <h1>{{pageTitle}}</h1>
    </header>
    <p>
      {{pageSummary}}
    </p>
    <router-link :to="{ path: '/pages/' + pageId}" >
      <button @click="clickPage" type="button" name="button"> 阅读全文 </button>
    </router-link>
    <hr class="divider" />
    <footer>
      <em class="bottom-tag">
        <i class="fa fa-tags" aria-hidden="true"></i>&nbsp;
        <span v-for="tag in tags">
          <router-link class="tags" :to="{path: `/tag_pages/${tag}`}">#{{tag}}</router-link>
        </span>
      </em>
      <div class="release-time">
        <i class="fa fa-calendar-o" aria-hidden="true"></i>&nbsp;
        <time pubdate :datetime="createdAt">{{dataTime}}</time>
      </div>
    </footer>
  </article>
</template>

<script>
import { mapActions, mapState } from 'vuex'
import smoothScroll from 'smoothscroll'

export default {
  // 父子组件传递信息，父组件page-content传递到子组件props中要用驼峰pageContent
  props: {
    pageSummary: {
      type: String,
      required: true
    },
    pageTitle: {
      type: String,
      required: true
    },
    createdAt: {
      type: String,
      required: true
    },
    tags: {
      type: Array
    },
    pageId: {
      type: Number,
      required: true
    }
  },
  computed: {
    ...mapState([
      'page_click_count'
    ]),
    dataTime () {
      let pageDate = new Date(this.createdAt)
      return pageDate.getFullYear() + '/' + (pageDate.getMonth() + 1) + '/' + pageDate.getDate()
    }
  },
  methods: {
    ...mapActions([
      'getPageClickCountInfo',
      'clickPageInfo'
    ]),
    clickPage () {
      this.clickPageInfo(this.pageId)
      smoothScroll(743, 600)
    }
  }
}
</script>

<style lang="stylus" scoped>
article
  margin 2rem 1rem 1rem 1rem
  height auto
  border 0
  box-shadow 0 0 2.5rem rgba(0, 0, 0, 1)
  border-radius 2rem
  background none

//对h1块级元素要自适应内容的宽度 需要用flex
header
  display flex
  justify-content center

//h1进行relative定位是为了在article父类中占据文档流，从而方便h1:after从relative定位的h1以后进行绝对定位
h1
  font-size 1.5rem
  font-family 'SentyMARUKO'
  padding-top 0.2rem
  position relative


h1:after
   content ''
   display block
   width 100%
   height 0.125rem
   position absolute
   bottom 0.2rem
   background #2c3e50
   transition  all 0.3s ease-in-out
   transform  scale3d(0,1,1)
   transform-origin 50% 0

h1:hover:after
   transform scale3d(1,1,1)

p
  font-size 1rem
  font-family 'SentyMARUKO'
  width 90%
  margin auto
  text-indent 2rem
  text-align left

footer
  font-family 'SentyMARUKO'
  padding 0.5rem 0 0.5rem 0
  overflow hidden

button
  background-color rgba(0, 0, 0, 0)
  border 1.5px solid #2c3e50
  outline none
  font-family 'SentyMARUKO'
  font-size 1rem
  color #2c3e50
  padding 0.2rem 0.5rem 0.2rem 0.5rem
  margin-top 1rem
  border-radius 0.5rem
  transition all 0.5s ease-out
  &:hover
    background-color #2c3e50
    color #ffffff
    cursor pointer

.divider
  width 90%
  opacity 0.5
  border-top 1px solid #2c3e50
  margin-top 1.5rem

.bottom-tag
  float left
  margin-left 3rem
  font-style normal

.browse-num
  float right
  margin-right 3rem


.release-time
  float right
  margin-right 3.2rem

.tags
  margin-right 0.5rem
  transition all .5s ease
  &:hover
    color #00fa9a
</style>
