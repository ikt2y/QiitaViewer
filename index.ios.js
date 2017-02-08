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
    Image,
    NavigatorIOS,
    TouchableWithoutFeedback,
    WebView,
    ListView
} from 'react-native';

var QIITA_URL = "https://qiita.com/api/v2/tags/reactjs/items";
// UINavigationController
var QiitaViewer = React.createClass({
    render: function() {
        return (
          <NavigatorIOS
            style={styles.navigator}
            initialRoute={{
              component: ReactQiitaList,
              title: 'ReactQiita',
          }}/>
        );
    }
});

var ReactQiitaList = React.createClass({
    getInitialState: function() {
        return {
            items: new ListView.DataSource({
                rowHasChanged: (row1, row2) => row1 !== row2,
            }),
            loaded: false,
        };
    },
    componentDidMount: function() {
        this.fetchData();
    },
    render: function() {
        if (!this.state.loaded) {
            return this.renderLoadingView();
        }
        return (
            <ListView
                dataSource={this.state.items}
                renderRow={this.renderItem}
                style={styles.listView}/>
        );
    },
    renderLoadingView: function() {
        return (
            <View style={styles.container}>
                <Text>
                     読み込み中...
                </Text>
            </View>
        );
    },
    renderItem: function(item, sectionID, rowID) {
        return (
            <TouchableWithoutFeedback onPress={() => this.onPressed(item)}>
                <View style={styles.container}>
                    <Image
                        source={{uri: item.user.profile_image_url}}
                        style={styles.thumbnail}/>
                    <View style={styles.rightContainer}>
                        <Text style={styles.title}>{item.title}</Text>
                        <Text style={styles.name}>{item.name}</Text>
                    </View>
                </View>
            </TouchableWithoutFeedback>
        );
    },
    // API呼び出し
    fetchData: function() {
        fetch(QIITA_URL)
            .then((response) => response.json())
            .then((responseData) => {
                this.setState({
                    items: this.state.items.cloneWithRows(responseData),
                    loaded: true,
                });
            })
        .done();
    },
    // セルのタッチイベント
    onPressed: function(item) {
        this.props.navigator.push({
            title: item.title,
            component: ReactQiitaItemView,
            passProps: { url: item.url }
        })
    },
});

// 記事閲覧用のWebView
var ReactQiitaItemView = React.createClass({
    render: function() {
        return (
          <WebView
            url={this.props.url}/>
        )
      }
});

const styles = StyleSheet.create({
 navigator: {
    flex: 1
  },
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
  },
  rightContainer: {
    flex: 1,
  },
  title: {
    fontSize: 15,
    margin: 8,
    textAlign: 'left',
  },
  name: {
    fontSize: 12,
    margin: 8,
    textAlign: 'left',
  },
  thumbnail: {
    width: 80,
    height: 80,
    margin: 2,
  },
  listView: {
    backgroundColor: '#FFFFFF',
  },
});

AppRegistry.registerComponent('QiitaViewer', () => QiitaViewer);
