<template>
<nav role="navigation">
  <div class="reminder-bar">
    <router-link :to="{ path: '/' }" class="navbar">
      Home
    </router-link>
    <router-link :to="{ path: '/' }" class="navbar">
      Archive
    </router-link>
    <router-link :to="{ path: '/' }" class="navbar">
      About
    </router-link>
  </div>
  <div class="bar">
    <a href="#">
      <div data-icon="ei-bell" data-size="s"></div>
    </a>
    <a href="https://www.google.com.hk/" target="_blank">
      <div data-icon="ei-search" data-size="s"></div>
    </a>
  </div>
</nav>
</template>

<script>
export default {}
</script>

<style lang="stylus" scoped>
  nav
    position absolute
    display flex
    justify-content space-between
    width 98%
    font-size 1rem
    height 3rem
    left 1rem
    top 1rem
    z-index 1

  .navbar
    padding-left 1.5rem
    color #00fa9a
    font-weight bold
    text-decoration none
    animation color-change 5s linear
    animation-iteration-count infinite
    transition all .5s ease
    &:hover
      font-size 1.2rem

  .bar
    margin-right 1rem

  @keyframes color-change
    0%, 100%
        color #FF0000
    25%
        color #00FFFF
    50%
        color #FFFF00
    75%
        color #00fa9a
</style>
