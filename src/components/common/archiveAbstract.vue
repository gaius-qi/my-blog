<template>
<div class="container">
  <h3>归档</h3>
  <hr class="divider" />
  <ul class="list">
    <li><a href="#">2017年5月(<span>1</span>)</a></li>
    <li><a href="#">2017年4月(<span>10</span>)</a></li>
    <li><a href="#">2017年4月(<span>10</span>)</a></li>
    <li><a href="#">2017年4月(<span>10</span>)</a></li>
    <li><a href="#">2017年4月(<span>10</span>)</a></li>
    <li><a href="#">2017年4月(<span>10</span>)</a></li>
    <li><a href="#">2017年4月(<span>10</span>)</a></li>
    <li><a href="#">2017年4月(<span>10</span>)</a></li>
    <li><a href="#">2017年4月(<span>10</span>)</a></li>
    <li><a href="#">2017年4月(<span>10</span>)</a></li>
    <li><a href="#">2017年4月(<span>10</span>)</a></li>
    <li><a href="#">2017年4月(<span>10</span>)</a></li>
    <li><a href="#">2017年4月(<span>10</span>)</a></li>
    <li><a href="#">2017年4月(<span>10</span>)</a></li>
  </ul>

</div>
</template>

<script>
export default {}
</script>

<style lang="stylus" scoped>
.container
  margin 2rem 1rem 1rem 1rem
  height auto
  border 0
  box-shadow 0 0 2.5rem rgba(0, 0, 0, 1)
  border-radius 2rem
  padding-bottom 0.1rem


h3
  padding-top 1rem
  font-size 1.125rem
  font-weight 400
  font-family 'SentyMARUKO'

.divider
  width 80%
  opacity 0.5
  border-top 1px solid #2c3e50

.list
  list-style-type none
  display flex
  flex-flow column nowrap

li
  margin-left -2rem
  text-align center
  font-size 0.9rem
  margin-bottom 0.2rem
  transition all 0.5s ease
  &:hover
    transform scaleX(1.2) scaleY(1.2)

span
  color rgba(226, 39, 45, 0.78)

a
  font-family 'SentyZHAO'

</style>
