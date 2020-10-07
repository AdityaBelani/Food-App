import React, {Component} from 'react';
import {Text, View, textinput, TouchableOpacity} from 'react-native';

export default class Address extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: '',
    };
  }

  render() {
    return (
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <Text>Address</Text>
      </View>
    );
  }
}
