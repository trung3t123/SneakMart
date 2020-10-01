import React from 'react'
import { View, Text, ScrollView, ImageBackground, StyleSheet, TextInput, Dimensions, TouchableHighlight, TouchableOpacity } from 'react-native'
import IMAGE from '../../Utils/ImagesConstant';
import EvilIcons from 'react-native-vector-icons/EvilIcons'
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons'
import Trending from './Components/Trending';
import Header from './Components/Header';
import PopularProducts from './Components/PopularProducts';

const deviceWidth = Dimensions.get('window').width;
const deviceHeight = Dimensions.get('screen').height;

const styles = StyleSheet.create({
	backgroundImage: {
		flex: 1,
		resizeMode: 'cover',
	},

	wrapperContainer: {
		flex: 1,
	},

	bodyContainer: {
		flex: 2,
		resizeMode: 'cover',
		backgroundColor: 'white',
	},

})

function SearchPage() {

	return (
		<ImageBackground style={styles.backgroundImage} source={IMAGE.BACK_GROUND_SEARCH_FORM} >
			<View style={styles.wrapperContainer} >
				<Header />
				<View style={styles.bodyContainer} >
					<ScrollView style={{ flex: 1 }}>
						<Trending />
						<View>
							<PopularProducts />
						</View>
					</ScrollView>
				</View>
			</View>
		</ImageBackground>
	)
}
export default SearchPage;