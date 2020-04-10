<template>
	<view>
	<view class="book-box flex-sc" v-if="bookData!=null&&bookData.bookPics[0]!=null">
		<view class="basis-xs"><image class="bookimg" :src="bookData.bookPics[0].picPath"></image></view>
		<view class="padding-xs self-start basis-xl">
			<view class="book-title padding-xs">{{bookData.bookName}}</view>
			<view class="book-brief flex flex-wrap padding-xs "><text class="text-cut">{{bookData.bookIntro}}</text></view>
			<!-- <view>6.2折起</view> -->
			<view class="text-lg text-red">￥{{bookData.price}}元</view>
		</view>
	</view>
	<view class="flex-cc flex-direction" v-else>
		<view>
			<image class="img-size" src="/static/images/book/none.png"></image>
		</view>
		<view>暂时未上架</view>
	</view>
	</view>
</template>

<script>
export default {
	data() {
		return {
			// bookData:data
		};
	},
	props: {
		bookData: {
			type: Object
		}
	},
	computed:{
		// book:()=>{
		// 	return this.bookData
		// }
	}
};
</script>

<style scoped>
.book-box {
	width: 100%;
}
.bookimg {
	width: 200upx;
	height: 200upx;
}
.book-title {
	font-size: 24upx;
	color: #2b2a2a;
	font-weight: bold;
}
.book-brief {
	font-size: 20upx;
	color: #c3c2bc;
	width: 90%;
}
.img-size{
	height: 140upx;
	width: 140upx;
}
</style>
