import React from "react"
import { KeyboardAvoidingView } from "react-native"

export default class KeyboardAvoidingViewFix extends KeyboardAvoidingView {

  static propTypes = {
    ...KeyboardAvoidingView.PropTypes,
  }

  _initial_layout_height = null

  UNSAFE_componentWillUpdate(nextProps, nextState, nextContext) {
    if (this._frame) {
      this._initial_layout_height = this._initial_layout_height || this._frame.height
      this._frame.height = this._initial_layout_height
    }
    super.UNSAFE_componentWillUpdate(nextProps, nextState, nextContext)
  }
}
