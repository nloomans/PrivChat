import { AppRegistry } from 'react-native'
import { StackNavigator } from 'react-navigation'

import GenerateKeypairScreen from './screens/GenerateKeypair'
import UserSelectScreen from './screens/UserSelect'
import DisplayQRCode from './screens/DisplayQRCode'

const routes = {
  GenerateKeypairScreen: { screen: GenerateKeypairScreen },
  UserSelect: { screen: UserSelectScreen },
  DisplayQRCode: { screen: DisplayQRCode }
}

const PrivChat = StackNavigator(routes)

AppRegistry.registerComponent('PrivChat', () => PrivChat)
