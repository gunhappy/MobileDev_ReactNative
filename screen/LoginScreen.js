import { Button, Image, StyleSheet, Text, TextInput, View } from 'react-native'

import React from 'react'

export default class LoginScreen extends React.Component {

  constructor(props){
    super(props)
  }
  
  render() {
    return (
      <View style={styles.container}>
        <Text>LoginScreen</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff'
  }
})
