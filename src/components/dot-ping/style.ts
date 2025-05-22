import {StyleSheet} from 'react-native'

import {horizontalScale, moderateScale, verticalScale} from 'helper'

export const styles = StyleSheet.create({
  defaultEffect: {
    position: 'absolute',
    width: moderateScale(80),
    height: moderateScale(80),
    borderRadius: moderateScale(40),
    borderColor: 'tomato',
    borderWidth: 10
  },
  defaultDotStyle: {
    width: moderateScale(10),
    height: moderateScale(10),
    backgroundColor: 'red',
    borderRadius: moderateScale(10) / 2,
    position: 'absolute',
    zIndex: 1,
    top: verticalScale(8),
    right: horizontalScale(5)
  },
  defaultEffectContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column'
  }
})
