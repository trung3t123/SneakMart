import Axios from "axios"

export const setProduct = (productList) => {
	return {
		type: 'SET_PRODUCT',
		payload: productList
	}
}

// export function getApiProducts() {
// 	console.log('showing product');
// 	return function (dispatch) {
// 		return Axios.get('http://103.102.46.103:3000/products').then(data => {
// 			console.log('data fetched', data.data);
// 			dispatch(setProduct(data.data));
// 		}).catch(err => console.log(err));
// 	}
// }