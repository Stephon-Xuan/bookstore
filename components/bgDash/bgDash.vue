<template>
	<view :class="showDashBg ? 'bg-dash' : ''" @click="showDash"></view>
</template>

<script>
export default{
	props:{
		showDashBg:{
			type:Boolean,
			default:false
		}
	},
	data(){
		return{
			
		}
	},
	methods:{
		showDash(){
			var hide = !this.showDashBg
			this.$emit('isHide',hide);
		}
	},
	
}
</script>

<style scoped>
.bg-dash {
	position: absolute;
	width: 100%;
	height:100%;
	top: 0;
	left: 0;
	background-color: rgba(0, 0, 0, 0.15);
	z-index: 1;
}
</style>
