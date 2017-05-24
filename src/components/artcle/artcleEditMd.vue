<template>
<div class="container">
  <div id="editor">
    <textarea :value="input" @input="update"></textarea>
    <div v-html="compiledMarkdown"></div>
  </div>
</div>
</template>

<script>
import marked from 'marked'

export default {
  data () {
    return {
      input: ''
    }
  },
  computed: {
    compiledMarkdown: function () {
      return marked(this.input, {
        sanitize: true
      })
    }
  },
  methods: {
    update (e) {
      this.input = e.target.value
    }
  },
  watch: {
    input (val) {
      this.$emit('getContent', val)
    }
  }
}
</script>

<style lang="stylus" scoped>
#editor
  margin 2rem 0 0 0
  height 100%
  font-family 'Monaco', Arial, sans-serif
  color #2c3e50
  display flex

textarea
  border none
  border-right 1px solid #ccc
  resize none
  outline none
  background-color rgba(0, 0, 0, 0)

textarea, #editor div
  width 49%
  height auto
  box-sizing border-box
  word-wrap break-word
  word-break normal
  padding 0 2rem 0 2rem
  font-size 0.9rem
  box-shadow 0 0 2.5rem rgba(0, 0, 0, 1)
  flex-grow 1
  overflow scroll

#editor
  div
    text-align left
    border-radius 0 1.5rem 1.5rem 0
  textarea
    font-size 0.9rem
    font-family 'Monaco', courier, monospace
    padding 1.4rem 0.2rem 0 0.2rem
    flex-grow 1.5
    border-radius 1.5rem 0 0 1.5rem
    color #2c3e50

code
  color #f66
</style>
