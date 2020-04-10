<template>
	<view>
		<topBar :title="'动态记录'" :showBottom="true"></topBar>
	</view>
</template>

<script>
import topStatus from '../../components/topStatus/topStatus.vue';
import topBar from '../../components/topBar/topBar.vue';
import card from '../../components/card/card.vue';
import {reqBookIssue} from '../../api/'
export default {
	components: {
		topStatus,
		topBar,
		card
	},
	data(){
		return{
			
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
