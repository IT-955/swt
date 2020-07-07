<template>
  <div>
    <div class="header">
      <a href class="back_btn"></a>
      <div class="h_tit">注册</div>
    </div>
    <div class="login login2 deg">
      <form action="" method="post" onsubmit="return checkForm()">
        <div class="box clearfix">
          <input type="text" class="text" id="mobile_phone" name="mobile_phone" placeholder="手机号" />
          <!--<div class="yzm" onclick="getCode(1,$(this));">发送验证码</div>-->
          <input
            class="yzm text"
            type="button"
            style="padding: 0;"
            onclick=""
            value="发送验证码"
          />
        </div>
        <input type="text" class="text" placeholder="验证码" name="mobile_code" id="mobile_code" />
        <input type="password" class="text" name="pwd" id="pwd" placeholder="密码" />
        <input type="password" class="text" name="qr_pwd" id="qr_pwd" placeholder="确认密码" />
        <label>
          我已阅读并同意
          <input type="hidden" name="agreement" id="agreement" value="1" />
          <a
            href="javascript:void (0);"
            onclick=""
          >《用户协议》</a>
          与
          <a
            href="javascript:void (0);"
            onclick=""
          >《用户服务》</a>
        </label>
        <input type="button" value="" name="back_url" />
        <input type="button" class="button" value="注册" />
      </form>
      <div class="l_btn">
        <a href="">账号登录</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },

  components: {},

  methods: {}
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
.clearfix:after {
  content: ".";
  display: block;
  height: 0;
  clear: both;
  visibility: hidden;
  line-height: 0;
  font-size: 0;
}
.login {
  padding: 0.2rem 0.4rem 0;
}
form {
  display: block;
  margin-top: 0em;
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
  width: 2.5rem;
  float: left;
  margin: 0;
  box-shadow: none;
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
  width: 2.5rem;
  text-align: center;
  line-height: 1.2rem;
}
.login2 .box .text {
  width: 2.5rem;
//   float: left;
  margin: 0;
  box-shadow: none;
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
.deg label {
  display: block;
  padding-left: 1rem;
  position: relative;
  line-height: 0.6rem;
  margin-top: 0.5rem;
  font-size: 0.26rem;
  color: #999999;
}
.deg label:before {
  content: "";
  position: absolute;
  left: 0.4rem;
  width: 0.4rem;
  height: 0.4rem;
  border: 2px #cccccc solid;
  border-radius: 50%;
  margin-top: -0.2rem;
  top: 50%;
  text-align: center;
  line-height: 0.36rem;
  color: #ffffff;
  font-size: 0.26rem;
}
.deg label a {
  display: inline-block;
  vertical-align: top;
  color: #555555;
}
a,
a:link {
  text-decoration: none;
  cursor: pointer;
}
.deg .button {
  margin-top: 0.5rem;
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
.l_btn {
  text-align: center;
  font-size: 0.3rem;
  line-height: 0.5rem;
  padding-top: 0.65rem;
}
.l_btn a {
  color: #999999;
}
</style>