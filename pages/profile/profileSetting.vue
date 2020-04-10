<template>
	<view>
		<topStatus></topStatus>
		<topBar :title="'设置'" :showBottom="true"></topBar>
		<view class="settinglist flex justify-between align-center" v-for="(item, index) in settingList" :key="index" :class="index % 2 == 0 ? 'bg-white' : 'list-grey'">
			<view class="settinglist-text">{{ item.title }}</view>
			<view class="settinglist-imgbox"><image class="settinglist-imgbox-img" src="/static/images/arrow/rightArrow.png"></image></view>
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
		
	},
	data() {
		return {
			settingList: [{ title: '消息提醒' }, { title: '亮度调节' }, { title: '意见反馈' }, { title: '切换账号' }, { title: '版本更新' }, { title: '关于我们' }]
		};
	}
};
</script>

<style lang="scss">
page {
	background-color: #ffffff;
}
.settinglist {
	padding: 30upx;
	.settinglist-text {
		font-family: MicrosoftYaHei;
		font-size: 28upx;
		font-weight: bold;
		font-stretch: normal;
		letter-spacing: 0upx;
		color: #3f3f3f;
	}
	.settinglist-imgbox {
		.settinglist-imgbox-img {
			width: 20upx;
			height: 28upx;
		}
	}
}
.bg-dash {
	position: absolute;
	width: 100%;
	height: 100%;
	top: 0;
	left: 0;
	background-color: rgba(0, 0, 0, 0.5);
	z-index: 1;
}
</style>
