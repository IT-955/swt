<template>
  <div class="footer">
    <ul>
      <li
        v-for="(item, index) in dtlist"
        :key="index"
        @click="tab(index)"
        :class="active == index ? 'on' : ''"
      >
        <el-button type="primary" :icon="item.icon"></el-button>

        <p>{{ item.p }}</p>
      </li>
      <span class="tit">{{ spcarnum }}</span>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      dtlist: [
        {
          icon: "el-icon-house",
          p: "首页"
        },
        {
          icon: "el-icon-s-operation",
          p: "分类"
        },
        {
          icon: "el-icon-shopping-cart-1",
          p: "购物车"
        },
        {
          icon: "el-icon-user",
          p: "我的"
        }
      ],
      active: 0,
      spcarnum: this.$store.state.cart.cartList.length
    };
  },

  methods: {
    tab(index) {
      if (index == 0) {
        this.$router.push({ name: "home" });
        this.active = 0;
      } else if (index == 1) {
        this.$router.push("/list");
        this.active = 1;
      } else if (index == 3) {
        this.$router.push("/login");
        this.active = 3;
      } else if (index == 2) {
        this.$router.push("/spcar");
        this.active = 2;
      }
      this.active = index;
    }
    // updatasp() {
    //   const { cartList } = this.$store.state.cart;
    //   this.spcarnum = cartList.length;
    // }
  },
  created() {
    // this.updatasp();
    if (this.$route.name == "home") {
      this.active = 0;
    } else if (this.$route.name == "list" || this.$route.name == "Goodslist") {
      this.active = 1;
    } else if (this.$route.name == "login") {
      this.active = 3;
    } else if (this.$route.name == "spcar") {
      this.active = 2;
    }
  },
  updated() {
    // this.updatasp();
  }

  // computed: {
  //   spnum: {
  //     get() {
  //       return this.spcarnum;
  //     },
  //     set(val) {
  //       const { cartList } = this.$store.state.cart;
  //       this.spcarnum = cartList.length;
  //       console.log(val);
  //     }
  //   }
  // }
};
</script>

<style scoped lang="scss">
.footer {
  position: fixed !important;
  bottom: 0rem;
  left: 0;
  z-index: 1000;
  height: 8%;
  margin-top: 0rem;
  padding-top: 0;
  position: relative;
  background-color: #fff;
  width: 100%;
  ul {
    width: 100%;
    height: 100%;
    margin-top: 0;
    background: #fff;
    padding-left: 0;
    padding: 0;
    display: flex;
    justify-content: center;
    position: absolute;
    left: 0;
    top: 0;
    li {
      text-align: center;
      flex: 1;
      p {
        color: #aaaaaa;
        padding: 0;
        margin: 0;
      }
    }
    .tit {
      width: 0.3rem;
      height: 0.3rem;
      display: block;
      position: absolute;
      left: 5.5rem;
      top: 0;
      background-color: red;
      border-radius: 100%;
      color: white;
      text-align: center;
      font-weight: 900;
    }
  }
}
.on {
  .el-button--primary {
    color: #c01414;
    background-color: #fff;
    border: none;
  }
  p {
    color: #c01414 !important;
  }
}

.el-button--primary {
  color: #aaaaaa;
  background-color: #fff;
  border: none;
}
.el-button {
  font-size: 24px;
  padding-bottom: 0.1rem;
}
</style>
