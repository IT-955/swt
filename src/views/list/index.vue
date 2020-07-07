<template>
  <div class="list">
    <Lheader />
    <Lmain />
    <Footer />
  </div>
</template>

<script>
import Lheader from "../../components/List/Lheader";
import Lmain from "../../components/List/Lmain";
import Footer from "../../components/footer";

// import { Button } from "element-ui";
export default {
  data() {
    return {};
  },

  components: {
    Lheader,
    Lmain,
    Footer
  },

  methods: {}
};
</script>

<style scoped lang="scss">
html,
body {
  font-family: Arial, "微软雅黑";
  color: #000;
  line-height: 1.3;
  font-size: 0.24rem;
  height: 100%;
  margin: 0;
  padding: 0;
  background: #eee;
  overflow: hidden;
  #app {
    height: 93%;
    overflow: hidden;
  }
}
.list {
  height: 90%;
}
</style>