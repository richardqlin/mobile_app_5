import { StatusBar } from 'expo-status-bar';
import {createAppContainer} from 'react-navigation';
import React, {Component} from 'react';
import { Appearance, StyleSheet, Text, View } from 'react-native';

import HomeScreen from './src/screens/HomeScreen';

import FontAwesome from "react-native-vector-icons/FontAwesome";

import { createBottomTabNavigator } from 'react-navigation-tabs';

import {createStackNavigator } from 'react-navigation-stack';

import DetailsScreen from './src/screens/DetailsScreen'

import styles from './src/styles/style'


class  App extends Component {

  render() {
  return (
<MainScreenNavigator
  onNavigationStateChange = { () => this.setState({})}
  screenProps = {this.state}
  />
  );
}
}
const StackScreen = createStackNavigator ({
  Home: {
  screen: HomeScreen,
  },
  
  Details: {
  screen: DetailsScreen,
  
  navigationOptions: ( {navigation}) => ({title: navigation.state.params.title,
                  
  })
  
  }
  
  });

const MainScreenNavigator = createAppContainer(createBottomTabNavigator ({

  Home: {
  screen: StackScreen,
  
  navigationOptions: {
  
  tabBarIcon: ( {focused, tintColor} ) => (
      <FontAwesome name= 'windows' color = {tintColor} size = {25} />
  ),
  },
  },
  
  
  Post: {
  screen: HomeScreen,
  navigationOptions: {
  
  tabBarIcon: ( { focused , tintColor} ) => (
      <FontAwesome name = 'apple' color = {tintColor} size = {25}  />
  ),
  
  },
  },
  
  }));
  
  export default MainScreenNavigator;
 




