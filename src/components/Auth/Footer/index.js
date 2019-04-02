import {
  View,
  Text
} from 'react-native'
import PropTypes from 'prop-types'
import React, { PureComponent } from 'react'
import { createIconSetFromIcoMoon } from 'react-native-vector-icons'
import icoMoonConfig from '/lib/icons/BearTracks.json'
import styles from './styles'
import { getSize } from '/lib/helpers/styleSizes'

const Icon = createIconSetFromIcoMoon(icoMoonConfig)

class Footer extends PureComponent {
  render () {
    const footerTextStyle = this.props.theme === 'light'
      ? styles.footerTextGrey
      : styles.footerTextWhite
    const footerLogoStyle = this.props.theme === 'light'
      ? styles.bearLogoLight
      : styles.bearLogo
    return (
      <View style={styles.footerContainer}>
        <View style={styles.footer}>
          <Icon style={footerLogoStyle} name={'logo'} size={getSize(40, 50, 70, 100)} />
        </View>
        <Text style={[styles.footerText, footerTextStyle]}>BearTracks by Perceivant</Text>
      </View>
    )
  }
}
Footer.propTypes = {
  theme: PropTypes.string
}

Footer.defaultProps = {
  theme: 'dark'
}
export default Footer
