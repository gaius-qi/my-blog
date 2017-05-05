<template>
  <div class="home">
    <nav-top></nav-top>
      <h1 class="animated rubberBand" id="letter">Fear always springs from ignorance.</h1>
    <img class="photo animated rubberBand" src="../assets/img02.jpg"></img>
    <h2 class="animated rubberBand">Isaac's Blog</h2>
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
    <home-down-buttom></home-down-buttom>
    <hr class="divider"/>
  </div>
</template>

<script>
import HomeDownButtom from './common/homeDownButtom.vue'
import NavTop from './common/nav.vue'

export default {
  name: 'home',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  components: {
    'homeDownButtom': HomeDownButtom,
    'navTop': NavTop
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .home{
    background: url(../assets/img01.png) repeat-y;
    background-size: 100% 46rem;
    height: 150rem;
    text-align: center;
  }
  h1{
    display: inline-block;
    margin: 8rem 0 1rem 0;
    font-size: 2rem;
    font-weight: lighter;
    font-family: Chalkduster, fantasy ;
  }
  .photo{
    display: block;
    height: 13.5rem;
    width: 11.5rem;
    border-radius: 50%;
    margin: 0 auto;
  }
  .divider{
    margin: 5.5rem 0 0 0;
    height: 3.3rem;
    border: 0;
    box-shadow: inset 0 3.3rem 3.3rem -3.3rem rgba(0, 0, 0, 1);
  }
</style>
