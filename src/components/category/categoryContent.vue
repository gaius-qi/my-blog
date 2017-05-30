<template>
  <router-link :to="{ path: `/category_pages/${categoryId}` }">
    <div class="category" @click='scroll'>
      <span>{{categoryName}}</span>
    </div>
  </router-link>
</template>

<script>
import smoothScroll from 'smoothscroll'

export default {
  props: {
    categoryName: {
      type: String,
      require: true,
      default: ''
    },
    categoryId: {
      type: Number,
      require: true
    }
  },
  methods: {
    scroll () {
      smoothScroll(743, 600)
    }
  }
}
</script>

<style lang="stylus" scoped>
.category
  background-color rgba(0, 0, 0, 0)
  border 1.5px solid #2c3e50
  font-family 'SentyMARUKO'
  font-size 2rem
  color #2c3e50
  padding 0.2rem 0.5rem 0.2rem 0.5rem
  margin 0rem 1.2rem 1rem 0rem
  border-radius 0.5rem
  transition all 0.5s ease-out
  &:hover
    background-color #2c3e50
    color #ffffff
    cursor pointer

</style>
