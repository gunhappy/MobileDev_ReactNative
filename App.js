import { Button, Image, StyleSheet, Text, TextInput, View } from 'react-native'

import React from 'react'

const Logo = () => (
  <View>
    <Image source={require('./assets/react-native.png')} style={styles.logoImage} resizeMode='contain'/>
  </View>
)

export default class App extends React.Component {

  constructor(props){
    super(props)
    this.state = {
      text: '',
      result: 'Please Input a text'
    }
  }

  onClickButton() {
    let self = this
    this.setState({
      result: self.state.text
    })
  }
  
  render() {
    return (
      <View style={styles.container}>
        <Logo />
        <Text style={styles.resultText}>{this.state.result}</Text>
        <View style={styles.inputRow}>
          <TextInput 
            style={styles.textInput}
            value={this.state.text}
            onChangeText={(text) => this.setState({text})}
            underlineColorAndroid='transparent'
            placeholder='Enter some text'
          />
          <View style={styles.buttonContainer}>
            <Button title='Save' color="#841584" onPress={() => this.onClickButton()}/>
          </View>
        </View>
        <Text style={styles.showText}>{this.state.text}</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center'
  },
  logoImage: {
    height: 300
  },
  textInput: {
    height: 40,
    width: 300,
    borderWidth: 1,
    borderRadius: 3,
    padding: 10
  },
  resultText: {
    marginTop: 10,
    marginBottom: 10,
    fontWeight: 'bold'
  },
  showText: {
    marginTop: 10
  },
  buttonContainer: {
    marginLeft: 10
  },
  inputRow: {
    flexDirection: 'row'
  }
})
