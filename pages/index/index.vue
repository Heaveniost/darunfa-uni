<template>
	<view class="home">
		<!-- 轮播图 -->
		<!-- <swiper indicator-dots circular autoplay>
			<swiper-item v-for="item in swipers" :key="item.id">
				<image class="lunbo_img" :src="item.img"></image>
			</swiper-item>
		</swiper> -->
		<!-- 导航区域 -->
		<view class="nav">
			<view class="nav_item">
				<view class="iconfont icon-ziyuan"></view>
				<text>润发超市</text>
			</view>
			<view class="nav_item">
				<view class="iconfont icon-guanyuwomen"></view>
				<text>联系我们</text>
			</view>
			<view class="nav_item">
				<view class="iconfont icon-tupian"></view>
				<text>社区图片</text>
			</view>
			<view class="nav_item">
				<view class="iconfont icon-shipin"></view>
				<text>学习视频</text>
			</view>
		</view>
		<!-- 推荐商品 -->
		<view class="recommend">
			<view class="rtitle">推荐商品</view>
			<view class="goods_list">
				<view class="goods_item" v-for="item in goods" :key="item.key">
					<image class="goods_img" :src="item.img_url"></image>
					<view class="price">
						<text>￥{{ item.sell_price}}</text>
						<text>￥{{ item.market_price}}</text>
					</view>
					<view class="intro">
						{{ item.title }}
					</view>
				</view>
				
				
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				swipers: [],
				goods: []
			}
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
		lunbo_img {
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
		.goods_list {
			padding: 0 15rpx;
			display: flex;
			flex-wrap: wrap;
			justify-content: space-between;
			.goods_item {
				background: #fff;
				width: 355rpx;
				margin: 10rpx 0; // 左右为0，否则图片独成一行 
				padding: 15rpx;
				box-sizing: border-box;
				.goods_img {
					width: 80%;
					height: 150px;
					// position:relative; 居中方式不可取
					// left: 35rpx; 
					display: block;
					margin: 0 auto;
				}
				.price {
					color: red;
					font-size: 36rpx;
					margin-top: 10rpx;
					text:nth-child(2) {
						color: #ccc;
						font-size: 28rpx;
						padding: 20rpx;
						text-decoration: line-through;
					}
				}
				.intro {
					margin-top: 10rpx;
					margin-bottom: 25rpx;
					// line-height: 40rpx; 指定文字所在区域的高度 
				}
			}
		}
	}

</style>
