import React from 'react'
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons'

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

export default function Item(props) {
	return (
		<View style={[styles.itemContainer, { backgroundColor: props.backgroundColor }]}>
			<View>
				<Text style={styles.detailsText} >{props.brandItem}</Text>
				<Text style={{ fontSize: 23, fontWeight: '700', color: 'white' }} >{props.nameItem}</Text>
				<Text style={styles.detailsText} >{props.priceItem}</Text>
			</View>
			<TouchableOpacity style={styles.likeButton} >
				<Ionicons name="ios-heart-outline" size={30} color={'#ffffff'} />
			</TouchableOpacity>
			<TouchableOpacity style={styles.detailsButton}>
				<Ionicons name="arrow-forward-outline" size={30} color={'#ffffff'} />
			</TouchableOpacity>
			<View style={styles.imageContainer}>
				<Image source={props.image} />
			</View>
		</View>
	)
}
