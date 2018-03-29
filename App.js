import { Button, Image, StyleSheet, Text, TextInput, View, KeyboardAvoidingView } from 'react-native'

import React from 'react'
import WelcomeScreen from './screen/WelcomeScreen'
import RegisterScreen from './screen/RegisterScreen'

export default class App extends React.Component {

  constructor(props){
    super(props)
  }
  
  render() {
    return (
      <View style={styles.container}>
        <RegisterScreen/>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  }
})
