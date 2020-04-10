<template>
	<view>
		<view class="searchbar search bg-white">
			<view class="search-form flex align-center" @click="searchClick">
				<view class="search-form-icobox flex align-center"><image class="search-form-icobox-ico" src="/static/images/search/search.png" /></view>
				<input class="text-sm" @focus="InputFocus" @blur="InputBlur" :adjust-position="false" type="text" placeholder="搜索关键字" confirm-type="search" disabled/>
			</view>
		</view>
	</view>
</template>

<script>
export default {
	props: {
		isSearch: { type: Boolean,default:false }
	},
	methods: {
		searchClick() {
			if(this.isSearch===false){
				uni.navigateTo({
					url: '../../pages/search/search'
				});
			}else{
				
			}
			
		}
	}
};
</script>


<style lang="scss">
.searchbar {
	display: flex;
	position: relative;
	align-items: center;
	min-height: 100upx;
	justify-content: space-between;
	.search-form {
		background-color: #f5f5f5;
		line-height: 64upx;
		height: 64upx;
		font-size: 16upx;
		color: #333333;
		flex: 1;
		display: flex;
		align-items: center;
		margin: 0 30upx;
		border-radius: 50upx;
		height: 80upx;
		/* padding: 10upx 20upx; */
		.search-form-icobox {
			height: 40upx;
			width: 40upx;
			margin: 0 20upx;
			.search-form-icobox-ico {
				height: 40upx;
				width: 40upx;
			}
		}
	}
}
</style>
