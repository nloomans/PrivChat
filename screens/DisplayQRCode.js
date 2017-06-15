import React from 'react'
import { View, AsyncStorage, StyleSheet } from 'react-native'
import QRCode from 'react-native-qrcode'

class DisplayQRCode extends React.Component {
  constructor (props) {
    super(props)
    this.state = {publicKey: null}
  }

  componentDidMount () {
    AsyncStorage.getItem('publicKey').then(publicKey => this.setState({publicKey}))
  }

  render () {
    return (
      <View style={styles.center}>
        {this.state.publicKey &&
          <QRCode
            value={this.state.publicKey}
            size={200}
            bgColor='black'
            fgColor='white' />
        }
      </View>
    )
  }
}

DisplayQRCode.navigationOptions = {
  title: 'New Conversation'
}

const styles = StyleSheet.create({
  center: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white'
  }
})

export default DisplayQRCode
