<template>
  <div>
    <div class="header">
      <div class="htit">购物车</div>
      <a @click="edit"></a>
    </div>
    <div class="main">
      <form>
        <div class="table">
          <div class="cartlist">
            <div class="top">
              <div class="clearfix" v-show="!editmode">
                <input type="checkbox" :checked="alltrue" v-model="checksinge" />
                <a>
                  <p>商家自营</p>
                </a>
              </div>
            </div>
            <ul class="spcarlist">
              <li class="clearfix" v-for="(item, index) in cartList" :key="item.id">
                <input type="checkbox" v-model="item.singtrue" />
                <a>
                  <img
                    src="https://oss.swt100.com/images/goods/thumb_img/85e3c4f03014713175f0ddbc9256e3714e7e666d.jpeg"
                    alt
                  />
                </a>
                <div class="fr">
                  <p>{{ item.name }}</p>
                  <h4>规格分类:{{ item.size }}</h4>
                  <div class="price">￥{{ item.price }}</div>
                  <input class="fr2" type="button" value="+" @click="addgdsnum(index)" />
                  <input class="fr2" type="text" :value="item.gdsnum" />
                  <input class="fr2" type="button" value="-" @click="cutgdsnum(index)" />
                </div>
              </li>
            </ul>
          </div>
          <a class="goon">
            <span @click="jumplist">继续添加商品</span>
          </a>
          <div class="allprice">
            <input type="checkbox" class="all" id="all" v-model="checksinge" />
            <label for="all">全选</label>
            <div class="s1">
              <div class="fr" v-show="!editmode">
                不含运费 合计
                <span class="allp">{{ totalprice.toFixed(2) }}</span>
              </div>
            </div>
            <input type="button" value="结算" v-show="!editmode" class="submit" />
            <input type="button" value="删除" @click="del()" v-show="editmode" class="submit" />
          </div>
        </div>
      </form>
    </div>
    <Footer />
  </div>
</template>

<script>
import Footer from "../footer";
export default {
  data() {
    return {
      num: 1,
      cartList: [],
      alltrue: false,
      total: 0,
      editmode: false
    };
  },

  components: {
    Footer
  },

  methods: {
    edit() {
      this.editmode = !this.editmode;
    },
    del() {
      let ab = this.cartList.filter(item => !item.singtrue);
      this.cartList = ab;
      this.$store.commit("removeItem");
    },
    // numchange(value) {
    //   // console.log(value)
    // // this.cartList[idx*1-1].price*now;
    // // this.$nextTick(()=>{
    // //   console.log(idx,now)
    // // })
    // },
    jumplist() {
      this.$router.push("/list");
    },
    addgdsnum(idx) {
      if (this.cartList[idx].gdsnum < this.cartList[idx].qty)
        this.cartList[idx].gdsnum++;
    },
    cutgdsnum(idx) {
      this.cartList[idx].gdsnum;
      if (this.cartList[idx].gdsnum > 1) {
        this.cartList[idx].gdsnum--;
      }
    }
  },
  computed: {
    checksinge: {
      get() {
        let istrue = this.cartList.every(item => item.singtrue);
        return istrue;
      },
      set(val) {
        this.cartList.forEach(item => {
          item.singtrue = val;
        });
        // console.log(val);
      }
    },
    totalprice() {
      let sgtrue = this.cartList.filter(item => item.singtrue);
      let sgtrue2 = sgtrue.map(item => item.price);
      let sum = 0;
      sgtrue2.forEach((item, index) => {
        return (sum += item * this.cartList[index].gdsnum);
      });
      // console.log(this.cartList[0].gdsnum)
      return sum;
    }
  },

  created() {
    this.cartList.push.apply(this.cartList, this.$store.state.cart.cartList);
    // this.total = this.totalprice;
    //  this.total= this.$store.getters.allprice
  }
  // updated(){
  // this.total= this.totalprice
  // }
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
  .htit {
    text-align: center;
    line-height: 1rem;
    font-size: 0.4rem;
    color: #ffffff;
  }
  a {
    width: 0.5rem;
    height: 0.5rem;
    position: absolute;
    right: 0.2rem;
    top: 0.25rem;
    background: url("../../assets/List/ic22.png") center no-repeat;
    background-size: 0.36rem;
  }
}
.main {
  .table {
    background: #ffffff;
    .cartlist {
      .top {
        border-bottom: 1px #eeeeee solid;
        padding: 0 0.3rem;
        line-height: 1.19rem;
        a {
          float: right;
          width: 7rem;
          padding-right: 0.3rem;
          background: url("../../assets/List/arw3.png") right center no-repeat;
          background-size: 0.2rem 0.37rem;
          font-size: 0.36rem;
          color: #333333;
          p {
            padding-left: 0.56rem;
            background: url("../../assets/List/ic23.png") left center no-repeat;
            background-size: 0.37rem 0.34rem;
          }
        }
      }
      .spcarlist {
        li {
          margin-top: 0.3rem;
          border-bottom: 1px #eeeeee solid;
          padding: 0.4rem 0.3rem;
          input {
            float: left;
          }
          a {
            float: left;
            width: 2rem;
            height: 2rem;
            overflow: hidden;
            border: 1px #dddddd solid;
            border-radius: 0.08rem;
            margin-left: 0.3rem;
            img {
              max-width: 100%;
              vertical-align: middle;
            }
          }
          .fr {
            width: 4.7rem;
            float: right;
            p {
              font-size: 0.3rem;
              line-height: 0.44rem;
              height: 0.88rem;
              overflow: hidden;
            }
            h4 {
              font-size: 0.26rem;
              color: #999999;
              line-height: 0.6rem;
            }
            .price {
              line-height: 0.5rem;
              font-size: 0.36rem;
              color: #c01414;
              display: block;
              float: left;
            }
          }
        }
      }
    }
    .goon {
      display: block;
      font-size: 0.36rem;
      color: #333333;
      line-height: 1.18rem;
      text-align: center;
      padding-bottom: 1.5rem;
      span {
        display: inline-block;
        vertical-align: top;
        padding-right: 0.5rem;
        background: url("../../assets/List/arw3.png") right center no-repeat;
        background-size: 0.2rem 0.37rem;
      }
    }
    .allprice {
      background: url("../../assets/List/bg2.jpg") repeat-x;
      background-size: 0.05rem 1.2rem;
      padding: 0 0 0 0.3rem;
      height: 1.2rem;
      position: fixed;
      z-index: 8;
      left: 0;
      bottom: 1.3rem;
      width: 100%;
      border-bottom: 0.07rem solid #ccc;
      .all {
        margin-top: 0.45rem;
        float: left;
      }
      label {
        float: left;
        display: block;
        width: 0.8rem;
        margin-top: 0.4rem;
        font-size: 0.3rem;
        color: #333333;
        margin-left: 0.25rem;
      }
      .s1 {
        float: left;
        font-size: 0.3rem;
        color: #999999;
        line-height: 1.2rem;
        .fr {
          float: right;
          margin-left: 0.2rem;
        }
        .allp {
          color: #c01414;
          display: inline-block;
          vertical-align: top;
          font-size: 0.4rem;
        }
      }
      .submit {
        float: right;
        width: 2.2rem;
        height: 1.2rem;
        background: #c01414;
        color: #ffffff;
        font-size: 0.36rem;
        text-align: center;
      }
    }
  }
}
.fr2 {
  float: right !important;
  text-align: center;
}
.clearfix::after {
  content: ".";
  display: block;
  height: 0;
  clear: both;
  visibility: hidden;
  line-height: 0;
  font-size: 0;
}
input {
  width: 0.4rem;
  height: 0.4rem;
}
</style>
