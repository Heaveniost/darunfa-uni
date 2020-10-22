<template>
	<view class="goods-list">
		<goods-list :goods="goods"></goods-list>
		<view class="bottom" v-if="flag">没有更多数据了</view>
	</view>
</template>

<script>
	import goodsList from "../../components/goods-list/goods-list.vue"
	export default {
		data() {
			return {
				pageindex: 1,
				goods: [],
				flag: false
			}
		},
		components: {
			goodsList
		},
		onLoad() {
			this.getGoodsList()
		},
		methods: {
			async getGoodsList(callback) {
				const res = await this.$myRequest({
					url: '/api/getgoods?pageindex=' + this.pageindex
				})
				console.log(res)
				this.goods = [...this.goods, ...res.data.message]
				callback && callback() //如果回调函数存在则调用 
			},
			onReachBottom() {
				if (this.goods.length < this.pageindex * 10) return this.flag = true
				this.pageindex++
				this.getGoodsList()
			},
			onPullDownRefresh() {
				this.goods = []
				this.pageindex = 1
				this.flag = false
				setTimeout(() => {
					this.getGoodsList(() => {
						uni.stopPullDownRefresh()
					})
				}, 1000)
			}
		}
	}
</script>

<style lang="scss">
	.goods-list {
		background-color: #eee;
	}

	.bottom {
		text-align: center;
		color: red;
		padding: 15px;
		background-color: #ccc;
	}
</style>
