<template>
	<view class="input-box "><textarea @input="outputContent" placeholder="点击编辑你的发布" auto-height="true" maxlength="400" /></view>
</template>

<script>
export default{
	methods:{
		outputContent(e){
			// console.log(e.target.value)
			this.$emit('contentInput',e.target.value);
		}
	}
}
</script>

<style>
.input-box {
	width: 100%;
	height: 400upx;
	background-color: #fff;
	margin: 20upx 0upx;
	height: 400upx;
	max-height: 100%;
}
.input-box>textarea {
	width: 100%;
	height: 300upx;
}
</style>
