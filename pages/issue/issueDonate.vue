<template>
	<view>
		<top-status></top-status>
		<top-bar :title="'发布捐赠'" :showBottom="true"></top-bar>
		<view class="main">
			<view>图片组件</view>
			<view class="list flex-sc border-bm-small">
				<view>我要分享</view>
				<view class="margin-left-xl flex-twice"><input class="text-active" placeholder-class="text-active" type="text" placeholder="请输入书本名称,可输入多本"/></view>
			</view>
			<view class="list flex-sc border-bm-small">
				<view>书本总量</view>
				<view class="margin-left-xl flex-twice"><input class="text-active" placeholder-class="text-active" type="text" placeholder="请输入书本数量" maxlength="8"/></view>
			</view>
			<view class="list flex-bc border-bm-small">
				<view>请选择您所在城市</view>
				<view class="flex-bc">
					<view class="text-active">请选择您所在城市</view>
					<image class="arrow" src="/static/images/arrow/rightArrow.png"></image>
				</view>
			</view>
			<view class="list flex-bc border-bm-small">
				<view>社区</view>
				<view class="flex-bc">
					<view class="text-active">请选择您要分享的社区</view>
					<image class="arrow" src="/static/images/arrow/rightArrow.png"></image>
				</view>
			</view>
			<view>按钮组件</view>
		</view>
	</view>
</template>

<script>
import topStatus from '../../components/topStatus/topStatus.vue';
import topBar from '../../components/topBar/topBar.vue';
export default {
	components: {
		topStatus,
		topBar
	}
};
</script>

<style lang="scss" scoped>
page {
	background-color: #ffffff;
}
.list {
	padding: 20upx 0;
	font-family: MicrosoftYaHei;
	font-size: 28upx;
	font-weight: normal;
	font-stretch: normal;
	line-height: 40upx;
	letter-spacing: 2upx;
	color: #5D5D5D;
}
/* 图形 */
.arrow {
	height: 36upx;
	width: 36upx;
}
/* 内容 */
.main {
	padding: 20upx 40upx;
}

.text-active{
	font-size: 20upx;
	color:#E1E1E1;
}
</style>
