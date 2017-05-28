<template>
<button type="button" class="down" @click="scroll">
    <div class="animated rubberBand" data-icon="ei-chevron-down" data-size="l"></div>
  </button>
</template>

<script>
import {
  mapGetters,
  mapActions
} from 'vuex'
import smoothScroll from 'smoothscroll'

export default {
  methods: {
    ...mapActions([
      'getTestInfo'
    ]),
    scroll () {
      smoothScroll(736, 600)
    }
  },
  computed: {
    ...mapGetters([
      'test'
    ])
  }
}
</script>

<style lang="stylus" scoped>
  .down
    margin-top 3rem
    background rgba(0,0,0,0)
    border 0
    outline none
    transform scale(2, 2)
    transition all .3s linear
    &:hover
      transform scale(3, 3)
</style>
