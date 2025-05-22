import {StyleSheet} from 'react-native'

import {colors} from 'configs/theme'

import {horizontalScale, verticalScale} from 'helper'

const buttonBaseStyles = StyleSheet.create({
  disabled: {
    backgroundColor: colors.blue200
  },
  disableText: {
    color: colors.greyColorsGrey600
  },
  loading: {
    position: 'absolute'
  },
  button: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 36,
    paddingHorizontal: horizontalScale(16)
  },
  buttonSmall: {
    paddingVertical: verticalScale(8)
  },
  buttonMedium: {
    paddingVertical: verticalScale(16)
  },
  icon: {
    width: horizontalScale(24),
    height: verticalScale(24)
  },
  primary: {
    backgroundColor: colors.blue600
  },
  danger: {
    backgroundColor: colors.red
  },
  primaryOutline: {
    borderWidth: 1,
    borderColor: colors.blue600
  },
  dangerOutline: {
    borderWidth: 1,
    borderColor: colors.red
  },
  textPrimary: {
    color: colors.white
  },
  // textPrimaryOutline: {
  //   color: colors.greyColorsGrey800
  // },
  textDangerOutline: {
    color: colors.red
  },
  imagePrimary: {
    tintColor: colors.white
  },
  imagePrimaryOutline: {
    tintColor: colors.blue600
  },
  imageDangerOutline: {
    tintColor: colors.red
  }
})

const buttonIconStyles = StyleSheet.create({
  button: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 50,
    width: horizontalScale(56)
  }
})
export {buttonBaseStyles, buttonIconStyles}
