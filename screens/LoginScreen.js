import React, { Component } from 'react'
import { StyleSheet, Text, View, Button} from 'react-native'

export class LoginScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
               <Button title='Complete Login' onPress={() => this.props.navigation.navigate('DrawerNavigator')}/>  
      </View>
    )
  }
}

export default LoginScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
})
