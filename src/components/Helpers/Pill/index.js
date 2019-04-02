import React from "react"
import { Button } from "react-native-elements"
import StyleConsts from "/constants/styleConstants"
import styles from "./styles"

export class Pill extends React.Component {

  render() {
    const { title } = this.props
    const color = this.props.color || "red"

    return (
      <Button
        title={title}
        textStyle={{ fontSize: this.props.fontSize || StyleConsts.fontSize.em1, color }}
        buttonStyle={[styles.buttonStyle, { borderColor: color }]}
        containerStyle={{ marginRight: 0 }} />
    )
  }
}

export class FeedbackPill extends React.Component {
  render() {
    return (
      <Pill title={"FEEDBACK"} color="gray" />
    )
  }
}

export class GradedPill extends React.Component {
  render() {
    return (
      <Pill title={"GRADED"} color="gray" />
    )
  }
}

export class LatePill extends React.Component {
  render() {
    return (
      <Pill title={"LATE"} />
    )
  }
}

export class MissingPill extends React.Component {
  render() {
    return (
      <Pill title={"MISSING"} />
    )
  }
}
