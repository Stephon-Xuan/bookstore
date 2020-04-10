<template>
	<view>
		<view class="order-container">
			<view class="order-container-column flex justify-between">
				<view class="flex justify-start align-center">
					<view class="order-container-column-textone">
						订单号：
						<text>2019073158851191</text>
					</view>
					<view class="order-container-column-texttwobar align-center justify-center"><text class="order-container-column-texttwobar-text">复制</text></view>
				</view>
				<view class="order-container-column-textthree"><text>买家待付款</text></view>
			</view>
			<view class="order-container-mainbox"></view>
			<view class="order-container-main">
				<view class="user flex justify-start align-center">
					<view class="user-imgbox"><image class="user-img" src="../../static/logo.png"></image></view>
					<view class="user-text"><text class="">归去来</text></view>
					<view class="jump"><image class="jump-img" src="../../static/logo.png"></image></view>
				</view>
				<view class="book flex justify-start" v-for="(item, index) in 2" :key="index">
					<view class="book-imgbox"><image class="book-imgbox-img" src="../../static/logo.png"></image></view>
					<view class="book-detailbox flex flex-direction justify-between">
						<view class="text-sm line-height-sm">《生死场》</view>
						<view class="book-detailbox-detail line-height-sm flex justify-between">
							<view class="text-sm book-detailbox-detail-sort flex-twice"><text>文学|小说</text></view>
							<view class="text-sm book-detailbox-detail-price flex-sub text-right"><text>￥ 8.90</text></view>
						</view>
						<view class="text-xs text-grey line-height-sm">九成新 轻微破损</view>
					</view>
				</view>
				<view class="total flex justify-between align-center">
					<view class="total-count">共两件商品</view>
					<view class="total-money">
						合计：
						<text class="total-money-active">18.8</text>
						（含运费￥0.00）
					</view>
				</view>
				<view class="rating flex justify-end">
					<view class="rating-box flex justify-center align-center"><text class="rating-box-text text-center">评论</text></view>
				</view>
			</view>
		</view>
	</view>
</template>

<script></script>

<style lang="scss">
.order-container {
	padding: 10upx 90upx;
	background-color: #f7f7f6;
	margin-bottom: 20upx;
	.order-container-column {
		.order-container-column-textone {
			font-size: 18upx;
			color: #a7a7a7;
		}
		.order-container-column-texttwobar {
			display: inline-flex;
			width: 71upx;
			height: 30upx;
			border-radius: 8upx;
			border: solid 1upx #fcb365;
			.order-container-column-texttwobar-text {
				font-family: MicrosoftYaHei;
				font-size: 15upx;
				font-weight: normal;
				font-stretch: normal;
				letter-spacing: 0upx;
				color: #fcb365;
				text-align: center;
				line-height: 30upx;
			}
		}
		.order-container-column-textthree {
			font-size: 24upx;
			color: #f5878a;
		}
	}
	.order-container-main {
		background-color: #f0efef;
		border-radius: 9upx;
		border: solid 1upx #d3cbe2;
		// width: 100%;
		padding: 20upx 10upx;
		margin-top: 10upx;
		.user {
			height: 50upx;
			
			.user-imgbox {
				.user-img {
					width: 32upx;
					height: 32upx;
					border-radius: 50%;
				}
			}
			.user-text {
				margin-left: 10upx;
				height: 32upx;
				line-height: 32upx;
				font-size: 20upx;
			}
			.jump {
				margin-left: 20upx;
				.jump-img {
					width: 32upx;
					height: 32upx;
				}
			}
		}
		.book {
			padding: 20upx 0;
			border-bottom: 1upx solid #c8c7cc;
			.book-imgbox {
				height: 100upx;
				margin-right: 24upx;
				.book-imgbox-img {
					width: 100upx;
					height: 100upx;
				}
			}
			.book-detailbox {
				height: 100upx;

				.book-detailbox-detail {
					// width: 414upx;
					.book-detailbox-detail-sort {
						width: 250upx;
					}
					.book-detailbox-detail-price {
						width: 150upx;
						// margin-left: 200upx;
					}
				}
			}
		}
		.total {
			padding: 5upx 0;
			// height: 20upx;
			.total-count {
				font-family: SourceHanSansCN-Medium;
				font-size: 19upx;
				font-weight: normal;
				font-stretch: normal;
				line-height: 32upx;
				letter-spacing: 0upx;
				// color: #f58e65;
			}
			.total-money {
				font-family: MicrosoftYaHei;
				font-size: 17upx;
				font-weight: normal;
				font-stretch: normal;
				line-height: 32upx;
				letter-spacing: 0upx;
				color: #616161;
			}
			.total-money-active {
				font-family: MicrosoftYaHei;
				font-size: 17upx;
				font-weight: normal;
				letter-spacing: 0upx;
				color: #f58e65;
			}
		}
		.rating {
			.rating-box {
				width: 91upx;
				height: 40upx;
				background-color: #f2e4d5;
				border-radius: 9upx;

				.rating-box-text {
					// width: 38upx;
					// height: 25upx;
					font-family: MicrosoftYaHei;
					font-size: 16upx;
					font-weight: normal;
					font-stretch: normal;
					line-height: 27upx;
					letter-spacing: 0upx;
					color: #f37b1d;
				}
			}
		}
	}
}
</style>
