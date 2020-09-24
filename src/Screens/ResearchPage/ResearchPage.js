import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import React, { useEffect } from 'react';
import { Dimensions, Image, StyleSheet, View } from 'react-native';
import IMAGE from '../../Utils/ImagesConstant';
import Basketball from './Components/Basketball';
import Sneaker from './Components/Sneaker';
import Football from './Components/Football';


const Tab = createMaterialTopTabNavigator();
const deviceWidth = Dimensions.get('screen').width;
const deviceHeight = Dimensions.get('screen').height;

const styles = StyleSheet.create({
	contentContainer: {
		height: deviceHeight * 70 / 100,
		width: deviceWidth,
	},
	banner: {
		height: deviceHeight * 20 / 100,
		width: deviceWidth,
		resizeMode: 'stretch'
	},
	topTabNavStyle: {

	}
})

function ResearchPage(props) {

	useEffect(() => {
		console.log('loaded ResearchPage');
	}, [])

	return (

		<View style={{ flex: 1 }}>
			<Image style={styles.banner} source={IMAGE.TIKI_BANNER} />
			{/* Top Nav */}
			<View style={styles.contentContainer}>
				<Tab.Navigator tabBarOptions={{
					indicatorStyle: {
						backgroundColor: 'red',
					},
					labelStyle: { fontSize: 12 },
					tabStyle: { width: deviceWidth / 3 },
					style: { backgroundColor: 'pink' },
				}}>
					<Tab.Screen name="Sneaker" component={Sneaker} />
					<Tab.Screen name="Football" component={Football} />
					<Tab.Screen name="Basketball" component={Basketball} />
				</Tab.Navigator>
			</View>
		</View>
	)
}


export default ResearchPage;

