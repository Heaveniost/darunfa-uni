<template>
	<view class="news">
		<news-item :list="newsList" @itemClick="toDetail"></news-item>
	</view>
	
</template>

<script>
	import newsItem from '../../components/news-list/news-item.vue'
	export default {
		data() {
			return {
				newsList: []
			}
		},
		components: {
			newsItem
		},
		onLoad() {
			this.getNews()
		},
		methods: {
			async getNews() {
				const res = await this.$myRequest({
					url: '/api/getnewslist'
				})
				console.log(res)
				this.newsList = res.data.message
			},
			toDetail(id) {
				uni.navigateTo({
					url: '../news-detail/news-detail?id=' + id
				})
				
			}
		}
	}
</script>

<style lang="scss">
	
</style>
