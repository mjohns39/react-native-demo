import React from 'react';
import { StyleSheet, Text, View, StatusBar, ToolbarAndroid, Platform, FlatList } from 'react-native';

export default class App extends React.Component {

  constructor() {
    super();
    this.state = {
      data: []
    };
  }

  componentDidMount() {
    return fetch('http://[change me to your local ip]:9000/musics')
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
        <ToolbarAndroid
          title="AwesomeApp"
          style={styles.toolbar}
          actions={[{title: 'Settings', show: 'always'}]}
        />
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
    paddingTop: Platform.OS === 'ios' ? 0 : StatusBar.currentHeight
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
