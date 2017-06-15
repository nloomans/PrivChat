import React from 'react'
import { Text, Button, View, StyleSheet } from 'react-native'
import * as openpgp from 'react-native-openpgp'

class SetupNameScreen extends React.Component {
  constructor (props) {
    super(props)

    this.buttonPressed = this.buttonPressed.bind(this)

    this.state = { key: null }
  }

  buttonPressed () {
    openpgp.generateKey({ userIds: [{name: 'noah', email: 'test@test.test'}], numBits: 512 }).then((key) => {
      this.setState({ key })
    })
  }

  render () {
    let text
    if (this.state.key) {
      text = this.state.key.privateKeyArmored
    } else {
      text = 'Press the button to generate a key.'
    }
    return (
      <View style={styles.center}>
        <Button title='Generate key' onPress={this.buttonPressed} />
        <Text>{text}</Text>
      </View>
    )
  }
}

SetupNameScreen.navigationOptions = {
  header: null
}

const styles = StyleSheet.create({
  center: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white'
  }
})

export default SetupNameScreen
