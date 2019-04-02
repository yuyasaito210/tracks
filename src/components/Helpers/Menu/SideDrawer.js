import React, {Component} from 'react'
import Drawer from 'react-native-drawer'
import Menu from './index'
import { DefaultRenderer } from 'react-native-router-flux'
const drawerStyles = {
  drawerOverlay: { width: 150 }
}
export default class SideDrawer extends Component {
  render () {
    const state = this.props.navigationState
    const children = state.children
    return (
      <Drawer
        styles={drawerStyles}
        ref='navigation'
        type='overlay'
        open={this.props.open}
        content={<Menu />}
        tapToClose
        openDrawerOffset={0.6}
        panCloseMask={0}
        panOpenMask={0.1}
        tweenHandler={(ratio) => ({ main: { opacity: (2 - ratio) / 2 } })}
        >
        <DefaultRenderer navigationState={children[0]} onNavigate={this.props.onNavigate} />
      </Drawer>
    )
  }
}
