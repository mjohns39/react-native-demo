import React, {Component} from 'react';
import { StyleSheet, Text, View, StatusBar, ToolbarAndroid, Platform, FlatList } from 'react-native';


export class Toolbar extends Component {

  render () {
    if(Platform.OS !== 'ios') {
      return (
          <ToolbarAndroid
            title="AwesomeApp"
            style={styles.toolbar}
            actions={[{title: 'Settings', show: 'always'}]}
          />

      );
    }
    else {
      return (
        <Text>AwesomeApp</Text>
      )
    }

  }
}


const styles = StyleSheet.create({
  toolbar: {
    height: 50,
    backgroundColor: 'steelblue'
  },
});
