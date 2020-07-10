<template>
  <ul class="pro_list2 clearfix">
    <li v-for="(item,index) in listimg" :key="index">
      <a href>
        <img :src="item.pic" />
      </a>
    </li>
  </ul>
</template>

<script>
export default {
  data() {
    return {
      listimg: [
        {
          pic:
            "https://oss.swt100.com/images/mad/20200707/509cbe5f7d99a1fa90fb20445926ce9305cd93e6.jpg"
        },
        {
          pic: "https://oss.swt100.com/images/mad/20200707/a57d085659719055b1352312ba9359907e7b6ceb.jpg"
        },
        {
          pic: "https://oss.swt100.com/images/mad/20200707/e6aef20eb841471c45c7f59978d92e52f4cfc361.jpg"
        },
        {
          pic: "https://oss.swt100.com/images/mad/20200707/c43ac864273242ea7145c4cafaff7df4184f3218.jpg"
        },
      ]
    };
  },

  components: {},

  methods: {}
};
</script>

<style scoped lang="scss">
.pro_list2 {
  padding: 0 0.2rem;
}
.pro_list2 li {
  float: left;
  width: 3.9rem;
  height: 2.4rem;
  overflow: hidden;
  margin: 0.2rem 0.1rem 0 0; //改
}
</style>