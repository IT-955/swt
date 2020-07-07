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
            "https://oss.swt100.com/images/mad/20200624/7466657587e969cc72511e37c92a2cbf1217d184.jpg"
        },
        {
          pic: "https://oss.swt100.com/images/mad/20200624/fca1861beb02b41689a0575e8e7fd703ca4b9170.jpg"
        },
        {
          pic: "https://oss.swt100.com/images/mad/20200624/c0eb400ee668ef8a69e4990ba5b2280d3a594e34.jpg"
        },
        {
          pic: "https://oss.swt100.com/images/mad/20200624/fc7eb6ea07496af4f1a3885e2a8847df29da1da1.jpg"
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