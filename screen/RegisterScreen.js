import { Button, Image, StyleSheet, Text, TextInput, View } from 'react-native'

import React from 'react'

export default class RegisterScreen extends React.Component {

  constructor(props){
    super(props)
  }
  
  render() {
    return (
      <View style={styles.container}>
        <Text>RegisterScreen</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff'
  }
})
