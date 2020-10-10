import React from 'react'
import { View, Text, TouchableOpacity, Image } from 'react-native';
import { SharedElement } from 'react-navigation-shared-element';
import IMAGE from '../Utils/ImagesConstant';


function List({ navigation }) {

	const item = {
		id : 'imageShoes',
		source: IMAGE.BLUE_SHOES
	}

	return (
		

		<SharedElement id='imageShoes' >
			<TouchableOpacity onPress={() => navigation.push('ItemDetails')}>
				<View style={{ width: 200, height: 300, backgroundColor: 'red' }}>
					{/* <Image style={{ width: 300, height: 300 }} source={item.source} /> */}
				</View>
			</TouchableOpacity>

		</SharedElement>
	)
}


export default List;