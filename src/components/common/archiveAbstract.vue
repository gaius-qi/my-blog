<template>
<div class="container">
  <h3>归档</h3>
  <hr class="divider" />
  <ul class="list">
    <li v-for="item in dateNums">
      <router-link :to="{ path: `/archive_pages/${item[0]}${item[1]}`}">
        <a @click="scroll">{{`${item[0]}年${item[1]}月`}}(<span>{{item[2]}}</span>)</a>
      </router-link>
    </li>
  </ul>

</div>
</template>

<script>
import {
  mapGetters,
  mapActions,
  mapState
} from 'vuex'

export default {
  created () {
    this.getPagesDateInfo()
  },
  computed: {
    ...mapGetters([
      'page_contents'
    ]),
    ...mapState([
      'pages_date'
    ]),
    dateNums () {
      let result = []
      for (let [key, value] of this.pages_date) {
        let row = []
        if (key.slice(4) <= '9') {
          row.push(...[key.slice(0, 4), '0' + parseInt(key.slice(4)), value])
        } else {
          row.push(...[key.slice(0, 4), parseInt(key.slice(4)), value])
        }
        result.push(row)
      }
      return result
    }
  },
  methods: {
    ...mapActions([
      'getPagesDateInfo'
    ]),
    scroll () {
      window.scrollTo(0, 705)
    }
  }
}
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
  margin-top -0.5rem

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
