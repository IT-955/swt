<template>
  <div class="header">
    <!-- 头部左侧Logo和标题 -->
    <a href="#/">
      <img class="logo" src="@/assets/logo.png" width="25px" />
      <span class="company">三味堂管理系统</span>
    </a>
    <!-- 头部右侧下拉菜单 -->
    <el-dropdown @command="handleCommand">
      <span class="el-dropdown-link">
        admin
        <i class="el-icon-arrow-down el-icon--right"></i>
      </span>
      <el-dropdown-menu slot="dropdown">
        <el-dropdown-item command="a">修改密码</el-dropdown-item>
        <el-dropdown-item command="b">退出系统</el-dropdown-item>
      </el-dropdown-menu>
    </el-dropdown>
  </div>
</template>
<script>
import loginApi from "@/api/login";
export default {
  data() {
    return {};
  },
  methods: {
    handleCommand(command) {
      switch (command) {
        case "a":
          break;
        case "b":
          // console.log(localStorage.getItem("swt100-token"));
          loginApi.logout(localStorage.getItem("swt100-token")).then(res => {
            localStorage.removeItem("swt100-token");
            // console.log(res);
            localStorage.removeItem("swt100-id");
            this.$router.push("/login");
          });
          break;
        default:
          break;
      }
    }
  }
};
</script>
<style scoped>
.company {
  color: white;
  margin-left: 10px;
  /* margin-bottom: 5px; */
}
.logo {
  vertical-align: middle;
  /* 上 右 下 左 */
  padding: 0 10px 0 40px;
}
.company {
  position: absolute;
  color: white;
}
/* 下拉菜单 */
.el-dropdown {
  float: right;
  margin-right: 40px;
}
.el-dropdown-link {
  cursor: pointer;
  color: #fff;
}
</style>