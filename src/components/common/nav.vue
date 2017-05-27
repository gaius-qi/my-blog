<template>
<nav role="navigation">
  <router-link :to="{ path: '/' }"><a href="#" class="navbar">Home</a></router-link>
  <a href="#" class="navbar">Archive</a>
  <a href="#" class="navbar">About</a>
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
    &:hover
      color #FA8072

  .bar
    margin-left 58rem
</style>
