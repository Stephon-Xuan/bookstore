const uploadreq = (method, url, data) => {
	const promise = new Promise((resolve, reject) => {
		uni.uploadFile({
			url: 'https://www.example.com/upload', //仅为示例，非真实的接口地址
			filePath: tempFilePaths[0],
			name: 'file',
			formData: {
				'user': 'test'
			},
			success: (uploadFileRes) => {
				console.log(uploadFileRes.data);
			}
		});

	});
	return promise
}
