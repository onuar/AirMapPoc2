/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Dimensions
} from 'react-native';
import MapView from 'react-native-maps';

var {height, width} = Dimensions.get('window');

export default class AirMapPoc2 extends Component {
  render() {
    return (
      <View style={styles.container}>
        <MapView
          style={styles.map}
          showsPointsOfInterest={false}
          initialRegion={{
            latitude: 11.8150199,
            longitude: 102.4778985,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421
          }} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF'
  },
  map: {
    width: width,
    height: 450,
  }
});

AppRegistry.registerComponent('AirMapPoc2', () => AirMapPoc2);
