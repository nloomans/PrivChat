import React from 'react'
import { Text, Button, View, StyleSheet } from 'react-native'
import { TabNavigator } from 'react-navigation'

class NameView extends React.Component {
  constructor (props) {
    super(props)
    this.nextButtonPressed = this.nextButtonPressed.bind(this)
  }

  nextButtonPressed () {
    const { navigate } = this.props.navigation
    navigate('FinishView')
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

class FinishView extends React.Component {
  render () {
    return (
      <View>
        <Text>Done!</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  center: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white'
  }
})

const views = {
  NameView: {screen: NameView},
  FinishView: {screen: FinishView}
}

const SetupScreen = TabNavigator(views, { tabBarComponent: null })

SetupScreen.navigationOptions = {
  header: null
}

export default SetupScreen
