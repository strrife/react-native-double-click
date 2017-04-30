import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Alert,
} from 'react-native';
import DoubleClick from 'react-native-double-click';

export default class doubleClicker extends Component {
  constructor() {
    super();

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    Alert.alert('This is awesome \n Double tap succeed');
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Welcome to React Native!
        </Text>
        <DoubleClick onClick={this.handleClick}>
          <Text style={styles.instructions}>
            Please tap me twice!
          </Text>
        </DoubleClick>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: 'white',
    fontSize: 26,
    marginBottom: 5,
    backgroundColor: 'gray',
  },
});

AppRegistry.registerComponent('doubleClicker', () => doubleClicker);
