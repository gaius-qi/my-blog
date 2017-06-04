<template>
<nav role="navigation">
  <div class="reminder-bar">
    <router-link :to="{ path: '/' }" class="navbar">
      Home
    </router-link>
    <a href="/cv" target="_blank" class="navbar">
      About
    </a>
    <el-button class="login" type="text" @click="dialogFormVisible = true">
      login in
    </el-button>
  </div>
  <div class="bar">
    <a href="#">
      <div data-icon="ei-gear" data-size="s"></div>
    </a>
    <a href="https://www.google.com.hk/" target="_blank">
      <div data-icon="ei-search" data-size="s"></div>
    </a>
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
</nav>
</template>

<script>
import {
  mapActions,
  mapState
} from 'vuex'
export default {
  data() {
    return {
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
    ...mapActions([
      'createSessionInfo'
    ]),
    signIn() {
      this.dialogFormVisible = false
      let userJson = {
        'user': {
          'email': this.form.email,
          'password': this.form.password
        }
      }
      this.createSessionInfo(userJson)
    }
  },
  computed: {
    ...mapState([
      'user'
    ])
  }
}
</script>

<style lang="stylus" scoped>
  nav
    position absolute
    display flex
    justify-content space-between
    width 98%
    font-size 1rem
    height 3rem
    left 0rem
    top 0rem
    z-index 1

  .navbar
    padding-left 1.5rem
    color #00fa9a
    font-weight bold
    text-decoration none
    animation color-change 5s linear
    animation-iteration-count infinite
    transition all .5s ease
    &:hover
      font-size 1.2rem

  .bar
    margin-right 1rem
    margin-top 0.5rem

  .login
    opacity 0
    margin-left 10rem
    &:hover
      cursor default


  @keyframes color-change
    0%, 100%
        color #FF0000
    25%
        color #00FFFF
    50%
        color #FFFF00
    75%
        color #00fa9a
</style>
