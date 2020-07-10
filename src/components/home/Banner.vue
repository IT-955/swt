<template>
  <div>
    <div class="block">
      <!-- <span class="demonstration">Click 指示器触发</span> -->
      <el-carousel trigger="click" height="180px">
        <el-carousel-item v-for="(item,index) in banner" :key="index">
          <h3 class="small">
            <img :src="item.img" alt />
          </h3>
        </el-carousel-item>
      </el-carousel>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      banner: [
        {
          img:
            "https://oss.swt100.com/images/mad/20200706/09dec1ebe338df7d9da1685c1d83d133c8c3e3ce.jpg"
        },
        {
          img:
            "https://oss.swt100.com/images/mad/20200706/5881cd244440664ac2e648cbd06319f7724e3e2d.jpg"
        },
        {
          img:
            "https://oss.swt100.com/images/mad/20200706/bb98954b2de536274df40a2ea18c99318e7a94dd.jpg"
        },
        {
          img:
            "https://oss.swt100.com/images/mad/20200706/9920637079c1e39e0c846b20af9dc87af62490a9.jpg"
        }
      ]
    };
  },

  components: {},

  methods: {}
};
</script>

<style scoped lang="scss">
.el-carousel__item h3 {
  color: #475669;
  font-size: 14px;
  opacity: 0.75;
  line-height: 150px;
  margin: 0;
}

.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
}
</style>