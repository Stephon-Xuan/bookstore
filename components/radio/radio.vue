<template>
	<view class="main flex-cc">
		<radio-group @change="radioChange">
			<label class="label flex-cc" v-for="(item, index) in items" :key="item.category">
				<view class="margin-right-lg"><radio class="radio-size" :value="item.category" :checked="index === current" /></view>
				<view class="text-lg">{{ item.category }}</view>
			</label>
		</radio-group>
	</view>
</template>

<script>
export default {
	data() {
		return {
			 "items": [
			        {
			            "categoryId": 1,
			            "category": "文学小说"
			        },
			        {
			            "categoryId": 2,
			            "category": "人文社科"
			        },
			        {
			            "categoryId": 3,
			            "category": "经管励志"
			        },
			        {
			            "categoryId": 4,
			            "category": "生活艺术"
			        },
			        {
			            "categoryId": 5,
			            "category": "生活百科"
			        },
			        {
			            "categoryId": 6,
			            "category": "推理悬疑"
			        },
			        {
			            "categoryId": 7,
			            "category": "科技科普"
			        },
			        {
			            "categoryId": 8,
			            "category": "儿童漫画"
			        }
			    ],
			current: 0
		};
	},
	methods: {
		radioChange: function(evt) {
			for (let i = 0; i < this.items.length; i++) {
				if (this.items[i].category === evt.target.value) {
					this.current = i;
					break;
					
				}
			}
			// console.log(this.current+1);
			var content = {"radioItem":this.items[this.current].category,"radioIndex":this.current+1}
			this.$emit('radioContent',content);
		}
	}
};
</script>

<style>
.main{
	width: 100%;
}
.label {
	width: 100%;
	padding: 10upx;
}
.label-radio {
}
.label-content {
}
.radio-size {
	/* height: 40upx;
	width: 40upx; */
}
</style>
