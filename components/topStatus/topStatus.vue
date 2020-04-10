<!-- 顶部状态条，避免沉溺头部 -->
<template>
	<view>
		<!-- #ifdef APP-PLUS -->
		<view class="statusbar">
			<view class="topview"></view>
		</view>
		<!-- #endif -->
	</view>
</template>

<script></script>

<style>
.statusbar {
    height: var(--status-bar-height);
    width: 100%;
    background-color: #F8F8F8;
}
.topview {
    height: var(--status-bar-height);
    width: 100%;
    position: fixed;
    background-color: #F8F8F8;
    top: 0;
	z-index: 999; 
	}
</style>
