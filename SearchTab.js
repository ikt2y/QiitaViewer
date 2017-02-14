'use strict';
import React, { Component } from 'react';
import SearchEntry from './SearchEntry.js'
import {
  StyleSheet,
  NavigatorIOS,
} from 'react-native';

var SearchTab = React.createClass({
  render: function() {
    return (
        <NavigatorIOS
            style={styles.container}
            initialRoute={{
                title: "Search Entries",
                component: SearchEntry
            }}
        />
    );
  }
});

var styles = StyleSheet.create({
  container: {
    flex: 1,
  }
});

module.exports = SearchTab;
