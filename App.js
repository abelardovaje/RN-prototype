/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import Login from './components/login';
import Home from './components/Home';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  AppRegistry
} from 'react-native';

import {
  StackNavigator
} from 'react-navigation';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});


const Application = StackNavigator({
  Login: { 
    screen: Login
  },
  Home:{
    screen:Home
  }
});

export default class App extends Component {
  constructor(props){
    super(props);
  }
  render() {
    return (
     <Application/>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});




