<template>
  <div class="note">
      <el-form :model = "account" :rules="rules" ref="account" status-icon  class = "login-container" :label-position="labelPosition">
        <el-tabs v-model="activeName">
            <el-tab-pane label = "学生" name = "students">学生</el-tab-pane>
            <el-tab-pane label = "教师" name = "teacher">老师</el-tab-pane>
            <el-tab-pane label = "教务老师" name = "eduTeacher">教务老师</el-tab-pane>
        </el-tabs>

        <el-form-item label="账号" prop="username" >
             <el-input type="text" v-model="account.username" auto-complete="off" placeholder = "请输入您的账号"></el-input>
        </el-form-item>
        </el-tabs>
        <el-form-item label="密码" prop="password">
             <el-input type="password" v-model="account.password" auto-complete="off" placeholder = "请输入密码"></el-input>
        </el-form-item>

        <el-checkbox v-model = "checked" checked class = "remember">记住密码</el-checkbox>
        <el-form-item style = "width:100%;">
            <el-button type = "primary" style = "width:100%;" >登录</el-button>
        </el-form-item>

      </el-form>
      <h3><router-link :to="{ name: 'test'}">User</router-link></h3>
  </div>
</template>
<script>
export default {
  name:'Login',
  methods:{

  },
  data() {
      return {
          labelPosition:'right',
          logining: false,
          account: {
              username:'',
              password:''
          },
          activeName:'teacher',
          rules: {
            username: [
                { required: true, message: '请输入您的账号', trigger: 'blur' },
                // { pattern: /^\d{11}$/,  message: '请输入11位数字手机号', trigger: 'blur' },
            ],
            password: [
                { required: true, message: '请输入密码', trigger: 'blur' },
                { pattern: /^\d{6}$/,  message: '请输入6位数字验证码', trigger: 'blur' },
            ]
          },
          checked:false
      }
  }
}
</script>
<style>
    .note{
        width: 100%;
        height: 100%;
        position:absolute;
        top:0;
        left:0;
        width: 100%;
        height:100%;
        background-image: url(../assets/bg.jpg);
        background-size: cover;
        background-position: center;
    }
    .login-container {
        -webkit-border-radius: 5px;
        border-radius: 15px;
        -moz-border-radius: 5px;
        background-clip: padding-box;
        margin: 180px auto;
        width: 350px;
        padding: 35px 35px 15px 35px;
        background: rgba(255,255,255,0.7);
        border: 1px solid #eaeaea;
        box-shadow: 0 0 25px #cac6c6;
    }
</style>
