<template>
	<view>
		<view class="news-item" v-for="item in list" :key="item.id" @click="itemClick(item.id)">
			<image :src="item.img_url"></image>
			<view class="content">
				<view class="title">{{ item.title }}</view>
				<view class="info">
					<text>发表时间：{{ item.add_time | formatDate }}</text>
					<text>浏览：{{ item.click }}</text>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		props: ['list'],
		filters: {
			formatDate(date) {
				return date.substring(0,10)
			}
		}, // 建议保留，因为组价在别的地方用的时候，不一定定义了过滤器
		methods:{
			itemClick(id) {
				this.$emit('itemClick', id)
			}
		}
	}
</script>

<style lang="scss">
	.news-item {
		display: flex;
		padding: 10rpx 20rpx;
		border-bottom: 1px solid red;
		image {
			min-width: 200rpx;
			max-width: 200rpx;
			height: 150rpx;
		}
		.content {
			margin-left: 15rpx;
			display: flex;
			flex-direction: column;
			justify-content: space-between;
			.title {
				font-size: 30rpx;
			}
			.info {
				font-size: 24rpx;
				text:nth-child(2) {
					margin-left: 30rpx;
				}
			}
		}
	}
</style>
