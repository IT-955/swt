<template>
  <div class="nav">
    <ul>
      <li
        v-for="(item,index) in listclass"
        :key="index"
        :class="active==index?'on':''"
        @click="tab(index)"
      >
        <a>{{item}}</a>
      </li>
    </ul>
    <div class="gdlist">
      <ul>
        <li v-for="(item,index) in gdlist" :key="index" @click="jumplist()">
          <img :src="item.pic" />
          <p>{{item.gdname}}</p>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      listclass: [
        "品牌分类",
        "时令水果",
        "休闲食品",
        "茶叶饮品",
        "粮油食品",
        "蘑菇杆菌",
        "优质蛋禽",
        "水产海味",
        "营养保健"
      ],
      active: 0,
      gdlist: [
        {
          pic:
            "https://oss.swt100.com/old_images/data/categorylogo/1559806374868509149.jpg",
          gdname: "芒果"
        },
        {
          pic:
            "https://oss.swt100.com/old_images/data/categorylogo/1559702681363814348.jpg",
          gdname: "椰子"
        },
        {
          pic:
            "https://oss.swt100.com/images/categorylogo/20200608/c3aa911fd774e81ae05ec274b5f3e2ba191cfaf7.jpg",
          gdname: "杨梅"
        }
      ]
    };
  },

  components: {},

  methods: {
    tab(index) {
      this.active = index;
      // console.log(index);
    },
    jumplist() {
      this.$router.push("/Goodslist");
      // console.log("12");
    }
  }
};
</script>

<style scoped lang="scss">
.nav {
  width: 100%;
  height: 100%;
  ul {
    float: left;
    height: 13rem;
    width: 2rem;
    background: #ffffff;
    overflow-y: auto;
    margin-top: 0;
    padding-left: 0px;
    li {
      line-height: 0.99rem;
      border-bottom: 1px #f6f6f6 solid;
      text-align: center;
      a {
        display: block;
        color: #444444;
        font-size: 0.3rem;
      }
    }
    .on {
      background: #f6f6f6;
      a {
        color: #c01414;
      }
    }
  }
  .gdlist {
    width: 6.4rem;
    float: left;
    height: 100%;
    overflow: hidden;
    background-color: #eeeeee;
    ul {
      background: #eeeeee;
      width: 100%;
      padding: 0.4rem 0.2rem 0.2rem 0.2rem;
      height: 100%;
      li {
        float: left;
        width: 2rem;
        height: 2.6rem;
        background-color: #fff;
      }
    }
    img {
      vertical-align: middle;
      width: 80%;
      margin-top: 0.18rem;
    }
    p {
      text-align: center;
      font-size: 0.26rem;
      color: #333333;
      line-height: 0.6rem;
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
      margin: 0;
    }
  }
}
</style>