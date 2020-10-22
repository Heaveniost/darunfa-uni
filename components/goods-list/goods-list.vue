<template>
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
</template>

<script>
	export default {
		props: ['goods']
	}
</script>

<style lang="scss">
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
</style>
