<template>
  <div>
    <ul>
      <li>
        <el-row>
          <el-col :span="8" v-for="(o, index) in dtlist" :key="index" :offset="index > 0 ? 2 : 0">
            <el-card :body-style="{ padding: '0px' }">
              <img :src="o.pic" class="image" @click="godetail(index)" />
              <div style="padding: 14px;" @click="godetail(index)">
                <span>{{ o.gdname}}</span>
                <div class="bottom clearfix">
                  <p>{{o.price}}</p>
                  <i>￥{{o.oldprice}}</i>
                </div>
              </div>
            </el-card>
          </el-col>
        </el-row>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      dtlist: [
        {
          gdname: "四川攀枝花 大贵妃芒 5斤/8斤装",
          price: "45.00",
          oldprice: "62.5",
          pic:
            "https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png"
        },
        {
          gdname: "四川攀枝花 大贵妃芒 5斤/8斤装",
          price: "45.00",
          oldprice: "62.5",
          pic:
            "https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png"
        },
        {
          gdname: "四川攀枝花 大贵妃芒 5斤/8斤装",
          price: "45.00",
          oldprice: "62.5",
          pic:
            "https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png"
        }
      ]
    };
  },

  components: {},

  methods: {
    godetail(id) {
      // console.log(123);
      this.$router.push("detail/" + id);
    }
  }
};
</script>

<style scoped lang="scss">
.el-card {
  width: 102%;
  margin-left: 0.2rem;
  margin-right: 0.2rem;
}
.el-col {
  margin: 0.2rem 0.3rem 0rem 0rem;
  width: 3.8rem;
}
ul {
  position: absolute;
  // left: 0;
  top: 2.2rem;
  padding-bottom: 2rem;
  li {
    span {
      font-size: 0.3rem;
      line-height: 0.46rem;
      height: 0.92rem;
      overflow: hidden;
    }
    p {
      font-size: 0.36rem;
      float: left;
      color: #c01414;
    }
    i {
      float: left;
      color: #999999;
      text-decoration: line-through;
      margin-left: 0.2rem;
      font-size: 0.3rem;
    }
  }
}

.bottom {
  margin-top: 13px;
  line-height: 12px;
}

.button {
  padding: 0;
  float: right;
}

.image {
  width: 100%;
  display: block;
}

.clearfix:before,
.clearfix:after {
  display: table;
  content: "";
}

.clearfix:after {
  clear: both;
}
</style>