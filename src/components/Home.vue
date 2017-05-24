<template>
<div class="container">

  <header role="banner">
    <nav-top></nav-top>
    <h1 class="animated rubberBand" id="letter">Fear always springs from ignorance.</h1>
    <figure>
      <img class="photo animated rubberBand" src="../assets/image/img02.jpg"></img>
      <figcaption>
        <h2 class="animated rubberBand">Isaac's Blog</h2>
      </figcaption>
    </figure>
    <aside role="complementary">
      <a href="https://github.com/qwbtc" target="_blank">
        <div class="animated rubberBand" data-icon="ei-sc-github" data-size="m"></div>
      </a>
      <a href="https://www.facebook.com/dylan.bob.77377" target="_blank">
        <div class="animated rubberBand" data-icon="ei-sc-facebook" data-size="m"></div>
      </a>
      <a href="https://twitter.com/BobDylan0313" target="_blank">
        <div class="animated rubberBand" data-icon="ei-sc-twitter" data-size="m"></div>
      </a>
      <div class="animated rubberBand" data-icon="ei-user" data-size="m"></div>
    </aside>
    <home-down-button></home-down-button>
    <home-up-button></home-up-button>
  </header>

  <hr class="divider" />

  <main role="main">
    <div class="content-wrap">
      <router-view></router-view>
    </div>
    <aside role="complementary">
      <person-abstract></person-abstract>
      <document-abstract></document-abstract>
      <archive-abstract></archive-abstract>
    </aside>
  </main>

  <hr class="divider divider-last" />

  <footer role="contentinfo">
    <p>© 2016 &nbsp; Ö &nbsp; Isaac</p>
    <p>All &nbsp; Rights &nbsp; Reserved</p>

  </footer>

</div>
</template>

<script>
import HomeDownButton from './common/homeDownButton.vue'
import HomeUpButton from './common/homeUpButton.vue'
import NavTop from './common/nav.vue'
import PersonAbstract from './common/personAbstract.vue'
import DocumentAbstract from './common/documentAbstract.vue'
import ArchiveAbstract from './common/archiveAbstract.vue'
import { mapActions, mapGetters } from 'vuex'

export default {
  name: 'home',
  components: {
    'homeDownButton': HomeDownButton,
    'navTop': NavTop,
    'homeUpButton': HomeUpButton,
    'personAbstract': PersonAbstract,
    'documentAbstract': DocumentAbstract,
    'archiveAbstract': ArchiveAbstract
  }
}
</script>

Add "scoped" attribute to limit CSS to this component only
<style lang="stylus" scoped>
  .container
    background url(../assets/image/img01.png) repeat
    background-size 100% 46rem
    height auto
    text-align center
    scroll-behavior smooth

  h1
    display inline-block
    margin 8rem 0 1rem 0
    font-size 2rem
    font-weight lighter
    font-family Chalkduster, fantasy

  .photo
    display block
    height 13.5rem
    width 11.5rem
    border-radius 50%
    margin 0 auto

  .divider
    margin 5.5rem 0 0 0
    height 3.3rem
    border 0
    box-shadow inset 0 3.3rem 3.3rem -3.3rem rgba(0, 0, 0, 1)

  main
    margin -2.5rem 1rem 0 1rem
    display flex
    height auto
    justify-content space-around

  .content-wrap
    flex-grow 1
    min-width 20rem

  aside
    flex-basis 20rem
    min-width 20rem

  figure
    margin 0

  .divider-last
    margin-top -1rem
    box-shadow inset 0 -3.3rem 3.3rem -3.3rem rgba(0, 0, 0, 1)

  footer
    margin-top 2rem
    padding-bottom 0.6rem
    p
      font-size 1rem
      font-family 'SentyMARUKO'
      &:last-child
        margin-top -1rem

</style>
