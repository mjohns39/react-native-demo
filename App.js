import React, {Component} from 'react';
import { StyleSheet, Text, View, StatusBar, ToolbarAndroid, Platform, FlatList } from 'react-native';

import {Toolbar} from './common/toolbar/Toolbar';

export default class App extends Component {

  constructor() {
    super();
    this.state = {
      data: []
    };
  }

  currentOSisIos() {
    return Platform.OS === 'ios';
  }
  componentDidMount() {
    return fetch('http://192.168.1.159:9000/musics')
      .then(response => response.json())
      .then(data => {
        this.setState({
          data: data._embedded.musics
        })
      })
      .catch(error => {
        console.error(error);
      });

  }
  render() {
    return (
      <View style={styles.container}>
        <Toolbar/>
        <Text style={styles.columnHeaders}>Song, Artist, Album</Text>
        <FlatList
          data={this.state.data}
          renderItem={
            ({item}) => <Text style={styles.item}>{item.title}, {item.artist}, {item.album}</Text>
          }
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Platform.OS === 'ios' ? 10 : StatusBar.currentHeight
    // paddingTop: 20
  },
  toolbar: {
    height: 50,
    backgroundColor: 'steelblue'
  },
  item: {
    padding: 10,
    fontSize: 12,
    flex: 1,
  },
  columnHeaders: {
    padding: 10,
    fontSize: 14,
  }
});
