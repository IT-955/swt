<template>
  <div>
    <div class="header">
      <a onclick class="back_btn" @click="goback"></a>
      <div class="h_tit">找回密码</div>
      <div class="content">
        <div class="sign">
          <form action method="post" >
            <input
              type="text"
              name="mobile_phone"
              id="mobile_phone"
              placeholder="新密码"
              onblur
            />
            <div class="yz_box clearfix">
              <input
                class="fl"
                type="text"
                placeholder="确认新密码"
                name="mobile_code"
              />
            </div>
            <input
              @click="forterpwd"
              type="button"
              class="sub_btn"
              style="width:98% ;height:1.2rem"
              value="确定"
            />
          </form>
        </div>
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

  methods: {
    goback() {
      this.$router.back();
    },
    forterpwd() {
      this.$router.push('/login');
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
.sign {
  margin-top: 0.6rem;
}
.sign form {
  padding: 0rem 0.4rem;
}
.sign form > input {
  outline: none;
  border: 0;
  background: #fff;
  font-size: 0.3rem;
  margin-bottom: 0.6rem;
  width:100%;
  height: 1.2rem;
  padding-left: 0.5rem;
  border-radius: 0.6rem;
}
.sign form .yz_box {
  background: #fff;
  margin-bottom: 0.6rem;
  width: 86%;
  height: 1.2rem;
  padding: 0 0.5rem;
  border-radius: 0.6rem;
}
.sign form .yz_box input {
  outline: none;
  border: 0;
  font-size: 0.3rem;
  width: 50%;
  height: 1.2rem;
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
.sign form .sub_btn {
  padding: 0;
  font-size: 0.36rem;
  color: #fff;
  background: #c01414;
  border: none;
  border-radius: 0.6rem;
}
.sign form > input {
  outline: none;
  border: 0;
  background: #fff;
  font-size: 0.3rem;
  margin-bottom: 0.6rem;
  width: 92%;
  height: 1.2rem;
  padding-left: 0.5rem;
  border-radius: 0.6rem;
}
.getCode {
  background: none;
  color: #c01414;
  font-size: 0.36rem;
  text-align: right;
}
</style>
