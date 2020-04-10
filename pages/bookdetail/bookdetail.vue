<template>
	<view>
		<topBar :title="'正文'"></topBar>
		<view class="wrapper">
			<view class="main">
				<view class="main-userbar flex justify-start align-center">
					<view class="main-userbar-imgbox flex justify-start"><image class="main-userbar-imngbox-img" src="/static/logo.png"></image></view>
					<view class="main-userbar-right flex justify-between align-center">
						<view class="main-userbar-right-left flex flex-direction justify-between">
							<view class="main-userbar-right-left-username">南芯</view>
							<view class="main-userbar-right-left-time">
								<text>14:17</text>
								<text class="padding-left-sm">2019/2/3</text>
							</view>
						</view>
						<view class="main-userbar-right-right"><image class="main-userbar-right-right-img" src="/static/logo.png"></image></view>
					</view>
				</view>
				<view class="main-content">
					<text>{{ content }}</text>
				</view>
				<view class="main-imgbar border-bm-small flex justify-between">
					<view class="main-imgbar-imgbox" v-for="(item, index) in 4" :key="index"><image class="main-imgbar-imgbox-img" src="/static/logo.png"></image></view>
				</view>
				<view class="mian-interactbar"><interact></interact></view>
			</view>
			<view class="rating" v-for="(item, index) in 5" :key="index">
				<view class="ratingbox-userbar flex justify-start align-start">
					<view class="ratingbox-userbar-imgbox flex justify-start"><image class="ratingbox-userbar-imngbox-img" src="/static/logo.png"></image></view>
					<view class="ratingbox-userbar-right flex justify-between align-start">
						<view class="ratingbox-userbar-right-left flex flex-direction justify-between">
							<view class="ratingbox-userbar-right-left-username">南芯</view>
							<view class="ratingbox-userbar-right-left-content content-style"><text v-for="(item, index) in 10" :key="index">孤独六讲是真的好看！</text></view>
						</view>
						<view class="ratingbox-userbar-right-right">回复</view>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
import topBar from '../../components/topBar/topBar.vue';
import grand from '../../components/sunui-grand/sunui-grand.vue';
import interact from '../../components/interact/interact.vue';
export default {
	components: {
		topBar,
		grand,
		interact
	},
	data() {
		return {
			content:
				'uni-app 是一个使用 Vue.js 开发所有前端应用的框架，开发者编写一套代码，可发布到iOS、Android、H5、以及各种小程序（微信/支付宝/百度/头条/QQ/钉钉）等多个平台，即使不跨端，uni-app同时也是更好的小程序开发框架。详见评测'
		};
	}
};
</script>

<style lang="scss" scoped>
page {
	background-color: #ffffff;
}
.wrapper {
	padding: 0 24upx;
	.main {
		background-color: #fbfbfb;
		padding: 0 24upx;
		border-bottom: 8upx solid #c8c7cc;
		.main-userbar {
			height: 120upx;
			.main-userbar-imgbox {
				width: 20%;
				.main-userbar-imngbox-img {
					width: 80upx;
					height: 80upx;
					border-radius: 50%;
				}
			}
			.main-userbar-right {
				width: 80%;
				padding: 10upx;
				border-bottom: 2upx solid #f1ebeb;
				.main-userbar-right-left {
					height: 60upx;
					.main-userbar-right-left-username {
						font-family: MicrosoftYaHei;
						font-size: 28upx;
						font-weight: normal;
						font-stretch: normal;
						letter-spacing: 0upx;
						color: #3c3c3c;
					}
					.main-userbar-right-left-time {
						font-family: MicrosoftYaHei;
						font-size: 14upx;
						font-weight: normal;
						font-stretch: normal;
						letter-spacing: 0upx;
						color: #a7a7a7;
					}
				}
				.main-userbar-right-right {
					padding: 0 20upx 20upx 0;
					.main-userbar-right-right-img {
						width: 36upx;
						height: 36upx;
					}
				}
			}
		}
		.main-content {
			overflow: hidden;
			text-overflow: clip;
			font-size: 28upx;
			line-height: 40upx;
			letter-spacing: 4upx;
			color: #656565;
			border-bottom: 2upx solid #f1ebeb;
		}
		.main-imgbar {
			.main-imgbar-imgbox {
				padding: 10upx;
				// overflow: scroll;
				.main-imgbar-imgbox-img {
					width: 139upx;
					height: 188upx;
				}
			}
		}
		.mian-interactbar {
		}
	}
	.rating {
		background-color: #fbfbfb;
		.ratingbox-userbar {
			min-height: 120upx;
			.ratingbox-userbar-imgbox {
				margin-top: 20upx;
				width: 10%;
				.ratingbox-userbar-imngbox-img {
					width: 60upx;
					height: 60upx;
					border-radius: 50%;
				}
			}
			.ratingbox-userbar-right {
				width: 90%;
				padding: 10upx;
				border-bottom: 2upx solid #f1ebeb;
				.ratingbox-userbar-right-left {
					min-height: 80upx;
					width: 90%;
					.ratingbox-userbar-right-left-username {
						font-family: MicrosoftYaHei;
						font-size: 18upx;
						font-weight: normal;
						font-stretch: normal;
						letter-spacing: 0upx;
						color: #949292;
					}
					.ratingbox-userbar-right-left-content {
						font-family: MicrosoftYaHei;
						font-size: 24upx;
						font-weight: normal;
						font-stretch: normal;
						letter-spacing: 0upx;
						color: #656565;
						line-height: 30upx;
						letter-spacing: 6upx;
						
						&.content-style {
							overflow: hidden;
							text-overflow: clip;
							
						}
					}
				}
				.ratingbox-userbar-right-right {
					// padding: 0 20upx 20upx 0;
					margin-top: 20upx;
					margin-right: 6upx;
					width: 10%;
					height: 80upx;
					font-family: MicrosoftYaHei;
					font-size: 16upx;
					font-weight: normal;
					font-stretch: normal;
					letter-spacing: 0px;
					color: #a4a1a1;
					/* .ratingbox-userbar-right-right-img {
						width: 36upx;
						height: 36upx;
					} */
				}
			}
		}
	}
}
</style>
