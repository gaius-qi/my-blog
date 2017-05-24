<template>
<div class="container">
  <div class="page-info">
    <artcle-edit-title @getTitle="get_title"></artcle-edit-title>
    <artcle-edit-category @getCategory="get_category"></artcle-edit-category>
  </div>
  <div class="page-tag">
    <artcle-edit-tag @getTags="get_tags"></artcle-edit-tag>
  </div>
  <div class="summary">
    <artcle-edit-summary @getSummary="get_summary"></artcle-edit-summary>
  </div>
  <div class="md">
    <artcle-edit-md @getContent="get_content"></artcle-edit-md>
  </div>
  <button @click="create_page">创建文章</button>
</div>
</template>

<script>
import {
  mapActions
} from 'vuex'
import ArtcleEditTitle from '../artcle/artcleEditTitle'
import ArtcleEditSummary from '../artcle/artcleEditSummary'
import ArtcleEditMd from '../artcle/artcleEditMd'
import ArtcleEditCategory from '../artcle/artcleEditCategory.vue'
import ArtcleEditTag from '../artcle/artcleEditTag'

export default {
  data () {
    return {
      category: 0,
      tags: [],
      content: '',
      summary: '',
      title: ''
    }
  },
  components: {
    'artcleEditTitle': ArtcleEditTitle,
    'artcleEditSummary': ArtcleEditSummary,
    'artcleEditMd': ArtcleEditMd,
    'artcleEditCategory': ArtcleEditCategory,
    'artcleEditTag': ArtcleEditTag
  },
  methods: {
    ...mapActions([
      'createPageInfo'
    ]),
    get_category (val) {
      this.category = val
    },
    get_tags (val) {
      this.tags = val
    },
    get_content (val) {
      this.content = val
    },
    get_summary (val) {
      this.summary = val
    },
    get_title (val) {
      this.title = val
    },
    create_page () {
      let params = {
        'page': {
          'category': this.category,
          'content': this.content,
          'summary': this.summary,
          'title': this.title,
          'tags': this.tags
        }
      }
      this.createPageInfo({userId: 2, data: params})
      window.scrollTo(0, 705)
    }
  }
}
</script>

<style lang="stylus" scoped>
.page-info
  margin 2rem 0 2rem 0
  display flex
  & div:nth-child(1)
    flex-grow 4
  & div:nth-child(2)
    flex-grow 1
    margin 0.3rem 3.5rem 0 0

.page-tag
  padding-bottom 2rem
  margin-left -1rem

button
  background-color rgba(0, 0, 0, 0)
  border 1.5px solid #2c3e50
  outline none
  font-family 'SentyMARUKO'
  font-size 1rem
  color #2c3e50
  padding 0.2rem 0.5rem 0.2rem 0.5rem
  margin-top 2rem
  border-radius 0.5rem
  transition all 0.5s ease-out
  &:hover
    background-color #2c3e50
    color #ffffff
    cursor pointer

</style>
