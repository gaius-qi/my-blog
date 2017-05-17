<template>
<div>
  <button type="button" @click="scrollWindow" class="up">
      <div class="animated infinite bounce" data-icon="ei-arrow-up" data-size="l"></div>
    </button>
</div>
</template>

<script>
export default {
  methods: {
    scrollWindow () {
      window.scrollTo(0, 0)
    }
  }
}
</script>

<style lang="stylus" scoped>
  .up
    background rgba(0,0,0,0)
    border 0
    outline none
    position fixed
    right 0
    bottom 0
    z-index 9999
</style>
