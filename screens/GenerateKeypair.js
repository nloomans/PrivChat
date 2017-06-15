import React from 'react'
import { Text, Button, View, AsyncStorage, StyleSheet } from 'react-native'
import { NavigationActions } from 'react-navigation'
import * as openpgp from 'react-native-openpgp'

class GenerateKeypairScreen extends React.Component {
  constructor (props) {
    super(props)

    this.buttonPressed = this.buttonPressed.bind(this)

    this.state = { render: false }
  }

  componentDidMount () {
    AsyncStorage.getItem('publicKey').then(publicKey => {
      if (publicKey) {
        this.navigateToUserSelect()
      } else {
        this.setState({ render: true })
      }
    })
  }

  async buttonPressed () {
    const key = await openpgp.generateKey({ userIds: [{name: 'noah', email: 'test@test.test'}], numBits: 512 })
    await AsyncStorage.setItem('publicKey', key.publicKeyArmored)
    await AsyncStorage.setItem('privateKey', key.privateKeyArmored)

    this.navigateToUserSelect()
  }

  navigateToUserSelect () {
    // Go to the UserSelect page and reset the history.
    const resetAction = NavigationActions.reset({
      index: 0,
      actions: [
        NavigationActions.navigate({ routeName: 'UserSelect' })
      ]
    })

    this.props.navigation.dispatch(resetAction)
  }

  render () {
    if (this.state.render) {
      return (
        <View style={styles.center}>
          <Text style={styles.header}>Let's get started!</Text>
          <Text style={styles.text}>Press the button below to generate a keypair for this device,
          this will be used to comunicate securely.</Text>
          <Button title='Generate key' onPress={this.buttonPressed} />
        </View>
      )
    } else {
      return (
        <View style={styles.center} />
      )
    }
  }
}

GenerateKeypairScreen.navigationOptions = {
  header: null
}

const styles = StyleSheet.create({
  center: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white'
  },
  header: {
    fontSize: 24
  },
  text: {
    margin: 32,
    maxWidth: 300
  }
})

export default GenerateKeypairScreen
