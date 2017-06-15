import React from 'react'
import { Text, Button, View, StyleSheet } from 'react-native'

class SetupNameScreen extends React.Component {
  constructor (props) {
    super(props)
    this.nextButtonPressed = this.nextButtonPressed.bind(this)
  }

  nextButtonPressed () {
    const { navigate } = this.props.navigation
    navigate('SetupFinish')
  }

  render () {
    return (
      <View style={styles.center}>
        <Text>Hello, Navigation!</Text>
        <Button title='Next' onPress={this.nextButtonPressed} />
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
