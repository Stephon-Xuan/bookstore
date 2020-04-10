<template>
	<view>
	<view class="dynamic-wrapper">
		<view class="dynamic-title flex-cc padding bg-white text-lg">
			<image class="img-size magin-lr-4" :src="icoUrl" />
			{{title}}
		</view>
	</view>
	<view :class="isBm?'border-bm-big':''"></view>
	</view>
</template>

<script>
	export default{
		props:{
			icoUrl:{type:String,default:'/static/images/issue/issueDynamic.png'},
			title:{type:String,default:"动态"},
			isBm:Boolean
		},
		data(){
			return{
				
			}
		}
	}
</script>

<style scoped>
.dynamic-wrapper {
	height: 100upx;
	width: 100%;
	position: relative;
	margin-bottom: 20upx;
}
.dynamic-title {
	position: fixed;
	height: 100upx;
	width: 100%;
	z-index: 9;
	background-color: #ffffff;
}
.img-size {
	width: 50upx;
	height: 50upx;
}
</style>
