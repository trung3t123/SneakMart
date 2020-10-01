import React, { Component } from 'react'
import { View, Text, ImageBackground, StyleSheet, Dimensions, Image, KeyboardAvoidingView } from 'react-native'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Login from './Components/Login';
import Register from './Components/Register';
import DropdownAlert from 'react-native-dropdownalert';
import IMAGE from '../../Utils/ImagesConstant';

const SCREEN_HEIGHT = Dimensions.get("screen").height;
const SCREEN_WIDTH = Dimensions.get("window").width;

const Tab = createMaterialTopTabNavigator();

const styles = StyleSheet.create({

})



class Account extends Component {
	constructor(props) {
		super(props);

		this.state = {
			tabBarOptions:
			{
				activeTintColor: 'white',
				labelStyle: {
					color: 'white',
				},
				showLabel: true,
				style: {
					backgroundColor: 'rgba(0,0,0,0)',
				},
				indicatorStyle: {
					backgroundColor: 'pink'
				}
			}
		}

	}


	render() {
		return (
			<View style={{ flex: 1 }}>
				<ImageBackground style={{ flex: 1 }} resizeMode="cover" blurRadius={10} source={IMAGE.ROAD_BACKGROUND}>

					<KeyboardAvoidingView
						behavior={Platform.OS == "ios" ? "padding" : "height"}

						style={{
							flex: 1,
							backgroundColor: 'rgba(0,0,0,0.6)',
						}}>
						<DropdownAlert ref={ref => this.dropDownAlertRef = ref} />

						<Image source={IMAGE.APP_ICON} style={{ height: 200, width: 200, resizeMode: 'center', flex: 1.5, alignSelf: 'center' }} />

						<Tab.Navigator
							style={{ flex: 2 }}
							tabBarOptions={this.state.tabBarOptions}
						>
							<Tab.Screen
								name='Login'
								component={Login} />
							<Tab.Screen
								name='Register'
								component={Register} />
						</Tab.Navigator>
					</KeyboardAvoidingView>
				</ImageBackground>
			</View >
		)
	}
}




export default Account;
