<template>
	<view class="flex flex--rowdirection text-xs text-gray">
		<view class="flex  flex--rowdirection flex-treble">
			<view class="img-font">
			<text class="iconfont icondianzanjihuob fontIcoColor_red "></text>
			<text class="text-cut ">100000000000</text>
			</view>

			<view class="img-font">
				<text class="iconfont iconxingxing fontIcoColor_yellow"></text>
				<text class="text-cut">3.4万</text>
				
				</view>
		</view>

		<view class="flex  flex--rowdirection flex-sub">
			
			<view class="flex align-center flex-sub">
				<text class="iconfont iconzhuanfa00 fontIcoColor_gray"></text>
			</view>
			<view class="img-font flex-twice">
				
				<text class="iconfont iconpinglun"></text>
				<text class="text-cut">100000000000000</text>
				</view>
		</view>
	</view>
</template>

<script>
export default {
	data() {
		return {};
	},

	computed: {}
};
</script>

<style>
@import url('../../static/iconfont.css');
.img-font {
	//设好宽高
	width: 120rpx;
	height: 80rpx;

	display: flex;

	//水平方向元素居中，两边留白
	/* justify-content: center; */

	//垂直方向元素居中，两边留白
	align-items: center;
}
//子元素就设好宽高就可以了...

.fontIcoColor_red{
	color: #d81e06;
}
.fontIcoColor_yellow{
	color: #f4ea2a;
}
.fontIcoColor_gray{
	color: #333333;
}

</style>
