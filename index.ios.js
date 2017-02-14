/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
import React, { Component } from 'react';
import FeaturedTab from './FeaturedTab.js';
import SearchTab from './SearchTab.js';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    TabBarIOS
} from 'react-native';

// コンポーネント
var QiitaViewer = React.createClass({

});

// スタイル
const styles = StyleSheet.create({
    
});

AppRegistry.registerComponent('QiitaViewer', () => QiitaViewer);
