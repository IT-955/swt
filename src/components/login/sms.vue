<template>
  <div>
    <div class="header">
      <a class="back_btn" @click="goback"></a>
      <div class="h_tit">快捷登录</div>
    </div>
    <div class="login login2">
      <form action="" method="post" onsubmit="return checkForm()">
        <input
          type="text"
          class="text"
          name="mobile_phone"
          placeholder="请输入手机号"
        />
        <div class="box clearfix">
          <input
            type="text"
            class="text"
            name="mobile_code"
            id="mobile_code"
            placeholder="请输入手机验证码"
          />
          <div class="yzm">获取验证码</div>
        </div>
        <input type="submit" class="button" value="登录" />
      </form>
      <ul class="clearfix link">
        <li style=""><a>立即注册</a></li>
      </ul>
    </div>
    <div class="other">
      <div class="tit"><em>其他登录方式</em></div>
      <ul class="clearfix">
        <li>
          <a @click="back"
            ><i><img src="../../assets/img/login_account.png"/></i>账号密码</a
          >
        </li>
        <li>
          <a
            ><i><img src="../../assets/img/wechat.png"/></i>微信</a
          >
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },

  components: {},

  methods: {
    goback() {
      this.$router.back();
    },
    back() {
      this.$router.back();
    },
  },
};
</script>

<style scoped lang="scss">
.header {
  height: 1rem;
  background: #c01414;
  position: fixed;
  z-index: 8;
  left: 0;
  top: 0;
  width: 100%;
}
.back_btn {
  width: 0.4rem;
  height: 1rem;
  background: url(../../assets/img/arw2.png) center no-repeat;
  background-size: 0.2rem 0.36rem;
  position: absolute;
  left: 0.3rem;
  top: 0;
}
.h_tit {
  text-align: center;
  line-height: 1rem;
  font-size: 0.4rem;
  color: #ffffff;
}
.login {
  padding: 0.2rem 0.4rem 0;
}
.login .text,
.login .box {
  width: 84%;
  margin-top: 0.6rem;
  background: #ffffff;
  font-size: 0.36rem;
  color: #333333;
  height: 1.2rem;
  border-radius: 1.2rem;
  padding: 0 0.6rem;
  box-shadow: 0 0 0.1rem rgba(0, 0, 0, 0.2);
  border: none;
}
.login .box {
  padding: 0;
}
.login .text,
.login .box {
  width: 100%;
  margin-top: 0.6rem;
  background: #ffffff;
  font-size: 0.36rem;
  color: #333333;
  height: 1.2rem;
  border-radius: 1.2rem;
  padding: 0 0.6rem;
  box-shadow: 0 0 0.1rem rgba(0, 0, 0, 0.2);
  border: none;
}
.login2 .box .text {
  width: 2.9rem;
  float: left;
  margin: 0;
  box-shadow: none;
  padding: 0;
}
.login .text,
.login .box {
  width: 84%;
  margin-top: 0.6rem;
  background: #ffffff;
  font-size: 0.36rem;
  color: #333333;
  height: 1.2rem;
  border-radius: 1.2rem;
  padding: 0 0.6rem;
  box-shadow: 0 0 0.1rem rgba(0, 0, 0, 0.2);
  border: none;
}
.login2 .box .yzm {
  float: right;
  font-size: 0.36rem;
  color: #c01414;
  width: 1.8rem;
  text-align: center;
  line-height: 1.2rem;
  margin: 0;
}
.clearfix:after {
  content: ".";
  display: block;
  height: 0;
  clear: both;
  visibility: hidden;
  line-height: 0;
  font-size: 0;
}
.login .button {
  border: none;
  display: block;
  width: 100%;
  background: #c01414;
  height: 1.2rem;
  border-radius: 1.2rem;
  font-size: 0.36rem;
  color: #ffffff;
  margin-top: 0.6rem;
}
.login .link {
  padding-top: 0.65rem;
}
.login2 .link li {
  padding: 0;
}
.login .link li {
  padding: 0 0.3rem;
  position: relative;
  font-size: 0.3rem;
  color: #999999;
  line-height: 0.5rem;
  float: left;
}
.login .link li a {
  color: #999999;
}
.other {
  text-align: center;
  padding-top: 1rem;
}
.other .tit {
  text-align: center;
  font-size: 0.3rem;
  color: #aaaaaa;
  position: relative;
  line-height: 1.18rem;
}
.other .tit:before {
  content: "";
  width: 100%;
  height: 0.02rem;
  background: #dfdfdf;
  z-index: 0;
  position: absolute;
  left: 0;
  top: 50%;
  margin-top: -0.01rem;
}
.other .tit em {
  display: inline-block;
  vertical-align: top;
  padding: 0 0.25rem;
  background: #eeeeee;
  position: relative;
  z-index: 1;
}
.other ul {
  display: inline-block;
  vertical-align: top;
}
.other ul li {
  float: left;
  width: 1.6rem;
}
.other ul li a {
  font-size: 0.3rem;
  color: #aaaaaa;
  line-height: 0.6rem;
  display: block;
}
.other ul li i {
  display: block;
  width: 0.8rem;
  height: 0.8rem;
  margin: 0 auto;
}
img {
  vertical-align: middle;
  width: 100%;
  border: 0;
}
</style>
