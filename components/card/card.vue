<template>
	<view class="cu-card dynamic" :class="isCard">
		<view class="cu-item shadow">
			<view class="cu-list menu-avatar">
				<view class="cu-item">
					<view class="cu-avatar round md" style="background-image:url(https://ossweb-img.qq.com/images/lol/web201310/skin/big10006.jpg);"></view>
					<view class="content flex-sub">
						<view>
							<view class="flex-sub">凯尔</view>
							<view class="text-gray text-sm flex justify-end flex-sub">2019/12/3</view>
						</view>
					</view>
				</view>
			</view>
			<view class="contentbar">
				<grand
					:content="
						'折磨生出苦难，苦难又会加剧折磨，凡间这无穷的循环，将有我来终结！折磨生出苦难，苦难又会加剧折磨，凡间这无穷的循环，将有我来终结！折磨生出苦难，苦难又会加剧折磨，凡间这无穷的循环，将有我来终结！折磨生出苦难，苦难又会加剧折磨，凡间这无穷的循环，将有我来终结！'
					"
				></grand>
			</view>
			
			<!-- <view class="text-content">折磨生出苦难，苦难又会加剧折磨，凡间这无穷的循环，将有我来终结！</view> -->
			<view class="grid flex-sub padding-lr" :class="isCard ? 'col-3 grid-square' : 'col-1'">
				<view
					class="bg-img"
					:class="isCard ? '' : 'only-img'"
					style="background-image:url(https://ossweb-img.qq.com/images/lol/web201310/skin/big10006.jpg);"
					v-for="(item, index) in isCard ? 6 : 1"
					:key="index"
				></view>
			</view>
			<!-- <view class="text-gray text-sm text-right padding">
				<text class="cuIcon-attentionfill margin-lr-xs"></text>
				10
				<text class="cuIcon-appreciatefill margin-lr-xs"></text>
				20
				<text class="cuIcon-messagefill margin-lr-xs"></text>
				30
			</view> -->
			<navigator url="/pages/bookdetail/bookdetail"><interact></interact></navigator>
		</view>
	</view>
</template>

<script>
import interact from '../interact/interact.vue';
import grand from '../sunui-grand/sunui-grand.vue';
export default {
	components: {
		interact,
		grand
	},
	data() {
		return {
			isCard: true
		};
	}
};
</script>

<style>
.contentbar{
	margin-bottom: 56upx;
}
</style>
