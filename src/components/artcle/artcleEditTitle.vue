<template>
<div class="container">
  <input class="title" type="text" v-model="input">
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
      this.$emit('getTitle', val)
    }
  }
}
</script>

<style lang="stylus" scoped>

.title
  border none
  box-shadow 0 0 2.5rem rgba(0, 0, 0, 1)
  outline none
  background-color rgba(0, 0, 0, 0)
  height 3rem
  width 80%
  border-radius 1rem
  font-size 1.5rem
  font-family 'SentyWEN2017'
  font-weight bold
  color #2c3e50
  padding 0 1.5rem 0 1.5rem

</style>
