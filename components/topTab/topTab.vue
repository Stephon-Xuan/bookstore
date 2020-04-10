<template>
	<view>
		<view class="navtab-box">
			<!-- 标题数量小于5 -->
			<view class="short-tab" v-if="tabTitle.length <= 5">
				<!-- 导航栏 -->
				<view class="navtab bg-white">
					<view v-for="(item, index) in tabTitle" :key="index" class="navtab-item" :class="index === tabClick ? 'click' : ''" @click="navClick(index)">
						<!-- <image class="tab-img" src="../../static/logo.png"/> -->
						{{ item }}
					</view>
				</view>
				<!-- 响应的index下划线 -->
				<view class="underline-box" :style="'transform:translateX(' + isLeft + 'px);width:' + isWidth + 'px'"><view class="underline"></view></view>
			</view>
		</view>
	</view>
</template>

<script>
const util = require('../../util/util.js'); //防抖动函数
export default {
	name: 'navtab',
	props: {
		tabTitle: {
			type: Array
			// default: []
		}
	},
	data() {
		return {
			tabClick: 0, //导航栏被点击
			isLeft: 0, //导航栏下划线位置
			isWidth: 0 //每个导航栏占位
		};
	},
	created() {
		var that = this;
		// 获取设备宽度
		uni.getSystemInfo({
			success(e) {
				that.isWidth = e.windowWidth / that.tabTitle.length; //宽度除以导航标题个数=一个导航所占宽度
				that.isLongWidth = e.windowWidth / 5;
			}
		});
		this.toView = 'id0';
	},
	methods: {
		/* 导航栏点击 */
		navClick(index) {
			this.$parent.currentTab = index;
			this.$emit('changeTab', index); //设置swiper的第几页
			this.tabClick = index; //设置导航点击了哪一个
			this.isLeft = index * this.isWidth; //设置下划线位置
		}
	}
};
</script>

<style lang="scss">
.navtab-box {
	width: 100vw;
	// color: rgba(255, 255, 255, 0.50);
	color: #555555;
	.click {
		color: #69bde9;
	}
	.short-tab {
		width: 100%;
		.navtab {
			display: flex;
			width: 100%;
			height: 90upx;
			position: relative;
			.navtab-item {
				display: flex;
				align-items: center;
				justify-content: center;
				width: 100%;
				font-size: 28upx;
				.tab-img {
					width: 24upx;
					height: 24upx;
				}
			}
		}
		.underline-box {
			height: 6upx;
			display: flex;
			align-content: center;
			justify-content: center;
			transition: 0.5s;
			.underline {
				width: 84upx;
				height: 6upx;
				background-color: #69bde9;
			}
		}
	}
}
</style>
