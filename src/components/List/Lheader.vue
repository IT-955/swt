<template>
  <div class="Lheader">
    <div class="search">
      <input type="text" placeholder="搜索商品" class="ipt" />
    </div>
    <a class="kefu"></a>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {}
};
</script>

<style scoped lang="scss">
.Lheader {
  height: 1rem;
  background: #c01414;
  position: fixed;
  z-index: 8;
  left: 0;
  top: 0;
  width: 100%;
  .search {
    width: 5.47rem;
    height: 0.64rem;
    border-radius: 0.64rem;
    float: left;
    margin-left: 0.3rem;
    margin-top: 0.18rem;
  }

  .ipt {
    border: none;
    border-radius: 1rem;
    width: 100%;
    height: 0.64rem;
    padding: 0 0.64rem 0 0.8rem;
    font-size: 0.3rem;
    color: #666;
    background: url("../../assets/List/fdj.png") 0.2rem center no-repeat;
    background-size: 0.3rem;
    background-color: #fff;
  }

  .kefu {
    width: 0.36rem;
    height: 0.36rem;
    background: url("../../assets/List/ic1.png") center no-repeat;
    background-size: cover;
    position: absolute;
    right: 0.47rem;
    top: 0.32rem;
  }
}
</style>