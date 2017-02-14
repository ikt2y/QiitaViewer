'use strict';
import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
} from 'react-native';

var SearchEntry = React.createClass({
    render: function() {
        return (
            <View style={styles.container}>
                <Text style={styles.description}>This is Search Entry Component !!</Text>
            </View>
        );
    }
});


var styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    description: {
        fontSize: 18,
        backgroundColor: "#FFFFFF"
    }
});

module.exports = SearchEntry;
