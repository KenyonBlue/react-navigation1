import React, { Component } from 'react'
import { StyleSheet, View, Button} from 'react-native'

export class HomeScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
               <Button title='Home Screen Button' onPress={() => this.props.navigation.navigate('WelcomeScreen')}/>  
      </View>
    )
  }
}

export default HomeScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
})
