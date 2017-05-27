<template>
  <div class="container">
    <tag-content
      v-for="(tag, index) in tags"
      :key="index"
      :tag='tag'>
    </tag-content>
  </div>
</template>

<script>
import TagContent from '../tag/tagContent'
import { mapState } from 'vuex'

export default {
  computed: {
    ...mapState([
      'tags'
    ])
  },
  components: {
    'tagContent': TagContent
  }
}
</script>

<style lang="stylus" scoped>
.container
  display flex
  justify-content flex-start
  flex-wrap wrap
  background none
  box-shadow 0 0 2.5rem rgba(0, 0, 0, 1)
  border-radius 2rem
  margin 2rem 1rem 0 1rem
  padding 2rem 2.3rem 0.8rem 2.3rem
</style>
