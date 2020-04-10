<template>
	<view>
		<!-- <view class="bg-white" v-if="isUser"> -->
		<view class="bg-white">
			<topStatus />
			<view><search-bar></search-bar></view>
			<!-- <navigator url="issueUsedbook" hover-class="none"><issue/></navigator> -->
			<view class="swiperstyle"><carousel /></view>
			<view class="flex flex--rowdirection booksnav justify-around align-center bg-white">
				<view class="booksnav-box flex flex--rowdirection justify-between" @click="donateClick">
					<view class=" flex-sub"><image class="booksnav-box-img" src="/static/images/book/donate.png"></image></view>
					<view class="flex-twice flex  flex-direction justify-center">
						<view class="text-bold text-xl  text-black">图书捐赠</view>
						<view class="text-gray text-df">捐赠旧书</view>
					</view>
				</view>
				<view class="border-line"></view>
				<view class="booksnav-box flex flex--rowdirection" @click="usedbookClick">
					<view class=" flex-sub"><image class="booksnav-box-img" src="/static/images/book/usedBook.png"></image></view>
					<view class="flex-twice flex flex-direction justify-center ">
						<view class="text-bold text-xl  text-black">二手书籍</view>
						<view class="text-gray text-df">精选好书</view>
					</view>
				</view>
			</view>
			<!-- <bookList v-for="(item, index) in 4" :key="index" /> -->
			<view v-for="(listItem,listIndex) in 2" :key="listIndex">
				<view v-show="listIndex===0">
					<view class="margin-lr-xs padding-lr-sm">最新发布</view>
					<view class="bookbox padding" v-for="(item,index) in newBooksList" :key="index">
						<issue-book-list v-if="item!=null" :bookData="item"></issue-book-list>
					</view>
					<view class="flex-cc">查看更多</view>
				</view>
				<view v-show="listIndex===0">
					<view class="margin-lr-xs padding-lr-sm">热门推荐</view>
					<view class="bookbox padding">
						<issue-book-list ></issue-book-list>
					</view>
					<!-- <view class="flex-cc">查看更多</view> -->
				</view>
			</view>
		</view>
		<!-- 没有登录 -->
		<!-- <view v-else>
			<view class="tipbar flex flex-direction justify-center align-center">
				<view class="tipbar-icobox">
					<image
						class="tipbar-icobox-ico"
						src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1570715999561&di=9abba7a020b5c6b3841f5f29a5226b9e&imgtype=0&src=http%3A%2F%2Fimg3.imgtn.bdimg.com%2Fit%2Fu%3D2351415398%2C4292913145%26fm%3D214%26gp%3D0.jpg"
					/>
				</view>
				<view class="tipbar-textbar"><navigator url="../login/login">没有登录哦！</navigator></view>
			</view>
		</view> -->
	</view>
</template>

<script>
import topStatus from '../../components/topStatus/topStatus.vue';
import carousel from '../../components/carousel/carousel.vue';
import bookList from '../../components/bookList/bookList.vue';
import searchBar from '../../components/searchBar/searchBar.vue';
import issueBookList from '../../components/issueBookList/issueBookList.vue';
import {reqNewIssue} from '../../api/'
export default {
	components: { topStatus, carousel, bookList, searchBar,issueBookList},
	data() {
		return {
			isUser: false,
			newBooksList:[]
		};
	},
	// onShow() {
	// 	success:{
	// 		var page = getCurrentPages().pop(); //跳转页面成功之后
	// 		if (!page) return;
	// 		page.onLoad(); //如果页面存在，则重新刷新页面
	// 	}
	// },
	/* 初始化界面 */
	async onLoad() {
		uni.setStorageSync("currentBmTab","books");
		/* 判断用户是否登录了 */
		var user = uni.getStorageSync('globalUser');
		// console.log(user);
		if (user != null && user != '' && user != undefined) {
			this.isUser = true;
		} else {
			this.isUser = false;
		}
		/* 获取最新书籍 */
		var jsonDate ={
			pageNo:0,  //第几页
			pageSize:5  //每页有多少本书
		}
		// var DataStr = JSON.stringify(jsonDate);
		var res = await reqNewIssue(jsonDate);
		console.log("最新书籍",res)
		var newBooksData = res.data.data;
		
		// console.log(this.newBooksList);
		// uni.setStorageSync("newBooks","");
		// uni.clearStorageSync("newBooks")
		// uni.setStorageSync("newBooks",newBooksData);
		// var newBooks = uni.getStorageInfoSync("newBooks");
		this.newBooksList = newBooksData.pageData
		// console.log(newBooksData.pageData);
		console.log(this.newBooksList);
		
	},
	methods:{
		donateClick(){
			uni.navigateTo({
				url:'donate'
			})
		},
		usedbookClick(){
			uni.navigateTo({
				url:'usedbook'
			})
		}
	}
};
</script>

<style lang="scss" scoped>

/* page {
	background-color: #ffffff;
} */
/* 没有登录显示的提示 */
.tipbar {
	position: absolute;
	width: 100%;
	height: 100%;
	background-color: #ffffff;
	.tipbar-icobox {
		.tipbar-icobox-ico {
			height: 240upx;
			width: 240upx;
		}
	}
	.tipbar-textbar {
		color: #0081ff;
		font-size: 28upx;
		// border-bottom: 2upx solid #0081FF;
	}
}

/* 登录后显示 */
//轮播图
.swiperstyle {
	height: 380upx;
	padding: 40upx 30upx;
	// background-color: #FFFFFF;
}
.booksnav {
	// width: 100%;
	height: 150upx;
	// justify-content:space-between;
	padding: 0 50upx;
	.booksnav-box {
		// width: 40%;
		height: 100upx;
		line-height: 40upx;
		border-radius: 50%;
		// padding: 4upx;
		.booksnav-box-img {
			width: 100upx;
			height: 100upx;
			margin-right: 20upx;
		}
	}
	.border-line {
		border-left: 4upx #efefef solid;
		height: 100%;
	}
}
.bookbox{
	width: 100%;
}
</style>
