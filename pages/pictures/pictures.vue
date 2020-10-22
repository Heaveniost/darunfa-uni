<template>
	<view class="pics">
		<scroll-view class="left" scroll-y>
			<view v-for="(item, index) in category" :key="item.id"
					:class="active===index?'active':''" @click="chooseCate(index, item.id)"
			>
			{{ item.title}}
			</view>
		</scroll-view>
		<scroll-view class="right" scroll-y>
			<view class="item" v-for="item in content" :key="item.id">
				<image :src="item.img_url"></image>
				<text>{{ item.title }}</text>
			</view>		
			<text v-if="content.length===0">暂时没有数据</text>
		</scroll-view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				category: [],
				active: 0,
				content: [] //接收具体信息
			}
		},
		onLoad() {
			this.getCategory()
		},
		methods: {
			async getCategory() {
				const res = await this.$myRequest({
					url: '/api/getimgcategory'
				})
				// console.log(res)
				this.category = res.data.message 
				this.chooseCate(0, this.category[0].id)
				console.log(this.content)
			},
			async chooseCate(index,id) {
				this.active = index 
				// 获取具体内容-页面主题区域的数据
				const res = await this.$myRequest({
					url: '/api/getimages/' + id
				})
				this.content = res.data.message
			}
		}
	}
</script>

<style lang="scss">
	page {
		height: 100%;
	}
	.pics {
		height: 100%;
		display: flex;
		.left {
			width: 200rpx;
			height: 100%;
			border-right: 1px solid #eee;
			view {
				// height: 60px;
				line-height: 60px; //利用文字把内容撑开 
				color: #333;
				text-align: center;
				font-size: 30rpx;
				border-top: 1px solid #eee;
			}
			.active {
				background-color: red;
				color: #fff;
			}
		}
		.right {
			height: 100%;
			width: 520rpx;
			margin: 10rpx auto;
			.item {
				image {
					width: 520rpx;
					height: 400rpx;
					border-radius: 5px;
				}
				text {
					font-size: 30rpx;
					line-height: 60rpx;
				}
			}
		}
	}
</style>
