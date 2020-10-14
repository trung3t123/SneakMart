import Axios from 'axios';
import AsyncStorage from '@react-native-community/async-storage';
import { LoginManager, AccessToken } from 'react-native-fbsdk';
const localhost = 'http://192.168.0.98'

export const logoutUser = () => {
	console.log('helo, logged out');
	return function (dispatch) {
		AsyncStorage.getItem('token').then((token) => {
			console.log('token', token);
			return Axios.post(localhost + ':5035/api/users/logout', '', {
				headers: {
					'Content-Type': 'application/json',
					Accept: 'application/json',
					'Authorization': `Bearer ${token}`
				}
			}).then(response => {
				console.log('response Logout', response);
				dispatch({ type: 'LOGGED_OUT', payload: response.data })
			})
		})
	}
}

function initUser(token) {
	return Axios.get('https://graph.facebook.com/v2.5/me?fields=email,name&access_token=' + token)
		.then((data) => {
			console.log('data', data);
			// 	Axios.get(`https://graph.facebook.com/v8.0/${data.data.id}/picture?redirect=false&access_token=${token}`).then(data => {
			// 		console.log('images', data)
			// 	}).catch((err) => console.log('error', err));
		})
		.catch((error) => {
			console.log('ERROR GETTING DATA FROM FACEBOOK', error);
		})
}

export const loginFacebook = () => {
	return function (dispatch) {
		LoginManager.logInWithPermissions(["public_profile", "email"]).then(
			(result) => {
				console.log('resultLogin', result);
				if (result.isCancelled) {
					console.log("Login cancelled");
				} else {
					AccessToken.getCurrentAccessToken().then(data => {
						console.log('facebookToken', data.accessToken);
						initUser(data.accessToken)
					}).catch(err => {
						console.log('error', err);
					})
				}
			}
		).catch((error) => {
			console.log("Login fail with error: " + error);
		})
	}
}

export const loginUser = (userMail, passwordUser) => {
	return function (dispatch) {
		return Axios.post(localhost + ":5035/api/user/postLogin",
			{
				userMail: userMail,
				userPassword: passwordUser
			})
			.then(async (response) => {
				console.log('response login', response.data);
				AsyncStorage.getItem('token').then(
					token => {
						console.log(
							'token', token
						);
					}
				)
				await AsyncStorage.setItem('token', response.data.token)
				dispatch({ type: 'LOGGED_IN', payload: response.data })
			}
			).catch((error) => {
				console.log('error', error);
			})
	}
}

export const register = (user) => {
	return function (dispatch) {
		return Axios.post(localhost + ':5035/api/user/',
			{
				userName: user.userName,
				userPassword: user.userPassword,
				userMail: user.userMail
			}).then((response) => {
				if (response.data.success) {
					AsyncStorage.setItem('token', response.data.token)
					dispatch({ type: 'REGISTER_SUCCEEDED', user: response.data.user })
				} else {
					console.log('error', response);
				}
			}).catch(err => {
				dispatch({ type: 'REGISTER_FAIL', payload: err })
			})
	}
}

export const getUserData = () => {
	return function (dispatch) {
		AsyncStorage.getItem('token').then((token) => {
			return Axios.get(localhost + ':5035/api/users/me', {
				headers: {
					'Content-Type': 'application/json',
					Accept: 'application/json',
					'Authorization': `Bearer ${token}`
				}
			}).then(response => {
				console.log('response logged in', response);
				dispatch({ type: 'LOGGED_IN', payload: response.data })
			}).catch(err => {
				console.log('error', err);
			})
		})
	}
}
