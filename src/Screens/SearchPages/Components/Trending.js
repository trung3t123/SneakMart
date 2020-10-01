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
	trendingContainer: {
		paddingBottom: 30,
		borderBottomColor: '#6b6b6b',
		borderBottomWidth: 0.2,
		marginLeft: 10,
		marginRight: 10
	}
})

export default function Trending() {
	return (
		<View style={styles.trendingContainer}>
			<Text style={{fontSize :20,fontWeight: '500'}}>Trending Tags</Text>
			<View style={{ flexDirection: 'row', paddingTop :10 }}>
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
