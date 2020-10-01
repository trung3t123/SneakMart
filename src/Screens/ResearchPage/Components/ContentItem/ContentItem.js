import React, { useState } from 'react'
import { View, Text, ScrollView, SafeAreaView } from 'react-native'
import Item from './Item'
import IMAGE from '../../../../Utils/ImagesConstant';
import Carousel from 'react-native-snap-carousel';

export default function ContentItem() {
	const [activeIndex, setActiveIndex] = useState(0)
	const [carouselItems, setCarouselItems] = useState([
		{
			brandItem: "Nike",
			nameItem: "Vapor 13",
			priceItem: "2600k",
			backgroundColor: '#e77d7d',
			image: IMAGE.BLUE_SHOES
		},
		{
			brandItem: "Adidas",
			nameItem: "X Ghosted.1",
			priceItem: "3600k",
			backgroundColor: '#7d9fe7',
			image: IMAGE.RED_SHOES
		},
		{
			brandItem: "Adidas",
			nameItem: "Predator 20.3",
			priceItem: "1500k",
			backgroundColor: '#63c47b',
			image: IMAGE.BLUE_SHOES
		},
		{
			brandItem: "Puma",
			nameItem: "Puma One",
			priceItem: "3400k",
			backgroundColor: '#b7c463',
			image: IMAGE.RED_SHOES
		},
	])

	function _renderItem({ item, index }) {
		return (
			<Item
				brandItem={item.brandItem}
				nameItem={item.nameItem}
				priceItem={item.priceItem}
				backgroundColor={item.backgroundColor}
				image={item.image}
			/>
		)
	}

	return (
			<Carousel
				data={carouselItems}
				sliderWidth={400}
				itemWidth={250}
				renderItem={_renderItem}
				onSnapToItem={index => setActiveIndex(index)} />
	);

	// return (
	// 	<ScrollView showsHorizontalScrollIndicator={false} horizontal={true}>
	// 		<Item brandItem="Nike" nameItem="Vapor 13" priceItem="2600k" backgroundColor='#e77d7d' image={IMAGE.BLUE_SHOES} />
	// 		<Item brandItem="Adidas" nameItem="X Ghosted.1" priceItem="3600k" backgroundColor='#7d9fe7' image={IMAGE.RED_SHOES} />
	// 		<Item brandItem="Adidas" nameItem="X Ghosted.1" priceItem="3600k" backgroundColor='#63c47b' image={IMAGE.RED_SHOES} />
	// 		<Item brandItem="Nike" nameItem="Vapor 13" priceItem="2600k" backgroundColor='#b7c463' image={IMAGE.BLUE_SHOES} />
	// 	</ScrollView>


	// )
}
