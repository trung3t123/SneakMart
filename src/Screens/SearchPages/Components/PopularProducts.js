import React from 'react';
import { Dimensions, StyleSheet, Text, View } from 'react-native';
import Product from './Product';

const deviceWidth = Dimensions.get('window').width;
const deviceHeight = Dimensions.get('screen').height;

const styles = StyleSheet.create({
	popularProductsContainer: {
		padding: 10,
	},
	
})


export default function PopularProducts() {



	return (
		<View style={styles.popularProductsContainer} >
			<Text style={{ fontSize: 20, fontWeight: '500', paddingBottom: 10 }}>Popular Products</Text>
			<Product/>
			<Product/>


		</View>
	)
}
