<template>
	<view>
		<top-status></top-status>
		<top-bar :title="'图书捐赠项目'" :showBottom="true"></top-bar>
		<view class="donate">
			<view class="donate-item flex justify-center align-center" v-for="(item, index) in 10" :key="index">
				<view class="donate-item-imgbox"><image class="donate-item-imgbox-img" :src="bgImg" /></view>
				<view class="donate-item-content flex flex-direction justify-between">
					<view class="content-top flex justify-between">
						<view class="content-top-left">公益项目</view>
						<view class="content-top-right">甘肃</view>
					</view>
					<view class="content-bottom">
						<view class="content-bottom-title flex flex-direction">掌阅图书馆</view>
						<view class="content-bottom-bm flex justify-between align-center">
							<view class="content-bottom-bm-action flex justify-start">
								<view class="action-item flex flex-direction justify-between align-center">
									<view class="action-item-title">筹书目标</view>
									<view class="action-item-num">650本</view>
								</view>
								<view class="action-item flex flex-direction justify-between align-center">
									<view class="action-item-title">已捐赠</view>
									<view class="action-item-num">650本</view>
								</view>
							</view>
							<view class="content-bottom-bm-bn">捐献书籍</view>
						</view>
					</view>
				</view>
				<view class="donate-arrow flex  align-center"><image class="donate-arrow-img" src="/static/images/arrow/db-right-arrow.png" @click="detailClick"/></view>
			</view>
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
	},
	methods:{
		detailClick(){
			uni.navigateTo({
				url:'donateDetail'
			})
		}
	}
};
</script>

<style lang="scss" scoped>
page {
}
.donate {
	padding: 30upx 60upx;
	background-color: #ffffff;
	width: 100%;
	.donate-item {
		height: 400upx;
		margin-bottom: 20upx;
		position: relative;
		width: 100%;
		.donate-item-imgbox {
			height: 400upx;
			width: 100%;
			opacity: 0.6;
			.donate-item-imgbox-img {
				height: 400upx;
				width: 100%;
			}
		}
		.donate-item-content {
			position: absolute;
			z-index: 1;
			height: 400upx;
			width: 100%;
			padding: 30upx;
			.content-top {
				height: 40upx;
				.content-top-left {
					font-family: MicrosoftYaHei;
					font-size: 25upx;
					font-weight: bold;
					font-stretch: normal;
					letter-spacing: 0upx;
					color: #9c3636;
				}
				.content-top-right {
					font-family: MicrosoftYaHei;
					font-size: 23upx;
					font-weight: bold;
					font-stretch: normal;
					letter-spacing: 0upx;
					color: #3e3e3e;
				}
			}
			.content-bottom {
				.content-bottom-title {
					font-family: MicrosoftYaHei;
					font-size: 31upx;
					font-weight: bold;
					font-stretch: normal;
					letter-spacing: 0upx;
					color: #fdfdfd;
				}
				.content-bottom-bm {
					.content-bottom-bm-action {
						.action-item {
							margin: 40upx 0upx 0upx 10upx;
							.action-item-title {
								font-size: 18upx;
								font-weight: bold;
								font-stretch: normal;
								letter-spacing: 0rpx;
								color: #bdbcbc;
							}
							.action-item-num {
								font-size: 18rpx;
								font-weight: bold;
								letter-spacing: 0rpx;
								color: #fdfcfc;
							}
						}
					}
					.content-bottom-bm-bn {
						width: 126upx;
						height: 40upx;
						border-radius: 5upx;
						border: solid 2upx #b63232;
						font-family: MicrosoftYaHei;
						font-size: 25upx;
						font-weight: bold;
						font-stretch: normal;
						letter-spacing: 0rpx;
						color: #b63232;
						line-height: 40upx;
						text-align: center;
					}
				}
			}
		}
		.donate-arrow {
			position: absolute;
			z-index: 2;
			height: 400upx;
			right: 20upx;
			.donate-arrow-img {
				height: 40upx;
				width: 40upx;
			}
		}
	}
}
</style>
