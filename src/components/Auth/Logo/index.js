import {
  Text,
  View,
} from "react-native"
import PropTypes from "prop-types"
import React, { PureComponent } from "react"
import { createIconSetFromIcoMoon } from "react-native-vector-icons"
import { getSize } from "/lib/helpers/styleSizes"
import icoMoonConfig from "/lib/icons/BearTracks.json"
import styles from "./styles"

const Icon = createIconSetFromIcoMoon(icoMoonConfig)

class Logo extends PureComponent {
  render() {
    const logoTextStyle = this.props.theme === "light"
      ? styles.logoTextGrey
      : styles.logoTextWhite
    const logoStyle = this.props.theme === "light"
      ? styles.logoBlack
      : styles.logoCasablanca
    return (
      <View style={styles.logoContainer}>
        <View>
          <View style={{ alignItems: "center" }}>
            <Icon style={logoStyle} name={"logo"} size={getSize(100, 170, 200, 240)} />
          </View>
          {!this.props.logo &&
          <View style={{ alignItems: "center" }}>
            <Icon style={logoTextStyle} name={"logo-text-1"} size={getSize(30, 40, 45, 50)} />
          </View>
          }
          <Text style={[styles.logoText, logoTextStyle]}>Learn Well. Live Well.</Text>
        </View>
      </View>
    )
  }
}

Logo.propTypes = {
  logo: PropTypes.bool,
  theme: PropTypes.string,
}

Logo.defaultProps = {
  logo: true,
  theme: "dark",
}
export default Logo
