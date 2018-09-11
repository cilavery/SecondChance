import React, { Component } from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';


class Greeting extends Component {
  render() {
    let pic = {
      uri: 'http://placekitten.com/193/110'
    };
    return (
      // <View>
      <Text>Hello {this.props.name}!</Text>
      {/* <Image source={pic} style={{width: 193, height: 110}}/>
      </View> */}
    )
  }
}

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Greeting name='Cecilia' />
        <Greeting name='Phil' />
        <Greeting name='Parker' />
        <Greeting name='Reed' />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F7B7DB',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
