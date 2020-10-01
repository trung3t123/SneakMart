import React, { useEffect, useRef } from 'react'
import { View, Text, StyleSheet, Animated, Image, Dimensions } from 'react-native'
import IMAGE from '../../../Utils/ImagesConstant';

const deviceWidth = Dimensions.get('window').width;
const deviceHeight = Dimensions.get('screen').height;

const styles = StyleSheet.create({
	defaultButton: {
		flexDirection: 'row',
		marginTop: 5,
		marginBottom: 5,
		borderRadius: 10,
		backgroundColor: '#bdd2f3',
		height: 150
	}
})

export default function Product() {

	const selectAnim = useRef(new Animated.Value(-400)).current;


	useEffect(() => {
		Animated.timing(selectAnim, {
			toValue: 0,
			duration: 1000,
			useNativeDriver: true
		}).start();
	}, [])

	return (
		<Animated.View
			style={[styles.defaultButton,
			{
				transform: [{ translateX: selectAnim }]
			}
			]}
		>
			<View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
				<View style={{ width: 100, height: 100, backgroundColor: 'white', borderRadius: 10 }}>
					<Image source={IMAGE.SHOES_NIKE_JORDAN1} style={{ resizeMode: 'contain', width: 100, height: 100 }} />
				</View>
			</View>
			<View style={{ flex: 1, justifyContent: 'center' }}>
				<View style={{ width: '100%', height: 100, borderRadius: 10, justifyContent: 'center' }}>
					<Text style={{ fontSize: 20, fontWeight: '300' }}>Nike Blaze</Text>
					<Text style={{ fontSize: 15, fontWeight: 'bold' }}>$200</Text>
					<Text style={{ fontSize: 15, fontWeight: 'bold' }}>$400</Text>
				</View>
			</View>
		</Animated.View>
	)
}
