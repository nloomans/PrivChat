import { AppRegistry } from 'react-native'
import { StackNavigator } from 'react-navigation'

import SetupNameScreen from './screens/SetupName'
import SetupFinishScreen from './screens/SetupFinish'

const routes = {
  SetupName: { screen: SetupNameScreen },
  SetupFinish: { screen: SetupFinishScreen }
}

const PrivChat = StackNavigator(routes)

AppRegistry.registerComponent('PrivChat', () => PrivChat)
