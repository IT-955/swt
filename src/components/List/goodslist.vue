<template>
  <div>
    <Lheader />
    <ul class="sort">
      <li
        v-for="(item,index) in sortlist"
        :key="index"
        @click="tab(index)"
        :class="active==index?'on':''"
      >
        <a>
          {{ item }}
          <div class="arw">
            <b :class="active==index&&active2==false?'red':''"></b>
            <b :class="active==index&&active2==true?'red2':''"></b>
          </div>
        </a>
      </li>
    </ul>
    <GLmain />
    <Footer />
  </div>
</template>

<script>
import Lheader from "./Lheader";
import GLmain from "./GLmain";
import Footer from "../footer";
export default {
  data() {
    return {
      sortlist: ["综合", "价格", "新品", "销量"],
      active: 0,
      active2: false
    };
  },

  components: {
    Lheader,
    GLmain,
    Footer
  },
  methods: {
    tab(index) {
      console.log(123);
      if (this.active == index) {
        this.active2 = !this.active2;
      } else if (this.active != index) {
        this.active = index;
        this.active2 = false;
      }
    }
  }
};
</script>

<style scoped lang="scss">
.sort {
  background: #fff;
  li {
    float: left;
    width: 25%;
    text-align: center;
    a {
      background-color: #fff;
      display: block;
      font-size: 0.36rem;
      color: #333333;
      line-height: 1.18rem;
      border-bottom: 0.02rem #fff solid;
      .arw {
        display: inline-block;
        vertical-align: top;
        margin-top: 0.42rem;
        margin-left: 0.2rem;
        b {
          display: block;
          width: 0;
          height: 0;
          border-left: 0.08rem solid transparent;
          border-right: 0.08rem solid transparent;
          border-bottom: 0.12rem solid #cccccc;
          margin: 0.03rem 0;
        }
        b:last-child {
          border-left: 0.08rem solid transparent;
          border-right: 0.08rem solid transparent;
          border-top: 0.12rem solid #cccccc;
          border-bottom: none;
        }
        .red {
          border-bottom-color: #c01414 !important;
        }
        .red2 {
          border-top: 0.12rem solid #c01414 !important;
        }
      }
    }
  }
  li:first-child {
    .arw {
      display: none;
    }
  }
}
.on {
  a {
    color: #c01414 !important;
    border-bottom: 0.02rem #c01414 solid !important;
  }
}
</style>