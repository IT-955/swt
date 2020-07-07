<template>
  <div class="nav_box">
    <ul class="clearfix">
      <li v-for="(item,index) in list" :key="index">
        <a href>
          <i>
            <img :src="item.pic" />
          </i>
          <p>{{item.name}}</p>
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      list: [
        {
          pic:
            "https://oss.swt100.com/old_images/images/201911/1574661304884824117.png",
          name: "端午有礼"
        },
        {
          pic:
            "https://oss.swt100.com/old_images/images/201911/1574661304884824117.png",
          name: "时令水果"
        },
        {
          pic:
            "https://oss.swt100.com/old_images/images/201911/1574661304884824117.png",
          name: "休闲食品"
        },
        {
          pic:
            "https://oss.swt100.com/old_images/images/201911/1574661304884824117.png",
          name: "茶叶饮品"
        },
        {
          pic:
            "https://oss.swt100.com/old_images/images/201911/1574661304884824117.png",
          name: "粮油调味"
        },
        {
          pic:
            "https://oss.swt100.com/old_images/images/201911/1574661304884824117.png",
          name: "菌菇干蔬"
        },
        {
          pic:
            "https://oss.swt100.com/old_images/images/201911/1574661304884824117.png",
          name: "优质蛋禽"
        },
        {
          pic:
            "https://oss.swt100.com/old_images/images/201911/1574661304884824117.png",
          name: "水产海味"
        },
        {
          pic:
            "https://oss.swt100.com/old_images/images/201911/1574661304884824117.png",
          name: "营养保健"
        },
        {
          pic:
            "https://oss.swt100.com/old_images/images/201911/1574661304884824117.png",
          name: "嗨转618"
        }
      ]
    };
  },

  components: {},

  methods: {}
};
</script>

<style scoped lang="scss">
.nav_box {
  background: #ffffff;
  padding: 0.2rem 0;
  margin-top: 0.7rem;
}
.nav_box li {
  float: left;
  width: 20%;
  text-align: center;
  margin-top: 0.2rem;
}
.nav_box li {
  float: left;
  width: 20%;
  text-align: center;
  margin-top: 0.2rem;
}
.nav_box li i {
  display: block;
  width: 1.04rem;
  height: 1.04rem;
  margin: 0 auto;
}
.nav_box li p {
  font-size: 0.26rem;
  color: #333333;
  line-height: 0.64rem;
}
img {
  width: 100%;
  vertical-align: middle;
}
</style>