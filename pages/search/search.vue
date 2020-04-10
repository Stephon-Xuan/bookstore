<template>
	<view>
		<top-status></top-status>
		<view class="inputbar flex justify-between align-center">
			<view class="flex-twice"><search-bar></search-bar></view>
			<view class="inputbar-bn"><navigator open-type="navigateBack">取消</navigator></view>
		</view>
		<view class="categorybar border-bm-big flex flex-direction">
			<view class="title flex justify-center">搜索指定内容</view>
			<view class="categorybar-content flex justify-around">
				<view class="categorybar-content-item flex flex-direction align-center" v-for="(item,index) in icoList" :key="index">
					<view class="categorybar-content-item-icobox">
						<image class="categorybar-content-item-icobox-ico" src="/static/logo.png"></image>
					</view>
					<view class="categorybar-content-item-text">{{item.icoTitle}}</view>
				</view>
			</view>
		</view>
		<view class="resultbar">
			<view class="resultbar-item border-bm-small flex justify-between align-center" v-for="(item,index) in 4" :key="index">
				<view class="resultbar-item-left flex justify-between align-center">
					<view class="resultbar-item-left-icobox">
						<image class="resultbar-item-left-icobox-ico" src="/static/logo.png"></image>
					</view>
					<view class="resultbar-item-left-title text-cut">推理悬疑小说推理悬疑小说推理悬疑小说推理悬疑小说推理悬疑小说推理悬疑小说推理悬疑小说推理悬疑小说</view>
				</view>
				<view class="resultbar-item-right">
					<image class="resultbar-item-right-ico" src="/static/logo.png"></image>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
import topStatus from '../../components/topStatus/topStatus.vue';
import searchBar from '../../components/searchBar/searchBar.vue';
export default {
	components: {
		topStatus,
		searchBar
	},
	data(){
		return{
			icoList:[
				{icoTitle:'收藏'},
				{icoTitle:'书籍'},
				{icoTitle:'作者'},
				{icoTitle:'关注'}
			]
		}
	}
};
</script>

<style lang="scss">
page {
	background-color: #ffffff;
}
.inputbar {
	padding: 0upx 20upx 10upx 10upx;
	font-size: 36upx;
	.inputbar-bn {
		color: #0081ff;
	}
}
.categorybar{
	width: 100%;
	padding: 20upx 20upx;
	
	.title{
		margin: 10upx 0 40upx 0;
		font-size: 24upx;
		color: #DCDCDC;
	}
	.categorybar-content{
		.categorybar-content-item{
			
			.categorybar-content-item-icobox{
				height: 60upx;
				width: 50upx;
				.categorybar-content-item-icobox-ico{
					height: 60upx;
					width: 50upx;
				}
			}
			.categorybar-content-item-text{
				font-size: 30upx;
				
			}
		}
	}
}
.resultbar{
	margin-top: 40upx;
	padding: 0 40upx;
	.resultbar-item{
		height: 80upx;
		.resultbar-item-left{
			.resultbar-item-left-icobox{
				.resultbar-item-left-icobox-ico{
					height: 24upx;
					width: 24upx;
				}
			}
			.resultbar-item-left-title{
				margin-left: 20upx;
				width: 400upx;
				font-size: 28upx;
				line-height: 60upx;
			}
		}
		.resultbar-item-right{
			.resultbar-item-right-ico{
				height: 24upx;
				width: 24upx;
			}
		}
	}
}
</style>
