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

// 参照もとのURLを代入してインスタンス化
var QIITA_URL = "https://qiita.com/api/v2/tags/reactjs/items";
var QiitaViewer = React.createClass({
    render: function() {
        return (
            //  UINavigationController
                // titileがNavigartion Barに表示する文字列
                // どのComponentを利用するかをハンドリング
          <NavigatorIOS
            style={styles.navigator}
            initialRoute={{
              component: ReactQiitaList,
              title: 'ReactQiita',
          }}/>
        );
    }
});
// 1.リスト画面
var ReactQiitaList = React.createClass({
    // 1-1.インスタンス作成のたびに呼ばれる
    getInitialState: function() {
        return {
            items: new ListView.DataSource({
                rowHasChanged: (row1, row2) => row1 !== row2,
            }),
            loaded: false,
        };
    },
    // 1-2.このメソッドにより仮想DOMが作成される
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
    // 1-3.描画が成功して、DOMにアクセス可能になる
    componentDidMount: function() {
        this.fetchData();
    },
        // APIの呼び出し
    fetchData: function() {
        fetch(QIITA_URL)
            .then((response) => response.json())
            .then((responseData) => {
                // stateの更新
                this.setState({
                    items: this.state.items.cloneWithRows(responseData),
                    loaded: true,
                });
            })
        .done();
    },
    // 1-4.ローディング中の画面
    renderLoadingView: function() {
        return (
            <View style={styles.container}>
                <Text>
                     読み込み中...
                </Text>
            </View>
        );
    },
    // 1-5.ローディング後の画面
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
    // 1-6.セルのタッチイベント
    onPressed: function(item) {
        // 遷移させる
        this.props.navigator.push({
            title: item.title,
            component: ReactQiitaItemView,
            passProps: { url: item.url }
        })
    },
});

// 2.詳細画面
var ReactQiitaItemView = React.createClass({
    render: function() {
        return (
          <WebView
            url={this.props.url}/>
        )
      }
});

// スタイル
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
