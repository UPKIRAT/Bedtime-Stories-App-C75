
import {decode, encode} from 'base-64'
if (!global.btoa) { global.btoa = encode }
if (!global.atob) { global.atob = decode }

import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import WriteScreen from './Screens/WriteScreen'
import ReadScreen from './Screens/ReadScreen'
import {createAppContainer,createSwitchNavigator} from 'react-navigation'
import {createBottomTabNavigator} from 'react-navigation-tabs'
import Ionicons from 'react-native-vector-icons/Ionicons';
import LoginScreen from './Screens/LoginScreen'

export default class App extends React.Component {
  render(){
  return (
    <AppContainer/>
        );
  }
}

const TabNavigator = createBottomTabNavigator({
  Write: {
    screen: WriteScreen, 
    navigationOptions: {
        tabBarLabel: 'Write', 
        tabBarIcon: ({ tintColor }) => (
          <Image style = {{height: 20, width : 20}} source = {require("./assets/writeicon.png")}/>
            //<Ionicons name="ios-home" color={tintColor} size={25} />
        )
    }
}, 
Read: {
    screen: ReadScreen, 
    navigationOptions: {
        tabBarLabel: 'Read', 
        tabBarIcon: ({ tintColor }) => (
          <Image style = {{height: 20, width : 20}} source = {require("./assets/readicon.png")}/>
        )
    }
}, 
});

const switchNavigator = createSwitchNavigator({
  LoginScreen:{screen: LoginScreen},
  TabNavigator:{screen:TabNavigator}
  })

const AppContainer = createAppContainer(switchNavigator)