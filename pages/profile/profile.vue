<template>
	<view>
		<!-- 背景图 -->
		<view class="profile-bg flex"><image class="profile-bg-img" :src="userInfo.profileImg"></image></view>
		<view class="statusbar"></view>
		<!-- 头部导航 -->
		<view class="flex profilebar align-center justify-between">
			<view class="flex align-start">
				<navigator url="profileSetting" hover-class="other-navigator-hover">
					<image class="profilenav-ico" src="../../static/images/profileTopIco/setting.png"></image>
				</navigator>
			</view>
			<view class="flex align-end">
				<navigator url="profileInfo" hover-class="other-navigator-hover"><image class="profilenav-ico" src="../../static/images/profileTopIco/info.png"></image></navigator>
			</view>
		</view>

		<!-- 个人信息 -->
		<view class="flex profile-detail flex-direction align-center text-white justify-between">
			<view class="text-lg">我的</view>
			<view class="" @click="loginClick"><image class="profile-detail-img round" :src="userInfo.profileImg" /></view>
			<view class="">
				{{ userInfo.userName }}
				<image class="profile-detail-seximg" src="/static/images/profileIco/gilr.png" />
			</view>
			<view class="text-xs">{{ userInfo.intro }}</view>
			<!-- 顶回设备状态栏 -->
			<!-- <view class="statusbar2"></view> -->
		</view>

		<view class="profile-content">
			<view class="profile-statusbar flex flex--rowdirection justify-around">
				<view class="profile-statusbar-box bg-white flex flex-direction justify-center">
					<view class="flex  align-center">
						<view class="flex-sub flex flex-direction align-center" v-for="(item, index) in profileStatusList" :key="index">
							<navigator navigator :url="item.url" hover-class="other-navigator-hover">
								<view class="text-xs text-gray flex-cc" v-if="index === 0">{{ userInfo.goodNum }}</view>
								<view class="text-xs text-gray flex-cc" v-if="index === 1">{{ userInfo.followNum }}</view>
								<view class="text-xs text-gray flex-cc" v-if="index === 2">{{ userInfo.fansNum }}</view>
								<view class="text-xs text-gray flex-cc" v-if="index === 3">100</view>
								<view class="text-df text-bold text-black">{{ item.title }}</view>
							</navigator>
						</view>
					</view>
				</view>
			</view>
			<view class="whitebar bg-white"></view>
			<!-- 列表导航 -->
			<view class="padding-sm bg-white" v-for="(listNavitem, listNavIndex) in listNav" :key="listNavIndex">
				<view class="bg-white padding-xs listbox">
					{{ listNavitem.itemtItle }}
					<view class="flex-bc padding-sm">
						<view class="flex-sub flex-bc" v-for="(item, index) in listNavitem.content" :key="index">
							<view class="flex-bc" @click="goToPage(item.url)">
								<image class="icoSize magin-lr-4" :src="item.icoSrc" />
								<view>{{ item.title }}</view>
							</view>
						</view>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
const util = require('../../util/util.js');
import topStatus from '../../components/topStatus/topStatus.vue';
import topTab from '../../components/topTab/topTab.vue';
import profileWallet from './profileWallet/profileWallet.vue';
import profileOrder from './profileOrder/profileOrder.vue';
import profileTrends from './profileTrends/profileTrends.vue';
import { reqUserInfo } from '../../api/';
export default {
	components: {
		topStatus,
		topTab,
		profileWallet,
		profileOrder,
		profileTrends
	},
	data() {
		return {
			userInfo: {
				userName: '未设置',
				age: '',
				sex: '',
				birthday: '',
				intro: '',
				balance: '0.00',
				profileImg: this.bgImgUrl, // 头像
				region: 'null',
				collectionNum: '0',
				fansNum: '0',
				followNum: '0',
				goodNum: '0'
			},
			profileStatusList: [
				{ title: '赞', url: '' },
				{ title: '关注', url: 'profileFollow' },
				{ title: '粉丝', url: 'profileFollow' },
				{ title: '收藏', url: 'profileCollection' }
			],
			listNav: [
				{
					itemtItle: '消费',
					content: [{ title: '钱包', icoSrc: '/static/images/profileIco/wallet.png',url:""}, { title: '订单', icoSrc: '/static/images/profileIco/order.png',url:"./profileOrder/profileOrder"}]
				},
				{
					itemtItle: '书籍发布',
					content: [{ title: '捐书', icoSrc: '/static/images/profileIco/donate.png',url:'profileDonate' }, { title: '卖书', icoSrc: '/static/images/profileIco/books.png',url:'profileBook' }]
				},
				{
					itemtItle: '我的动态',
					content: [{ title: '动态记录', icoSrc: '/static/images/profileIco/dynamic.png',url:'profileDynamic' }]
				}
			]
		};
	},
	// onLoad(e) {},
	onShow() {
		uni.setStorageSync("currentBmTab","profile")
	},
	async onLoad() {
		var userObj = this.userInfo;
		var userId = uni.getStorageSync('globalUser');
		// var userId = uni.getStorageSync('globalUser');
		console.log(userId);
		// console.log(userId)
		var jsonData = {
			userId: userId
		};
		// console.log(jsonData);
		// var DataStr = JSON.stringify(jsonData);
		// console.log(DataStr);
		const res = await reqUserInfo(jsonData);
		console.log(res);
		try {
			if (res.data.meta.success == true) {
				var userData = res.data.data;
				uni.setStorageSync('userInfo', userData);
				userObj.userName = userData.userName;
				userObj.sex = userData.sex;
				if (userData.profileImg != '') {
					userObj.profileImg = userData.profileImg;
				}
				userObj.intro = userData.intro;
				userObj.goodsNum = userData.goodsNum;
				userObj.followNum = userData.followNum;
				userObj.fansNum = userData.fansNum;
			}
		} catch (e) {
			// error
		}
	},
	onHide() {},
	methods: {
		loginClick() {
			uni.navigateTo({
				url: '../login/login'
			});
		},
		goToPage(url){
			uni.navigateTo({
				url
			})
		}
	}
};
</script>
<style>
page {
	background-color: #ffffff;
	position: absolute;
	z-index: 1;
}
.listbox {
	border-radius: 10upx;
	box-shadow: 2px 2px 5px 1px rgba(0, 0, 0, 0.1);
}
.icoSize {
	height: 40upx;
	width: 40upx;
}
</style>
<style lang="scss">
// $status_height:var(--statusbar-height);
.statusbar {
	height: var(--status-bar-height);
	width: 100%;
	opacity: 0;
}
// .statusbar2 {
//     height: var(--statusbar-height)/2;
//     width: 100%;
//     // background-color: #F8F8F8;
// 	opacity: 0;
// }
// 头部导航
.profilebar {
	height: 60upx;
	width: 100%;
	padding: 0 34upx;
	z-index: 1;
	position: absolute;
	.profilenav-ico {
		height: 44upx;
		width: 44upx;
	}
}
// 头像背景图
.profile-bg {
	z-index: -1;
	position: absolute;
	width: 100%;
	// flex-grow: 1;
	height: 480upx;
	.profile-bg-img {
		flex-grow: 1;
		opacity: 0.6;
	}
}
// 用户信息详细
.profile-detail {
	padding-top: 20upx;
	height: 340upx;
	// position: relative;
	.profile-detail-text {
	}
	.profile-detail-img {
		height: 180upx;
		width: 180upx;
	}
	.profile-detail-seximg {
		margin-left: 10upx;
		height: 28upx;
		width: 28upx;
	}
}
.profile-content {
	// margin-top: -150upx;
	// position: relative;
	.profile-statusbar {
		margin-bottom: -40upx;
		// position: absolute;
		// z-index: 1;

		.profile-statusbar-box {
			border-top-left-radius: 40upx;
			border-top-right-radius: 40upx;
			border-bottom-left-radius: 10upx;
			border-bottom-right-radius: 10upx;
			height: 80upx;
			width: 80%;
			box-shadow: 4upx 4upx 10upx 2upx rgba(0, 0, 0, 0.1);
		}
	}

	.whitebar {
		border-top-left-radius: 90%;
		border-top-right-radius: 90%;
		height: 100upx;
		width: 100%;

		// margin-top: -40upx;
	}
	.tab-style {
		background-color: #effofo;
		// height: 50upx;
		// margin-top: -40upx;
	}
}
</style>
