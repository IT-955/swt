<template>
  <div class="index_1" style="background: none;padding: 0">
    <div class="p_tit" style="margin-bottom: 0.2rem;">
      <p>
        限时·
        <em>秒杀</em>
      </p>
      <span>SECKILL</span>
      <a href>更多</a>
    </div>
    <div class="seckill_con">
      <div class="clearfix">
        <div
          class="tit"
          style="margin-top: .2rem;
                     width: 1.6rem;
                     height: .5rem;
                     margin-left: 0.2rem;"
        >
          <img src="../../assets/img/t1.jpg" />
        </div>
        <div
          class="timebox clearfix"
          style="margin-top: .2rem;
                     line-height: .4rem;
                     font-size: .3rem;
                     margin-right: 0.2rem;"
        >
          <span style="width:1.5rem">距离结束</span>
          <div class="shijian" id="seckill_time">00天02:41:42</div>
        </div>
      </div>
      <ul class="pro_list1 clearfix">
        <li style="padding-bottom: 0.2rem;" v-for="(item,index) in pro_list1" :key="index">
          <a href>
            <div class="pic">
              <img :src="item.pic" />
            </div>
            <p
              class="dot"
              style="overflow: hidden; text-overflow: ellipsis; white-space: normal; overflow-wrap: break-word;"
            >{{item.dot}}</p>
            <span>
              <em style="margin-left: 0.1rem;font-size: 0.38rem;">{{item.pirce}}</em>
            </span>
            <span>
              <em class="unset-price">{{item.pirces}}</em>
            </span>
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      pro_list1: [
        {
          pic:
            "https://oss.swt100.com/old_images/images/201909/thumb_img/492_thumb_G_1568617776186.jpg",
          dot: "浙江 四明山土蜂蜜 三个月...",
          pirce: "¥86.00",
          prices: "¥117.60"
        },
        {
          pic:
            "https://oss.swt100.com/old_images/images/202005/thumb_img/903_thumb_G_1589855114044.jpg",
          dot: "宁夏 杞果果 枸杞原浆 女...",
          pirce: "¥138.00",
          pirces: "¥189.60"
        },
        {
          pic:
            "https://oss.swt100.com/old_images/images/202005/thumb_img/973_thumb_G_1590116407094.jpg",
          dot: "四川巴中 腱子牛肉 200...",
          pirce: "¥58.00",
          pirces: "¥78.00"
        }
      ]
    };
  },

  components: {},

  methods: {}
};
</script>

<style scoped lang="scss">
.index_1 {
  background: #ffffff;
  margin-top: 0.2rem;
  padding: 0.4rem 0.2rem 0.4rem;
}
.p_tit {
  background: #ffffff;
  text-align: center;
  padding: 0.22rem 0 0.25rem;
  position: relative;
  margin-top: 0.2rem;
}
.p_tit p {
  font-size: 0.36rem;
  color: #333333;
  line-height: 0.44rem;
}
.p_tit p em {
  display: inline-block;
  vertical-align: top;
  color: #c01414;
}
.p_tit span {
  display: block;
  text-transform: uppercase;
  font-size: 0.22rem;
  color: #666666;
  line-height: 0.28rem;
}
.p_tit a {
  position: absolute;
  right: 0.4rem;
  top: 0;
  line-height: 1.19rem;
  padding-right: 0.26rem;
  background: url(../../assets/img/arw1.png) right center no-repeat;
  background-size: 0.14rem 0.24rem;
  font-size: 0.24rem;
  color: #333333;
}
//
.seckill_con {
  background: #ffffff;
  margin: 0.2rem 0.2rem 0 0.2rem;
}
.index_1 .tit {
  float: left;
  width: 1.41rem;
  height: 0.33rem;
  overflow: hidden;
  margin-top: 0.02rem;
}
img {
  vertical-align: middle;
  width: 100%;
}
.timebox {
  float: right;
  border: 1px #c01414 solid;
  overflow: hidden;
  border-radius: 0.08rem;
  line-height: 0.35rem;
  font-size: 0.24rem;
}
.timebox span {
  float: left;
  width: 1rem;
  text-align: center;
  color: #ffffff;
  background: #c01414;
}
.timebox .shijian {
  float: left;
  padding: 0 0.05rem;
  color: #c01414;
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
script {
  display: none;
}
.pro_list1 li {
  float: left;
  width: 2.417rem;
  margin-top: 0.4rem;
  margin-right: 0.25rem;
}
.pro_list1 li .pic {
  width: 2.5rem;
  height: 2.56rem;
  overflow: hidden;
  border: 1px #e9e9e9 solid;
  border-radius: 0.08rem;
}
.pro_list1 li p {
  line-height: 0.55rem;
  overflow: hidden;
  font-size: 0.24rem;
  color: #333333;
  margin-top: 0.1rem;
}
.pro_list1 li span {
  display: block;
  font-size: 0.18rem;
  color: #c01414;
  height: 0.4rem;
  line-height: 0.4rem;
  overflow: hidden;
}
.pro_list1 li span em.unset-price {
  color: #999999;
  text-decoration: line-through;
  margin-left: 0.1rem;
}
</style>