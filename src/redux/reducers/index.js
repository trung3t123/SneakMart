import productReducer from "./Product";
import { combineReducers } from "redux";
import userReducer from "./User";

const indexReducers = combineReducers({
	product: productReducer,
	user : userReducer
});

export default indexReducers;