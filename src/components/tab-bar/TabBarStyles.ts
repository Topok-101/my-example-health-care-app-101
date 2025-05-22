import {StyleSheet} from 'react-native'

import {colors} from 'configs/theme'

import {horizontalScale, verticalScale} from 'helper'

const tabBarStyles = StyleSheet.create({
  container: {
    position: 'relative',
    display: 'flex',
    flexDirection: 'row',
    borderWidth: 1,
    borderColor: colors.greyColorsGrey200,
    height: verticalScale(56),
    borderRadius: 64,
    backgroundColor: colors.greyColorsGrey50
  },
  childTab: {
    flex: 1,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
  moverContainer: {
    position: 'absolute',
    top: 0,
    left: 0,
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 64,
    paddingVertical: verticalScale(4),
    paddingHorizontal: horizontalScale(4)
  },
  moverStyle: {
    width: '100%',
    height: '100%',
    borderRadius: 64
  }
})

export {tabBarStyles}
