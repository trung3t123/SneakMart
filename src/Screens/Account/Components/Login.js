import React, { Component } from 'react';
import { View, Text, ImageBackground, Dimensions, TextInput, StyleSheet, TouchableOpacity } from 'react-native';
import IMAGE from '../../../Utils/ImagesConstant';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { LoginManager, AccessToken } from "react-native-fbsdk";
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import { loginUser, loginFacebook } from '../../../redux/actions/User';
import { connect } from 'react-redux';



const SCREEN_HEIGHT = Dimensions.get("screen").height;
const SCREEN_WIDTH = Dimensions.get("window").width;

const styles = StyleSheet.create({
	textInput: {
		paddingTop: 30,
		flexDirection: 'row',
		borderStyle: 'solid',
		borderBottomWidth: 1,
		borderColor: '#afa9a9',
		paddingBottom: 10
	},
	loginButton: {
		borderRadius: 4,
		height: 50,
		width: SCREEN_WIDTH * 80 / 100,
		backgroundColor: '#e67272',
		color: 'white',
		alignItems: 'center',
		justifyContent: 'center',
	},
	loginState: {
		position: 'absolute',
		bottom: 25,
		alignItems: 'center'
	},
	facebookLoginButton: {
		marginBottom: 10,
		borderRadius: 4,
		width: SCREEN_WIDTH * 80 / 100,
		height: 50,
		backgroundColor: '#5990da',
		alignItems: 'center',
		flexDirection: 'row',
		justifyContent: 'center'
	}
})

class Login extends Component {
	constructor(props) {
		super(props);
		this.state = {
			userPhone: '0369935390',
			userPassword: '1123',
		};
	}

	facebookLoginHandler = () => {
		this.props.loginFacebook()
	}

	loginUser = () => {
		const { userPhone, userPassword } = this.state;

		console.log('userPhone: ' + userPhone);
		console.log('userPassword: ' + userPassword);
		this.props.login(userPhone, userPassword);
	}

	render() {

		return (
			<View style={{ flex: 1 }}>
				<ImageBackground style={{ flex: 1 }} source={IMAGE.ROAD_BACKGROUND} resizeMode="cover" blurRadius={10}>
					<View style={{ flex: 1, alignItems: 'center', backgroundColor: ' rgba(0,0,0,0.4)' }}>
						<View style={styles.textInput}>
							<AntDesign name="phone" size={30} color='#ffffff' />
							<TextInput defaultValue={this.state.userPhone} onChangeText={(value) => this.setState({ userPhone: value })}
								style={{ paddingLeft: 10, color: '#ffffff', width: SCREEN_WIDTH * 80 / 100 }} />
						</View>
						<View style={styles.textInput}>
							<Icon name="lock-outline" size={30} color='#ffffff' />
							<TextInput defaultValue={this.state.userPassword} secureTextEntry={true} onChangeText={(value) => this.setState({ userPassword: value })}
								style={{ paddingLeft: 10, color: '#ffffff', width: SCREEN_WIDTH * 80 / 100 }} />
						</View>



						<View style={styles.loginState}>
							<TouchableOpacity onPress={this.facebookLoginHandler} style={styles.facebookLoginButton} >
								<View style={{ position: "absolute", left: 10 }} >
									<MaterialIcons name="facebook" size={30} color='#ffffff' />
								</View>
								<Text style={{ color: 'white' }}>Login With Facebook</Text>

							</TouchableOpacity>
							<TouchableOpacity onPress={this.loginUser} style={styles.loginButton}>
								<Text style={{ color: 'white' }}>Login</Text>
							</TouchableOpacity>

							<TouchableOpacity>
								<Text style={{ color: 'white', paddingTop: 5 }}>
									forgot password
								</Text>
							</TouchableOpacity>
						</View>
					</View>
				</ImageBackground>
			</View>
		);
	}
}


function mapStateToProps(state) {
	return {
		user: state.user
	}
}

function mapDispatchToProps(dispatch) {
	return {
		login: (userPhone, userPassword) => dispatch(loginUser(userPhone, userPassword)),
		loginFacebook: () => dispatch(loginFacebook())
	}
}



export default connect(mapStateToProps, mapDispatchToProps)(Login);