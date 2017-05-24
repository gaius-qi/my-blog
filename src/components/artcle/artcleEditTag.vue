<template>
  <el-checkbox-group v-model="checkList">
    <el-checkbox v-for="option in this.tags" :label="option" :key="option"></el-checkbox>
  </el-checkbox-group>
</template>

<script>
import { mapState } from 'vuex'
export default {
  // created () {
  //   this.getTagsInfo()
  // },
  data () {
    return {
      // 如果加一条options: this.tags,
      // 结果为undefined因为变量option先进行初始化，则option初始化的时候还没有进行computed，
      // 也就是并没有mapSate(['tags'])则this.tags = undefined
      // 因为getTagsInfo这个动作在进入home就已经请求了，所以state.tags可以复用，直接用mapState中的tags即可
      // 不要在对其做别的处理，例如在data中设置变量来获取tags，在用设置的变量进行操作，非但违法娶不到值，而其多此一举
      // 直接用this.tags即可
      checkList: []
    }
  },
  computed: {
    ...mapState([
      'tags'
    ])
  },
  // 当要用getter或state获取值的时候，如果是本组件在created中请求的数据，则mapState或mapGetter直接引用该数据即可
  // !!!若为同一页面别的组件请求的数据（之前state没有该数据时），则先要mapState或mapGetter引用数据，然后在watch对应getter或state映射的值的变化之后赋值，
  // 直接在map后引用值进行赋值options=this.tags不可以 因为其他组件刚刷新渲染dom并做请求数据后，该组件渲染时并不知道是否其他组件请求完成
  // 也就是说其他组件的请求数据和本组件的渲染不知道谁先谁后
  watch: {
    // tags (val) {
    //   this.options = val
    // },
    checkList (val) {
      this.$emit('getTags', val)
    }
  }
}
</script>

<style lang="stylus" scoped>
.el-checkbox
  margin-left 0.95rem
  color #2c3e50

.el-checkbox-group
  display flex
  flex-wrap: wrap;
  padding-left 1rem
</style>
