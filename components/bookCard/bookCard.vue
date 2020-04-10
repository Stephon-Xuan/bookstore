<template>
	<view>
		<view class="cardbox border-bm-big">
			<view class="main">
				<view class="main-userbar flex justify-start align-center">
					<view class="main-userbar-imgbox flex justify-start"><image class="main-userbar-imngbox-img" src="/static/logo.png"></image></view>
					<view class="main-userbar-right flex justify-between align-center">
						<view class="main-userbar-right-left flex  justify-between align-end">
							<view class="main-userbar-right-left-username">南芯</view>
							<view class="main-userbar-right-left-record "><text>点赞了此书单</text></view>
						</view>
						<view class="main-userbar-right-right flex justify-center">2019/2/3</view>
					</view>
				</view>
				<view class="main-content"><grand :content="'哈哈哈哈哈哈哈哈哈哈哈嘻嘻嘻嘻'"></grand></view>

				<view class="main-imgbar">
					<view class="grid flex-sub padding-lr" :class="isCard ? 'col-3 grid-square' : 'col-1'">
						<view
							class="bg-img"
							:class="isCard ? '' : 'only-img'"
							style="background-image:url(/static/logo.png);"
							v-for="(item, index) in isCard ? 6 : 1"
							:key="index"
						></view>
					</view>
				</view>
				<navigator url="../../pages/bookdetail/bookdetail"><interact></interact></navigator>
			</view>
		</view>
	</view>
</template>

<script>
import grand from '../sunui-grand/sunui-grand.vue';
import interact from '../interact/interact.vue';
export default {
	data(){
		return{
			isCard:true
		}
	},
	components: {
		grand,
		interact
	}
};
</script>

<style lang="scss" scoped>
.cardbox {
	background-color: #ffffff;
	padding: 10upx 70upx 30upx 70upx;
}
.main {
	background-color: #fbfbfb;
	padding: 0 24upx;
	width: 100%;
	.main-userbar {
		height: 120upx;
		width: 100%;
		.main-userbar-imgbox {
			width: 15%;
			.main-userbar-imngbox-img {
				width: 80upx;
				height: 80upx;
				border-radius: 50%;
			}
		}
		.main-userbar-right {
			width: 85%;
			padding: 10upx;
			border-bottom: 2upx solid #f1ebeb;
			.main-userbar-right-left {
				height: 60upx;
				padding-left: 20upx;
				.main-userbar-right-left-username {
					font-family: MicrosoftYaHei;
					font-size: 28upx;
					font-weight: normal;
					font-stretch: normal;
					letter-spacing: 0upx;
					color: #3c3c3c;
				}
				.main-userbar-right-left-record {
					margin-left: 10upx;
					font-family: MicrosoftYaHei;
					font-size: 14upx;
					font-weight: normal;
					font-stretch: normal;
					letter-spacing: 0upx;
					color: #a7a7a7;
				}
			}
			.main-userbar-right-right {
			}
		}
	}
	.main-content {
		padding: 10upx 30upx 40upx 30upx;
	}
	.main-imgbar {
		// height: 200upx;
		width: 100%;
		.main-imgbar-imgbox {
			padding: 10upx;
			// overflow: scroll;
			.main-imgbar-imgbox-img {
				width: 139upx;
				height: 180upx;
			}
		}
	}
}
</style>
