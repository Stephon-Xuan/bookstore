<template>
	<view>
		<top-status></top-status>
		<top-bar :title="'二手书籍'"></top-bar>
		<view class="mian">
			<view class="tab flex-direction flex-be">
				<view class="tab-title padding-sm">分类</view>
				<view class="self-border-active margin-lr-sm"></view>
			</view>
			<view class="flex-ss" :style="'height:' + height + 'px'">
				<scroll-view scroll-y :style="'height:' + height + 'px'" :scroll-top="scrollLeftTop" scroll-with-animation>
					<view
						class="tab border-bm-small flex-cc"
						v-for="(item, index) in bookList"
						:key="index"
						@click="bookListTab(index)"
						:class="index == categoryActive ? 'active' : ''"
					>
						<view class="tab-title padding-sm ">{{ item.category }}</view>
					</view>
				</scroll-view>
				<scroll-view class="" scroll-y :scroll-top="scrollTop" @scroll="scroll" :style="'height:' + height + 'px'" scroll-with-animation>
					<view v-for="(books, index) in bookList" :key="index" class="bookbox">
						<view>{{ books.category }}</view>
						<view class="bookbox-item flex-cc" v-for="(book, index) in books" :key="index">
							<view><image class="bookimg" src="/static/images/profileIco/touxiang1.jpg"></image></view>
							<view class="padding-xs self-start">
								<view class="book-title padding-xs">漫长的告别</view>
								<view class="book-brief flex flex-wrap padding-xs ">
									<text class="text-cut">漫长的告别...漫长的告别...漫长的告别...漫长的告别...漫长的告别...漫长的告别...</text>
								</view>
								<view>6.2折起</view>
								<view>18.6元起</view>
							</view>
						</view>
					</view>
				</scroll-view>
			</view>
		</view>
	</view>
</template>

<script>
import topStatus from '../../components/topStatus/topStatus.vue';
import topBar from '../../components/topBar/topBar.vue';
import bookCard from '../../components/bookCard/bookCard.vue';
// import bookList from '../../common/listdate.js';
import {reqBookSortList,reqBookSort} from '../../api/'
export default {
	components: {
		topStatus,
		topBar,
		bookCard
	},
	data() {
		return {
			height: 0,
			categoryActive: 0,
			scrollTop: 0,
			scrollLeftTop: 0,
			scrollHeight: 0,
			// bookList: bookList,
			bookList:[],
			arr: [0, 584, 1168, 1752, 2336, 2805, 3274, 3858, 4442, 4911, 5380, 5734, 6203, 6672, 7017], //初始值，后边计算会根据手机适配覆盖
			leftItemHeight: 51, //49行会计算出新值进行覆盖
			navLeftHeight: 0, //左边scroll-view 内层nav的总高度
			diff: 0, //左边scroll-view 内层nav的总高度与视口之差
			tabBarHeight: 0 //如果此页面为Tab页面，自己改变高度值,,一般tab高度为51
		};
	},
	onShow() {
	},
	async onLoad() {
		// this.height = uni.getSystemInfoSync().windowHeight - this.tabBarHeight;
		this.height = uni.getSystemInfoSync().screenHeight - this.tabBarHeight-100;
		var res = await reqBookSortList();
		// console.log(res.data.data)
		// console.log(JSON.parse(res))
		var bookData = res.data.data;
		this.bookList = bookData;
		console.log(this.bookList);

		/* 获取每类书籍 */
		var BookSortJson = {
			category:1,  //书籍分类
			pageNo:1,
			pageSize:1
		}
		
		var DataStr = JSON.stringify(BookSortJson);
		var resBookSort = await reqBookSort(DataStr);
		console.log(resBookSort);
		

	},
	onReady() {
		// this.getHeightList();
	},
	methods: {
		getHeightList() {
			let _this = this;
			let selectorQuery = uni.createSelectorQuery();
			selectorQuery.selectAll('.bookbox-item').boundingClientRect(function(rects) {
				_this.leftItemHeight = rects[0].height;
				_this.navLeftHeight = _this.leftItemHeight * bookList.length;
				_this.diff = _this.navLeftHeight - _this.height;
			});
			selectorQuery
				.selectAll('.bookbox')
				.boundingClientRect(function(rects) {
					let arr = [0];
					let top = 0;
					rects.forEach(function(rect) {
						// 					rect.id      // 节点的ID
						// 					rect.dataset // 节点的dataset
						// 					rect.left    // 节点的左边界坐标
						// 					rect.right   // 节点的右边界坐标
						// 					rect.top     // 节点的上边界坐标
						// 					rect.bottom  // 节点的下边界坐标
						// 					rect.width   // 节点的宽度
						// 					rect.height  // 节点的高度
						top += rect.height;
						arr.push(top);
					});
					console.log(arr);
					_this.arr = arr;
				})
				.exec();
		},

		scroll(e) {
			let _this = this;
			if (this.timeoutId) {
				clearTimeout(this.timeoutId);
			}
			this.timeoutId = setTimeout(function() {
				//节流
				_this.scrollHeight = e.detail.scrollTop + 1 + _this.height / 4;
				//+1不要删除，解决最后一项某种情况下翻到底部，左边按钮并不会切换至最后一个
				//若想使切换参考线为屏幕顶部请删除 _this.height/2
				for (let i = 0; i < _this.arr.length; i++) {
					let height1 = _this.arr[i];
					let height2 = _this.arr[i + 1];
					if (!height2 || (_this.scrollHeight >= height1 && _this.scrollHeight < height2)) {
						_this.categoryActive = i;
						_this.diff > 0 && (_this.scrollLeftTop = Math.round((_this.categoryActive * _this.diff) / (bookList.length - 1)));
						return false;
					}
				}
				_this.categoryActive = 0;
				_this.timeoutId = undefined;
			}, 10);
		},
		bookListTab(index) {
			this.categoryActive = index;
			this.scrollTop == this.arr[index] ? (this.scrollTop = this.scrollTop + 1) : (this.scrollTop = this.arr[index]); //防止两次相等造成点击不触发滚动时间
		}
	}
};
</script>

<style lang="scss" scoped>
page {
	background-color: #ffffff;
}
/* 此页面列表公共样式 */
.mian {
}
/* 选项卡 */
.tab {
	width: 200upx;
	font-weight: normal;
	font-stretch: normal;
	font-family: MicrosoftYaHei;
}
.tab-title {
	font-size: 28upx;
	line-height: 37upx;
	letter-spacing: 2upx;
	color: #2f2f2f;
}
.self-border-active {
	height: 4upx;
	width: 60upx;
	border-bottom: #007aff solid 4upx;
}

/* 书籍 */
// .bookbox {
// 	// display: block;
// 	overflow: hidden;
// 	border-bottom: 20upx solid #f3f3f3;
// }
.bookimg {
	width: 200upx;
	height: 200upx;
}
.book-title {
	font-size: 24upx;
	color: #2b2a2a;
	font-weight: bold;
}
.book-brief {
	font-size: 14upx;
	color: #c3c2bc;
	width: 300upx;
}
.active {
	// color: #ff80ab;
	// border-bottom: #007aff 2upx splid;
	background-color: #0081ff;
	// border-right: 0;
}
/* .nav-left {
	width: 25%;
	background: #fafafa;
}

.nav-left-item {
	height: 100upx;
	border-right: solid 1px #f1f1f1;
	border-bottom: solid 1px #f1f1f1;
	font-size: 30upx;
	display: flex;
	align-items: center;
	justify-content: center;
}
.nav-left-item:last-child {
	border-bottom: none;
} */
</style>
