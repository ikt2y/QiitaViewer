'use strict';
import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image,
} from 'react-native';

// テストデータ
var TEST_ENTRY_DATA = [
    {
        user: {
            profile_image_url: 'http://facebook.github.io/react/img/logo_og.png',
            id: 'tatatataid'
        },
        title: 'React Native Test!!'
    }
];
// インスタンス化
var entry = TEST_ENTRY_DATA[0];

var EntryList = React.createClass({
    render: function() {
        return (
            <View style={styles.container}>
                <Image
                    source={{uri: entry.user.profile_image_url}}
                    style={styles.thumbnail}
                />
                <View style={styles.rightContainer}>
                    <Text style={styles.title}>{entry.title}</Text>
                    <Text style={styles.name}>{entry.user.id}</Text>
                </View>
            </View>
        );
    }
});


var styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
        padding: 10
    },
    thumbnail: {
        width: 100,
        height: 100,
        marginRight: 10
    },
    rightContainer: {
        flex: 1
    },
    title: {
        fontSize: 20,
        marginBottom: 8
    },
    name: {
        color: '#656565'
    }
});

module.exports = EntryList;
