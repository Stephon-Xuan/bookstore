<template>
	<view>
		<view class="issuebar">
			<view class="issuebar-imgbox">
				<image class="issuebar-imgbox-img" src="../../static/logo.png"></image>
			</view>
		</view>
	</view>
</template>

<script>
</script>

<style lang="scss">
.issuebar{
	position: fixed;
	z-index: 999;
	bottom: 240upx;
	right: 40upx;
	.issuebar-imgbox{
		.issuebar-imgbox-img{
			width: 100upx;
			height: 100upx;
			border-radius: 50%;
		}
	}
}
</style>
