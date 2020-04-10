<!-- 已弃用组件 -->
<template>
	<view>
		<view v-for="(item,index) in infoTitle" :key="index" >
			<view class="infolistbar flex justify-between align-center" :class="item.isGrey?'list-grey':'bg-white'">
				<view class="content"><text class="content-text">{{item.title}}</text></view>
				<view class="action flex align-center">
					
					<image src="/static/logo.png" class="action-avator" v-if="item.isAvator===true"></image>
					<text class="action-text text-grey text-sm" v-else>小目标还没有实现！</text>
					<image class="action-arrow" src="/static/images/arrow/rightArrow.png"></image>
				</view>
			</view>
			
		</view>
	</view>
</template>

<script>
export default {
	data() {
		return {
			menuArrow: true,
			infoTitle:[
				{title:"头像",isAvator:true},
				{title:"昵称",isGrey:true},
				{title:"性别"},
				{title:"地区",isGrey:true},
				{title:"个性签名"},
			]
		}
		
	},
	props:{
		Infolist:Array
	}
};
</script>

<style lang="scss">
.infolistbar {
	padding: 30upx 20upx;
	.content {
		.content-text {
			font-family: MicrosoftYaHei;
			font-size: 28upx;
			font-weight: bold;
			font-stretch: normal;
			letter-spacing: 0upx;
			color: #3f3f3f;
		}
	}
	.action {
		.action-text {
			font-family: MicrosoftYaHei;
			font-size: 28upx;
			font-weight: bold;
			font-stretch: normal;
			letter-spacing: 0upx;
			color: #d3d3d3;
		}
		.action-avator{
			width: 124upx;
			height: 124upx;
			border-radius:50%;
			margin-right:20upx;
		}
		.action-arrow {
			width: 20upx;
			height: 28upx;
		}
	}
}

/* 列表颜色 */
/* .list-grey{
	background-color: #F4F7F6;
} */
</style>
