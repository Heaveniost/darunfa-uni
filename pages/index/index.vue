<template>
	<view class="home">
		<!-- 轮播图 -->
		<swiper indicator-dots circular autoplay>
			<swiper-item v-for="item in swipers" :key="item.id">
				<!-- <image class="lunbo_img" :src="item.img"></image> -->
				<!-- 轮播图的地址改变了，以下图片是为了显示效果，理解过程就行了 -->
				<image class="lunbo_img" src="../../static/darunfa.jpg"></image>
			</swiper-item>
		</swiper>
		<!-- 导航区域 -->
		<view class="nav">
			<view class="nav_item" v-for="(item,index) in navigators" :key="index" @click="navItem(item.path)">
				<view :class="item.icon"></view>
				<text>{{ item.title }}</text>
			</view>
		</view>
		<!-- 推荐商品 -->
		<view class="recommend">
			<view class="rtitle">推荐商品</view>
			<goods-list :goods="goods" @goodsClick="toGoodsDetail"></goods-list>
		</view>
	</view>
</template>

<script>
	import goodsList from '../../components/goods-list/goods-list.vue'
	export default {
		data() {
			return {
				swipers: [],
				goods: [],
				navigators: [
					{
						icon: 'iconfont icon-ziyuan',
						title: '润发超市',
						path: '/pages/goods/goods'
					},
					{
						icon: 'iconfont icon-guanyuwomen',
						title: '联系我们',
						path: '/pages/contact/contact'
					},
					{
						icon: 'iconfont icon-tupian',
						title: '社区图片',
						path: '/pages/pictures/pictures'
					},
					{
						icon: 'iconfont icon-shipin',
						title: '学习视频',
						path: '/pages/videos/videos'
					}
				]
			}
		},
		components: {
			goodsList
		},
		onLoad() {
			this.getSwipers(),
			this.getGoods()
		},
		methods: {
			// 获取轮播图的数据
			async getSwipers() {
				const res = await this.$myRequest({
					url: '/api/getlunbo'
				})
				this.swipers = res.data.message
			},
			// 获取推荐商品的数据列表
			async getGoods() {
				const res = await this.$myRequest({
					url: '/api/getgoods?pageindex=1'
				})
				this.goods = res.data.message
			},
			// 导航栏跳转
			navItem(url) {
				uni.navigateTo({
					url
				})
			},
			// 商品详情页
			toGoodsDetail(id) {
				uni.navigateTo({
					url: '../goods-detail/goods-detail?id=' + id
				})
			}
		}
	}
</script>

<style lang="scss">
	.home {
		swiper {
			width: 750rpx;
			height: 375rpx;
		}
		.lunbo_img {
			width: 100%;
			height: 100%;
		}
	}

	.nav {
		display: flex;

		.nav_item {
			width: 25%;
			text-align: center;

			.iconfont {
				width: 120rpx;
				height: 120rpx;
				background: red;
				border-radius: 50%;
				margin: 10px auto;
				line-height: 120rpx;
				color: #fff;
				font-size: 50rpx;
			}

			.icon-tupian {
				font-size: 45rpx;
			}

			text {
				font-size: 30rpx;
			}
		}
	}

	.recommend {
		background-color: #eee;
		margin-top: 10px;
		overflow: hidden;

		.rtitle {
			text-align: center;
			height: 50px;
			line-height: 80rpx;
			letter-spacing: 20rpx;
			color: red;
			border-top: 15px;
			background: #fff;
			margin: 7rpx 0;
		}	
		
	}
</style>
