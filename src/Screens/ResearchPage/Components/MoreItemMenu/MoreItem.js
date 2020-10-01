import React from 'react'
import { View, Text, TouchableOpacity, StyleSheet, ScrollView } from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons'
import Item from './Item'
import IMAGE from '../../../../Utils/ImagesConstant'


const styles = StyleSheet.create({
	searchScreenNavButton: {
		position: 'absolute',
		right: 20,
	},
	moreItem: {
		height: 165,
		width: '100%',
		position: 'absolute',
		bottom: 5
	}
})

export default function MoreItem() {
	return (
		<View style={{ flex: 1.5, position: 'relative' }}>

			<View style={{ flex: 1 }}>
				<Text style={{ marginLeft: 10, fontSize: 20, fontWeight: '600' }}> More</Text>
				<TouchableOpacity style={styles.searchScreenNavButton}>
					<Ionicons name="arrow-forward-outline" size={30} color={'black'} />
				</TouchableOpacity>
			</View>
			<View style={{ flex: 1, backgroundColor: '#d1d1cd', position: 'relative' }}>
			</View>
			<ScrollView showsHorizontalScrollIndicator={false} horizontal={true} style={styles.moreItem}>
				<Item statusItem='NEW' image={IMAGE.NIKE_SHOES} nameItem={'AirForce'} priceItem={'1000k'} />
				<Item statusItem='HOT' image={IMAGE.NIKE_JORDAN_SHOES} nameItem={'Jordan'} priceItem={'1234k'} />
				<Item statusItem={''} image={IMAGE.SNEAKER_SHOES} nameItem={'Sneaker'} priceItem={'980k'} />

			</ScrollView>
		</View>
	)
}
