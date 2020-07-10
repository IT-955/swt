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
            "https://oss.swt100.com/old_images/images/201911/1574661295885431366.png",
          name: "时令水果"
        },
        {
          pic:
            "https://oss.swt100.com/old_images/images/201911/1574661304884824117.png",
          name: "休闲食品"
        },
        {
          pic:
            "https://oss.swt100.com/old_images/images/201911/1574661365158504845.png",
          name: "茶叶饮品"
        },
        {
          pic:
            "https://oss.swt100.com/old_images/images/201911/1574661375626452090.png",
          name: "粮油调味"
        },
        {
          pic:
            "https://oss.swt100.com/old_images/images/201911/1574661385753583698.png",
          name: "菌菇干蔬"
        },
        {
          pic:
            "https://oss.swt100.com/old_images/images/202005/1590378147314792946.png",
          name: "优质蛋禽"
        },
        {
          pic:
            "https://oss.swt100.com/old_images/images/201912/1575273355625919971.png",
          name: "水产海味"
        },
        {
          pic:
            "https://oss.swt100.com/old_images/images/201912/1575273346827830301.png",
          name: "营养保健"
        },
        {
          pic:
            "https://oss.swt100.com/images/m_menu_icon/20200622/e357e4263e9029db57c23909f8b56c021850993d.png",
          name: "领劵中心"
        },
        {
          pic:
            "https://oss.swt100.com/images/m_menu_icon/20200623/1727243cbf4baa40ba97c1cb8e1aed9128179adf.png",
          name: "会员中心"
        },
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
  // margin-top: 0.7rem;
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