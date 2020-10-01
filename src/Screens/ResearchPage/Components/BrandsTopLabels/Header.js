import React from 'react'
import { View, Text, StyleSheet } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons'

const styles = StyleSheet.create({
	headerContainer: {
		height: 70,
		flexDirection: 'row',
	},
	textHeaderContainer: {
		flex: 1,
		justifyContent: 'center'
	},
	header: {
		fontSize: 30,
		marginLeft: 10,
		fontWeight: '700'
	},
	headersOption: {
		flex: 1,
		alignItems: 'flex-end',
		justifyContent: 'center',
		paddingRight :20,
	},
	notificationsContainer: {
		height: 40,
		width: 40,
		alignItems: 'center',
		justifyContent: 'center',
		borderRadius: 30,
		backgroundColor: '#e2e4e7'
	}
})


export default function Header() {
	return (
		<View style={styles.headerContainer}>
			<View style={styles.textHeaderContainer} >
				<Text style={styles.header}>
					Discover
				</Text>

			</View>
			<View style={styles.headersOption}>
				<View style={styles.notificationsContainer}>
					<Ionicons name="notifications-outline" size={30} />
				</View>
			</View>
		</View>
	)
}
