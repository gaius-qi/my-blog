<template>
  <div>
    <button type="button" @click="scrollWindow" class="down">
      <div class="animated rubberBand" data-icon="ei-chevron-down" data-size="l"></div>
    </button>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
export default {
  methods: {
    ...mapActions([
      'getTestInfo'
    ]),
    scrollWindow () {
      window.scrollTo(100, 705)
    }
  },
  computed: {
    ...mapGetters([
      'test'
    ])
  }
}
</script>

<style scoped>
  .down{
    background: rgba(0,0,0,0);
    border: 0;
    outline:none;
  }
</style>
