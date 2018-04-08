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
    <a href="mailto:gaius.qi@gmail.com" target="_blank">
      <div class="titanic titanic-open-message"></div>
    </a>
    <a href="https://www.google.com.hk/" target="_blank">
      <div class="titanic titanic-search-close"></div>
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
    width 100%
    font-size 1.5rem
    height 4rem
    left 0rem
    top 0rem
    z-index 1
    background-color #2c3e50
    box-shadow  0 0 0.7rem 0.5rem rgba(0, 0, 0, 0.8)
    .reminder-bar
      padding-left 3rem
      padding-top 0.8rem

  .navbar
    padding-left 1.5rem
    color #fff
    font-weight bold
    text-decoration none
    // animation color-change 5s linear
    // animation-iteration-count infinite
    font-family 'Edo'
    transition all .5s ease
    &:hover
      font-size 1.7rem
      color #FA8072

  .bar
    margin-right 3rem
    padding-top 0.1rem
    .titanic-open-message
      height 3.2rem
      width 2.6rem
      margin-right 1.3rem
    .titanic-search-close
      height 2.5rem
      width 3rem
      margin-right 1rem
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
