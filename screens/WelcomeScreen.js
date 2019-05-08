import React, { Component } from 'react'
import { StyleSheet, Text, View, Button } from 'react-native'

export class WelcomeScreen extends Component {

    static navigationOptions = {
        header: null
    }

  render() {
    return (
      <View style={styles.container}>
        <Button title='Login' onPress={() => this.props.navigation.navigate('LoginScreen')}/>  
        <Button title='Sign Up' onPress={() => this.props.navigation.navigate('SignUpScreen')}/>  
      </View>
    )
  }
}

export default WelcomeScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
})
