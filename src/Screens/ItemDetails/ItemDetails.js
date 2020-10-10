import React from 'react'
import { SharedElement } from 'react-navigation-shared-element';
import { View, Text, Image, Dimensions, StyleSheet, TouchableOpacity, SafeAreaView } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';


const deviceWidth = Dimensions.get('screen').width;
const deviceHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
	itemContainer: {
		height: 300,
		width: 200,
		margin: 20,
		borderRadius: 20,
		padding: 20,
		position: 'relative'
	},
	imageContainer: {
		position: 'absolute',
		right: -25,
		bottom: 40
	},
	likeButton: {
		position: 'absolute',
		right: 20,
		top: 20
	},
	detailsButton: {
		position: 'absolute',
		bottom: 10,
		right: 20
	},
	detailsText: {
		color: 'white',
		fontWeight: '500',
		fontSize: 20,
	}
})

export default function ItemDetails(props) {

	const item = props.route.params
	console.log('props', props);

	return (
		<View style={{ flex: 1 }} >
			<SharedElement id='itemDetailsShared'>
				<View style={{ width: 750, borderRadius: 750, height: 750, backgroundColor: item.backgroundColor, position: 'absolute', top: -400, left: -30 }}>

				</View>
			</SharedElement>
			<SafeAreaView style={{ flex: 1 }} >
				<TouchableOpacity style={{ margin: 10 }} onPress={() => props.navigation.goBack()}>
					<Ionicons name="md-arrow-back" size={30} color={'#ffffff'} />
				</TouchableOpacity>
			</SafeAreaView>

		</View>
	)
}
