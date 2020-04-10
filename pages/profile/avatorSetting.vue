<template>
	<view>
		<topStatus></topStatus>
		<!-- <top-bar></top-bar> -->
		<!-- 图片裁剪 -->
		<pictureTailor :pictureSrc="'http://img4.imgtn.bdimg.com/it/u=1688026885,2773767715&fm=26&gp=0.jpg'"></pictureTailor>
	</view>
</template>

<script>
import topStatus from '../../components/topStatus/topStatus.vue';
import topBar from '../../components/topBar/topBar.vue';
import pictureTailor from '../../components/picture-tailor/pictureTailor.vue';
export default {
	components: { pictureTailor, topBar, topStatus }
};
</script>

<style></style>
