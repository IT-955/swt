<template>
  <div>
    <div class="header">
      <a class="back" @click="back"></a>
      <ul class="topnav">
        <li
          v-for="(item, index) in tblist"
          :key="index"
          :class="active == index ? 'on' : ''"
          @click="tab('#anchor-' + index)"
        >{{ item }}</li>
      </ul>
      <a class="share" @click="drawer = true"></a>
      <el-drawer
        :visible.sync="drawer"
        :before-close="handleClose"
        direction="btt"
        :modal="true"
        :modal-append-to-body="false"
        :wrapperClosable="true"
        size="19%"
      >
        <h2>分享到</h2>
        <div class="sharebox">
          <img v-for="(item, index) in iconlist" :key="index" :src="item" class="icon" />
        </div>
      </el-drawer>
    </div>
    <div class="main">
      <!-- 轮播 -->
      <div class="block">
        <span class="demonstration"></span>
        <el-carousel
          trigger="click"
          height="8.4rem"
          arrow="never"
          indicator-position="none"
          setActiveItem
        >
          <el-carousel-item v-for="item in swpic" :key="item">
            <img :src="item" />
          </el-carousel-item>
        </el-carousel>
      </div>
      <!-- 信息 -->
      <div class="probox">
        <p>四川攀枝花 大贵妃芒 5斤/8斤装</p>
        <h4>
          ￥45.00
          <em>￥62.00</em>
        </h4>
        <ul>
          <li>快递：免运费</li>
          <li>库存：2000</li>
          <li>销量：0</li>
        </ul>
      </div>
      <!-- 优惠 -->
      <div class="probox2">
        <div class="yh">
          <span>优惠:</span>
          <div class="yhlist">
            <dl>
              <dt>积分</dt>
              <dd>购买可得52积分</dd>
            </dl>
          </div>
        </div>
        <ul>
          <li>正品保证</li>
          <li>产地直销</li>
          <li>售后服务</li>
        </ul>
      </div>
      <!-- 规格 -->
      <div class="sl" @click="drawer2 = true">
        <p>选择：种类 规格</p>
      </div>
      <!-- 规格选择 -->
      <el-drawer
        :visible.sync="drawer2"
        :before-close="handleClose"
        direction="btt"
        :modal="true"
        :modal-append-to-body="false"
        :wrapperClosable="true"
        size="76%"
      >
        <img class="goodsimg" src="../../assets/List/swp1.jpeg" />
        <div class="gdsmsg">
          <span>
            价格：
            <i>￥45.00</i>
          </span>
          <span>
            库存：
            <i>1000件</i>
          </span>
        </div>
        <div class="bd"></div>
        <ul class="gdscon">
          <li class="gcbox">
            <div class="title">规格分类</div>
            <div class="item1">
              <a>5斤装（6-8个）</a>
              <a>8斤装（9-13个）</a>
            </div>
          </li>
          <li>
            <div class="title2">购买数量</div>
            <div class="item2">
              <span class="gdsnum">
                <button type="button" class="cut"></button>
                <input type="number" class="num" value="1" min="1" />
                <button type="button" class="add"></button>
              </span>
            </div>
          </li>
        </ul>
        <div class="confirm">
          <input type="button" value="确认" @click="drawer2 = false" />
        </div>
      </el-drawer>
      <!-- 评论 -->
      <div class="pinglun">
        <div class="gdscomm">
          <a>商品评论(0)</a>
        </div>
      </div>

      <div class="gdsdetail">
        <p>
          商品·
          <em>详情</em>
        </p>
      </div>

      <div class="con">
        <p>
          <img src="../../assets/List/374c7391ffb9ca79242f2f7de351f67038220440.jpg" />
        </p>
      </div>
    </div>
    <!-- 脚部 -->
    <div class="foot">
      <ul>
        <li>
          <a>
            <i></i>
            <p>客服</p>
          </a>
        </li>
        <li>
          <a>
            <i></i>
            <p>收藏</p>
          </a>
        </li>
        <li @click="jumpcart">
          <el-badge :value="spcarnum" class="item">
            <a>
              <i></i>
              <p>购物车</p>
            </a>
          </el-badge>
        </li>
      </ul>
      <div class="fr">
        <a @click="addcart">加入购物车</a>
        <a>立刻购买</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tblist: ["商品", "评论", "详情"],
      gdsdata: [
        {
          id: this.$store.state.length + 1,
          name: "海南海口 海南椰青 多规格多选择",
          imgurl:
            "https://oss.swt100.com/old_images/images/201908/thumb_img/301_thumb_G_1565858447469.jpg",
          price: 35.0,
          size: "2个装",
          qty: 10,
          gdsnum: 1,
          singtrue: false
        }
      ],
      active: 0,
      drawer: false,
      drawer2: false,
      direction: "rtl",
      spcarnum: 0,
      iconlist: [
        require("../../assets/List/weibo.png"),
        require("../../assets/List/weixin.png"),
        require("../../assets/List/qq.png"),
        require("../../assets/List/qqzone.png")
      ],
      current: 0,
      swpic: [
        require("../../assets/List/swp1.jpeg"),
        require("../../assets/List/swp2.jpeg"),
        require("../../assets/List/swp3.jpeg"),
        require("../../assets/List/swp4.jpeg")
      ]
    };
  },

  components: {},
  created() {
    const { cartList } = this.$store.state.cart;
    this.spcarnum = cartList.length;
  },
  updated() {
    const { cartList } = this.$store.state.cart;
    this.spcarnum = cartList.length;
  },
  methods: {
    back() {
      this.$router.back();
    },
    tab(index) {
      this.active = index.slice(8, 9);
      console.log(this.$el.querySelector(index));
    },
    handleClose(done) {
      done();
    },
    onChange(index) {
      this.current = index;
    },
    jumpcart() {
      this.$router.push("/spcar");
    },
    addcart() {
      this.$store.commit("addItem", this.gdsdata[0]);
      const { cartList } = this.$store.state.cart;
      this.spcarnum = cartList.length;
    }
  }
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
  h2 {
    font-weight: 400;
    color: #c01414;
    text-align: center;
    font-size: 0.38rem;
    margin-top: -1rem;
  }
  .sharebox {
    margin-left: 0.4rem;
    margin-top: 0.15rem;
    font-family: "socialshare" !important;
    font-size: 16px;
    font-style: normal;
    -webkit-font-smoothing: antialiased;
    -webkit-text-stroke-width: 0.2px;
    -moz-osx-font-smoothing: graysca;
    box-sizing: content-box;
    display: flex;
    justify-content: center;
    z-index: 999;
    img {
      width: 1.4rem;
      margin: 0 0.2rem;
    }
  }
  .back {
    text-decoration: none;
    cursor: pointer;
    width: 0.4rem;
    height: 1rem;
    background: url("../../assets/List/arw2.png") center no-repeat;
    background-size: 0.2rem 0.36rem;
    position: absolute;
    left: 0.3rem;
    top: 0;
  }
  .topnav {
    width: 4.5rem;
    position: absolute;
    left: 50%;
    margin-left: -2.25rem;
    line-height: 1rem;
    li {
      float: left;
      width: 1.5rem;
      text-align: center;
      font-size: 0.36rem;
      color: #e1a7a7;
    }
    .on {
      color: #ffffff;
    }
  }
  .share {
    width: 0.66rem;
    height: 0.66rem;
    background: url("../../assets/List/ic17.png") center no-repeat;
    background-size: 0.36rem;
    position: absolute;
    right: 0.25rem;
    top: 0.17rem;
  }
}
.main {
  .probox {
    background: #ffffff;
    padding: 0.3rem 0.4rem 0.25rem;
    height: 2.6rem;
    p {
      font-size: 0.4rem;
      color: #333333;
      line-height: 0.6rem;
      padding-bottom: 0.3rem;
      border-bottom: 1px #eeeeee solid;
    }
    h4 {
      font-size: 0.48rem;
      color: #c01414;
      line-height: 0.58rem;
      padding: 0.2rem 0;
      em {
        text-decoration: line-through;
        font-size: 0.36rem;
        color: #999999;
        display: inline-block;
        margin-left: 0.3rem;
        vertical-align: top;
      }
    }
    ul {
      padding-top: 0.25rem;
      li {
        float: left;
        width: 33.333%;
        font-size: 0.24rem;
        color: #777777;
        line-height: 0.48rem;
      }
    }
  }
  .probox2 {
    background: #ffffff;
    margin-top: 0.3rem;
    height: 1.5rem;
    padding: 0.3rem 0.4rem 0;
    .yh {
      display: block;
      padding-right: 0.4rem;
      span {
        float: left;
        line-height: 0.59rem;
        font-size: 0.36rem;
        color: #333333;
        width: 1.18rem;
      }
      .yhlist {
        float: left;
        width: 5.88rem;
      }
      dt {
        float: left;
        font-size: 0.22rem;
        color: #c01414;
        width: 1.47rem;
        height: 0.33rem;
        border-radius: 0.33rem;
        background: #fff6f6;
        line-height: 0.33rem;
        text-align: center;
        margin: 0.13rem 0.15rem 0.13rem 0;
      }
      dd {
        float: left;
        width: 2.05rem;
        height: 0.37rem;
        background: url("../../assets/List/bg1.png") center no-repeat;
        background-size: cover;
        text-align: center;
        font-size: 0.22rem;
        color: #c01414;
        line-height: 0.37rem;
        margin: 0.11rem 0 0.11rem 0.08rem;
      }
    }
    ul {
      border-top: 1px #eeeeee solid;
      margin-top: 0.3rem;
      li {
        float: left;
        font-size: 0.28rem;
        color: #787878;
        line-height: 1rem;
        padding-left: 0.45rem;
        background: left center no-repeat;
        background-size: 0.33rem;
        margin-right: 0.6rem;
      }
      li:nth-child(1) {
        background-image: url("../../assets/List/ic18.png");
      }
      li:nth-child(2) {
        background-image: url("../../assets/List/ic19.png");
      }
      li:nth-child(3) {
        background-image: url("../../assets/List/ic20.png");
      }
    }
  }
  .sl {
    height: 1rem;
    padding: 0 0.4rem;
    background: #ffffff;
    font-size: 0.36rem;
    line-height: 1.2rem;
    margin-top: 0.3rem;
    p {
      padding-right: 0.3rem;
      background: url("../../assets/List/arw3.png") right center no-repeat;
      background-size: 0.2rem 0.37rem;
      color: #333333;
    }
  }
  .gdsmsg {
    position: absolute;
    left: 2.95rem;
    top: 0.6rem;
    float: left;
    overflow: hidden;
    width: 50%;
    span {
      display: block;
      width: 100%;
      overflow: hidden;
      color: #666;
      font-size: 14px;
      line-height: 150%;
      margin-bottom: 5px;
      i {
        font-style: normal;
      }
    }
  }
  .goodsimg {
    width: 125px;
    border: #e5e5e5 1px solid;
    border-radius: 4px;
    padding: 5px;
    background: #fff;
    position: absolute;
    top: 0.4rem;
    left: 0.3rem;
    z-index: 9999;
  }
  .bd {
    height: 1px;
    border-bottom: 1px solid #ccc;
    width: 100%;
    margin-top: 2rem;
  }
  .gdscon {
    margin-left: 0.3rem;
    width: 100%;
    overflow: hidden;
    .gcbox {
      overflow: hidden;
      width: 100%;
      border-bottom: 1px solid #eeee;
      .title {
        width: 100%;
        font-size: 16px;
        line-height: 30px;
        color: #666;
        margin-top: 5px;
      }
      .item1 {
        overflow: hidden;
        padding-bottom: 5px;
        a {
          padding-left: 10px;
          padding-right: 10px;
          border: 1px solid #ccc;
          line-height: 30px;
          display: inline-block;
          -moz-border-radius: 4px;
          -webkit-border-radius: 4px;
          border-radius: 4px;
          margin-right: 5px;
          margin-bottom: 10px;
        }
        a:hover {
          background: #dd2726;
          color: #fff;
          border: 1px solid #dd2726;
          -moz-border-radius: 5px;
          -webkit-border-radius: 5px;
          border-radius: 5px;
        }
      }
    }
    li {
      .gdsnum {
        border: 1px solid #ddd9da;
        overflow: hidden;
        height: 30px;
        display: block;
        margin-top: 10px;
        float: left;
        .cut {
          display: inline-block;
          background: none;
          font-size: 24px;
          line-height: 30px;
          border: 0;
          float: left;
          height: 30px;
          color: #f8849c;
          border-right: 1px solid #ddd9da;
          text-indent: -9999px;
          background: url("../../assets/List/shop-cart.png") no-repeat 6px -25px;
          background-size: 60px;
          padding: 0 0.4rem 0 0.3rem;
        }
        .num {
          display: inline-block;
          border: 0;
          width: 40px;
          height: 30px;
          float: left;
          text-align: center;
          font-size: 12px;
          line-height: 30px;
          color: #666;
          font-size: 20px;
          text-align: center;
        }
        .add {
          display: inline-block;
          background: none;
          border: 0;
          border-left: 1px solid #ddd9da;
          float: left;
          height: 30px;
          font-size: 24px;
          line-height: 30px;
          color: #f8849c;
          background: url("../../assets/List/shop-cart.png") no-repeat -23px -25px;
          background-size: 60px;
          text-indent: -9999px;
          padding: 0 0.4rem 0 0.3rem;
        }
      }
    }
  }
  .confirm {
    width: 100%;
    background: #e71f19;
    width: 100%;
    text-align: center;
    position: absolute;
    bottom: 0;
    input {
      background: #e71f19;
      text-align: center;
      height: 45px;
      line-height: 45px;
      font-size: 16px;
      color: #fff;
      width: 100%;
    }
  }
  .pinglun {
    margin-top: 0.3rem;
    .gdscomm {
      padding: 0 0.4rem;
      background: #ffffff;
      a {
        display: block;
        font-size: 0.36rem;
        color: #333333;
        line-height: 1.2rem;
        padding-right: 0.3rem;
        background: url("../../assets/List/arw3.png") right center no-repeat;
        background-size: 0.2rem 0.37rem;
      }
    }
  }
  .gdsdetail {
    margin-top: 0.3rem;
    background: #ffffff;
    text-align: center;
    padding: 0.22rem 0 0.25rem;
    position: relative;
    p {
      font-size: 0.36rem;
      color: #333333;
      line-height: 0.44rem;
      em {
        display: inline-block;
        vertical-align: top;
        color: #c01414;
      }
    }
  }
  .con {
    margin-top: 0.1rem;
    padding: 0.1rem 0.25rem 2.3rem;
    p {
      img {
        max-width: 100%;
        vertical-align: middle;
      }
    }
  }
}
.foot {
  height: 1.2rem;
  position: fixed;
  z-index: 2;
  left: 0;
  bottom: 0;
  width: 100%;
  background: url("../../assets/List/f_bg.jpg") repeat-x;
  background-size: 0.05rem 1.4rem;
  ul {
    width: 40%;
    height: 1.2rem;
    float: left;
    li {
      width: 33.333%;
      float: left;
      text-align: center;
      height: 100%;
      padding-top: 0.25rem;
      a {
        height: 1.2rem;
        padding-top: 0.25rem;
        i {
          text-align: center;
          display: block;
          width: 0.36rem;
          height: 0.36rem;
          margin: auto;
          background-size: 0.36rem;
        }
        p {
          line-height: 0.47rem;
          font-size: 0.24rem;
          color: #555555;
        }
      }
    }
    li:nth-child(1) {
      i {
        background-image: url("../../assets/List/custome.png");
      }
    }
    li:nth-child(2) {
      i {
        background-image: url("../../assets/List/ic21.png");
      }
    }
    li:nth-child(3) {
      i {
        background-image: url("../../assets/List/ic14.png");
      }
    }
  }
  .fr {
    float: right;
    width: 60%;
    a {
      display: block;
      float: left;
      width: 50%;
      height: 1.2rem;
      text-align: center;
      line-height: 1.2rem;
      font-size: 0.36rem;
      color: #ffffff;
      background: #e9bc45;
      // position: absolute;
      // left: 0;
      // top: 0;
    }
    a:last-child {
      background: #c01414;
    }
  }
}
</style>
