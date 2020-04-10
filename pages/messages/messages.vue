<template>
	<view>
		<top-status></top-status>
		<view>
			<top-title-bar :title="'消息'" :icoUrl="'/static/images/tabBarIco/news_sel.png'" :isBm="true"></top-title-bar>
		</view>
		<view class="flex-direction bg-white">
			<view class="flex-bc padding">
				<view class="flex-sub flex-direction flex-cc" @click="isClick">
					<view class="text-lg" :class="isActive?'text-active':''">聊天</view>
				</view>
				<view class="flex-sub flex-direction flex-cc" @click="isClick">
					<view class="text-lg"  :class="isActive?'':'text-active'">评论</view>
				</view>
			</view>
			<view class="flex-bc">
				<view class="flex-sub flex-direction flex-cc">
					<view :class="isActive?'border-active':''"></view>
				</view>
				<view class="flex-sub flex-direction flex-cc">
					<view :class="isActive?'':'border-active'"></view>
				</view>
			</view>
		</view>
		<view>
			<view v-if="isActive">
				<mes-list v-for="(item,index) in 4" :key="index"></mes-list>
			</view>
		</view>
		
	</view>
</template>

<script>
import topStatus from '../../components/topStatus/topStatus.vue';
import topTitleBar from '../../components/topTitlebar/topTitleBar.vue';
import bookCard from '../../components/bookCard/bookCard.vue';
import mesList from './mesList.vue'
export default {
	components: {
		topStatus,
		bookCard,
		topTitleBar,
		mesList
	},
	data(){
		return{
			isActive:true
		}
	},
	onShow() {
		uni.setStorageSync("currentBmTab","message");
	},
	methods:{
		isClick(){
			this.isActive= !this.isActive;
		}
	}
	
};
</script>

<style scoped>
page{
	background-color: #FFFFFF;
}
.text-active{
	color:#007aff
}

</style>
