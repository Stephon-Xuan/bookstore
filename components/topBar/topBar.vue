<template>
	<view>
		<view class="topWrapper"  :class="showBottom ? 'border-bm-big-shadow' : ''">
			<view class="topbar flex justify-between align-center" :class="noColor ? '' : 'bg-white'">
				<view class="left-arrow flex align-center">
					<navigator open-type="navigateBack" hover-class="none" animation-type="pop-out" animation-duration="300">
						<image v-if="isShare" class="left-arrow-white" src="/static/images/arrow/left-arrow-white.png"></image>
						<image v-else class="left-arrow-grey" src="/static/images/topbar/left-arrow-black.png"></image>
					</navigator>
				</view>
				<view class="title text-bold">
					<text v-if="!isShare">{{ title }}</text>
				</view>
				<view class="share">
					<view class="share-icobox" v-if="isShare"><image class="share-icobox-ico" src="/static/images/topbar/share.png"></image></view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
export default {
	props: {
		title: String,
		noColor: Boolean,
		showBottom: Boolean,
		isShare: Boolean
	}
};
</script>

<style lang="scss" scoped>
/* .show-bottom {
	
	box-shadow: 0 10px 5px 0px #f1f1f1;
	margin-bottom: 5px;
} */
.topWrapper{
	height: 100upx;
	width: 100%;
	position: relative;
	margin-bottom: 20upx;
}
.topbar {
	position: fixed;
	height: 100upx;
	width: 100%;
	z-index: 9;
	// background-color: #007aff;
	padding: 30upx 20upx;

	.left-arrow {
		height: 40upx;
		width: 40upx;
		.left-arrow-white {
			height: 40upx;
			width: 40upx;
		}
		.left-arrow-grey {
			height: 28upx;
			width: 28upx;
		}
	}
	.title {
		height: 40upx;
		font-family: MicrosoftYaHei;
		font-size: 32upx;
		font-weight: bold;
		font-stretch: normal;
		letter-spacing: 0upx;
		color: #011b1b;
		line-height: 40upx;
	}
	.share {
		height: 40upx;
		width: 40upx;
		.share-icobox {
			.share-icobox-ico {
				height: 40upx;
				width: 40upx;
			}
		}
	}
}
</style>
