<template>
	<view>
		<top-status></top-status>
		<view>
			<top-title-bar :isBm="false"></top-title-bar>
		</view>
		<view>
			<book-card v-for="(item, index) in 4" :key="index" />
		</view>
		
	</view>
</template>

<script>
import topStatus from '../../components/topStatus/topStatus.vue';
// import topBar from '../../components/topBar/topBar.vue';
import topTitleBar from '../../components/topTitlebar/topTitleBar.vue';
import bookCard from '../../components/bookCard/bookCard.vue';
export default {
	components: {
		topStatus,
		bookCard,
		topTitleBar
	},
	// onLoad: function() {
	// 	// this.height = uni.getSystemInfoSync().windowHeight - this.tabBarHeight;
	// 	this.height = uni.getSystemInfoSync().screenHeight - this.tabBarHeight-100;
	// },
	onShow() {
		uni.setStorageSync("currentBmTab","dynamic");
	}
};
</script>

<style scoped>


</style>
