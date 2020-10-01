import React, { Component } from 'react'
import { Text, View, StyleSheet, TextInput, Dimensions } from 'react-native'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import AntDesign from 'react-native-vector-icons/AntDesign';

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';



const SCREEN_HEIGHT = Dimensions.get("screen").height;
const SCREEN_WIDTH = Dimensions.get("window").width;


const styles = StyleSheet.create({
	textInput: {
		paddingTop: 30,
		flexDirection: 'row',
		borderStyle: 'solid',
		borderBottomWidth: 1,
		borderColor: '#afa9a9',
		paddingBottom: 10,
	},
	loginButton: {
		borderRadius: 4,
		height: 60,
		width: SCREEN_WIDTH * 80 / 100,
		backgroundColor: '#e67272',
		color: 'white',
		alignItems: 'center',
		justifyContent: 'center',
	}
})

class RegisterPhase1 extends Component {
	render() {
		return (
			<View style={{ flex: 1 }}>
				<View style={styles.textInput}>
					<MaterialIcons name="alternate-email" size={30} color='#ffffff' />
					<TextInput style={{ paddingLeft: 10, width: SCREEN_WIDTH * 80 / 100 }} />
				</View>
				<View style={{ flexDirection: 'row' }}>
					<View style={[styles.textInput, { flex: 1, marginRight: 30 }]}>
						<MaterialCommunityIcons name="lock-outline" size={30} color='#ffffff' />
						<TextInput style={{ paddingLeft: 10, width: SCREEN_WIDTH * 30 / 100 }} />
					</View>
					<View style={[styles.textInput, { flex: 1 }]}>
						<FontAwesome5 name="key" size={30} color="#ffffff" />
						<TextInput style={{ paddingLeft: 10, width: SCREEN_WIDTH * 30 / 100 }} />
					</View>
				</View>
				<View style={styles.textInput}>
					<AntDesign name="phone" size={30} color='#ffffff' />
					<TextInput style={{ paddingLeft: 10, width: SCREEN_WIDTH * 80 / 100 }} />
				</View>

			</View>
		)
	}
}

export default RegisterPhase1
