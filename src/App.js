/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import 'react-native-gesture-handler';
import React from 'react';
import {
	SafeAreaView,
	StatusBar, StyleSheet, View
} from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import { Provider } from 'react-redux';
import HomePage from './Screens/HomePage';
import { NavigationContainer } from '@react-navigation/native';
import { createSharedElementStackNavigator } from 'react-navigation-shared-element';
import store from './redux/store';
import ItemDetails from './Screens/ItemDetails/ItemDetails';
import List from './Screens/List';

const Stack = createSharedElementStackNavigator();
//http://demo.designing-world.com/newsten-v1.0.1/search.html

const App: () => React$Node = () => {



	return (
		<Provider store={store}>
			<StatusBar barStyle="dark-content" />
			<View style={{ flex: 1 }}>
				<NavigationContainer  >
					<Stack.Navigator headerMode="screen"  initialRouteName="List">
						<Stack.Screen name="HomePage" component={HomePage} />
						<Stack.Screen name="List" component={List} />
						<Stack.Screen
							name="ItemDetails"
							component={ItemDetails}
							sharedElementsConfig={(route, otherRoute, showing) => {
								return [
									{
										id: 'imageShoes',
									},
								];
							}}
							// options={() => ({
							// 	gestureEnabled: false,
							// 	transitionSpec : {
							// 		open : {animation :'timing',config:{duration: 1000}},
							// 		close : {animation :'timing',config:{duration: 1000}}
							// 	},
							// 	cardStyleInterpolator: ({ current: { progress } }) => {
							// 		return {
							// 			cardStyle: {
							// 				opacity: progress,
							// 			}
							// 		}
							// 	}
							// })}
						/>
					</Stack.Navigator>
					{/* bottom nav */}
					{/* <HomePage /> */}
				</NavigationContainer>
			</View>
		</Provider>
	);
};

const styles = StyleSheet.create({
	scrollView: {
		backgroundColor: Colors.lighter,
	},
	engine: {
		position: 'absolute',
		right: 0,
	},
	body: {
		backgroundColor: Colors.white,
	},
	sectionContainer: {
		marginTop: 32,
		paddingHorizontal: 24,
	},
	sectionTitle: {
		fontSize: 24,
		fontWeight: '600',
		color: Colors.black,
	},
	sectionDescription: {
		marginTop: 8,
		fontSize: 18,
		fontWeight: '400',
		color: Colors.dark,
	},
	highlight: {
		fontWeight: '700',
	},
	footer: {
		color: Colors.dark,
		fontSize: 12,
		fontWeight: '600',
		padding: 4,
		paddingRight: 12,
		textAlign: 'right',
	},
});

export default App;
