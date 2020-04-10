<template>
	<view class="cart-item bg-white sc-magin-button-10">
		<image class="img-size" src="../../static/logo.png"></image>
		<view class="item-left">
			<text class="clamp title text-lg text-left">《爱丽斯梦游仙境》</text>
			<view class="avatar"  v-if="false">
				<view class="">
					<image class="avatar-size round" src="../../static/logo.png"></image>
				</view>
				<view class="fontbar-size">
					<text class="text-cut text-sm">王生成啦啦啦啦啦啦啦</text>
				</view>
			</view>
			<text class="attr"> 文学|小说</text>
			<text class="recommend">推荐阅读书籍</text>
			<interact :isRight="false"></interact>
			
		</view>
		
	</view>
</template>

<script>
import interact from '../interact/interact.vue'
export default {
	components:{interact},
	data() {
		return {
			isCard: true
		};
	}
};
</script>

<style lang="scss">
.cart-item {
	display: flex;
	position: relative;
	padding: 30upx 40upx;
	// margin-bottom: 20upx;

	.img-size {
		height: 200upx;
		width: 200upx;
	}
	.item-left {
		display: flex;
		flex-direction: column;
		flex: 1;
		overflow: hidden;
		position: relative;
		padding-left: 30upx;
		.title,
		.price {
			// font-size:$font-base + 2upx;
			// color: $font-color-dark;
			height: 40upx;
			line-height: 40upx;
			margin-left: -12upx;
		}
		.attr {
			// font-size: $font-sm + 2upx;
			// color: $font-color-light;
			height: 50upx;
			line-height: 50upx;
			// margin-top: 50upx;
		}
		.recommend {
			height: 50upx;
			line-height: 50upx;
		}
		.avatar{
			//设好宽高
			width: 200rpx;
			height: 70rpx;
			display: flex;
			//水平方向元素居中，两边留白
			justify-content: center;
			//垂直方向元素居中，两边留白
			align-items: center;
			margin-left: 55%;
			margin-top: -10upx;
			.avatar-size{
				height: 50upx;
				width: 50upx;
			}
			.fontbar-size{
				width: 96upx
			}
		}
	}
}
</style>
