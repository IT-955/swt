<template>
  <div class="bg">
    <div class="login-container">
      <!-- :rules="rules" 表单验证, ref 相当于 id，:model 表单数据对象, label-width 表单域标签的的宽度 -->
      <el-form
        :rules="rules"
        ref="ruleForm"
        :model="ruleForm"
        label-width="80px"
        class="login-form"
      >
        <h2 class="login-title">山味堂会员管理系统</h2>
        <!-- 注意： prop 是加在 el-form-item 组件上 -->
        <el-form-item label="帐号" prop="name">
          <el-input v-model="ruleForm.name" placeholder="请输入帐号"></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="password">
          <el-input type="password" v-model="ruleForm.password" placeholder="请输入密码"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="submitForm('ruleForm')">登录</el-button>
          <el-button @click="resetForm('ruleForm')">重置</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>
<script>
import loginApi from "@/api/login";
export default {
  data() {
    return {
      ruleForm: {
        name: "",
        password: ""
      },
      rules: {
        name: [
          { required: true, message: "请输入账号", trigger: "blur" },
          { min: 3, max: 8, message: "长度在 3 到 8 个字符", trigger: "blur" }
        ],
        password: [{ required: true, message: "请输入密码", trigger: "blur" }]
      }
    };
  },
  methods: {
    // 注意：按钮上调用的函数名要一致 submitForm
    submitForm(ruleForm) {
      this.$refs[ruleForm].validate(valid => {
        if (valid) {
          // console.log(
          //   loginApi.loginIn(this.ruleForm.name, this.ruleForm.password)
          // );
          loginApi
            .loginIn(this.ruleForm.name, this.ruleForm.password)
            .then(res => {
              // console.log(res);
              this.checkLogin();
            })
            .catch(error => {
              console.log(error);
            });
        } else {
          console.log("error");
          return false;
        }
      });
    },
    resetForm(ruleForm) {
      this.$refs[ruleForm].resetFields();
    },
    async checkLogin() {
      try {
        let p = await loginApi.loginIn(
          this.ruleForm.name,
          this.ruleForm.password
        );
        if (p.data.flag) {
          // $route.push('/');
          this.checkToken(p.data.data.token);
          // console.log(p.data.data.token);
        } else {
          alert("验证失败");
        }
      } catch (error) {
        console.log(error);
      }
    },
    async checkToken(token) {
      try {
        let p = await loginApi.getUserInf(token);
        if (p.data.flag) {
          // alert("登陆成功");
          this.$router.push("/home");
          localStorage.setItem("swt100-id", p.data.data.id);
          localStorage.setItem("swt100-token", token);
        } else {
          alert("登陆失败");
        }
      } catch (error) {
        console.log(error);
      }
    }
  }
};
</script>

<style scoped lang="scss">
.bg {
  width: 100%;
  height: 595px;
  background: url("../../assets/lgbg.jpg");
}
.login-container {
  width: 380px;
  height: 300px;
  background: #fff;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  border-radius: 10px;
  .login-title {
    width: 300px;
    margin-left: 20%;
  }
  .el-input {
    width: 75% !important;
  }
  .el-button {
    margin-left: 20px;
  }
}
</style>