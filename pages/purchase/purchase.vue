<template>
	<view>
		<bgImg :imgSrc="bgImg"></bgImg>
		<top-status></top-status>
		<topBar :noColor="true" :isShare="true"></topBar>

		<view class="userbar ">
			<view class="userbar-wrapper flex justify-between align-center">
				<view class="userbar-wrapper-avatorsbar flex flex-direction-row-reverse justify-start ">
					<view class="userbar-wrapper-avatorsbar-imgbox" v-for="(item, index) in 10" :key="index">
						<image class="userbar-wrapper-avatorsbar-imgbox-img" src="/static/logo.png" v-if="index < 3" :imgIndex="index" @click="imgZIndex"></image>
					</view>
				</view>
				<view class="userbar-wrapper-total">啊那深等{{ 10 }}人卖过这本书</view>
				<view class="userbar-wrapper-imgbox"><image class="userbar-wrapper-imgbox-img" src="/static/logo.png"></image></view>
			</view>
		</view>
		<view class="describebar ">
			<view class="title">幻中大连</view>
			<view class="price flex justify-start align-center">
				￥10.80
				<text class="price-font">起</text>
				<view class="price-discount">二手6.5折</view>
			</view>
			<view class="detail">
				<view class="detail-bar">
					<text class="detail-bar-key spacing">原价：</text>
					<text class="detail-bar-value">￥18.00</text>
				</view>
				<view class="detail-bar">
					<text class="detail-bar-key spacing">作者：</text>
					<text class="detail-bar-value active">桥下</text>
				</view>
				<view class="detail-bar">
					<text class="detail-bar-key spacing">分类：</text>
					<text class="detail-bar-value">文学小说</text>
				</view>
				<view class="detail-bar">
					<text class="detail-bar-key">书籍状况：</text>
					<text class="detail-bar-value">无缺页，封面有少许污迹</text>
				</view>
				<view class="detail-bar">
					<text class="detail-bar-key">交易方式：</text>
					<text class="detail-bar-value">快递费自付</text>
				</view>
			</view>
		</view>
		<view class="buybar flex justify-between align-center">
			<view class="buybar-evaluate flex justify-start align-center">
				<view class="buybar-evaluate-star flex justify-start align-center" v-for="(item, index) in 5" :key="index">
					<image class="buybar-evaluate-star-img" src="/static/logo.png"></image>
				</view>
				<view class="buybar-evaluate-arrow flex"><image class="buybar-evaluate-arrow-img" src="/static/logo.png"></image></view>
			</view>
			<view class="buybar-shop flex justify-between align-center">
				<view class="buybar-shop-imgbox"><image class="buybar-shop-imgbox-img" src='../../static/logo.png'></image></view>
				<view class="buybar-shop-bnbox"><button class="buybar-shop-bnbox-bn">立即购买</button></view>
			</view>
		</view>
	</view>
</template>

<script>
import bgImg from '../../components/bgImg/bgImg.vue';
import topStatus from '../../components/topStatus/topStatus.vue';
import topBar from '../../components/topBar/topBar.vue';
export default {
	components: {
		bgImg,
		topStatus,
		topBar
	},
	data(){
		return{
			bgImg:this.bgImgUrl
		}
	}
};
</script>

<style lang="scss" scoped>
page {
	background-color: #ffffff;
	position: absolute;
	z-index: 1;
}
.userbar {
	margin-top: 500upx;
	padding: 0 40upx;
	.userbar-wrapper {
		padding: 20upx 0;
		border-bottom: 2upx solid #f1ebeb;
		.userbar-wrapper-avatorsbar {
			width: 140upx;
			height: 60upx;
			overflow: hidden;
			padding-left: 30upx;
			.userbar-wrapper-avatorsbar-imgbox {
				margin-left: -20upx;
				.userbar-wrapper-avatorsbar-imgbox-img {
					height: 60upx;
					width: 60upx;
					border-radius: 50%;
				}
			}
		}
		.userbar-wrapper-total {
			margin-left: -160upx;
			font-family: MicrosoftYaHei;
			font-size: 25upx;
			font-weight: normal;
			font-stretch: normal;
			line-height: 39upx;
			letter-spacing: 2upx;
			color: #5a5a5a;
		}
		.userbar-wrapper-imgbox {
			.userbar-wrapper-imgbox-img {
				width: 14upx;
				height: 33upx;
			}
		}
	}
}
.describebar {
	padding: 0 40upx;

	.title {
		font-family: MicrosoftYaHei;
		font-size: 40upx;
		font-weight: bold;
		font-stretch: normal;
		line-height: 22upx;
		letter-spacing: 3upx;
		color: #313131;
		padding: 40upx 0upx 40upx 20upx;
	}
	.price {
		font-family: MicrosoftYaHei;
		font-size: 40upx;
		font-stretch: normal;
		font-weight: bold;
		line-height: 22upx;
		letter-spacing: 3upx;
		color: #313131;
		padding: 0upx 0 40upx 0;
		.price-font {
			font-weight: normal;
			font-size: 14upx;
		}
		.price-discount {
			margin-left: 10upx;
			height: 40upx;
			width: 160upx;
			font-size: 28upx;
			color: #fbcbcd;
			text-align: center;
			line-height: 40upx;
			border: 2upx solid #fbcbcd;
		}
	}
	.detail {
		.detail-bar {
			.detail-bar-key {
				color: #c0bfbf;
				font-size: 28upx;
				&.spacing {
					letter-spacing: 14upx;
				}
			}
			.detail-bar-value {
				font-size: 28upx;
				&.active {
					color: #6ad6c5;
				}
			}
		}
	}
}
.buybar {
	padding: 0 40upx;
	position: fixed;
	bottom: 0;
	left: 0;
	width: 100%;
	height: 140upx;
	border-top: 2upx solid #f1ebeb;
	.buybar-evaluate {
		// height: 50upx;
		padding: 20upx 0;
		// border-top: 2upx solid #f1ebeb;
		.buybar-evaluate-star {
			padding: 0 4upx;
			.buybar-evaluate-star-img {
				width: 24upx;
				height: 24upx;
			}
		}
		.buybar-evaluate-arrow {
			.buybar-evaluate-arrow-img {
				width: 14upx;
				height: 33upx;
				margin-left: 16upx;
			}
		}
	}
	.buybar-shop {
		.buybar-shop-imgbox {
			margin-right: 20upx;
			.buybar-shop-imgbox-img {
				height: 40upx;
				width: 40upx;
			}
		}
		.buybar-shop-bnbox {
			.buybar-shop-bnbox-bn {
				padding: 0 40upx;
				height: 60upx;
				font-size: 24upx;
				line-height: 60upx;
				background-color: #F18180;
				color: #fff;
				border-radius: 5upx;
				&:hover {
					background-color: #ff5458;
				}
			}
		}
	}
}
</style>
