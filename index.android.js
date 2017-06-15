import { AppRegistry } from 'react-native'
import { StackNavigator } from 'react-navigation'

import GenerateKeypairScreen from './screens/GenerateKeypair'
import UserSelectScreen from './screens/UserSelect'

const routes = {
  GenerateKeypairScreen: { screen: GenerateKeypairScreen },
  UserSelect: { screen: UserSelectScreen }
}

const PrivChat = StackNavigator(routes)

AppRegistry.registerComponent('PrivChat', () => PrivChat)
