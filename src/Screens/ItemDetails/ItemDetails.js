import React from 'react'
import { SharedElement } from 'react-navigation-shared-element';
import { View, Text, Image, Dimensions } from 'react-native';
const deviceWidth = Dimensions.get('screen').width;
const deviceHeight = Dimensions.get('window').height;


export default function ItemDetails(props) {
	const item = props.route.params.item
	console.log('props.route', item);
	return (
		<View style={{ flex: 1 }} >
			<SharedElement id='imageShoes'>
				<View style={{ width: 750, borderRadius: 750, height: 750, backgroundColor: 'red', position: 'absolute', top: -400, left: -30 }}>

				</View>
				{/* <Image style={{ width: '50%', height: '50%' }}
						source={item.source} /> */}
			</SharedElement>
		</View>
	)
}

ItemDetails.sharedElements = (route, otherRoute, showing) => {
	const { item } = route.params;
	return item.source;
}
