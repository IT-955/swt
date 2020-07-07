<template>
  <div>
    <div class="header">
      <a href="" class="back_btn"></a>
      <div class="h_tit">登录</div>
    </div>

    <div class="login">
      <form
        method="post"
        onsubmit="return checkForm()"
      >
        <input
          type="hidden"
          name="back_url"
        />
        <input
          type="text"
          name="username"
          id="username"
          class="text"
          placeholder="请输入手机号"
        />
        <input
          type="password"
          name="pwd"
          id="pwd"
          class="text"
          placeholder="请输入密码"
        />
        <input type="button" class="button" value="登录" />
      </form>
      <ul class="clearfix link">
        <li><a href="">立即注册</a></li>
        <li><a href="">忘记密码</a></li>
      </ul>
    </div>

    <div class="other">
      <div class="tit"><em>其他登录方式</em></div>
      <ul class="clearfix">
        <li>
          <a href=""
            ><i
              ><img
                src="../../assets/img/login_message.png"/></i
            >短信验证</a
          >
        </li>
        <li>
          <a href=""
            ><i
              ><img
                src="../../assets/img/wechat.png"/></i
            >微信</a
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

  methods: {},
};
</script>

<style scoped lang="scss">
  a,
  a:link {
    text-decoration: none;
    cursor: pointer;
  }
body {
  font-family: Arial, "微软雅黑";
  color: #000;
  line-height: 1.3;
  font-size: 0.24rem;
  width: 100%;
  max-width: 840px;
  margin: 0 auto;
  opacity: 0;
  background: #eeeeee;
  padding-top: 1rem;
}
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
    width: .4rem;
    height: 1rem;
    background: url(../../assets/img/arw2.png) center no-repeat;
    background-size: .2rem .36rem;
    position: absolute;
    left: .3rem;
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
.login .link li {
  padding: 0 0.4rem;
}
.login .link li {
  padding: 0 0.5rem;
  position: relative;
  font-size: 0.3rem;
  color: #999999;
  line-height: 0.5rem;
  float: left;
}
.login .link li a {
  color: #999999;
}
.login .link li:after {
  content: "|";
  position: absolute;
  right: 0;
  top: 0;
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
}
.other {
  text-align: center;
  padding-top: 1rem;
}
</style>