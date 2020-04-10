<template>
	<view>
		<topStatus></topStatus>
		<view class="lgrg-top-nav padding-lr-sm flex flex--rowdirection justify-between align-center">
			<navigator open-type="navigateBack" hover-class="none"><image class="lgrg-top-nav-img" src="/static/images/login/shutDown.png"></image></navigator>
			<view class="lgrg-top-nav-textbox text-center">
				<navigator url="../register/register" hover-class="none"><text class="lgrg-top-nav-textbox-text">注册</text></navigator>
			</view>
		</view>
		<view class="lgrg-title">
			<view class="lgrg-title-big text-bold">账号快捷登录</view>
			<view class="lgrg-title-small">未注册过的账号自动注册</view>
		</view>
		<form @submit="LoginFormSubmit" v-if="pageOne">
			<view class="lgrg-content  flex flex-direction justify-around align-center shadow-blur">
				<view class="lgrg-content-input flex align-center justify-start"><input class="text-xs" name="telephone" type="number" placeholder="请输入账号" /></view>
				<view class="lgrg-content-input flex align-center justify-start"><input class="text-xs" name="password" type="number" placeholder="请输入密码" /></view>
				<view class="lgrg-content-bottonbox">
					<button class="lgrg-content-bottonbox-button" form-type="submit">登录</button>
					<view class="text-center"><text @click="pageChange">手机号登录</text></view>
				</view>
			</view>
		</form>
		<view class="lgrg-content  flex flex-direction justify-around align-center shadow-blur" v-else>
			<view class="lgrg-content-input flex align-center justify-start"><input class="text-xs" type="number" placeholder="请输入手机号" /></view>
			<view class="lgrg-content-input flex align-center justify-start">
				<input class="text-xs" maxlength="11" type="number" placeholder="请输入验证码" />
				<button class="get-verification">{{ computeTime > 0 ? `已发送(${computeTime}s)` : '获取验证码' }}</button>
			</view>
			<view class="lgrg-content-bottonbox">
				<button class="lgrg-content-bottonbox-button" @click="getUserInfo">登录</button>
				<view class="text-center"><text @click="pageChange">账号密码登录</text></view>
			</view>
		</view>
		<view class="text-center"><text>其他登录方式</text></view>
		<view class="lgrg-there-platform flex flex--rowdirection justify-between">
			<view class="lgrg-there-platform-box">
				<image class="lgrg-there-platform-box-img" src="../../static/images/login/weixin.png" data-logintype="weixin" @click="appOAutuLogin"></image>
			</view>
			<view class="lgrg-there-platform-box">
				<image class="lgrg-there-platform-box-img" src="../../static/images/login/qq.png" data-logintype="qq" @click="appOAutuLogin"></image>
			</view>
			<view class="lgrg-there-platform-box">
				<image class="lgrg-there-platform-box-img" src="../../static/images/login/sinaweibo.png" data-logintype="sinaweibo" @click="appOAutuLogin"></image>
			</view>
		</view>
	</view>
</template>

<script>
import topStatus from '../../components/topStatus/topStatus.vue';
import { reqAccountLogin } from '../../api/';
export default {
	components: { topStatus },
	data() {
		return {
			pageOne: true,
			computeTime: 0 //计时的时间
		};
	},
	onLoad() {},
	methods: {
		pageChange() {
			this.pageOne = !this.pageOne;
		},
		/* 多端登录 */
		appOAutuLogin(e) {
			var me = this;
			//获取用户的登录信息
			var logintype = e.currentTarget.dataset.logintype;
			//授权登录
			uni.login({
				provider: logintype,
				success: function(loginRes) {
					// console.log(loginRes.authResult);
					//授权登录成功以后，获取用户信息
					uni.getUserInfo({
						provider: logintype,
						success: function(infoRes) {
							// console.log('用户信息：' + JSON.stringify(infoRes));
							var userInfo = infoRes.userInfo;
							var avator = '';
							var nickname = '';
							var openIdOrUid = '';
							if (logintype == 'weixin') {
								avator = userInfo.avatarUrl;
								nickname = userInfo.nickName;
								openIdOrUid = userInfo.openId;
							} else if (logintype == 'qq') {
								avator = userInfo.figureurl_qq_2;
								nickname = userInfo.nickname;
								openIdOrUid = userInfo.openId;
							} else if (logintype == 'sinaweibo') {
								avator = userInfo.avatar_larget;
								nickname = userInfo.nickname;
								openIdOrUid = userInfo.openId;
							}

							//调用开发者后台，执行一键注册或登录
							/* uni.request({
								url:""+logintype,
								data:{
									'avator' : avator,
									'nickname' : nickname,
									'openIdOrUid' : openIdOrUid
								},
								method:"POST",
								success(result){
									if(result.data.staus === 200){
										var userInfo = result.data.data;
										//保存用户信息到全局的缓存中
										uni.setStorageSync("globalUser",userInfo);
										//切换页面跳转，使用tab切换的api
										uni.swiperTab({
											url:"../index/index"
										})
									}
								}
							}) */
						}
					});
				}
			});
		},
		/* 账号密码登录 */
		async LoginFormSubmit(e) {
			var telephone = e.detail.value.telephone;
			var password = e.detail.value.password;
			var jsonData = {
				telephone: telephone,
				password: password
			};

			/* const a = uni.getStorageSync('globalUser');
			console.log(a); */

			//判断数据是否合法
			if (/^1\d{10}$/.test(telephone) && password != '') {
				// 发送请求
				// console.log(telephone, password);
				var DataStr = JSON.stringify(jsonData);
				const res = await reqAccountLogin(DataStr);
				console.log(res);
				// 获取真实数据之前，务必判断状态是否为200
				try {
					if (res.statusCode == 200) {
						if (res.data.meta.success == false) {
							uni.showToast({
								title: '登录失败',
								duration: 2000,
								icon: 'none',
								position: 'center'
							});
						}
						if (res.data.meta.success == true) {
							uni.removeStorageSync('globalUser');

							//保存用户信息到全局的缓存中
							uni.setStorage({
								key: 'globalUser',
								data: res.data.data.userID,
								success: function() {
									// console.log('success');
								}
							});
							uni.navigateBack({
								
							});
						}
					}
				} catch (e) {
					//TODO handle the exception
					console.log(e);
				}
			} else {
				uni.showToast({
					title: '账号错误',
					duration: 2000,
					image: '/static/logo.png'
				});
			}
		}
	}
};
</script>

<style lang="scss">
/* 页面高度*/
page {
	background-color: #fff;
}
/* 导航栏 */
.lgrg-top-nav {
	height: 80upx;
	.lgrg-top-nav-img {
		height: 53upx;
		width: 53upx;
		border-radius: 50%;
	}
	.lgrg-top-nav-textbox {
		width: 84upx;
		height: 42upx;
		background-color: #cfcece;
		border-radius: 9px;
		.lgrg-top-nav-textbox-text {
			// width: 42upx;
			// height: 21upx;
			font-family: AdobeHeitiStd-Regular;
			font-size: 22upx;
			font-weight: normal;
			font-stretch: normal;
			letter-spacing: 0px;
			color: #fcfafa;
			line-height: 42upx;
		}
	}
}
/* 标题 */
.lgrg-title {
	padding: 64upx;
	.lgrg-title-big {
		font-family: AdobeHeitiStd-Regular;
		font-size: 40upx;
		font-weight: bold;
		// font-stretch: normal;
		letter-spacing: 0upx;
		color: #000000;
		.lgrg-title-small {
			width: 241upx;
			height: 21upx;
			font-family: AdobeHeitiStd-Regular;
			font-size: 22upx;
			// font-weight: normal;
			letter-spacing: 0upx;
			color: #615f5f;
		}
	}
}
/* 输入框 */
.lgrg-content {
	// width: 620upx;
	height: 482upx;
	border-radius: 22upx;
	margin: 20upx 64upx 80upx 64upx;
	padding: 76upx 0 70upx 0;
	box-shadow: 0upx 0upx 100upx rgba(114, 130, 138, 0.2);
	.lgrg-content-input {
		width: 522upx;
		height: 62upx;
		background-color: #f7f7f7;
		border-radius: 31upx;
		padding: 0 43upx;
		.get-verification {
			height: 40upx;
			font-size: 21upx;
			line-height: 40upx;
			width: 200upx;
			color: #adaaaa;
			border: 0;
			// &:hover{
			// 	background:transparent;
			// }
		}
	}
	.lgrg-content-bottonbox {
		width: 522upx;
		// height: 62upx;
		// background-color: #f7f7f7;
		// border-radius: 31upx;
		.lgrg-content-bottonbox-button {
			color: #fdfbfb;
			width: 522upx;
			height: 62upx;
			line-height: 62upx;
			background-color: #94ddb4;
			margin-bottom: 20upx;
			border-radius: 31upx;
			&:hover {
				background-color: #39b54a;
			}
		}
	}
}
/* 登录注册平台 */
.lgrg-there-platform {
	padding: 29upx 222upx 0 222upx;
	.lgrg-there-platform-box {
		.lgrg-there-platform-box-img {
			width: 51upx;
			height: 51upx;
			opacity: 0.25;
		}
	}
}
</style>
