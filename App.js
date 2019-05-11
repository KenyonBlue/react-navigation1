import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createStackNavigator, createAppContainer } from "react-navigation";
import { LoginScreen } from './screens/LoginScreen';
import { WelcomeScreen } from './screens/WelcomeScreen';  
import { SignUpScreen } from './screens/SignUpScreen';
import AppDrawerNavigator from './screens/DrawerNavigator';

const AppNavigator = createStackNavigator ({
  WelcomeScreen: { screen: WelcomeScreen },
  LoginScreen: { screen: LoginScreen },
  SignUpScreen: { screen: SignUpScreen },
  DrawerNavigator: {screen: AppDrawerNavigator }
});

 class App extends React.Component {
  render() {
    return (
      <AppNavigator/>
    );
  }
}

export default createAppContainer(AppNavigator); 


