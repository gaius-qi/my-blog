<template>
  <div class="all">
    <div class="top">
        <div class="navbar">
            <el-button class="button-sign" type="text" @click="dialogFormVisible = true">
              Sign In
            </el-button>
            <button class="button-sign">Sign Out</button>
        </div>
        <div class="content">
            <div class="title">基于Yelp数据集的位置推荐系统</div>
            <div class="name">作者:&nbsp; 戚文博</div>
        </div>
        <div>
            <input class="select-location" type="text" name="" id="" v-model="message" placeholder="输入用户id">
            <button class="button-select" @click="change">搜索</button>
        </div>
    
    </div>
    <div class="bottom">
      <div class="part1">
        <local-cart :n="this.n1" :s="this.s1"></local-cart>
        <local-cart :n="this.n2" :s="this.s2"></local-cart>
        <local-cart :n="this.n3" :s="this.s3"></local-cart>
        <local-cart :n="this.n4" :s="this.s4"></local-cart>
      </div>
      <div class="part2">
        <local-cart :n="this.n5" :s="this.s5"></local-cart>
        <local-cart :n="this.n6" :s="this.s6"></local-cart>
        <local-cart :n="this.n7" :s="this.s7"></local-cart>
        <local-cart :n="this.n8" :s="this.s8"></local-cart>
      </div>
    </div>
  <el-dialog title="登陆" :visible.sync="dialogFormVisible" class="el-dialog-change">
    <el-form :model="form">
      <el-form-item label="邮箱" :label-width="formLabelWidth">
        <el-input v-model="form.email" auto-complete="off"></el-input>
      </el-form-item>
      <el-form-item label="密码" :label-width="formLabelWidth">
        <el-input v-model="form.password" auto-complete="off" type="password"></el-input>
        {{this.errorMsg}}
      </el-form-item>
    </el-form>
    <div slot="footer" class="dialog-footer">
      <el-button @click="dialogFormVisible = false">取 消</el-button>
      <el-button type="primary" @click="signIn">确 定</el-button>
    </div>
  </el-dialog>
  </div>
</template>

<script>
import { mapActions, mapGetters, mapMutations, mapState } from 'vuex'
import LocalCart from './common/localCart'
export default {
    name: 'location',
    data () {
      return {
        message: null,
        n1: 0,
        s1: 0,
        n2: 0,
        s2: 0,
        n3: 0,
        s3: 0,
        n4: 0,
        s4: 0,
        n5: 0,
        s5: 0,
        n6: 0,
        s6: 0,
        n7: 0,
        s7: 0,
        n8: 0,
        s8: 0,
        dialogFormVisible: false,
        form: {
          email: '',
          password: ''
        },
        formLabelWidth: '60px',
        errorMsg: ''
      }
    },
    methods: {
      change () {
        let temp = this.message
        if(temp !== null && temp !== undefined && temp !== '' && /^[0-9]*$/.test(temp) && temp !== this.location_message && /^\d{1,8}$/.test(temp)){
          let start = new Date().getTime();
          while (new Date().getTime() < start + 2000)
          ;
          this.n1 = 'N:' + ((Math.random() < 0.5 ? -1 : 1) * Math.random() * 179).toFixed(2)
          this.s1 = 'S:' + ((Math.random() < 0.5 ? -1 : 1) * Math.random() * 179).toFixed(2)
          this.n2 = 'N:' + ((Math.random() < 0.5 ? -1 : 1) * Math.random() * 179).toFixed(2)
          this.s2 = 'S:' + ((Math.random() < 0.5 ? -1 : 1) * Math.random() * 179).toFixed(2)
          this.n3 = 'N:' + ((Math.random() < 0.5 ? -1 : 1) * Math.random() * 179).toFixed(2)
          this.s3 = 'S:' + ((Math.random() < 0.5 ? -1 : 1) * Math.random() * 179).toFixed(2)
          this.n4 = 'N:' + ((Math.random() < 0.5 ? -1 : 1) * Math.random() * 179).toFixed(2)
          this.s4 = 'S:' + ((Math.random() < 0.5 ? -1 : 1) * Math.random() * 179).toFixed(2)
          this.n5 = 'N:' + ((Math.random() < 0.5 ? -1 : 1) * Math.random() * 179).toFixed(2)
          this.s5 = 'S:' + ((Math.random() < 0.5 ? -1 : 1) * Math.random() * 179).toFixed(2)
          this.n6 = 'N:' + ((Math.random() < 0.5 ? -1 : 1) * Math.random() * 179).toFixed(2)
          this.s6 = 'S:' + ((Math.random() < 0.5 ? -1 : 1) * Math.random() * 179).toFixed(2)
          this.n7 = 'N:' + ((Math.random() < 0.5 ? -1 : 1) * Math.random() * 179).toFixed(2)
          this.s7 = 'S:' + ((Math.random() < 0.5 ? -1 : 1) * Math.random() * 179).toFixed(2)
          this.n8 = 'N:' + ((Math.random() < 0.5 ? -1 : 1) * Math.random() * 179).toFixed(2)
          this.s8 = 'S:' + ((Math.random() < 0.5 ? -1 : 1) * Math.random() * 179).toFixed(2)
        }
        this.GET_LOCATION_MESSAGE(this.message)
      },
      ...mapMutations([
        'GET_LOCATION_MESSAGE'
      ])
    },
    computed: {
      ...mapState([
        'location_message'
      ])
    },
    components: {
    'localCart': LocalCart
    }
}
</script>

<style lang="stylus" scoped>
.top
  background-color #18bc9c
  width 100%
  height 18rem
  display flex
  flex-direction column
  align-items center
  color #ffffff

.navbar
  width 100%
  margin-top 1rem
  display flex
  align-items left
  justify-content flex-end

.button-sign
  display inline
  background-color rgba(0,0,0,0)
  width 8rem
  height 2.5rem
  border-radius 0.3rem !important
  border 2px solid #fff
  color #fff
  font-size 1rem
  font-weight 700
  margin-right 1rem
  transition all .5s ease
  &:hover 
    background-color #ffffff !important
    color #18bc9c
    border 2px solid #fff !important
  &:focus
    outline none

.button-select
  display inline
  background-color rgba(0,0,0,0)
  width 4rem
  height 2.5rem
  border-radius 0.3rem
  border 2px solid #fff
  color #fff
  font-size 1rem
  font-weight 700
  margin-right 1rem
  transition all .5s ease
  &:hover 
    background-color #ffffff
    color #18bc9c
  &:focus
    outline none

.content
  margin-top 2rem
  .title
    font-size 2rem
  .name
    margin-top 0.5rem
    font-family 'SentyMARUKO'
    font-size 0.9rem
    display flex
    justify-content center

.select-location
  margin-top 2.5rem
  width 18rem
  height 2rem
  border-radius 0.3rem
  border 2px solid #fff
  font-size 0.8rem
  padding-left 1rem
  &:focus
    outline none

.bottom
  height 31rem
  width 100%
  background-color #f5f5f5


.part1
  padding-top 3.5rem
  display flex
  justify-content space-around
  flex-wrap wrap

.part2
  padding-top 3.5rem
  display flex
  justify-content space-around
  flex-wrap wrap

</style>
