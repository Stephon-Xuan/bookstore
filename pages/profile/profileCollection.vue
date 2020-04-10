<template>
	<view>
		<topStatus></topStatus>
		<topBar :title="'收藏'" :showBottom="true"></topBar>
	</view>
</template>

<script>
	import topStatus from '../../components/topStatus/topStatus.vue'
	import topBar from "../../components/topBar/topBar.vue";
	export default{
		components:{
			topStatus,
			topBar
		}
	}
</script>

<style>
</style>
