import React, { PureComponent } from 'react'
import {
  View
} from 'react-native'

export default class EmptyPage extends PureComponent {
  render () {
    return (
      <View {...this.props} />
    )
  }
}

