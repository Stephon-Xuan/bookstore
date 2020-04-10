<template>
	<view>
		<top-status></top-status>
		<top-bar :title="'我的订单'"></top-bar>
		<view class="profile-ordernav bg-white flex flex--rowdirection justify-center align-center">
			<view class="profile-ordernav-content flex-sub  flex flex-direction justify-between align-center" v-for="(item, index) in OrderSelectList" :key="index" @click="selectItem(index)">
				<image :src="item.titleIco" class="profile-ordernav-content-img" ></image>
				<view class="profile-ordernav-content-textstyle text-center" :class="ItemIndex==index?'active':''">{{item.title}}</view>
			</view>
		</view>
		
		<view class="orderShow-box">
			<!-- 订单-待付款 -->
			<view v-if="ItemIndex==0">
				<orderContent  v-for="(item,index) in 4" :key="index"></orderContent>
			</view>
			<!-- 订单-待发货 -->
			<view v-if="ItemIndex==1">
				<orderContent></orderContent>
			</view>
			<!-- 订单-待收货 -->
			<view v-if="ItemIndex==2">
				<orderContent></orderContent>
			</view>
			<!-- 订单-待评价 -->
			<view v-if="ItemIndex==3">
				<orderContent></orderContent>
			</view>
			<!-- 订单-售后 -->
			<view v-if="ItemIndex==4">
				<orderContent></orderContent>
			</view>
		</view>
		
		
	</view>
</template>

<script>
import topStatus from '../../../components/topStatus/topStatus.vue';
import topBar from '../../../components/topBar/topBar.vue';
import orderContent from "../orderContent/orderContent.vue";
export default {
	components:{topStatus,topBar,orderContent},
	data(){
		return{
			ItemIndex:0,
			//订单导航列表数据
			OrderSelectList:[
				{title:"待付款",titleIco:"/static/logo.png"},
				{title:"待发货",titleIco:"/static/profileIco/order/preRead.png"},
				{title:"待收货",titleIco:"/static/profileIco/order/待收货.png"},
				{title:"待评价",titleIco:"/static/profileIco/order/待评价.png"},
				{title:"售后",titleIco:"/static/profileIco/order/售后.png"},
				]
		}
	},
	methods:{
		//订单导航列表点击时间
		selectItem(index){
			// console.log(index)
			this.ItemIndex = index
			 console.log(this.ItemIndex)
		}
	}
};
</script>

<style lang="scss">
/* 订单导航条 */
.profile-ordernav {
	padding: 0 75upx;
	height: 100upx;

	.profile-ordernav-content {
		height: 90upx;

		.profile-ordernav-content-img {
			width: 50upx;
			height: 50upx;
		}
		.profile-ordernav-content-textstyle {
			width: 80upx;
			font-size: 24upx;
			// &:hover {
			// 	border-bottom: 4upx #ef2b5a solid;
			// }
		}
	}
}
/* 订单点击样式 */
.active{
	margin-bottom: -4upx;
	border-bottom: 4upx #ef2b5a solid;
}
/* 订单导航显示的内容 */
.orderShow-box{
	padding-top: 20upx;
}
</style>
