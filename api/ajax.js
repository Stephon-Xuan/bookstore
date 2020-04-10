/*
@name: request请求
@params: {
	method: 请求方式
	url: 请求的url，
	data: 携带的数据,
	loading: 放在data里面，需要显示菊花加载就为true
}
@使用方法，挂载到vue-prototype上，
	Vue.prototype.$ajax = ajax
*/

const request = (method, url, data) => {
	const promise = new Promise((resolve, reject) => {
		// promise里面都可以处理任何错误捕捉，包括请求前，请求后
		if (data && data.loading) {
			uni.showLoading({
				title: '加载中...',
				mask: true
			})
		}
		uni.request({
			method,
			url,
			data,
			dataType:'json',
			header: {
				'Content-Type': 'application/json;charset=UTF-8',
				Accept: 'application/json, text/plain, */*',
				Authorization: uni.getStorageSync('token') || ''
			},
			success: (res) => {
				if(res.statusCode == 200) {
					resolve(res)
				} else {
					reject(res)
				}
				if (data && data.loading) {
					uni.hideLoading()
				}
			},
			fail: (err) => {
				reject(err)
				let msg = err.errMsg
				if (msg.indexOf('timeout') > -1) {
					msg = '连接超时!'
				}
				if (msg.indexOf('abort') > -1) {
					msg = '连接终止!'
				}
				if(msg=="request:fail"){
					msg = '没有连接网络!'
				}
				uni.showToast({ 
					title: msg || '网络错误！',
					icon: 'none'
				})
			}
		});
	}).catch((error) => {
		console.log(error);
	});
	return promise
}
const ajax = {
	get: (url, data) => {
		return request('GET', url, data)
	},
	post: (url, data) => {
		return request('POST', url, data)
	},
	put: (url, data) => {
		return request('PUT', url, data)
	},
	del: (url, data) => {
		return request('DELETE', url, data)
	},
}

export {
	ajax
}
