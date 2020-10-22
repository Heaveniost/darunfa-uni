<template>
	<view class="main">
		<image class="img" src="http://www.itcast.cn/2018czydz/images/gywmban.jpg"></image>
		<view class="info">
			<view @click="call">联系电话：(027)87880376(点击拨打)</view>
			<view>地址：湖北省武汉市和平大道690号</view>
		</view>
		<map class="map" :longitude="longitude" :latitude="latitude" :scale="scale" :markers="covers"></map>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				longitude: 114.339401,
				latitude: 30.514676,
				scale: 13,
				covers: [{
					latitude: 30.514676,
					longitude: 114.339401,
					iconPath: '../../static/university.jpg',
					width:60,
					height: 40
				}]
			}
		},
		methods: {
			call() {
				uni.makePhoneCall({
					phoneNumber: '(027)87880376'
				})
			}
		}
	}
</script>

<style lang="scss">
	.img {
		width: 750rpx;
		height: 320rpx;
	}
	.info {
		padding: 10rpx 20rpx;
		font-size: 30rpx;
		view {
			line-height: 80rpx;
			border-bottom: 1px solid #eee;
		}
	}
	.map {
		width: 750rpx;
		height: 750rpx;
	}
</style>
