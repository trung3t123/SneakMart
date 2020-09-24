import React from 'react'
import { View, Text, StyleSheet, Image } from 'react-native'

const styles = StyleSheet.create({
	itemContainer: {
		flexDirection: 'column',
		height: 200,
		width: 200,
		alignItems: 'center'
	},
	itemImageContainer: {
		height: 120,
		width: 170,
		alignItems: 'center',
		borderRadius: 10,
		borderStyle: 'solid',
		borderWidth: 2,
		borderColor: '#ee4e4e'
	}
})

const Item = (props) => {
	console.log('image link ', props.itemImage);
	return (
		<View style={styles.itemContainer} >
			<View style={styles.itemImageContainer}>
				<Image source={require('./../images/NikeBlazerMid.jpg')} style={{ resizeMode: 'contain', height: 120, width: 160, borderRadius: 10 }} />
			</View>
			<Text>
				highest Bid : {props.highestBid}
			</Text>
			<Text>
				lowest Ask : {props.lowestAsk}
			</Text>
		</View>
	)
}

export default Item
