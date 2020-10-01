import React, { Component } from 'react'
import { Text, View, StyleSheet, Dimensions } from 'react-native'

const SCREEN_HEIGHT = Dimensions.get("screen").height;
const SCREEN_WIDTH = Dimensions.get("window").width;

const styles = StyleSheet.create({
	registerPhaseView: {
		flexDirection: 'row',
		justifyContent: 'center',
		alignItems: 'center',
		paddingTop: 30,
	},
	node: {
		width: 30,
		height: 30,
		borderRadius: 20,
		alignItems: 'center',
		justifyContent: 'center',
		borderStyle: 'solid',
		borderWidth: 1,
		borderColor: '#dad4d4'
	},
	nodeBridge: {
		width: SCREEN_WIDTH * 30 / 100,
		height: 5,
		padding: 2,
		borderStyle: 'solid',
		borderWidth: 1,
		borderColor: '#dad4d4'
	}
})

class PhaseChecker extends Component {
	render() {
		return (
			<View style={styles.registerPhaseView}>
				<View style={[styles.node, {
					backgroundColor: '#dad4d4',
				}]}>
					<Text >1</Text>
				</View>
				<View style={[styles.nodeBridge, { backgroundColor: '#dad4d4' }]}>

				</View>
				<View style={[styles.node, {
					backgroundColor: 'transparent',
				}]}>
					<Text style={{ color: '#dad4d4' }}>2</Text>
				</View>
				<View style={[styles.nodeBridge, { backgroundColor: 'transparent' }]}>

				</View>
				<View style={[styles.node, {
					backgroundColor: 'transparent',
				}]}><Text style={{ color: '#dad4d4' }}>3</Text>
				</View>
			</View>
		)
	}
}

export default PhaseChecker
