<template>
  <div class="container">
    <category-content
      v-for="(item, index) in category"
      :key="index"
      :category-name='item[0]'
      :category-id="item[1]">
    </category-content>
  </div>
</template>

<script>
import CategoryContent from '../category/categoryContent'
import { mapState, mapActions } from 'vuex'

export default {
  created () {
    this.getCategoryInfo()
  },
  computed: {
    ...mapState([
      'category'
    ])
  },
  methods: {
    ...mapActions([
      'getCategoryInfo'
    ])
  },
  components: {
    'categoryContent': CategoryContent
  }
}
</script>

<style lang="stylus" scoped>
.container
  display flex
  justify-content space-around
  flex-wrap wrap
  background none
  box-shadow 0 0 0.7rem rgba(0, 0, 0, 1)
  border-radius 2rem
  margin 2rem 1rem 0 1rem
  padding 2rem 2.3rem 0.8rem 2.3rem
</style>
