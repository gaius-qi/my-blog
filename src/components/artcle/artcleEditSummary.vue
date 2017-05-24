<template>
<div class="container">
  <textarea class="summary" v-model="input"></textarea>
</div>
</template>

<script>
export default {
  data () {
    return {
      input: ''
    }
  },
  watch: {
    input (val) {
      this.$emit('getSummary', val)
    }
  }
}
</script>

<style lang="stylus" scoped>

.summary
  border none
  resize none
  outline none
  background-color rgba(0, 0, 0, 0)
  box-sizing border-box
  word-wrap break-word
  word-break normal
  box-shadow 0 0 2.5rem rgba(0, 0, 0, 1)
  font-size 1rem
  font-family 'SentyMARUKO'
  text-indent 2rem
  text-align left
  width 100%
  height 25rem
  font-size 0.9rem
  padding 1.4rem
  border-radius 1.5rem
  color #2c3e50

</style>
