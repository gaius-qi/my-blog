<template>
<div class="container-all">
  <!-- 应该放入/static文件夹中, 因为vue-cli配置webpack不参与打包 -->
  <div class="header-container" ref='header'>
    <video autoplay loop poster="/static/image/back.png" id="bgvid">
      <source class="video-src" src="/static/video/background.mp4" type="video/mp4">
    </video>
    <nav-top class="bar"></nav-top>
    <header role="banner">
      <h1 class="animated rubberBand" id="letter">Fear always springs from ignorance.</h1>
      <div class="ityped-style"><span id="ityped"></span></div>
      <h2 class="animated rubberBand">Isaac's Blog</h2>
      <aside class="link-icon" role="complementary">
        <a href="https://github.com/qwbtc" target="_blank">
          <div class="animated rubberBand" data-icon="ei-sc-github" data-size="m"></div>
        </a>
        <a href="https://www.facebook.com/dylan.bob.77377" target="_blank">
          <div class="animated rubberBand" data-icon="ei-sc-facebook" data-size="m"></div>
        </a>
        <a href="https://twitter.com/BobDylan0313" target="_blank">
          <div class="animated rubberBand" data-icon="ei-sc-twitter" data-size="m"></div>
        </a>
        <a href="/cv" target="_blank">
          <div class="animated rubberBand" data-icon="ei-user" data-size="m"></div>
        </a>
      </aside>
      <home-down-button></home-down-button>
      <home-up-button></home-up-button>
    </header>
  </div>

  <div class="second-paper"></div>

  <div class="container" ref='main'>

    <hr class="divider first-divider" />

    <main role="main" class="">
      <div class="content-wrap">
        <transition name="slide-fade">
          <router-view></router-view>
        </transition>
      </div>
      <aside role="complementary">
        <person-abstract></person-abstract>
        <document-abstract ref='reveal'></document-abstract>
        <archive-abstract></archive-abstract>
      </aside>
    </main>

    <hr class="divider last-divider" />

    <footer role="contentinfo">
      <p> 2016 &nbsp; Ö &nbsp; Isaac</p>
      <p>&nbsp; &nbsp; this &nbsp; site &nbsp; is &nbsp; opensourced &nbsp; on &nbsp;
        <a href="https://github.com/qwbtc/" target="_blank">github</a>
      </p>
    </footer>

  </div>
</div>
</template>

<script>
import HomeDownButton from './common/homeDownButton.vue'
import HomeUpButton from './common/homeUpButton.vue'
import NavTop from './common/nav.vue'
import PersonAbstract from './common/personAbstract.vue'
import DocumentAbstract from './common/documentAbstract.vue'
import ArchiveAbstract from './common/archiveAbstract.vue'
import {
  init
} from 'ityped'

export default {
  name: 'home',
  mounted () {
    init('#ityped', {
      strings: ['Never forget that until the day',
        'When God shall deign',
        'To reveal the future to man',
        'All human wisdom is summed up',
        'In these two words',
        'Wait and Hope'
      ],
      typeSpeed: 100,
      backSpeed: 30,
      backDelay: 1500,
      loop: true
    })
  },
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
  .container-all
    width 100%
    height auto

  .header-container
    height auto

  .container
    background url(../assets/image/img01.png) repeat
    background-size 100% 46rem
    height auto
    text-align center

  header
    position: absolute;
    top 0
    left: 0
    width 100%
    text-align center
    color #00fa9a

  h1
    margin 10rem 0 1rem 0
    font-size 4rem
    font-weight lighter
    font-family 'blah', Chalkduster, Zapfino, fantasy
    animation color-change 5s linear
    animation-iteration-count infinite
    transition all .5s ease
    &:hover
      transform scale(1.2, 1.2)
      cursor default

  h2
    font-size 1.3rem
    margin-top 2rem
    color #00fa9a
    animation color-change 5s linear
    animation-iteration-count infinite
    transition all .5s ease
    font-family 'Edo'
    &:hover
      transform scale(1.2, 1.2)
      cursor default

  .photo
    display block
    height 13.5rem
    width 11.5rem
    border-radius 50%
    margin 0 auto

  .divider
    margin 0
    height 3.3rem
    border 0
    box-shadow inset 0 3.3rem 0.7rem -3.3rem rgba(0, 0, 0, 1)

  .first-divider
    margin-top -0.5rem
    box-shadow inset 0 3.8rem 0.7rem -3.3rem rgba(0, 0, 0, 0.7)

  main
    margin -1.2rem 1rem 0 1rem
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

  .last-divider
    margin-top -1rem
    box-shadow inset 0 -3.3rem 0.7rem -3.3rem rgba(0, 0, 0, 1)

  footer
    margin-top 2rem
    padding-bottom 0.6rem
    p
      font-size 1rem
      font-family 'SentyMARUKO'
      &:last-child
        margin-top -1rem
      a
        font-size 1rem
        font-family 'SentyMARUKO'
        &:hover
          text-decoration underline

// 过渡时注意进入和离开组件同时执行动画，必须离开组件动画执行完，进入组件执行剩余的时间动画。
// 所以离开续建1s，进入组件2s。实际上展示动画时间是各一秒
// 定义离开过渡的结束状态。在离开过渡被触发时生效，在 transition/animation完成之后移除。
  .slide-fade-enter-active
    transition all 2s ease
// 定义离开过渡的结束状态。在离开过渡被触发时生效，在 transition/animation完成之后移除。
  .slide-fade-leave-active
    transition all 1s ease
// 过渡时一直添加在离开组件的calss
  .slide-fade-leave-active
    transform translate3d(80rem,0,0)
    opacity 0
// 定义进入过渡的开始状态。在元素被插入时生效，在下一个帧移除。
  .slide-fade-enter
    transform translate3d(-240rem,0,0)
    opacity 0

// safari 浏览器video标签内source外边界有条线和边距
// 要在vedio标签加overflow消除边距和线
  video#bgvid
    min-width 100%
    min-height 100%
    overflow hidden

  .ityped-style
    font-family 'Edo', Chalkduster, Zapfino
    color #00fa9a
    font-size 2.6rem
    margin-top 3rem
    animation color-change 5s linear
    animation-iteration-count infinite
    transition all .5s ease
    &:hover
      transform scale(1.2, 1.2)
      cursor default

  @keyframes color-change
    0%, 100%
        color #FF0000
    25%
        color #00FFFF
    50%
        color #FFFF00
    75%
        color #00fa9a

@media screen and (max-device-width: 600px)
  video
    display: none
  header
    position static
    width 100%
    text-align center
    overflow hidden
    background url(../assets/image/phone-back.png)
  .container-all
    min-width 63rem
  .bar
    min-width 63rem
  h1
    margin 4rem 0 2rem 0

</style>
