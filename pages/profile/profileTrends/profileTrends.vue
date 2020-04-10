<template>
	<view class="bg-white">
		<view class="profile-trendsnav flex flex--rowdirection justify-center align-center">
			<view class="profile-trendsnav-content flex-sub  flex flex-direction justify-between align-center" v-for="(item, index) in 4" :key="index">
				<image class="profile-trendsnav-content-img" src="../../static/logo.png"></image>
				<view class="profile-trendsnav-content-textstyle text-center"><navigator url="../../pages/login/login" hover-class="navigator-hover">登录</navigator></view>
				
			</view>
		</view>
		<!-- <view class="profile-trends-praise"><card></card></view> -->
	</view>
</template>

<script>
// import card from '../card/card.vue';
export default {
	// components: {
	// 	card
	// }
};
</script>

<style lang="scss">
.profile-trendsnav {
	height: 100upx;

	.profile-trendsnav-content {
		height: 90upx;

		.profile-trendsnav-content-img {
			width: 50upx;
			height: 50upx;
		}
		.profile-trendsnav-content-textstyle {
			width: 80upx;
			&:hover {
				border-bottom: 4upx #f3a2b4 solid;
			}
		}
	}
}
.profile-trends-praise {
	padding: 0 50upx;
}
</style>
