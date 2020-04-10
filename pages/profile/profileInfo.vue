<template>
	<view>
		<topStatus></topStatus>
		<topBar :title="'个人信息'" :showBottom="true"></topBar>
		<view class="infolist">
			<view
				class="infolistbar flex justify-between align-center"
				v-for="(item, index) in infoList"
				:key="index"
				:class="index % 2 == 0 ? 'bg-white' : 'list-grey'"
				@click="showDash(infoList, index)"
			>
				<view class="content">
					<text class="content-text">{{ item.title }}</text>
				</view>
				<view class="action flex align-center">
					<image :src="item.avatorUrl" class="action-avator" v-if="index === 0"></image>
					<text class="action-text text-grey text-sm" v-if="index === 1">{{ item.nickName }}</text>
					<text class="action-text text-grey text-sm" v-if="index === 2">{{ item.sex }}</text>
					<text class="action-text text-grey text-sm" v-if="index === 3">{{ item.position }}</text>
					<text class="action-text text-grey text-sm" v-if="index === 4">{{ item.content }}</text>
					<image class="action-arrow" src="/static/images/arrow/rightArrow.png"></image>
				</view>
			</view>
		</view>
		<view :class="showDashBg ? 'bg-dash' : ''" @click="showDash"></view>
		<view class="activebar" v-if="showDashBg">
			<view class="activebar-box  flex flex-direction justify-between">
				<view class="activebar-box-top flex justify-between align-center">
					<view class="activebar-box-top-title">{{ activebarTitle }}</view>
					<view class="activebar-box-top-bnwrap" @click="submitClick"><button type="primary" class="activebar-box-top-bnwrap-bn">确定</button></view>
				</view>
				<view class="activebar-box-bottom  flex justify-start align-center">
					<view class="activebar-box-bottom-imgbox" v-if="hasPositionIco"><image class="activebar-box-bottom-imgbox-img" src="/static/logo.png"></image></view>
					<view class="activebar-box-bottom-wrap flex-twice">
						<input v-if="isNickName" class="activebar-box-bottom-wrap-input" :value="inputValue" maxlength="6" />
						<input v-if="isPosition" class="activebar-box-bottom-wrap-input" :value="inputValue" maxlength="2" />
						<input v-if="isSign" class="activebar-box-bottom-wrap-input" :value="inputValue" maxlength="17" />
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
import topBar from '../../components/topBar/topBar.vue';
import infoList from '../../components/infoList/infoList.vue';
import topStatus from '../../components/topStatus/topStatus.vue';
import { reqModifiedInfo, reqAvatorImg } from '../../api/';
export default {
	components: { topBar, infoList, topStatus },
	data() {
		return {
			// menuArrow: true,
			infoList: [
				{ title: '头像', avatorUrl: '' },
				{ title: '昵称', nickName: '未设置' },
				{ title: '性别', sex: '未设置' },
				{ title: '地区', position: '未设置' },
				{ title: '个性签名', content: '未设置' }
			],
			showDashBg: false,
			activebarTitle: '',
			hasPositionIco: false,
			inputValue: '',
			isNickName: false,
			isPosition: false,
			isSign: false
		};
	},
	onLoad() {
		var AvatorImg = uni.getStorageSync('AvatorImg');
		var userId = uni.getStorageSync('globalUser');
		var imgJson = {
			userId: userId,
			// userPicture: AvatorImg
		};
		// var imgData = JSON.stringify(imgJson);
		console.log(AvatorImg);
		uni.uploadFile({
			url: 'http://49.234.200.228:8080/shuzhai/userinfo/picture',
			name: 'userPicture',
			filePath: AvatorImg,
			formData: {
				'userId': userId,
			},
			success: function(data) {
				//成功的回调函数
				console.log(data);
			}
		});
	},
	async onShow() {
		var userObj = this.infoList;
		var userId = uni.getStorageSync('globalUser');
		var userData = uni.getStorageSync('userInfo');
		
		
		// var imgData = JSON.stringify(imgJson);
		// var res = await reqAvatorImg(imgJson);
		// console.log('图片返回', res);
		

		if (userData.profileImg != '') {
			userObj[0].avatorUrl = userData.profileImg;
			// userObj[0].avatorUrl = AvatorImg;
		}
		userObj[1].nickName = userData.userName;
		userObj[2].sex = userData.sex;
		userObj[4].content = userData.intro;
		userObj[3].position = userData.region;
	},
	watch: {},
	methods: {
		/* 点击事件显示背景并显示资料在小弹窗 */
		showDash(infoList, index) {
			this.showDashBg = !this.showDashBg;
			this.isNickName = false;
			this.isPosition = false;
			this.isSign = false;
			this.hasPositionIco = false;
			this.inputValue = '';
			if (index == 0) {
				this.showDashBg = !this.showDashBg;
				uni.navigateTo({
					url: '/pages/profile/avatorSetting'
				});
			}
			if (index == 1) {
				this.isNickName = true;
				this.activebarTitle = '请修改昵称';
				this.inputValue = infoList[index].nickName;
			}
			if (index == 2) {
				this.showDashBg = !this.showDashBg;
			}
			if (index == 3) {
				this.isPosition = true;
				this.activebarTitle = '自动定位';
				this.hasPositionIco = true;
				this.inputValue = infoList[index].position;
			}
			if (index == 4) {
				this.isSign = true;
				this.activebarTitle = '请修改个性书签';
				this.inputValue = infoList[index].content;
			}
		},
		async submitClick() {
			var userID = uni.getStorageSync('globalUser');
			var userObj = this.infoList;
			// console.log(userObj)
			// console.log(userObj.nickName)
			var jsonData = {
				// userId:userID,
				// userName: userObj[1].nickName,
				// age: '18',
				// sex: userObj[2].sex,
				// region: userObj[3].position,
				// intro: userObj[4].content

				// profileImg: userObj[0].avatorUrl, // 头像
				userId: '2',
				userName: 'test',
				age: '18',
				sex: 'test',
				region: 'test',
				intro: 'test'
			};
			console.log('jsonData', jsonData);
			var DataStr = JSON.stringify(jsonData);
			console.log('ds', DataStr);
			var res = await reqModifiedInfo(DataStr);
		},
		updateAvatorImg(imgbase) {
			console.log('啦啦啦', imgbase);
		}
	}
	/* mounted() {
		var input = document.createElement('input');
		input.style.display = 'none';
		input.type = 'file';
		input.id = 'file';
		var _this = this;
		this.$refs.input.$el.appendChild(input);
		input.onchange = event => {
			var file = event.target.files[0];
			//上传方法
			_this.uploadAPI(file);
		};
	} */
};
</script>

<style lang="scss" scoped>
page {
	background-color: #ffffff;
}
.infolist {
	box-shadow: 0 10px 5px 0px #f1f1f1;
	margin-bottom: 5px;
	.infolistbar {
		padding: 30upx 44upx;
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
			.action-avator {
				width: 124upx;
				height: 124upx;
				border-radius: 50%;
				margin-right: 20upx;
			}
			.action-arrow {
				width: 20upx;
				height: 28upx;
				margin-left: 20upx;
			}
		}
	}
}
.bg-dash {
	position: absolute;
	width: 100%;
	height: 100%;
	top: 0;
	left: 0;
	background-color: rgba(0, 0, 0, 0.15);
	z-index: 1;
}
.activebar {
	padding: 40upx;
	position: absolute;
	width: 100%;
	height: 180upx;
	top: 90upx;
	left: 0;
	z-index: 2;

	.activebar-box {
		border-radius: 5upx;
		background-color: #ffffff;
		padding: 36upx 40upx;
		width: 100%;
		height: 180upx;
		border-radius: 20upx;
		.activebar-box-top {
			padding-right: 20upx;
			.activebar-box-top-title {
				font-size: 28upx;
				font-weight: bold;
			}
			.activebar-box-top-bnwrap {
				// background-color: #007AFF;
				.activebar-box-top-bnwrap-bn {
					font-size: 10upx;
					padding: 10upx 28upx;
					line-height: 20upx;
					// background-color: #0081FF;
					color: #ffffff;
					&:after {
						border: 0px none;
					}
				}
			}
		}
		.activebar-box-bottom {
			.activebar-box-bottom-imgbox {
				margin-right: 10upx;
				.activebar-box-bottom-imgbox-img {
					height: 20upx;
					width: 20upx;
				}
			}
			.activebar-box-bottom-wrap {
				.activebar-box-bottom-wrap-input {
					font-size: 20upx;
					color: #c0c0c0;
					border-bottom: 2upx solid #c8c7cc;
					letter-spacing: 4upx;
				}
			}
		}
	}
}
</style>
