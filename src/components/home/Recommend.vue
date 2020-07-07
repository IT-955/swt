<template>
  <div>
    <div class="index_2">
		<div class="p_tit teaser is-visible">
			<p>为您·<em>推荐</em></p>
			<span>recommend</span>
			<a href="/goods/index/filter/is_new">更多</a>
		</div>
		<ul class="pro_list3 clearfix">
				<li class="teaser is-visible" v-for="(item,index) in glist" :key="index">
				<div class="pic">
					<a href="">
						<img :src="item.pic">
					</a>
				</div>
				<div class="w">
					<p class="dot" style="overflow-wrap: break-word;"><a href="">{{item.dot}}</a></p>
					<div class="pri clearfix">
						<span><em>{{item.pirce}}</em></span>
						<h4><em>{{item.pirces}}</em></h4>
					</div>
				</div>
			</li>
					</ul>
	</div>
  </div>
</template>

<script>
export default {
  data () {
    return {
		glist: [
        {
          pic:
            "https://oss.swt100.com/old_images/images/201909/thumb_img/492_thumb_G_1568617776186.jpg",
          dot: "浙江 四明山土蜂蜜 三个月...",
          pirce: "¥86.00",
          prices: "¥117.60"
        },
        {
          pic:
            "https://oss.swt100.com/old_images/images/202005/thumb_img/903_thumb_G_1589855114044.jpg",
          dot: "宁夏 杞果果 枸杞原浆 女...",
          pirce: "¥138.00",
          pirces: "¥189.60"
        },
        {
          pic:
            "https://oss.swt100.com/old_images/images/202005/thumb_img/973_thumb_G_1590116407094.jpg",
          dot: "四川巴中 腱子牛肉 200...",
          pirce: "¥58.00",
          pirces: "¥78.00"
        },
        {
          pic:
            "https://oss.swt100.com/old_images/images/201909/thumb_img/492_thumb_G_1568617776186.jpg",
          dot: "浙江 四明山土蜂蜜 三个月...",
          pirce: "¥86.00",
          prices: "¥117.60"
        },
        {
          pic:
            "https://oss.swt100.com/old_images/images/202005/thumb_img/903_thumb_G_1589855114044.jpg",
          dot: "宁夏 杞果果 枸杞原浆 女...",
          pirce: "¥138.00",
          pirces: "¥189.60"
        },
        {
          pic:
            "https://oss.swt100.com/old_images/images/202005/thumb_img/973_thumb_G_1590116407094.jpg",
          dot: "四川巴中 腱子牛肉 200...",
          pirce: "¥58.00",
          pirces: "¥78.00"
        },
      ]
    }
  },

  components: {},

  methods: {}
}
</script>

<style scoped>
</style>