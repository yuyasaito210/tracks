import PropTypes from "prop-types"
import React, { Component } from "react"
import { Text, View } from "react-native"
import HTMLView from "/lib/helpers/HTMLView"

export default class List extends Component {
  static propTypes = {
    content: PropTypes.shape({
      bulletStyle: PropTypes.string.isRequired,
      items: PropTypes.arrayOf(PropTypes.string).isRequired,
    }).isRequired,
    styles: PropTypes.object.isRequired,
  }

  static defaultProps = {
    items: [],
  }
  static romanize(num) {
    if (isNaN(num)) {
      return NaN
    }
    const digits = String(+num).split("")
    const key = ["", "C", "CC", "CCC", "CD", "D", "DC", "DCC", "DCCC", "CM",
                 "", "X", "XX", "XXX", "XL", "L", "LX", "LXX", "LXXX", "XC",
                 "", "I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX"]
    let roman = ""
    let i = 3
    while (i -= 1) {
      roman = (key[+digits.pop() + (i * 10)] || "") + roman
    }
    return Array(+digits.join("") + 1).join("M") + roman
  }

  render() {
    const { content, styles } = this.props
    const items = content.items.map((item, index) => {
      let bullet
      switch (content.bulletStyle) {
        case "disc":
          bullet = "•"
          break
        case "none":
          bullet = ""
          break
        case "lettersLower":
          bullet = String.fromCharCode(97 + index) // 97 === 'a'
          break
        case "lettersUpper":
          bullet = String.fromCharCode(65 + index) // 65 === 'A'
          break
        case "numeric":
          bullet = 1 + index
          break
        case "romanNumeralsLower":
          bullet = List.romanize(1 + index).toLowerCase()
          break
        case "romanNumeralsUpper":
          bullet = List.romanize(1 + index)
          break
        default:
          bullet = 1 + index
      }
      return (
        <View key={index} style={styles.listItem}>
          <Text style={styles.listBullet}>{bullet}</Text>
          <HTMLView style={styles.listItemText} value={item} />
        </View>
      )
    })

    return (
      <View style={styles.list}>
        {items}
      </View>
    )
  }
}
