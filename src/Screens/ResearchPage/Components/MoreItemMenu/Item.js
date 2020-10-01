import React from 'react'
import { View, Text, StyleSheet, Dimensions, TouchableOpacity, Image } from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons';

const deviceWidth = Dimensions.get('screen').width;
const deviceHeight = Dimensions.get('screen').height;

const styles = StyleSheet.create({
	itemContainer: {
		backgroundColor: 'transparent',
		width: deviceWidth / 2,
		alignItems: 'center'
	},
	item: {
		width: '80%',
		height: '100%',
		flexDirection: 'column',
		backgroundColor: 'white',
		borderRadius: 30,
		padding: 10,
		alignItems: 'center'
	},
	itemStatus: {
		position: 'absolute',
		top: 35,
		left: -10,
		height: 20,
		width: 60,
		alignItems: 'center',
		backgroundColor: '#ec435d',
		padding: 5,
		transform: [{ rotate: '90deg' }]
	},
	likeButton: {
		position: 'absolute',
		right: 20,
		top: 20
	},
})

export default function Item(props) {
	return (
		<View style={styles.itemContainer}>
			<View style={styles.item} >
				<View style={styles.itemStatus} >
					<Text style={{ color: 'white', fontSize: 10 }}>{props.statusItem}</Text>
				</View>
				<TouchableOpacity style={styles.likeButton} >
					<Ionicons name="ios-heart-outline" size={27} />
				</TouchableOpacity>
				<Image source={props.image} style={{ resizeMode: 'contain', width: '60%', bottom: 40 }} />
				<Text style={{ position: 'absolute', bottom: 30, color: 'black' }}>{props.nameItem}</Text>
				<Text style={{ position: 'absolute', bottom: 10, color: 'black' }}>{props.priceItem}</Text>
			</View>
		</View>
	)
}
