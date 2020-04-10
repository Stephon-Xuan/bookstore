<template>
	<view>
		<top-status></top-status>
		<top-bar :title="'发布二手书'" :showBottom="true"></top-bar>
		<view class="main">
			<view class="list border-bm-small text-color-grey">
				<view>书籍名称</view>
				<input ref="inputTitle" @input="onKeyInput" value="" type="text" maxlength="14" />
				<image class="arrow" src="/static/images/list/scan.png"></image>
			</view>

			<content-input @contentInput="getContent"></content-input>
			<img-upload @getImage="getImageData" :value="imageData" :showUploadProgress="false" :limit="limitNumber"></img-upload>

			<view class="list border-bm-small">
				<view class="flex justify-between align-center">
					<image class="address" src="/static/images/list/address.png"></image>
					<text class="padding-lr-4">广州</text>
					<text class="padding-lr-4">珠海</text>
					<text class="padding-lr-4">香洲区</text>
				</view>
				<view class="flex justify-between align-center">
					<image class="cirle" src="/static/images/list/circle.png" v-show="!isCircleSel" @click="circleClick" />
					<image class="cirle" src="/static/images/list/circle_sel.png" v-show="isCircleSel" @click="circleClick" />
					全新宝贝
				</view>
			</view>
			<view class="list border-bm-small">
				<view>价格</view>
				<view v-if="priceValue!=''">{{priceValue}}元</view>
				<image class="arrow" src="/static/images/arrow/rightArrow.png" @click="popUpWin('价格')"></image>
			</view>
			<view class="list  border-bm-small">
				<view>分类</view>
				<view>{{radioValue}}</view>
				<image class="arrow" src="/static/images/arrow/rightArrow.png" @click="popUpWin('分类')"></image>
				
			</view>
			<view class="list  border-bm-small ">
				<view class="flex-bc">交易方式</view>
				<view class="flex-bc">
					<view v-for="(item, index) in faShionList" :key="index">
						<view class="view-wrap magin-lr-4" :class="index === fashionIndex ? 'view-wrap-active' : ''" @click="fashion(item, index)">{{ item.title }}</view>
					</view>
				</view>
			</view>
			<view @click="submitIssue"><issue-botton></issue-botton></view>
		</view>
		<bg-dash :showDashBg="isShow" @isHide="hideDash"></bg-dash>
		<view class="popBox" v-if="isShow">
			<view class="win">
				<view  v-if="!winViewShow">
					<view>分类</view>
					<radioBox @radioContent="getRadio"></radioBox>
				</view>
				
				<view v-if="winViewShow">
					<view>价格</view>
					<view class="margin-sm flex-cc">价格：<view class="price-input"><input @input="priceInput" value="" type="number" maxlength="3"/></view>元</view>
					<view class="margin-sm flex-cc">折扣：<view class="price-input"><input @input="dicInput" value="" type="number" maxlength="1"/></view>折</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
import topStatus from '../../components/topStatus/topStatus.vue';
import topBar from '../../components/topBar/topBar.vue';
import imgUpload from '../../components/robby-image-upload/robby-image-upload.vue';
import contentInput from '../../components/contentInput/contentInput.vue';
import issueBotton from '../../components/issueBotton/issueBotton.vue';
import bgDash from '../../components/bgDash/bgDash.vue';
import radioBox from '../../components/radio/radio.vue';
import { reqissueUsedbook } from '../../api/';
export default {
	components: {
		topStatus,
		topBar,
		imgUpload,
		contentInput,
		issueBotton,
		bgDash,
		radioBox
	},
	data() {
		return {
			isCircleSel: false,
			fashionIndex: 0,
			isShow: false,
			isFashion: false,
			radioValue:"",
			priceValue:"",
			submitData: {
				bookName: ' ',
				bookIntro: ' ',
				pubRegion: ' ', // 发布的地点
				price: ' ',
				category: ' ',
				tradingway:'自提',// 交易的方式，有三种
				userId:""
			},
			imageList: [], //提交的图片数据
			enableDel: false,
			enableAdd: false,
			enableDrag: false,
			limitNumber: 9,
			imageData: [], //后台返回的图片数据
			// serverUrl: 'http://localhost:1234/work/uploadWorkPicture',
			// serverUrlDeleteImage: 'http://localhost:1234/work/deleteWorkPicture',
			formData: {
				userId: 2
			},
			faShionList: [{ title: '自提' }, { title: '同城面交' }, { title: '邮寄' }],
			winViewShow:false
		};
	},
	methods: {
		/* 书籍名称 */
		onKeyInput: function(event) {
			this.submitData.bookName = event.target.value;
			// console.log(this.submitData.bookName)
		},
		/* 书籍内容 */
		getContent(content){
			this.submitData.bookIntro = content;
		},
		/* 分类 */
		popUpWin(item) {
			this.isShow = !this.isShow;
			if (item === '分类') {
				this.winViewShow = false;
			}
			if (item === '价格') {
				this.winViewShow = true;
			}
		},
		hideDash(hide) {
			this.isShow = hide;
		},
		getRadio(content){
			this.submitData.category = content.radioIndex;
			this.radioValue = content.radioItem;
		},
		/* 是否全新 */
		circleClick() {
			this.isCircleSel = !this.isCircleSel;
			// console.log("圆圈")
		},
		/* 价格 */
		priceInput(e){
			this.submitData.price = e.target.value;
			this.priceValue = e.target.value;
		},
		
		/* 提交方式 */
		fashion(item, index) {
			this.isFashion = !this.isFashion;
			this.fashionIndex = index;
			this.submitData.tradingway = item.title;
		},
		
		/* 获取图片 */
		getImageData(data) {
			this.imageList = data;
			console.log('返回的图片信息', this.imageList);
		},
		/* 发布书籍 */
		submitIssue() {
			var _this = this;
			var user = uni.getStorageSync("globalUser");
			_this.submitData.userId = user;
			
			console.log(_this.submitData);
			/* 一张 */
			//#ifndef APP-PLUS
			console.log('图片数据',this.imageData)
			var img = this.imageData[0]
			// console.log(AvatorImg);
			new Promise((resolve, reject) => {
			uni.uploadFile({
				url: 'http://49.234.200.228:8080/shuzhai/book',
				name: 'picture',
				filePath: img,
				formData: _this.submitData,
				success: function(res) {
					console.log(res);
					console.log('成功发布');
				}
			});
			});
			//#endif
			//#ifdef APP-PLUS
			// 文件路径封装
			var imgs = _this.imageList.map((AvatorImg, index) => {
				return {
					name: 'picture' + index,
					uri: AvatorImg
				};
			});
			console.log('未上传时的图片', imgs);
			uni.uploadFile({
				url: 'http://49.234.200.228:8080/shuzhai/book',
				files: imgs,
				formData:_this.submitData,
				header: { 'Content-Type': 'multipart/form-data' },
				success: res => {
					console.log('提交的图片', imgs);
					console.log(res);
					if (res.statusCode === 200) {
						uni.showToast({
							title: '反馈成功!'
						});
					}
				}
			});
			//#endif
		}
	}
};
</script>

<style>
page {
	background-color: #ffffff;
}
</style>
<style lang="scss" scoped>
/* 此页面列表公共样式 */

.list {
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 20upx 0;
	font-family: MicrosoftYaHei;
	font-size: 28upx;
	font-weight: normal;
	font-stretch: normal;
	line-height: 40upx;
	letter-spacing: 2upx;
}

/* 图形 */
.arrow {
	height: 36upx;
	width: 36upx;
}

.cirle {
	margin: 0 4upx;
	height: 40upx;
	width: 40upx;
}
.address {
	// margin: 0 4upx;
	height: 36upx;
	width: 36upx;
}

/* 字体颜色 */
.text-color-grey {
	color: #c4c4c4;
}

/* 内容 */
.main {
	padding: 20upx 40upx;
}

.view-wrap {
	background-color: #f5f5f6;
	padding: 10upx;
	border-radius: 5upx;
}
.view-wrap-active {
	background-color: #0081ff;
	color: #ffffff;
}
/* 弹窗 */
.popBox {
	position: absolute;
	z-index: 2;
	top: 30%;
	width: 100%;
	// background: #0081ff;
	padding: 0upx 100upx;
}
.win {
	padding: 20upx;
	background-color: #ffffff;
	border-radius: 24upx;
}
/* 价格 */
.price-input{
	width:60upx;
	border-bottom: #D81E06 2upx solid;
}
/* 交易方式 */
</style>
