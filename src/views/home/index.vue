<template>
  <div>
    <Hheader />
    <!-- <Banner /> -->
    <Hnav />
    <Seckill />
    <Hlist />
    <Orders />
    <Img />
    <Giftbox />
    <Imgs />
    <Recommend />
    <Hfoot />
  </div>
</template>

<script>
import Hheader from "../../components/home/Hheader";
import Hnav from "../../components/home/Hnav";
import Seckill from "../../components/home/Seckill";
import Hlist from "../../components/home/Hlist";
import Orders from "../../components/home/Orders";
import Img from "../../components/home/Img";
import Giftbox from "../../components/home/Giftbox";
import Imgs from "../../components/home/Imgs";
import Recommend from "../../components/home/Recommend";
import Hfoot from "../../components/footer";
export default {
  data() {
    return {};
  },

  components: {
    Hheader,
    // Banner,
    Hnav,
    Seckill,
    Hlist,
    Orders,
    Img,
    Giftbox,
    Imgs,
    Recommend,
    Hfoot
  },

  methods: {}
};
</script>

<style scoped lang="scss">
</style>