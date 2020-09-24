import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'

const styles = StyleSheet.create({
	trendingTags: {
		width: 75,
		height: 25,
		borderRadius: 20,
		borderWidth: 0.2,
		borderColor: '#aaa4a4',
		alignItems: 'center',
		justifyContent: 'center'
	},
})

export default function Trending() {
	return (
	<View>
		<Text>Trending Tags</Text>
		<View style={{ flexDirection: 'row' }}>
			<TouchableOpacity style={[styles.trendingTags, { backgroundColor: '#aaa4a4' }]}>
				<Text>#Sneaker</Text>
			</TouchableOpacity>
			<TouchableOpacity style={[styles.trendingTags, { backgroundColor: '#eea5a5' }]}>
				<Text>#Football</Text>
			</TouchableOpacity>
			<TouchableOpacity style={[styles.trendingTags, { backgroundColor: '#5f79d6' }]}>
				<Text>#Something</Text>
			</TouchableOpacity>
		</View>
	</View>
	)
}
