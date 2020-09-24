const initialState = {
	productList: []
}

const productReducer = (state = initialState, action) => {
	switch (action.type) {

		case 'SET_PRODUCT': {
			const newListProduct = [...state.productList];

			action.payload.map(product => {
				newListProduct.push(product)
			});
			return {
				...state,
				productList: newListProduct
			}
		}

		default: {
			return state;
		}
	}
}

export default productReducer;