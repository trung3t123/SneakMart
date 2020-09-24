import React from 'react'
import { View, Text, ScrollView, ImageBackground, StyleSheet, TextInput, Dimensions, TouchableHighlight, TouchableOpacity } from 'react-native'
import IMAGE from '../../Utils/ImagesConstant';
import EvilIcons from 'react-native-vector-icons/EvilIcons'
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons'
import Trending from './Components/Trending';

const deviceWidth = Dimensions.get('window').width;
const deviceHeight = Dimensions.get('screen').height;

const styles = StyleSheet.create({
	backgroundImage: {
		flex: 1,
		resizeMode: 'cover',
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
	wrapperContainer: {
		flex: 1,
	},
	searchHeader: {
		fontSize: 30
	},
	headerContainer: {
		flex: 1,
		backgroundColor: 'red',
		paddingLeft: deviceWidth * 5 / 100,
		paddingRight: deviceWidth * 5 / 100,
		paddingTop: deviceWidth * 10 / 100,
		marginBottom: deviceWidth * 15 / 100,
	},
	bodyContainer: {
		flex: 1,
		resizeMode: 'cover',
		backgroundColor: 'white',
	},

})

function SearchPage() {

	return (
		<ImageBackground style={styles.backgroundImage} source={IMAGE.BACK_GROUND_SEARCH_FORM} >
			<View style={{ flex: 1,backgroundColor: 'transparent' }}>
				<ScrollView style={styles.wrapperContainer} >
					<View style={styles.headerContainer}>
						<Text style={styles.searchHeader} >
							Let's get
						</Text >
						<Text style={styles.searchHeader} >
							Something now !
						</Text>
						<View style={styles.searchBarContainer}>
							<View style={{ flexDirection: 'row', flex: 1 }} >
								<EvilIcons color={'red'} name="search" size={deviceHeight * 5 / 100} />
								<TextInput style={{ width: deviceWidth * 60 / 100 }} />
							</View>
							<View style={{ alignItems: 'flex-end' }} >
								<SimpleLineIcons color={'blue'} name="microphone" size={deviceHeight * 4 / 100} />
							</View>
						</View>
					</View>
					<View style={styles.bodyContainer} >
						<Trending />
					</View>
				</ScrollView>
			</View>
		</ImageBackground>
	)
}
export default SearchPage;