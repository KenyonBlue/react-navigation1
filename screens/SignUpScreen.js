import React, { Component } from 'react'
import { StyleSheet, Text, View } from 'react-native'

export class SignUpScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text> Sign Up Screen </Text>
      </View>
    )
  }
}

export default SignUpScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
})
