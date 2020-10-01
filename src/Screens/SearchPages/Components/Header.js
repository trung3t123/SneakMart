import React from 'react'
import { View, Text, StyleSheet, Dimensions, TextInput } from 'react-native';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';


const deviceWidth = Dimensions.get('window').width;
const deviceHeight = Dimensions.get('screen').height;


const styles = StyleSheet.create({
	searchHeader: {
		fontSize: 30
	},
	headerContainer: {
		flex: 1,
		paddingLeft: deviceWidth * 5 / 100,
		paddingRight: deviceWidth * 5 / 100,
		paddingTop: deviceWidth * 10 / 100,
	},
	searchBarContainer: {
		paddingLeft: 10,
		paddingRight: 10,
		alignItems: 'center',
		flexDirection: 'row',
		height: deviceHeight * 7 / 100,
		width: deviceWidth * 90 / 100,
		backgroundColor: '#ffffff',
		marginTop: deviceHeight * 3 / 100,
		shadowOffset: {
			width: 0,
			height: 5,
		},
		shadowOpacity: 0.36,
		shadowRadius: 6.68,
		borderRadius: 30,
		elevation: 11,

	},
})

export default function Header() {
	return (
		<View style={styles.headerContainer}>
			<Text style={styles.searchHeader} >
				Let's get
						</Text >
			<Text style={styles.searchHeader} >
				Something now !
						</Text>
			<View style={styles.searchBarContainer}>
				<View style={{ flexDirection: 'row', flex: 1, alignItems: 'center' }} >
					<EvilIcons color={'red'} name="search" size={deviceHeight * 5 / 100} />
					<TextInput style={{ width: deviceWidth * 60 / 100 }} />
				</View>
				<View style={{ alignItems: 'flex-end',alignItems: 'center'}} >
					<SimpleLineIcons color={'blue'} name="microphone" size={deviceHeight * 4 / 100} />
				</View>
			</View>
		</View>
	)
}
