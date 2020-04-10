<template>
	<!-- <view class="bgImg flex"><image class="bgImg-img" :src="imgSrc" :style="('width:' + imgWidth +'upx', 'height:' + imgHeight + 'upx')"></image></view> -->
	<view class="bgImg flex"><image class="bgImg-img" :src="imgSrc"></image></view>
</template>

<script>
export default {
	props: {
		imgSrc: String,
		// imgWidth: {
		// 	type: Number,
		// 	default:100
		// },
		// imgHeight: { type: Number, }
	},
	data() {
		return {};
	}
};
</script>

<style lang="scss">
.bgImg {
	z-index:-1;
	position: absolute;
	width: 100%;
	flex-grow: 1;
	height: 600upx;
	.bgImg-img {
		flex-grow: 1;
		opacity: 0.6;
		height: 600upx;
	}
}
</style>
