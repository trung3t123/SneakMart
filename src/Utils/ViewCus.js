import { default as AntDesignRN } from 'react-native-vector-icons/AntDesign';
import { default as EvilIconsRN } from 'react-native-vector-icons/EvilIcons';
import { default as FontAwesomeRN } from 'react-native-vector-icons/FontAwesome';
import { default as FontAwesome5RN } from 'react-native-vector-icons/FontAwesome5';
import React, { Component } from 'react';
import { View, Text } from 'react-native';

export default class ViewCus extends Component {
	constructor(props) {
		super(props);
		this.state = {
		};
	}

	render() {
		return (
			<View>
				<Text> ViewCus </Text>
			</View>
		);
	}
}
