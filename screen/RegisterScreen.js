import { Button, Image, StyleSheet, View, Dimensions, TouchableOpacity, Text, KeyboardAvoidingView, TextInput, ScrollView  } from 'react-native'

import React from 'react'
import { FormLabel, FormInput } from 'react-native-elements'

const logo = require('../assets/logo.png')
const window = Dimensions.get('window')

const IMAGE_HEIGHT = window.width / 2

export default class RegisterScreen extends React.Component {

  constructor(props){
    super(props)
  }

  onRegister() {

  }
  
  render() {
    return (
      <ScrollView style={styles.container}> 
      <KeyboardAvoidingView behavior='padding'>
        <View>
          <Image source={logo} style={styles.logo}/>
        </View>
        <FormLabel>Enter Email</FormLabel>
        <FormInput
          placeholder='Type your email here.'
        />
        <FormLabel>Enter Password</FormLabel>
        <FormInput
          placeholder='Type your password here.'
          secureTextEntry={true}
        />
        <FormLabel>Confirm Password</FormLabel>
        <FormInput
          placeholder='Re-type your password again.'
          secureTextEntry={true}
        />
        <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
          <TouchableOpacity style={styles.buttonContainer} onPress={ () => this.onRegister() }>
            <Text style={styles.regisText}>Register</Text>
          </TouchableOpacity>
        </View>
        </KeyboardAvoidingView>
      </ScrollView>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    flex: 1
  },
  logo: {
    height: IMAGE_HEIGHT,
    resizeMode: 'contain',
    alignSelf: 'center',
    marginBottom: 30,
    marginTop: 50
  },
  buttonContainer: {
    marginTop: 40,
    width: '80%',
    height: 60,
    backgroundColor: '#0080ff',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5
  },
  regisText: {
    color: '#fff',
    fontWeight: 'bold'
  }
})
