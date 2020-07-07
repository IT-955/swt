<template>
  <div class="index_2">
		<div class="p_tit teaser is-visible">
			<p>火爆·<em>拼单</em></p>
			<span>orders</span>
			<a href="">更多</a>
		</div>
		<ul class="pro_list3 clearfix">
						<li class="teaser" v-for="(item,index) in teaser" :key="index">
				<div class="pic"><a href=""><img :src="item.pic"></a></div>
				<div class="w">
					<p class="dot" style="overflow-wrap: break-word;"><a href="">{{item.dot}}</a></p>
					<div class="pri clearfix">
						<span><em>{{item.pirce}}</em></span>
						<h4><em>{{item.pirces}}</em></h4>
					</div>
					<div class="clearfix">
						<h5>{{item.pindan}}</h5>
						<div class="s_pic"><b><img src="../../assets/img/pic6.jpg"></b><b><img src="../../assets/img//pic6.jpg"></b></div>
					</div>
				</div>
			</li>
					</ul>
	</div>
</template>

<script>
export default {
  data () {
    return {
        teaser:[
            { pic:
            "https://oss.swt100.com/old_images/images/201910/thumb_img/604_thumb_G_1570786971679.jpg",
          dot: "云南 三力康 古法黑糖 500g/罐*5",
          pirce: "¥43.70",
          pirces: "¥55.19",
          pindan:"已拼18件",
          pics:"../../assets/img/pic6.jpg"
          },
            { pic:
            "https://oss.swt100.com/old_images/images/201910/thumb_img/604_thumb_G_1570786971679.jpg",
          dot: "云南 三力康 古法黑糖 500g/罐*5",
          pirce: "¥43.70",
          pirces: "¥55.19",
          pindan:"已拼18件",
          pics:"../../assets/img/pic6.jpg"
          },
            { pic:
            "https://oss.swt100.com/old_images/images/201910/thumb_img/604_thumb_G_1570786971679.jpg",
          dot: "云南 三力康 古法黑糖 500g/罐*5",
          pirce: "¥43.70",
          pirces: "¥55.19",
          pindan:"已拼18件",
          pics:"../../assets/img/pic6.jpg"
          },
            { pic:
            "https://oss.swt100.com/old_images/images/201910/thumb_img/604_thumb_G_1570786971679.jpg",
          dot: "云南 三力康 古法黑糖 500g/罐*5",
          pirce: "¥43.70",
          pirces: "¥55.19",
          pindan:"已拼18件",
          pics:"../../assets/img/pic6.jpg"
          },
        ]
    }
  },

  components: {},

  methods: {}
}
</script>

<style  lang="scss">
.teaser.is-visible {
    opacity: 1;
    transform: translate3d(0,0,0);
}
.teaser {
    opacity: 1;
}
.p_tit {
    background: #FFFFFF;
    text-align: center;
    padding: .22rem 0 .25rem;
    position: relative;
    margin-top: .2rem;
}
.p_tit p {
    font-size: .36rem;
    color: #333333;
    line-height: .44rem;
}
.p_tit p em {
    display: inline-block;
    vertical-align: top;
    color: #C01414;
}
.p_tit span {
    display: block;
    text-transform: uppercase;
    font-size: .22rem;
    color: #666666;
    line-height: .28rem;
}
.p_tit a {
    position: absolute;
    right: .4rem;
    top: 0;
    line-height: 1.19rem;
    padding-right: .26rem;
    background: url(../../assets/img/arw1.png) right center no-repeat;
    background-size: .14rem .24rem;
    font-size: .24rem;
    color: #333333;
}
.pro_list3 li {
    float: left;
    width: 3.9rem;
    background: #FFFFFF;
    margin: .2rem 0 0 .2rem;
    padding-bottom: .4rem;
}
.pro_list3 li .pic {
    height: 3.9rem;
    overflow: hidden;
}
.pro_list3 li a {
    display: block;
}
.pro_list3 li .w {
    padding: 0 .2rem;
}
.pro_list3 li p {
    font-size: .3rem;
    line-height: .46rem;
    height: .92rem;
    overflow: hidden;
}
.pro_list3 li p a {
    display: block;
    color: #333333;
}
.pro_list3 li .pri {
    height: .64rem;
    line-height: .64rem;
    overflow: hidden;
    margin-top: .3rem;
}
.pro_list3 li .pri span {
    float: left;
    color: #C01414;
    font-size: .18rem;
}
.pro_list3 li .pri span em {
    font-size: .36rem;
}
.pro_list3 li .pri h4 {
    float: left;
    font-size: .22rem;
    color: #999999;
    text-decoration: line-through;
    margin-left: .2rem;
}
.pro_list3 li .pri h4 em {
    font-size: .3rem;
}
.pro_list3 li h5 {
    line-height: .48rem;
    float: left;
    font-size: .26rem;
    color: #333333;
}
.s_pic {
    float: right;
    position: relative;
    width: .82rem;
    height: .48rem;
}
.s_pic b {
    width: .48rem;
    height: .48rem;
    padding: .02rem;
    background: #FFFFFF;
    border-radius: 50%;
    position: absolute;
    right: .34rem;
    top: 0;
    z-index: 1;
}
.s_pic b img {
    width: .44rem;
    height: .44rem;
    border-radius: 50%;
}
.s_pic img {
    vertical-align: top;
}
</style>