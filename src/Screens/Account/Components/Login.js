import React, { Component } from 'react';
import { View, Text, ImageBackground, Dimensions, TextInput, StyleSheet, TouchableOpacity } from 'react-native';
import IMAGE from '../../../Utils/ImagesConstant';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';

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
		height: 60,
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
	}
})

class Login extends Component {
	constructor(props) {
		super(props);
		this.state = {
		};
	}



	render() {
		return (
			<View style={{ flex: 1 }}>
				<ImageBackground style={{ flex: 1 }} source={IMAGE.ROAD_BACKGROUND} resizeMode="cover" blurRadius={10}>
					<View style={{ flex: 1, alignItems: 'center', backgroundColor: ' rgba(0,0,0,0.4)' }}>
						<View style={styles.textInput}>
							<AntDesign name="phone" size={30} color='#ffffff' />
							<TextInput style={{ paddingLeft: 10, width: SCREEN_WIDTH * 80 / 100 }} />
						</View>
						<View style={styles.textInput}>
							<Icon name="lock-outline" size={30} color='#ffffff' />
							<TextInput style={{ paddingLeft: 10, width: SCREEN_WIDTH * 80 / 100 }} />
						</View>
						<View style={styles.loginState}>
							<TouchableOpacity onPress={() => this.props.navigation.navigate('HomePage')} style={styles.loginButton}>
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




export default Login;