'use strict';
import React, { Component } from 'react';
import EntryList from './EntryList.js';
import {
  StyleSheet,
  NavigatorIOS,
} from 'react-native';

var FeaturedTab = React.createClass({
  render: function() {
    return (
    <NavigatorIOS
        style={styles.container}
        initialRoute={{
            title: "Featured Entlies",
            component: EntryList
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

module.exports = FeaturedTab;
