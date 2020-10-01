import React from 'react'
import { View, Text, StyleSheet, ScrollView, TouchableHighlight, FlatList, TouchableOpacity } from 'react-native'
import Label from './Label'

const styles = StyleSheet.create({
	brandLabels: {
		paddingLeft:20,
	},
	brandLabelContainer: {
		flexDirection: 'row',
		height: 30,
		alignItems: 'center',
		justifyContent: 'center'
	},


})

export default function BrandLabels(props) {

	const listLabels = props.listLabels




	return (
		<ScrollView showsHorizontalScrollIndicator={false} horizontal={true} style={styles.brandLabels} >
			<View style={styles.brandLabelContainer}>
				{listLabels.map((label, index) => {
					return (
						<Label label={label} index={index} key={index} />
					)
				}
				)}

			</View>
		</ScrollView>
	)
}
