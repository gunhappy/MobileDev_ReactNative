import { Button, Image, StyleSheet, Text, TextInput, View } from 'react-native'

import React from 'react'
import WelcomeScreen from './screen/WelcomeScreen'

export default class App extends React.Component {

  constructor(props){
    super(props)
  }
  
  render() {
    return (
      <View style={styles.container}>
        <WelcomeScreen/>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  }
})
