<template>
<nav role="navigation">
  <a href="#" class="navbar">Home</a>
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

  .navbar
    padding-left 1.5rem
    color #2c3e50
    font-weight bold
    text-decoration none

  .navbar:hover
    color #00fa9a

  .bar
    margin-left 58rem
</style>
