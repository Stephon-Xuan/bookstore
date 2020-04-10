<template name="sunui-grand">
	<view>
		<view v-show="isHide">
			<view class="sunui-grand-hide-bg" :style="'background-color:' + bg + ';'">
				<view class="sunui-grand-summary" :style="'-webkit-line-clamp:' + clamp + ';'">{{ content }}</view>
				<view class="sunui-grand-show-btn" :style="'top:' + (clamp - 1) + 'upx;height:' + clamp / 2 + 'upx;'" v-show="clamp >= 3">
					<view @tap="show" :style="{ color: color }">
						<text>{{ expandText }}</text>
					</view>
				</view>
			</view>
		</view>
		<view v-show="!isHide">
			<view class="sunui-grand-show-bg" :style="'background-color:' + bg + ';'">
				<view class="sunui-grand-summary">{{ content }}</view>
				<view class="sunui-grand-hide-btn" v-show="shinkText != ''">
					<view @tap="hide" :style="{ color: color }">{{ shinkText == 'true' || shinkText == true ? '' : shinkText }}</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
var _self;
export default {
	data() {
		return {
			isHide: true
		};
	},
	name: 'sunui-grand',
	props: {
		clamp: {
			type: [Number, String],
			default: `4`
		},
		color: {
			type: String,
			default: `#A0E4D6`
		},
		content: {
			type: [String, Object],
			default: ``
		},
		bg: {
			type: String,
			default: `#FFFFFF`
		},
		expandText: {
			type: String,
			default: '展开'
		},
		shinkText: {
			type: String,
			default: '点击收起全文'
		}
	},
	created() {
		_self = this;
	},
	methods: {
		show() {
			let _this = this;
			_this.isHide = false;
		},
		hide() {
			let _this = this;
			_this.isHide = true;
		}
	}
};
</script>

<style>

.sunui-grand-hide-bg {
	background-color: #e9ecef;
	/* padding: 4%; */
	padding-bottom: 0;
	position: relative;
}

.sunui-grand-show-bg {
	background-color: #e9ecef;
	/* padding: 4%; */
}

.sunui-grand-summary {
	overflow: hidden;
	text-overflow: clip;
	display: -webkit-box;
	-webkit-box-orient: vertical;
	font-size: 28upx;
	line-height: 40upx;
	letter-spacing: 4upx;
	color: #656565;
}

.sunui-grand-show-btn {
	/* width: 100%;
		position: absolute;
		left: 0;
		z-index: 0;
		text-align: center;
		background-image: linear-gradient(-180deg, rgba(233, 236, 239, 0) 0%, #fff 80%);
		padding-top: 3rem; */
	/* margin-top: -40upx; */
	/* margin-left: -100upx; */
	text-align: right;
}

.sunui-grand-hide-btn {
	text-align: center;
}
</style>
