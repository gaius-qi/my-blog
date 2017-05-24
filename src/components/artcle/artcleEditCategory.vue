<template>
  <el-select v-model="value" placeholder="请选择">
    <el-option
      v-for="item in category"
      :key="item[1]"
      :label="item[0]"
      :value="item[1]">
    </el-option>
  </el-select>
</template>

<script>
import { mapState, mapActions } from 'vuex'

export default {
  created () {
    this.getCategoryInfo()
  },
  data () {
    return {
      options: [],
      value: 0
    }
  },
  computed: {
    ...mapState([
      'category'
    ])
  },
  methods: {
    ...mapActions([
      'getCategoryInfo'
    ])
  },
  // 当要用getter或state获取值的时候，如果是本组件在created中请求的数据，则mapState或mapGetter直接引用该数据即可
  // 若为别的组件请求的数据，则先要mapState或mapGetter引用数据，然后在watch对应getter或state映射的值的变化之后赋值，
  // 直接在map后引用值进行赋值options=this.tags不可以 因为其他组件刚刷新渲染dom并做请求数据后，该组件渲染时并不知道是否其他组件请求完成
  // 也就是说其他组件的请求数据和本组件的渲染不知道谁先谁后
  watch: {
    value (val) {
      this.$emit('getCategory', this.value)
    }
  }
}
</script>

<style lang='stylus' scoped>

</style>
