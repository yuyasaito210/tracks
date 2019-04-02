import React from 'react'
import { View } from 'react-native'
import { createIconSetFromIcoMoon } from 'react-native-vector-icons'
import { getSize } from '/lib/helpers/styleSizes'
import icoMoonConfig from '/lib/icons/BearTracks.json'

const Icon = createIconSetFromIcoMoon(icoMoonConfig)

export default class HomeTitle extends React.PureComponent {
  render () {
    return (
      <View style={{ alignItems: 'center' }}>
        <Icon name={'logo-text-1'} size={getSize(28, 28, 40, 56)} style={{ color: 'white', marginTop: 25 }} />
      </View>
    )
  }
}
