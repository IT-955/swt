<template>
  <div class="header">
		<a href="" class="logo"><img src="../../assets/img/logo.png"></a>
		<a href="">
			<form class="search">
				<input type="text" class="text" placeholder="搜索">
			</form>
		</a>
		<a href="" class="mes_ic"><b>0</b></a>
	</div>
</template>

<script>
export default {
  data() {
    return {};
  },

  components: {},

  methods: {}
};
</script>

<style scoped lang="scss">
a,
a:link {
  text-decoration: none;
  cursor: pointer;
}
.logo {
    width: 1.45rem;
    height: .55rem;
    float: left;
    margin-top: .26rem;
    margin-left: .36rem;
    overflow: hidden;
}
img {
  vertical-align: middle;
  width: 100%;
}
.header {
  height: 1rem;
  background: #c01414;
  position: fixed;
  z-index: 8;
  left: 0;
  top: 0;
  width: 100%;
}
.search {
  float: left;
  width: 5.1rem;
  height: 0.64rem;
  background: #ffffff;
  border-radius: 0.64rem;
  float: left;
  margin-left: 0.3rem;
  margin-top: 0.18rem;
}
.search .text {
  width: 100%;
  height: 0.64rem;
  padding: 0 0.64rem 0 0.8rem;
  font-size: 0.3rem;
  color: #666;
  background: url(../../assets/img/fdj.png) 0.2rem center no-repeat;
  background-size: 0.3rem;
}
.mes_ic b {
  position: absolute;
  right: -0.17rem;
  top: -0.1rem;
  background: #ffffff;
  width: 0.3rem;
  height: 0.3rem;
  border-radius: 50%;
  font-size: 0.2rem;
  text-align: center;
  line-height: 0.3rem;
  color: #c01414;
}
.mes_ic {
    width: .36rem;
    height: .36rem;
    background: url(../../assets/img/ic1.png) center no-repeat;
    background-size: cover;
    position: absolute;
    right: .47rem;
    top: .32rem;
}
</style>