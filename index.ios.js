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
    View
} from 'react-native';

var QiitaViewer = React.createClass({
    myFunction: function() {

    },
    render: function() {
    return (
      <View style={styles.container}>
        <Text style={styles.instruction}>
        </Text>
      </View>
    );
    }
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  instruction: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  }
});

AppRegistry.registerComponent('QiitaViewer', () => QiitaViewer);
