import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'

const styles = StyleSheet.create({
	labelText: {
		fontSize: 20,
		fontWeight: '500'
	},
	textContainer: {
		width: 80,
		alignItems: 'center'
	}
})

export default function Label(props) {

	const { index, label } = props

	return (
		<TouchableOpacity
			key={index}
			style={[styles.textContainer, { backgroundColor: 'transparent' }]}>
			<Text style={styles.labelText} >
				{label}
			</Text>
		</TouchableOpacity>
	)
}
