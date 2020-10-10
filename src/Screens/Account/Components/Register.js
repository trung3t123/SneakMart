import React, { Component } from 'react';
import { Dimensions, ImageBackground, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import IMAGE from '../../../Utils/ImagesConstant';
import { connect } from 'react-redux';
import { register } from '../../../redux/actions/User';


const SCREEN_HEIGHT = Dimensions.get("screen").height;
const SCREEN_WIDTH = Dimensions.get("window").width;

const styles = StyleSheet.create({
	continue: {
		position: 'absolute',
		bottom: 25,
		alignItems: 'center',
		flexDirection: 'row',
	},
	registerButton: {
		borderRadius: 4,
		height: 60,
		width: SCREEN_WIDTH * 70 / 100,
		color: 'white',
		alignItems: 'center',
		justifyContent: 'center',
	},
	textInput: {
		paddingTop: 30,
		flexDirection: 'row',
		borderStyle: 'solid',
		borderBottomWidth: 1,
		borderColor: '#afa9a9',
		paddingBottom: 10,
	},
	backButton: {
		height: 60,
		borderRadius: 4,
		backgroundColor: '#e67272',
		marginRight: 10,
		alignItems: 'center',
		justifyContent: 'center',
	}
})


class Register extends Component {
	constructor(props) {
		super(props);
		this.state = {
			// userPhone: '0369935390',
			userPassword: '1123',
			userMail: 'a6.nero3@gmail.com',
		};
	}

	registerButtonPressedHandler() {
		this.props.register({
			// userPhone: this.state.userPhone,
			userPassword: this.state.userPassword,
			userMail: this.state.userMail
		});
	}


	render() {
		return (
			<ImageBackground style={{ flex: 1 }} source={IMAGE.ROAD_BACKGROUND} resizeMode="cover" blurRadius={10}>
				<View style={{ flex: 1, backgroundColor: ' rgba(0,0,0,0.4)', alignItems: 'center' }}>

					<View style={{ flex: 1 }}>
						{/* <View style={styles.textInput}>
							<AntDesign name="phone" size={30} color='#ffffff' />
							<TextInput
								value={this.state.userPhone}
								placeholder='Phone number'
								onChangeText={(value) => { this.setState({ userPhone: value }) }}
								style={{ color: 'white', paddingLeft: 10, width: SCREEN_WIDTH * 80 / 100 }} />
						</View> */}
						<View style={styles.textInput}>
							<MaterialIcons name="alternate-email" size={30} color='#ffffff' />
							<TextInput
								value={this.state.userMail}
								placeholder='Email'
								onChangeText={(value) => { this.setState({ userMail: value }) }}
								style={{ color: 'white', paddingLeft: 10, width: SCREEN_WIDTH * 80 / 100 }} />
						</View>
						<View style={{ flexDirection: 'row' }}>
							<View style={[styles.textInput, { flex: 1, marginRight: 30 }]}>
								<MaterialCommunityIcons name="lock-outline" size={30} color='#ffffff' />
								<TextInput
									value={this.state.userPassword}
									secureTextEntry={true}
									placeholder='Password'
									onChangeText={(value) => { this.setState({ userPassword: value }) }}
									style={{ color: 'white', paddingLeft: 10, width: SCREEN_WIDTH * 30 / 100 }} />
							</View>
							<View style={[styles.textInput, { flex: 1 }]}>
								<FontAwesome5 name="key" size={30} color="#ffffff" />
								<TextInput
									placeholder='Again'
									style={{ color: 'white', paddingLeft: 10, width: SCREEN_WIDTH * 30 / 100 }} />
							</View>
						</View>

						<View style={styles.continue}>
							<TouchableOpacity onPress={() => this.props.navigation.navigate('Login')} style={styles.backButton}>
								<Ionicons name="chevron-back" color="white" size={50} />
							</TouchableOpacity>
							<TouchableOpacity onPress={() => this.registerButtonPressedHandler()} style={[styles.registerButton, {
								backgroundColor: 'rgba(185,183,183,0.4)',
							}]}>
								<Text style={{ color: 'white' }}>Register</Text>
							</TouchableOpacity>
						</View>
					</View>
				</View>
			</ImageBackground>
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
		register: (user) => dispatch(register(user))
	}
}


export default connect(mapStateToProps, mapDispatchToProps)(Register);