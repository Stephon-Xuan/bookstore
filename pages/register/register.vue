<template>
	<view>
		<topStatus></topStatus>
		<view class="lgrg-top-nav padding-lr-sm flex flex--rowdirection justify-between align-center">
			<navigator  open-type="navigateBack" hover-class="none" ><image class="lgrg-top-nav-img" src="/static/images/login/shutDown.png"></image></navigator>
		</view>
		<view class="lgrg-title">
			<view class="lgrg-title-big text-bold">书斋便捷注册</view>
			<view class="lgrg-title-small">未注册过的昵称或手机号自动注册</view>
		</view>
		<form @submit="formSubmit">
			<view class="lgrg-content  flex flex-direction justify-around align-center shadow-blur">
				<view class="lgrg-content-input flex align-center justify-start">
					<input name="telephone" class="text-xs" value="" type="number" placeholder="请输入手机号作为账号" />
				</view>
				<view class="lgrg-content-input flex align-center justify-start"><input name="password" class="text-xs" value="" type="number" placeholder="请输入密码" /></view>
				<view class="lgrg-content-bottonbox"><button class="lgrg-content-bottonbox-button" type="primary" form-type="submit">注册</button></view>
			</view>
		</form>
	</view>
</template>

<script>
import topStatus from '../../components/topStatus/topStatus.vue';
import { reqRegister } from '../../api/';
export default {
	components: {
		topStatus
	},
	data() {
		return {};
	},
	methods: {
		async formSubmit(e) {
			var telephone = e.detail.value.telephone;
			var password = e.detail.value.password;
			var jsonData = {
				telephone: telephone,
				password: password,
				email: '123455'
			};
			
			//判断数据是否合法
			if (/^1\d{10}$/.test(telephone) && password != "") {
				// 发送请求
				var DataStr = JSON.stringify(jsonData);
				// console.log(telephone, password);
				// const result = await this.$ajax.post(this.serverUrl + '/user/register', data);
				const res = await reqRegister(DataStr);
				console.log(res);
				// 获取真实数据之前，务必判断状态是否为200
				try {
					if (res.statusCode == 200) {
						if (res.data.meta.success == false) {
							uni.showToast({
								title: '注册失败',
								duration: 2000,
								icon: 'none',
								position: 'center'
							});
						}
						if (res.data.meta.success == true) {
							/* uni.navigateBack({
								delta: 1,
								animationType: 'slide-out-bottom',
								animationDuration: 200
							}); */
							uni.showToast({
								title: '注册成功',
								duration: 2000,
								position: "bottom"
							});
						}
					}
				} catch (e) {
					//TODO handle the exception
					console.log(e)
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
</style>
