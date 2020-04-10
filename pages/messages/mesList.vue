<template>
	<view>
		<view class="user-container bg-white">
			<view class="user flex justify-start align-center">
				<view class="user-imgbox"><image class="user-imgbox-img" src="../../static/logo.png"></image></view>
				<view class="user-detailbox flex flex-direction justify-between border-bm-small">
					<view class="user-detailbox-detail line-height-sm flex justify-between">
						<view class="text-sm user-detailbox-name-sign flex-twice"><text>海边来的设计书Ss</text></view>
						<view class="text-df user-detailbox-name-imgbox flex-sub text-right">
							<text>2019</text>/
							<text>10</text>/
							<text>20</text>
						</view>
					</view>
					<view class="user-detailbox-detail text-df line-height-sm text-cut">这个人很懒，什么都没写这个人很懒，什么都没写 这个人很懒，什么都没写 这个人很懒，什么都没写 这个人很懒，什么都没写 这个人很懒，什么都没写  </view>
				</view>
			</view>
		</view>
	</view>
</template>

<script></script>

<style lang="scss">
.user-container {
	padding: 40upx 50upx;
	// border-bottom: 4upx solid #c8c7cc;
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
			padding: 20upx 0;
			.user-detailbox-detail {
				font-family: MicrosoftYaHei;
				font-size: 22upx;
				font-weight: normal;
				font-stretch: normal;
				letter-spacing: 0upx;
				color: #3a3939;
			}
			.user-detailbox-name {
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
			}
	}
}
</style>
