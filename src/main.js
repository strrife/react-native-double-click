import React, { Component } from 'react';
import {
	View,
	PanResponder,
	Alert,
} from 'react-native';

class DoubleClicker extends Component {
	constructor() {
		super();

		this.myPanResponder = {};

		this.prevTouchInfo = {
			prevTouchX: 0,
			prevTouchY: 0,
			prevTouchTimeStamp: 0,
		};

		this.handlePanResponderGrant = this.handlePanResponderGrant.bind(this);
	}

	componentWillMount() {
		this.myPanResponder = PanResponder.create({
			onStartShouldSetPanResponder: (evt, gestureState) => true,
			onPanResponderGrant: this.handlePanResponderGrant,
		});
	}

	distance(x0, y0, x1, y1) {
		return Math.sqrt( Math.pow(( x1 - x0 ), 2) + Math.pow(( y1 - y0 ), 2) );
	}

	isDoubleTap(currentTouchTimeStamp, {x0, y0}) {
		const { prevTouchX, prevTouchY, prevTouchTimeStamp } = this.prevTouchInfo;
		const dt = currentTouchTimeStamp - prevTouchTimeStamp;
		let { delay, radius} = this.props; 
                delay = delay || 300;
		radius = radius || 20;
		return ( dt < delay && this.distance(prevTouchX, prevTouchY, x0, y0) < radius );
	}

	handlePanResponderGrant(evt, gestureState) {
		const currentTouchTimeStamp = Date.now();

		if ( this.isDoubleTap(currentTouchTimeStamp, gestureState) ) {
			this.props.onClick();
		}

		this.prevTouchInfo = {
			prevTouchX: gestureState.x0,
			prevTouchY: gestureState.y0,
			prevTouchTimeStamp: currentTouchTimeStamp,
		};
	}

	render() {
		return (
			<View {...this.myPanResponder.panHandlers}>
				{this.props.children}
			</View>
		);
	}
}

module.exports = DoubleClicker;
