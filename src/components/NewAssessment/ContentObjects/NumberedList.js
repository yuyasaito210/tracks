import PropTypes from "prop-types"
import React, { Component } from "react"
import List from "./List"

export default class NumberedList extends Component {
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
      bulletStyle: "numeric",
      items: this.props.content.items || this.props.content.bullets,
    }
    return (
      <List content={listContent} styles={this.props.styles} />
    )
  }
}
