import { Button, Image, StyleSheet, Text, TextInput, View } from 'react-native'

import React from 'react'

export default class LogoutScreen extends React.Component {

  constructor(props){
    super(props)
  }
  
  render() {
    return (
      <View style={styles.container}>
        <Text>LogoutScreen</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff'
  }
})
