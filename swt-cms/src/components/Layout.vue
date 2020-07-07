<template>
  <div>
    <Header />
    <!-- 左侧导航区域 -->
    <Nav />
    <!-- 右侧主区域 -->
    <Main />
  </div>
</template>

<script>
import Header from "./Header";
import Nav from "./Nav";
import Main from "./Main";
export default {
  data() {
    return {};
  },

  components: {
    Header,
    Nav,
    Main
  },

  methods: {}
};
</script>

<style scoped lang="scss">
.header {
  position: absolute;
  line-height: 50px;
  padding: 0px;
  top: 0px;
  left: 0px;
  right: 0px;
  background-color: #485464;
}

/* 左侧导航栏 */
.navbar {
  position: absolute;
  width: 230px;
  top: 50px;
  left: 0px;
  bottom: 0px;
  overflow-y: auto;
  background-color: #545c64;
}
/* 右侧主区域 */
.main {
  position: absolute;
  top: 50px;
  left: 230px;
  right: 0px;
  bottom: 0px;
  padding: 10px;
  overflow-y: auto;
  background-color: white;
}
</style>