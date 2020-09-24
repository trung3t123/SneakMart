import productReducer from "./Product";
import { combineReducers } from "redux";

const indexReducers = combineReducers({
	product: productReducer
});

export default indexReducers;