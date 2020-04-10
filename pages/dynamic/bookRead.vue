<template>
	<view>
		<view>
			<bgImg :imgSrc="bgImg"></bgImg>
			<topStatus></topStatus>
			<topBar :noColor="true" :isShare="true"></topBar>
			<view class="describe flex flex-direction justify-between">
				<view class="describe-top">
					<view class="describe-top-imgTitle"><text>寻路人</text></view>
					<view class="describe-top-imgText"><text>关于这片土地--中国的寻梦之路</text></view>
				</view>
				<view class="describe-bottom flex  justify-between align-center">
					<view class="describe-bottom-text"><text>23人喜欢这本书</text></view>
					<view class="describe-bottom-avatorsbar flex flex-direction-row-reverse justify-start ">
						<view class="describe-bottom-avatorsbar-imgbox" v-for="(item, index) in 10" :key="index">
							<image class="describe-bottom-avatorsbar-imgbox-img" src="/static/logo.png" v-if="index < 5" :imgIndex="index" @click="imgZIndex"></image>
						</view>
					</view>
				</view>
			</view>
			<view class="bookbox">
				<view class="bookbox-top flex justify-start">
					<view class="bookbox-top-imgbox"><image class="bookbox-top-imgbox-img" src="/static/logo.png"></image></view>
					<view class="bookbox-top-textbox flex flex-direction justify-between">
						<view class="bookbox-top-textbox-text">
							<view class="bookbox-top-textbox-text-title"><text>寻路中国</text></view>
							<view class="bookbox-top-textbox-text-author"><text>彼得海勒斯</text></view>
						</view>
						<view><interact></interact></view>
					</view>
				</view>
				<view class="bookbox-bottom">
					<grand
						:clamp="3"
						:content="
							'偶发哦骄傲解放军哦怕警方破案金佛评价反反复复烦烦烦烦烦烦烦烦烦烦烦烦烦烦烦反反复复烦烦烦烦烦烦烦烦烦烦烦烦烦烦烦反反复复烦烦烦烦烦烦烦烦烦烦烦烦烦烦烦反反复复烦烦烦烦烦烦烦烦烦烦烦烦烦烦烦'
						"
					></grand>
				</view>
			</view>

			<view class="purchasebar flex justify-center"><button class="purchasebar-bn" @click="purchase">购买</button></view>
		</view>
	</view>
</template>

<script>
import topStatus from '../../components/topStatus/topStatus.vue';
import topBar from '../../components/topBar/topBar.vue';
import bgImg from '../../components/bgImg/bgImg.vue';
import interact from '../../components/interact/interact.vue';
import grand from '../../components/sunui-grand/sunui-grand.vue';
export default {
	components: {
		topStatus,
		topBar,
		bgImg,
		interact,
		grand
	},
	data() {
		return {
			bgImg:this.bgImgUrl
		};
	},
	methods:{
		purchase(){
			uni.navigateTo({
				url:"../purchase/purchase"
			})
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
/* 书籍简介和点赞人数 */
.describe {
	padding: 0 58upx 48upx 58upx;
	height: 440upx;
	.describe-top {
		.describe-top-imgTitle {
			padding-bottom: 57upx;
			font-family: MicrosoftYaHei;
			font-size: 50upx;
			font-weight: normal;
			font-stretch: normal;
			line-height: 39upx;
			letter-spacing: 5upx;
			color: #ffffff;
		}
		.describe-top-imgText {
			font-family: MicrosoftYaHeiLight;
			font-size: 31upx;
			font-weight: normal;
			font-stretch: normal;
			line-height: 39upx;
			letter-spacing: 3upx;
			color: #ffffff;
		}
	}
	.describe-bottom {
		.describe-bottom-text {
			font-family: MicrosoftYaHeiLight;
			font-size: 28upx;
			font-weight: normal;
			font-stretch: normal;
			line-height: 39upx;
			letter-spacing: 3upx;
			color: #ffffff;
		}
		.describe-bottom-avatorsbar {
			width: 234upx;
			height: 60upx;
			overflow: hidden;
			padding-left: 30upx;
			.describe-bottom-avatorsbar-imgbox {
				margin-left: -20upx;

				.describe-bottom-avatorsbar-imgbox-img {
					height: 60upx;
					width: 60upx;
					border-radius: 50%;
				}
			}
		}
	}
}
/* 书籍详细 */
.bookbox {
	background-color: #ffffff;
	padding: 10upx 58upx 48upx 58upx;
	.bookbox-top {
		padding: 0 20upx 20upx 20upx;
		.bookbox-top-imgbox {
			width: 138upx;
			height: 200upx;
			margin-right: 20upx;
			.bookbox-top-imgbox-img {
				width: 138upx;
				height: 200upx;
			}
		}
		.bookbox-top-textbox {
			height: 200upx;
			// padding-top: 20upx;
			.bookbox-top-textbox-text {
				.bookbox-top-textbox-text-title {
					font-family: MicrosoftYaHei;
					font-size: 36upx;
					font-weight: normal;
					font-stretch: normal;
					line-height: 36upx;
					letter-spacing: 3upx;
					color: #363636;
					padding: 20upx 0;
				}
				.bookbox-top-textbox-text-author {
					font-family: MicrosoftYaHei;
					font-size: 28upx;
					font-weight: normal;
					font-stretch: normal;
					line-height: 28upx;
					color: #cccccc;
				}
			}
		}
	}
}
/* 购买键 */
.purchasebar {
	.purchasebar-bn {
		padding: 0 80upx;
		height: 80upx;
		font-size: 40upx;
		line-height: 80upx;
		background-color: #4d96e6;
		color: #fff;
		border-radius: 500upx;
		&:hover {
			background-color: #5959cc;
		}
	}
}
</style>
