<template>
	<view>
		<view class="user-container bg-white">
			<view class="user flex justify-start align-center">
				<view class="user-imgbox"><image class="user-imgbox-img" src="../../static/logo.png"></image></view>
				<view class="user-detailbox flex flex-direction justify-between">
					<view class="user-detailbox-name text-sm line-height-sm">海边来的设计书Ss</view>
					<view class="user-detailbox-detail line-height-sm flex justify-between">
						<view class="text-sm user-detailbox-detail-sign flex-twice"><text>这个人很懒，什么都没写</text></view>
						<view class="text-sm user-detailbox-detail-imgbox flex-sub text-right">
							<image class="user-detailbox-detail-imgbox-img" src="../../static/logo.png"></image>
						</view>
					</view>
					<view class="user-detailbox-status flex-direction justify-between">
						<view class="user-detailbox-status-num flex flex--rowdirection justify-between">
							<view class="flex-sub" v-for="(item, index) in 3" :key="index">{{ index }}</view>
						</view>
						<view class="user-detailbox-status-text flex flex--rowdirection justify-between">
							<view class="flex-sub" v-for="(itemb, index) in 3" :key="index">发布</view>
						</view>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script></script>

<style lang="scss">
.user-container {
	padding: 40upx 50upx;
	border-bottom: 4upx solid #c8c7cc;
	width: 100%;
	.user {
		// padding: 20upx 0;
		.user-imgbox {
			height: 100upx;
			margin-right: 24upx;
			width: 20%;
			.user-imgbox-img {
				width: 100upx;
				height: 100upx;
				border-radius: 50%;
			}
		}
		.user-detailbox {
			// height: 100upx;
			width: 80%;
			.user-detailbox-name {
				font-family: MicrosoftYaHei;
				font-size: 22upx;
				font-weight: normal;
				font-stretch: normal;
				letter-spacing: 0upx;
				color: #3a3939;
			}
			.user-detailbox-detail {
				// width: 414upx;
				.user-detailbox-detail-sign {
					font-family: MicrosoftYaHei;
					font-size: 18upx;
					font-weight: normal;
					font-stretch: normal;
					letter-spacing: 0upx;
					color: #a1a0a0;
				}
				.user-detailbox-detail-imgbox {
					// width: 150upx;
					// margin-left: 200upx;
					.user-detailbox-detail-imgbox-img {
						width: 31upx;
						height: 31upx;
					}
				}
			}
			.user-detailbox-status {
				width: 80%;
				.user-detailbox-status-num {
					// width: 160upx;
					font-family: MicrosoftYaHei;
					font-size: 20upx;
					font-weight: normal;
					font-stretch: normal;
					letter-spacing: 0upx;
					color: #3b566b;
				}
				.user-detailbox-status-text {
					// width: 160upx;
					font-size: 24upx;
					font-weight: normal;
					font-stretch: normal;
					letter-spacing: 0upx;
					color: #7591a7;
				}
			}
		}
	}
}
</style>
