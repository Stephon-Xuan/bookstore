<template>
	<view>
		<topStatus></topStatus>
		<topBar :title="'关注'" :showBottom="true"></topBar>
		<view>
			<ffListContent v-for="(item,index) in 4" :key="index"></ffListContent>
		</view>
	</view>
</template>

<script>
	import topStatus from '../../components/topStatus/topStatus.vue';
	import topBar from "../../components/topBar/topBar.vue";
	import ffListContent from "./ffListContent/ffListContent.vue"
	export default{
		components:{
			topStatus,
			topBar,
			ffListContent
		}
	}
</script>

<style>
</style>
