import React, { Component } from "react"
import { Image } from "react-native"

export default class UncachableImage extends Component {
  render() {
    const imageProps = Object.assign({}, this.props)
    imageProps.source.uri = `${imageProps.source.uri}?cb=${new Date().getTime()}`

    return (
      <Image {...imageProps} />
    )
  }
}
