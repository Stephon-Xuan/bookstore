<template>
	<view>
		<bg-img :imgSrc="bgImg"></bg-img>
		<top-status></top-status>
		<top-bar :noColor="true" :title="'公益项目详情'"></top-bar>
		<view class="content">
			<view class="content-title">小学图书室建设</view>
			<view class="count border-bm-big">
				项目累计获得
				<text class="count-num">512</text>
				本书籍
			</view>
			<view class="tabbar"></view>
		</view>
	</view>
</template>

<script>
import topStatus from '../../components/topStatus/topStatus.vue';
import topBar from '../../components/topBar/topBar.vue';
import bgImg from '../../components/bgImg/bgImg.vue';
export default {
	components: {
		topStatus,
		topBar,
		bgImg
	},
	data() {
		return {
			bgImg: this.bgImgUrl
		};
	}
};
</script>

<style lang="scss">
page{
	background-color: #FFFFFF;
	position: absolute;
	z-index: 1;
}
.content {
	width: 100%;
	margin-top: 380upx;
	.content-title {
		font-family: MicrosoftYaHei;
		font-size: 31rpx;
		font-weight: bold;
		font-stretch: normal;
		letter-spacing: 0rpx;
		color: #fefefe;
		height: 60upx;
		line-height: 60upx;
		padding: 0 40upx;
		margin: 10upx 0upx;
	}
	.count {
		height: 100upx;
		padding: 0 40upx;
		width: 100%;
		background-color: #ffffff;
		font-size: 21upx;
		font-weight: bold;
		font-stretch: normal;
		letter-spacing: 0rpx;
		color: #000000;
		line-height: 100upx;
		border-top-left-radius: 20upx;
		border-top-right-radius: 20upx;
		.count-num {
			color: #f91616;
		}
	}
}
</style>
