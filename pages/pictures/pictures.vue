<template>
	<view class="pics">
		<scroll-view class="left" scroll-y>
			<view v-for="(item, index) in category" :key="item.id"
					:class="active===index?'active':''" @click="chooseCate(index)"
			>
			{{ item.title}}
			</view>
		</scroll-view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				category: [],
				active: 0
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
			},
			chooseCate(index) {
				this.active = index 
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
		// display: flex;
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
	}
</style>
