import React, { useEffect } from 'react'
import { View, Text, Button, ScrollView } from 'react-native'
import { useSelector } from 'react-redux';
import { getApiProducts } from '../../../redux/actions/Product';
import store from '../../../redux/store';
import Item from '../../Item';

const Sneaker = () => {

	const productList = useSelector(state => state.product.productList);
	console.log('Product list', productList);

	return (
		<View style={{ flex: 1 }}>
			<ScrollView style={{ flex: 1 }}>
				<View>
					<Text>
						Popular Brands
					</Text>
					<ScrollView horizontal={true}>
						{
							productList.map((
								item => {
									return (
										<Item key={item.id} itemImage={item.image} highestBid={item.highestBid} lowestAsk={item.lowestAsk}/>
									)
								}
							))
						}
					</ScrollView>

				</View>

				
			</ScrollView>
		</View>
	)
}

export default Sneaker;