import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import React, { useEffect } from 'react';
import { Dimensions, StyleSheet, View } from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import IconMaterial from 'react-native-vector-icons/MaterialCommunityIcons';
import { useDispatch } from 'react-redux';
import ResearchPage from './ResearchPage/ResearchPage';
import SearchPage from './SearchPages/SearchPage';
import { setProduct } from '../redux/actions/Product';
import { constData } from '../Utils/ConstData';
import Account from './Account/Account'
import { getUserData } from '../redux/actions/User';


const deviceWidth = Dimensions.get('screen').width;
const deviceHeight = Dimensions.get('screen').height;
const styles = StyleSheet.create({

})
const Tab = createMaterialBottomTabNavigator();

function HomePage(props) {

	const dispatch = useDispatch()

	useEffect(() => {
		dispatch(setProduct(constData));
	dispatch(getUserData());
	}, [])
	
	return (
		<View style={{ flex: 1 }}>
			<View style={{ flex: 1 }}>
				<Tab.Navigator
					barStyle={{
						backgroundColor: '#d1d1cd',
						shadowColor: '#5bc4ff',
						shadowOpacity: 0,
						shadowOffset: {
							height: 0,
						},
						shadowRadius: 0, borderBottomColor: 'transparent'
					}}
					activeColor="#f74444"
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

					<Tab.Screen options={
						{
							tabBarLabel: 'Account',
							tabBarVisible: false,
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
						name='Account' component={Account} />
				</Tab.Navigator>
			</View>
		</View>
	)
}

export default HomePage;

