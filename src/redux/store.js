import thunk from "redux-thunk";
import { createStore, applyMiddleware } from "redux";
import indexReducers from "./reducers";

const logger = store => next => action => {
	console.group(action.type)
	console.info('dispatching', action)
	let result = next(action)
	console.log('next state', store.getState())
	console.groupEnd()
	return result
}

const crashReporter = store => next => action => {
	try {
		return next(action)
	} catch (err) {
		console.error('Caught an exception!', err)
		Raven.captureException(err, {
			extra: {
				action,
				state: store.getState()
			}
		})
		throw err
	}
}


const store = createStore(indexReducers, applyMiddleware(thunk));


store.subscribe(() => {
	console.log("store Updated", store.getState());
})
export default store;