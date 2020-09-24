import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import React, { useEffect } from 'react';
import { Dimensions, StyleSheet, View } from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import IconMaterial from 'react-native-vector-icons/MaterialCommunityIcons';
import { useDispatch } from 'react-redux';
import AccountPage from './AccountPages/AccountPage';
import ResearchPage from './ResearchPage/ResearchPage';
import SearchPage from './SearchPages/SearchPage';
import { setProduct } from '../redux/actions/Product';
import { constData } from '../Utils/ConstData';

const deviceWidth = Dimensions.get('screen').width;
const deviceHeight = Dimensions.get('screen').height;
const styles = StyleSheet.create({

})
const Tab = createMaterialBottomTabNavigator();

function HomePage(props) {
	const dispatch = useDispatch()
	dispatch(setProduct(constData));

	return (
		<View style={{ flex: 1 }}>
			<View style={{ flex: 1 }}>
				<Tab.Navigator
					style={{ flex: 1, backgroundColor: 'pink' }}
					activeColor="#f07171"
					inactiveColor="grey"
					initialRouteName='ResearchPage'>
					<Tab.Screen
						options={{
							tabBarLabel: 'Market',
							tabBarIcon: ({ focused, tintColor = 'grey' }) => (
								focused ? <AntDesign
									name="areachart" size={30} color='#f74444'
								/>
									:
									<AntDesign
										name="areachart" size={30} color={tintColor}
									/>
							)
						}}
						name='ResearchPage' component={ResearchPage} />
					<Tab.Screen options={{
						tabBarLabel: 'Search',
						tabBarIcon: ({ focused, tintColor = 'grey' }) => (
							focused ? <FontAwesome5
								name="search-dollar" size={30} color='#f74444'
							/>
								:
								<FontAwesome5
									name="search-dollar" size={30} color={tintColor}
								/>
						)
					}} name='SearchPage' component={SearchPage} />

					<Tab.Screen options={{
						tabBarLabel: 'Account',
						tabBarIcon: ({ focused, tintColor = 'grey' }) => (
							focused ? <IconMaterial
								name="account" size={30} color='#f74444'
							/>
								:
								<IconMaterial
									name="account" size={30} color={tintColor}
								/>
						)
					}}
						name='AccountPage' component={AccountPage} />
				</Tab.Navigator>
			</View>
		</View>
	)
}

export default HomePage;

