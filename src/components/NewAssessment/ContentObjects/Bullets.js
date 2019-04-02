import PropTypes from "prop-types"
import React, { Component } from "react"
import List from "./List"

export default class Bullets extends Component {
  static propTypes = {
    content: PropTypes.oneOfType([
      PropTypes.shape({
        bullets: PropTypes.arrayOf(PropTypes.string).isRequired,
      }),
      PropTypes.shape({
        items: PropTypes.arrayOf(PropTypes.string).isRequired,
      }),
    ]).isRequired,
    styles: PropTypes.object.isRequired,
  }

  render() {
    const listContent = {
      bulletStyle: "disc",
      items: this.props.content.bullets || this.props.content.items,
    }
    return (
      <List content={listContent} styles={this.props.styles} />
    )
  }
}
