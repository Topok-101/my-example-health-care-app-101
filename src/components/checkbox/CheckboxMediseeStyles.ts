import {StyleSheet} from 'react-native'

import {horizontalScale} from 'helper'

const checkboxStyles = StyleSheet.create({
  container: {
    position: 'relative',
    display: 'flex',
    flexDirection: 'row'
  },
  checkbox: {
    width: 25,
    height: 25,
    marginRight: horizontalScale(16)
  },
  checkboxFill: {
    backgroundColor: 'white',
    position: 'absolute',
    width: 20.1,
    height: 20.2,
    top: 2,
    left: 2,
    zIndex: 9999,
    borderRadius: 7
  }
})

export {checkboxStyles}
