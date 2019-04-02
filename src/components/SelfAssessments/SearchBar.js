import React, { Component } from 'react'
import {
  View,
  TextInput,
  Image,
  Platform,
  Text
} from 'react-native'
import styles from './styles'

const searchImage = require('/images/searchImage.png')

export default class SearchBar extends Component {
  constructor (props) {
    super(props)

    this.state = {
      showIcon: true
    }
  }

  onInputFocus () {
    this.setState({
      showIcon: false
    })
  }

  onEndEditing () {
    this.props.filter === '' &&
      this.setState({
        showIcon: true
      })
  }

  render () {
    return (
      <View style={styles.searchBarContainer}>
        <View style={styles.searchInput}>
          <TextInput
            style={[styles.searchBar, (Platform.OS === 'ios' ? { zIndex: 2, height: 25 } : '')]}
            underlineColorAndroid="transparent"
            onChangeText={text => this.props.onChangeText(text)}
            value={this.props.search}
            onFocus={() => this.onInputFocus()}
            onEndEditing={() => this.onEndEditing()} />
          {
            this.state.showIcon &&
            <View style={styles.searchIconView}>
              <Image
                source={searchImage}
                style={styles.searchImage} />
              <Text style={styles.searchText}>Search</Text>
            </View>
          }
        </View>
      </View>
    )
  }
}
