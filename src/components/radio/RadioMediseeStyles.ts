import {StyleSheet} from 'react-native'

import {horizontalScale} from 'helper'

const radioStyles = StyleSheet.create({
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
    width: 18,
    height: 18,
    top: 3,
    left: 3,
    zIndex: 9999,
    borderRadius: 99
  }
})

export {radioStyles}
