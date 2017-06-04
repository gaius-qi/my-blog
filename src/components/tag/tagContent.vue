<template>
  <router-link :to="{ path: `/tag_pages/${tag}` }">
    <div class="tag" @click='scroll'>
      <span>{{tag}}</span>
    </div>
  </router-link>
</template>

<script>
import smoothScroll from 'smoothscroll'

export default {
  props: {
    tag: {
      type: String,
      require: true,
      default: ''
    }
  },
  data () {
    return {
      downElm: null
    }
  },
  mounted () {
    this.downElm = document.querySelector('.second-paper')
  },
  methods: {
    scroll () {
      smoothScroll(this.downElm, 600)
    }
  }
}
</script>

<style lang="stylus" scoped>
.tag
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
