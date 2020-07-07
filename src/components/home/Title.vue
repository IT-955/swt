<template>
  <div>
    <!-- <div class="p_tit teaser is-visible"> -->
      <div v-for="(item,index) in title" :key="index">
        <p>
          {{item.title1}}
          <em>{{item.title2}}</em>
        </p>
        <span>{{item.span}}</span>
        <a href>{{item.more}}</a>
      <!-- </div> -->
    </div>

    
  </div>
</template>

<script>
export default {
  data() {
    return {
      title: [
        {
          title1: "限时·",
          title2: "秒杀",
          span: "SECKILL",
          more: "更多"
        },
        {
          title1: "精品·",
          title2: "礼盒",
          span: "GIFTBOX",
          more: "更多"
        },
        {
          title1: "火爆·",
          title2: "拼单",
          span: "ORDERS",
          more: "更多"
        },
        {
          title1: "为您·",
          title2: "推荐",
          span: "RECOMMEND",
          more: "更多"
        }
      ]
    };
  },

  components: {},

  methods: {}
};
</script>

<style scoped lang="scss">
.teaser.is-visible {
  opacity: 1;
  transform: translate3d(0, 0, 0);
}
.p_tit {
  background: #ffffff;
  text-align: center;
  padding: 0.22rem 0 0.25rem;
  position: relative;
  margin-top: 0.2rem;
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
.p_tit p em {
  display: inline-block;
  vertical-align: top;
  color: #c01414;
}
.p_tit p {
  font-size: 0.36rem;
  color: #333333;
  line-height: 0.44rem;
}
</style>