<template>
<article>
  <header>
    <h1>vue全栈开发部署你需要知道的一些事</h1>
  </header>
  <p>
    随着 vuejs 作者尤雨溪发布消息，不再继续维护vue-resource，并推荐大家使用 axios 开始，axios 被越来越多的人所了解。本来想在网上找找详细攻略，突然发现，axios 的官方文档本身就非常详细！！有这个还要什么自行车！！所以推荐大家学习这种库，最好详细阅读其官方文档。大概翻译了一下 axios 的官方文档，相信大家只要吃透本文再加以实践，axios 就是小意思啦！！ 在移动端，使用滚动来处理业务逻辑的情况有很多，例如列表的滚动加载数据，下拉刷新等等都需要利用滚动的相关知识，但是滚动事件在不同的移动端机型却又有不同的表现，下面就来一一总结一下。
  </p>
  <button type="button" name="button"> 阅读全文 </button>
  <hr class="divider"/>
  <footer>
    <em class="bottom-tag">
      <span>#http</span>
      <span>#vue</span>
    </em>
    <span class="browse-num">浏览次数:123</span>
    <time class="release-time" pubdate datetime="2012-10-03">2012/10/03</time>
  </footer>
</article>
</template>

<script>
export default {}
</script>

<style lang="stylus" scoped>
article
  margin 2rem 1rem 1rem 1rem
  height auto
  border 0
  box-shadow 0 0 2.5rem rgba(0, 0, 0, 1)
  border-radius 2rem

//对h1块级元素要自适应内容的宽度 需要用flex
header
  display flex
  justify-content center

//h1进行relative定位是为了在article父类中占据文档流，从而方便h1:after从relative定位的h1以后进行绝对定位
h1
  font-size 1.5rem
  font-family 'SentyWEN2017'
  padding-top 1rem
  position relative


h1:after
   content ''
   display block
   width 100%
   height 0.125rem
   position absolute
   bottom 0.125rem
   background #2c3e50
   transition  all 0.3s ease-in-out
   transform  scale3d(0,1,1)
   transform-origin 50% 0

h1:hover:after
   transform scale3d(1,1,1)

p
  font-size 1rem
  font-family 'SentyMARUKO'
  width 90%
  margin auto
  text-indent 2rem
  text-align left

footer
  font-family 'SentyZHAO'
  padding 0.5rem 0 0.5rem 0
  overflow hidden

button
  background-color rgba(0, 0, 0, 0)
  border 1.5px solid #2c3e50
  outline none
  font-family 'SentyMARUKO'
  font-size 1rem
  color #2c3e50
  padding 0.2rem 0.5rem 0.2rem 0.5rem
  margin-top 1rem
  border-radius 0.5rem
  transition all 0.5s ease-out
  &:hover
    background-color #2c3e50
    color #ffffff
    cursor pointer

.divider
  width 90%
  opacity 0.5
  border-top 1px solid #2c3e50
  margin-top 1.5rem

.bottom-tag
  float left
  margin-left 3rem
  font-style normal

.browse-num
  float right
  margin-right 3rem


.release-time
  float right
  margin-right 1rem

</style>
