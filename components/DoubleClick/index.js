import React, { Component } from 'react';
import {
	StyleSheet,
	View,
	PanResponder,
	Alert,
} from 'react-native';

export default class DoubleClicker extends Component {
	constructoe() {
		super();

		this.myPanResponder = {};

		this.prevTouchInfo = {
			prevTouchX: 0,
			prevTouchY: 0,
			prevTouchTimeStamp: 0
		};
	}

	componentWillMount() {
		this.myPanResponder = PanResponder.create({
			onStartShouldSetPanResponder: (evt, gestureState) => true,
			onPanResponderGrant: this.handlePanResponderGrant,
		});
	}

	handlePanResponderGrant(evt, gestureState) {
		const currentTimeStamp = Date.now();

		if ( this.isDoubleTap(currentTimeStamp, gestureState) ) {
			Alert.alert('Double Tap succeed');
		}

		this.prevTouchInfo = {
			prevTouchX: gestureState.x0,
			prevTouchY: gestureState.y0,
			prevTouchTimeStamp: currentTimeStamp
		};
	}

	render() {
		return (
			<View style={styles.container}>

			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
	}
});