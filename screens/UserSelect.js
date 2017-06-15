import React from 'react'
import { Text, View, AsyncStorage, StyleSheet } from 'react-native'
import FabButton from 'react-native-action-button'

class GenerateKeypairScreen extends React.Component {
  constructor (props) {
    super(props)
    this.state = {publicKey: 'Loading...'}
  }

  componentDidMount () {
    AsyncStorage.getItem('publicKey').then(publicKey => this.setState({publicKey}))
  }

  render () {
    return (
      <View style={styles.center}>
        <Text>You're public key is</Text>
        <Text>{this.state.publicKey}</Text>
        <FabButton buttonColor='#ff5252'
          offsetX={16}
          offsetY={16} />
      </View>
    )
  }
}

GenerateKeypairScreen.navigationOptions = {
  title: 'PrivChat'
}

const styles = StyleSheet.create({
  center: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white'
  }
})

export default GenerateKeypairScreen
