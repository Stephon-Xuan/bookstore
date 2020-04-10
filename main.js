import Vue from 'vue'
import App from './App'
import { ajax } from './api/ajax.js'

Vue.config.productionTip = false

/* 挂载 */
Vue.prototype.$imgUrl = "http://49.234.200.228:8080/"

Vue.prototype.$rightArrow = '/static/images/arrow/rightArrow'

Vue.prototype.bgImgUrl="http://img1.imgtn.bdimg.com/it/u=250514124,1178775001&fm=26&gp=0.jpg"

Vue.prototype.$ajax = ajax



Vue.prototype.getGlobalUser = function(key) {
	var userInfo = uni.getStorageSync("globalUser");
	if (userInfo != null && userInfo != "" && userInfo != undefined) {
		return userInfo;
	} else {
		return null;
	}
}

App.mpType = 'app'

const app = new Vue({
    ...App
})
app.$mount()
