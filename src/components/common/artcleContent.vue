<template>
  <article>
    <header>
      <h1>{{page.title}}</h1>
    </header>
    <div v-html="page.content_html"></div>
  </article>
</template>

<script>
import { mapState, mapActions } from 'vuex'

export default {
  created () {
    // this.getPageContentInfo(this.$route.params.id)
    this.getPageContentInfo(this.$route.params.id)
  },
  methods: {
    ...mapActions([
      'getPageContentInfo'
    ])
  },
  computed: {
    ...mapState([
      'page'
    ])
  }
}
</script>

<style lang="stylus" scoped>

</style>
