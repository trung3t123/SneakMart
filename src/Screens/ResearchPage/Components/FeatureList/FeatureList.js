import React from 'react'
import { View, Text, StyleSheet, ScrollView, Dimensions } from 'react-native'

const deviceWidth = Dimensions.get('screen').width;
const deviceHeight = Dimensions.get('screen').height;

const styles = StyleSheet.create({
	featureListContainer: {
		transform: [{ rotate: '90deg' }],
		width: deviceHeight / 2,
		position: 'absolute',
		left: -deviceWidth / 3,
		top: deviceHeight / 4
	},
	featureText: {
		margin: 20,
		fontSize: 15,
		fontWeight: '600',
	}
})

export default function FeatureList() {
	return (
		<View style={styles.featureListContainer} >
			<View style={{ flexDirection: 'row' }} >
				<Text style={styles.featureText} >Up Coming</Text>
				<Text style={[styles.featureText, { fontWeight: '900' }]}>News</Text>
				<Text style={styles.featureText}>Feature</Text>
			</View>
		</View>
	)
}
