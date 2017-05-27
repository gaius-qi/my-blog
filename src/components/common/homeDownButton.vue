<template>
<div>
  <button type="button" @click="scrollWindow" class="down">
      <div class="animated rubberBand" data-icon="ei-chevron-down" data-size="l"></div>
    </button>
</div>
</template>

<script>
import {
  mapGetters,
  mapActions
} from 'vuex'
export default {
  methods: {
    ...mapActions([
      'getTestInfo'
    ]),
    scrollWindow () {
      window.scrollTo(0, 726)
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
    margin-top 2rem
    background rgba(0,0,0,0)
    border 0
    outline none
    transition all .3s linear
    &:hover
      transform scale(3, 3)
</style>
