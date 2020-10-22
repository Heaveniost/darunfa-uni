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
				<view class="goods_item">
					<image class="goods_img" src="http://demo.dtcms.net/upload/201504/20/thumb_201504200046589514.jpg"></image>
					<view class="price">
						<text>￥2019</text>
						<text>￥3199</text>
					</view>
					<view class="intro">
						华为P30，让世界与众不同 16G双卡双待
					</view>
				</view>
				<view class="goods_item">
					<image class="goods_img" src="http://demo.dtcms.net/upload/201504/20/thumb_201504200046589514.jpg"></image>
					<view class="price">
						<text>2019</text>
						<text>3199</text>
					</view>
					<view class="intro">
						华为P30，让世界与众不同 16G双卡双待
					</view>
				</view>
				<view class="goods_item">
					<image class="goods_img" src="http://demo.dtcms.net/upload/201504/20/thumb_201504200046589514.jpg"></image>
					<view class="price">
						<text>2019</text>
						<text>3199</text>
					</view>
					<view class="intro">
						华为P30，让世界与众不同 16G双卡双待
					</view>
				</view>
				<view class="goods_item">
					<image class="goods_img" src="http://demo.dtcms.net/upload/201504/20/thumb_201504200046589514.jpg"></image>
					<view class="price">
						<text>2019</text>
						<text>3199</text>
					</view>
					<view class="intro">
						华为P30，让世界与众不同 16G双卡双待
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
				swipers: []
			}
		},
		onLoad() {
			this.getSwipers()
		},
		methods: {
			// 获取轮播图的数据
			async getSwipers() {
				const res = await this.$myRequest({
					url: '/api/getlunbo'
				})
				this.swipers = res.data.message
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
					text:nth-child(2) {
						color: #ccc;
						font-size: 28rpx;
						padding: 20rpx;
						text-decoration: line-through;
					}
				}
				.intro {
					margin-top: 20rpx;
					margin-bottom: 40rpx;
					// line-height: 40rpx; 指定文字所在区域的高度 
				}
			}
		}
	}

</style>
