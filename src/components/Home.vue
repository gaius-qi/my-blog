<template>
  <div class="home">
    <h1>Fear always springs from ignorance.</h1>
    <img class="photo" src="../assets/img02.jpg"></img>
    <h2>Isaac's Blog</h2>
    <a href="https://github.com/qwbtc" target="_blank">
      <div data-icon="ei-sc-github" data-size="m"></div>
    </a>
    <a href="https://www.facebook.com/dylan.bob.77377" target="_blank">
      <div data-icon="ei-sc-facebook" data-size="m"></div>
    </a>
    <a href="https://twitter.com/BobDylan0313" target="_blank">
      <div data-icon="ei-sc-twitter" data-size="m"></div>
    </a>
    <div data-icon="ei-user" data-size="m"></div>
  </div>
</template>

<script>
export default {
  name: 'home',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .home{
    background: url(../assets/img01.png) no-repeat;
    background-size: 100% 46rem;
    height: 46rem;
    text-align: center;
  }
  h1{
    display: inline-block;
    margin: 8rem 0 1rem 0;
    font-size: 2rem;
    font-weight: lighter;
  }
  .photo{
    display: block;
    height: 13.5rem;
    width: 11.5rem;
    border-radius: 50%;
    margin: 0 auto;
  }
</style>
<style>
  .icon{
    fill: #2c3e50;
    border-radius: 50%;
  }
  .icon:hover{
    fill: #00fa9a;
    background-color: #8492A6;
  }
</style>
