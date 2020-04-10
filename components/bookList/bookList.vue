<template>
	<view>
		<view class="cu-bar bg-white">
			<view class="action">
				<view class="">
					<text class="cuIcon-titles text-blue"></text>
					<text class="text-xl text-bold text-black">青春文学</text>
					<text class="sc-magin-left-15 text-xs">当我们在一起，其快乐无比</text>
				</view>
				<view class="sc-magin-left-20">
					<text>查看更多</text>
					<text class="cuIcon-moreandroid"></text>
				</view>
			</view>
		</view>

		<view class="book-showbar flex justify-between bg-white">
			<view class="book-show" v-for="(item, index) in list" :key="index">
				<image class="book-show-img" src="../../static/logo.png"></image>
				<view class=" book-font  text-cut">
					<text class="text-bold  text-df text-black">{{ item.txt_1 }}</text>
				</view>
				<view class=" book-font  text-cut">
					<text class="text-gray text-xs ">{{ item.txt_2 }}</text>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
export default {
	
	data: function () {
		return {
			list: [
				{
					txt_1: '总要一个习惯安防监控看',
					txt_2: '总要一个习惯安防监控看'
				},
				{
					txt_1: '总要一个习惯安防监控看',
					txt_2: '总要一个习惯安防监控看'
				},
				{
					txt_1: '总要一个习惯安防监控看',
					txt_2: '总要一个习惯安防监控看'
				}
			]
		}
	}
};
</script>

<style lang="scss">
.sc-magin-left-15 {
	margin-left: 30upx;
}
.sc-magin-left-20 {
	margin-left: 40upx;
}
.book-showbar {
	padding: 10upx 60upx;
	.book-show {
		// width: 200upx;
		// height: 350upx;
		.book-font {
			width: 200upx;
		}
		.book-show-img {
			width: 160upx;
			height: 210upx;
		}
	}
}
</style>
