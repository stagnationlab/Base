export function getTestData({ testFail = false } = {}) {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			if (testFail) {
				reject({
					data: 'Error',
				});
			} else {
				resolve({
					data: 'Success',
				});
			}
		}, 1000);
	})
}