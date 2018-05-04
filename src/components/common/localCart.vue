<template>
<div>
  <div class="cart">
      <img src="../../../static/image/地理位置.png" alt="">
      <p>
          {{this.n}} &nbsp; {{this.s}}
      </p>
  </div>
</div>
</template>

<script>
import smoothScroll from 'smoothscroll'
export default {
  props: {
    n: {
      type: String
    },
    s: {
      type: String
    }
  }
}
</script>

<style lang="stylus" scoped>
  .cart
    height 10rem
    width 15rem
    background-color #fff
    border 1px solid #e6e6e6
    border-radius 4px
    text-align:center;
    &:hover
      border 1px solid #18bc9c
      box-shadow 0 6px 12px rgba(0,0,0,.1)
    img
      margin-top 1.5rem
    p
      font-size 1rem
      font-weight 700
      color #333
</style>