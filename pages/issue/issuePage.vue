<template>
	<view>
		<top-status></top-status>
		<topBar :title="'我要发布'" :showBottom="true"></topBar>
		<content-input />
		<view>图片上传</view>
		<view class="infolistbar flex justify-between align-center border-tb-small bg-white">
			<view class="content flex justify-between align-center">
				<view class="content-icobox"><image class="content-icobox-ico" src="/static/images/admit/admit-avator.png"></image></view>
				<view class="content-text">谁可以看</view>
			</view>
			<view class="action flex align-center justify-between">
				<text class="action-text text-grey text-sm">对所有人可见</text>
				<image class="action-arrow" src="/static/images/arrow/rightArrow.png"></image>
			</view>
		</view>
		<issue-botton></issue-botton>
	</view>
</template>

<script>
import topStatus from '../../components/topStatus/topStatus.vue';
import topBar from '../../components/topBar/topBar.vue';
import contentInput from '../../components/contentInput/contentInput.vue';
import issueBotton from '../../components/issueBotton/issueBotton.vue';
export default {
	components: {
		topStatus,
		topBar,
		contentInput,
		issueBotton
	},
	onShow() {
		uni.getLocation({
			type: 'wgs84',
			success: function(res) {
				console.log('当前位置的经度：' + res.longitude);
				console.log('当前位置的纬度：' + res.latitude);
			}
		});
	}
};
</script>

<style lang="scss">
page {
	background-color: #ffffff;
}

.infolistbar {
	padding: 30upx 20upx;
	.content {
		.content-icobox {
			height: 40upx;
			.content-icobox-ico {
				height: 40upx;
				width: 40upx;
			}
		}
		.content-text {
			margin-left: 20upx;
			font-family: MicrosoftYaHei;
			font-size: 28upx;
			font-weight: bold;
			font-stretch: normal;
			letter-spacing: 0upx;
			color: #3f3f3f;
			text-align: center;
		}
	}
	.action {
		.action-text {
			font-family: MicrosoftYaHei;
			font-size: 28upx;
			font-weight: bold;
			font-stretch: normal;
			letter-spacing: 0upx;
			color: #d3d3d3;
		}
		.action-avator {
			width: 124upx;
			height: 124upx;
			border-radius: 50%;
			margin-right: 20upx;
		}
		.action-arrow {
			width: 28upx;
			height: 30upx;
		}
	}
}
</style>
