<template>
	<view>
		<view class="surplusbar">
			<view class="surplusbar-bg"></view>
			<view class="surplusbar-money align-center">
				余额：￥
				<text class="surplusbar-money-num">590.88</text>
			</view>
			<view class="surplusbar-recharge align-center justify-center"><text class="surplusbar-recharge-text">充值</text></view>
		</view>
		<view class="recentbar bg-white"><text>最近消费：</text></view>
		<view class="payrecorderbar  bg-white" v-for="(item,index) in 4" :key=index>
			<view class="payrecorderbar-time">
				<text>2月10日</text>
				<text class="margin-xs">下午</text>
				<text>13:58</text>
			</view>
			<view class="payrecorderbar-content">
				<view>
					<view class="text-black">支付完成</view>
					<view class="text-bold text-black text-center"><text class="text-lg">18.5</text>元</view>
				</view>
				<view class="payrecorderbar-content-account">
					<view>付款方式：微信</view>
					<view>
						交易账户：吃货小白
						<text class="margin-xs">180********04</text>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script></script>

<style lang="scss">
.surplusbar {
	width: 750upx;
	height: 66upx;
	position: relative;

	.surplusbar-bg {
		width: 750upx;
		height: 66upx;
		background-image: linear-gradient(0deg, #f7f6f6 0%, #797777 100%);
		border-radius: 9px;
		opacity: 0.4;
		position: absolute;
		z-index: -1;
	}
	.surplusbar-money {
		display: inline-flex;
		height: 66upx;
		margin: 0 35upx 0 82upx;
		.surplusbar-money-num {
			font-size: 32upx;
			font: bold;
			color: #333333;
		}
	}
	.surplusbar-recharge {
		display: inline-flex;
		width: 71upx;
		height: 30upx;
		border-radius: 8upx;
		border: solid 1upx #fcb365;
		.surplusbar-recharge-text {
			font-family: MicrosoftYaHei;
			font-size: 20upx;
			font-weight: normal;
			font-stretch: normal;
			letter-spacing: 0upx;
			color: #fcb365;
			text-align: center;
		}
	}
}
.recentbar {
	padding: 16upx 82upx;
}
.payrecorderbar {
	padding: 16upx 82upx;
	border-top: 1upx solid #c8c7cc;
	.payrecorderbar-time {
		width: 250upx;
		// height: 19upx;
		background-color: #c8c7cc;
		font-family: MicrosoftYaHei;
		font-size: 19upx;
		font-weight: normal;
		font-stretch: normal;
		letter-spacing: 0upx;
		color: #fefdfd;
	}
	.payrecorderbar-content {
		margin-top: 16upx;
		padding: 5upx 8upx;
		width: 608upx;
		// height: 186upx;
		background-color: #F5F5F5;
		border-radius: 9upx;
		// border: solid 1upx #d3cbe2;
		// opacity: 0.36;
		.payrecorderbar-content-account{
			border-top: solid 1px #F1F1F1;
			// opacity: 0.08;
			font-size: 16upx;
			
		}
	}
}
</style>
