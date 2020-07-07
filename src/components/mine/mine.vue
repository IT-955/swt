<template>
  <div>
    <!-- header -->
    <div class="header">
      <a href="javascript:history.go(-1)" class="back_btn wapGoToBack"></a>
      <div class="h_tit">我的</div>
      <a href class="mes_ic">
        <b>0</b>
      </a>
    </div>
    <!-- vip -->
    <div class="vip_box">
      <div class="clearfix">
        <div class="r_pic">
          <a href>
            <img src="https://www.swt100.com/data/default/sex0.png" />
          </a>
        </div>
        <span class="n_span n_span2">
          QD188WVKJ2192
          <a href>签到</a>
        </span>
        <a class="vip_l" href>
          <em>体验会员</em>
        </a>
      </div>
      <div class="box clearfix">
        <p>
          我的余额:
          <a href style="color: #C01414;">
            <em>0.00</em>元
          </a>
        </p>
        <p onclick="window.location.href=&quot;/user/integral&quot;">
          我的积分:
          <em>0</em>
        </p>
      </div>
    </div>
    <ul class="ic_nav ic_nav2 clearfix">
      <li v-for="(item,index) in ic_nav" :key="index">
        <a href>
          <i>
            <img :src="item.pic" />
          </i>
          <p>{{item.text}} {{item.text2}}</p>
        </a>
      </li>
    </ul>

    <ul class="set_list">
      <li>
        <a href>
          <i>查看全部</i>我的订单
        </a>
      </li>
    </ul>

    <ul class="ic_nav ic_nav3 clearfix">
      <li v-for="(item,index) in ic_nav3" :key="index">
        <a href>
          <i>
            <img :src="item.pic" />
          </i>
          <span class="user_order_num">{{item.text2}}</span>
          <p>{{item.text}}</p>
        </a>
      </li>
    </ul>

    <ul class="set_list">
      <li v-for="(item,index) in set_list" :key="index">
        <a href>
          <b>
            <img :src="item.pic" />
          </b>
          {{item.name}}
        </a>
      </li>
    </ul>
  <div class="zhanwei"> </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      ic_nav: [
        {
          pic: require("../../assets/img/ic34.png"),
          text: "优惠券",
          text2: "0"
        },
        {
          pic: require("../../assets/img/ic42.png"),
          text: "收藏",
          text2: "0"
        },
        {
          pic: require("../../assets/img/ic43.png"),
          text: "我的足迹",
          text2: "0"
        }
      ],
      ic_nav3: [
        {
          pic: require("../../assets/img/ic44.png"),
          text: "待付款",
          text2: "0"
        },
        {
          pic: require("../../assets/img/ic45.png"),
          text: "待发货",
          text2: "0"
        },
        {
          pic: require("../../assets/img/ic46.png"),
          text: "待收货"
        },
        {
          pic: require("../../assets/img/ic48.png"),
          text: "已完成"
        },
        {
          pic: require("../../assets/img/ic47.png"),
          text: "退款/售后"
        }
      ],
      set_list: [
        {
          pic: require("../../assets/img/ic49.png"),
          name: "邀请好友赚钱"
        },
        {
          pic: require("../../assets/img/ic50.png"),
          name: "评价"
        },
        {
          pic: require("../../assets/img/ic53.png"),
          name: "设置"
        }
      ]
    };
  },

  components: {},

  methods: {}
};
</script>

<style scoped lang="scss">
.zhanwei{
  display: block;
  padding-top: 1.4rem;
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
  opacity: 1;
  padding-bottom: 1.6rem;
}
body {
  font-size: 0.28rem;
  line-height: 150%;
  width: 100%;
  height: 100%;
  -webkit-tap-highlight-color: transparent;
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
.header {
  height: 1rem;
  background: #c01414;
  position: fixed;
  z-index: 8;
  left: 0;
  top: 0;
  width: 100%;
}
a,
a:link {
  text-decoration: none;
  cursor: pointer;
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
.mes_ic {
  width: 0.36rem;
  height: 0.36rem;
  background: url(../../assets/img/ic1.png) center no-repeat;
  background-size: cover;
  position: absolute;
  right: 0.47rem;
  top: 0.32rem;
}
.mes_ic b {
  position: absolute;
  right: -0.17rem;
  top: -0.1rem;
  background: #ffffff;
  width: 0.3rem;
  height: 0.3rem;
  border-radius: 50%;
  font-size: 0.2rem;
  text-align: center;
  line-height: 0.3rem;
  color: #c01414;
}
.vip_box {
  padding: 0.3rem;
  background: url(../../assets/img/bg5.jpg) center top repeat-x #ffffff;
  background-size: 0.05rem 3.06rem;
}
.vip_box .r_pic {
  float: left;
  width: 1.35rem;
  height: 1.35rem;
  overflow: hidden;
  border-radius: 50%;
  box-shadow: 0 0 0.15rem rgba(0, 0, 0, 0.2);
}
img {
  vertical-align: middle;
  width: 100%;
  border: 0;
}
.vip_box .n_span2 {
  line-height: 0.6rem;
}
.vip_box .n_span2 a {
  display: block;
  font-size: 0.3rem;
  padding-left: 0.35rem;
  background: url(../../assets/img/ic41.png) left center no-repeat;
  background-size: 0.23rem 0.31rem;
  color: #ffffff;
}
.vip_box .n_span {
  float: left;
  font-size: 0.36rem;
  color: #ffffff;
  // line-height: 1.35rem;
  margin-left: 0.3rem;
  max-width: 3rem;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}
.vip_box .vip_l {
  float: right;
  font-size: 0.3rem;
  color: #ffffff;
  width: 2.68rem;
  height: 0.72rem;
  text-align: center;
  line-height: 0.72rem;
  border-radius: 0.72rem;
  background: #e9bc45;
  margin-top: 0.315rem;
}
.vip_box .vip_l em {
  display: inline-block;
  vertical-align: top;
  padding-left: 0.45rem;
  background: url(../../assets/img/ic33.png) left center no-repeat;
  background-size: 0.36rem 0.3rem;
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
.vip_box .vip_l {
  float: right;
  font-size: 0.3rem;
  color: #ffffff;
  width: 2.68rem;
  height: 0.72rem;
  text-align: center;
  line-height: 0.72rem;
  border-radius: 0.72rem;
  background: #e9bc45;
  margin-top: 0.315rem;
}
.vip_box .vip_l em {
  display: inline-block;
  vertical-align: top;
  padding-left: 0.45rem;
  background: url(../../assets/img/ic33.png) left center no-repeat;
  background-size: 0.36rem 0.3rem;
}
.vip_box .box {
  background: #ffffff;
  box-shadow: 0 0 0.2rem rgba(0, 0, 0, 0.2);
  border-radius: 0.08rem;
  margin-top: 0.47rem;
  padding: 0.5rem 0 0.3rem 0.38rem;
}
.vip_box .box p {
  float: left;
  font-size: 0.3rem;
  color: #333333;
  height: 1.14rem;
  overflow: hidden;
  line-height: 1.14rem;
  width: 50%;
}
.vip_box .box p em {
  font-size: 0.51rem;
  color: #c01414;
  margin: 0 0.1rem;
}
.ic_nav {
  background: #ffffff;
  padding: 0.55rem 0.3rem 0.25rem;
}
.ic_nav2 {
  padding-top: 0;
}
.ic_nav li {
  float: left;
  width: 33.333%;
  text-align: center;
}
.ic_nav li a {
  display: block;
}
.ic_nav li i {
  display: block;
  width: 1rem;
  height: 1rem;
  border-radius: 50%;
  overflow: hidden;
  margin: 0 auto;
}
img {
  vertical-align: middle;
  width: 100%;
}
.ic_nav li p {
  line-height: 0.9rem;
  font-size: 0.3rem;
  color: #333333;
}
.set_list {
  background: #ffffff;
  margin-top: 0.3rem;
}
.set_list li:last-child {
  border: none;
}
.set_list li a {
  display: block;
  padding-right: 0.5rem;
  background: url(../../assets/img/arw3.png) right center no-repeat;
  background-size: 0.2rem 0.37rem;
  color: #333333;
}
.set_list li {
  line-height: 1.2rem;
  border-bottom: 1px #dddddd solid;
  padding: 0 0.4rem;
  font-size: 0.36rem;
  color: #333333;
}
.set_list li i {
  float: right;
  color: #999999;
}
.ic_nav3 {
  border-top: 1px #dddddd solid;
  padding: 0.36rem 0 0 0;
}
.ic_nav {
  background: #ffffff;
  // padding: 0.55rem 0.3rem 0.25rem;
}
.ic_nav3 li {
  width: 20%;
  float: left;
  text-align: center;
}
.ic_nav li a {
  display: block;
}
.ic_nav3 li i {
  width: 0.61rem;
  height: 0.51rem;
  border-radius: 0;
  overflow: hidden;
  margin: 0 auto;
}
img {
  vertical-align: middle;
  width: 100%;
  border: 0;
}
.user_order_num {
  display: inline-block;
  position: absolute;
  width: 0.35rem;
  height: 0.35rem;
  line-height: 0.35rem;
  text-align: center;
  border-radius: 50%;
  background: #ff9e01;
  font-size: 0.12rem;
  color: #fff;
  margin-top: -0.77rem;
  margin-left: 0.2rem;
}
.ic_nav3 li p {
  font-size: 0.26rem;
  line-height: 0.8rem;
  color: #333333;
}.set_list {
    background: #FFFFFF;
    margin-top: .3rem;
}.set_list li {
    line-height: 1.2rem;
    border-bottom: 1px #DDDDDD solid;
    padding: 0 .4rem;
    font-size: .36rem;
    color: #333333;
}.set_list li a {
    display: block;
    padding-right: .5rem;
    background: url(../../assets/img/arw3.png) right center no-repeat;
    background-size: .2rem .37rem;
    color: #333333;
}.set_list li b {
    display: inline-block;
    vertical-align: top;
    width: .41rem;
    height: .39rem;
    margin-right: .4rem;
    margin-top: .4rem;
        font-style: normal;
    font-weight: normal;
}.set_list li b img {
    vertical-align: top;
}
</style>
