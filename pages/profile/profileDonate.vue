<template>
	<view>
		<topBar :title="'捐书'" :showBottom="true"></topBar>
		<nav-tab :tabTitle="tabArray"></nav-tab>
	</view>
</template>

<script>
import topStatus from '../../components/topStatus/topStatus.vue';
import topBar from '../../components/topBar/topBar.vue';
import navTab from '../../components/topTab/topTab.vue'
import card from '../../components/card/card.vue';
import {reqBookIssue} from '../../api/'
export default {
	components: {
		topStatus,
		topBar,
		navTab,
		card
	},
	data(){
		return{
			tabArray:[
				"已捐赠",
				"捐赠中"
			]
		}
	},
	async onLoad() {
		var userId = uni.getStorageSync('globalUser');
		console.log(userId);
		var jsonData = {
			userId:userId
		}
		// var dataStr = JSON.stringify(jsonData);
		var res = await reqBookIssue(jsonData)
	}
};
</script>

<style></style>
