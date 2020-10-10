import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import React, { useEffect } from 'react';
import { Dimensions, Image, StyleSheet, View, SafeAreaView, Text, ScrollView, TouchableOpacity, TouchableHighlight } from 'react-native';
import IMAGE from '../../Utils/ImagesConstant';
import Header from './Components/BrandsTopLabels/Header';
import BrandLabels from './Components/BrandsTopLabels/BrandLabels';
import FeatureList from './Components/FeatureList/FeatureList';
import ContentItem from './Components/ContentItem/ContentItem';
import MoreItem from './Components/MoreItemMenu/MoreItem';


const Tab = createMaterialTopTabNavigator();
const deviceWidth = Dimensions.get('screen').width;
const deviceHeight = Dimensions.get('screen').height;

const styles = StyleSheet.create({
	contentContainer: {
		flex: 3,
		flexDirection: 'column',
	},


})

function ResearchPage(props) {

	const listLabels = ['Nike', 'Adidas', 'Puma', 'Jordan', 'Mizuno']

	useEffect(() => {
	}, [])

	return (

		<SafeAreaView style={{ flex: 1 }}>
			<Header />
			{/* Top Nav */}
			<View style={styles.contentContainer}>
				<BrandLabels listLabels={listLabels} />
				<View style={{ flex: 30, flexDirection: 'row' }} >
					<ContentItem navigation={props.navigation} />
					<FeatureList />
				</View>
			</View>
			<MoreItem />
		</SafeAreaView>
	)
}


export default ResearchPage;

