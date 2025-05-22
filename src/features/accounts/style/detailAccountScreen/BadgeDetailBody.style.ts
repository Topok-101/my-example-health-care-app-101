import {Dimensions, StyleSheet} from 'react-native'

import {colors} from 'configs/theme'

import {horizontalScale, moderateScale, verticalScale} from 'helper'

const styles = StyleSheet.create({
  subContainer: {
    flexDirection: 'row',
    backgroundColor: colors.white,
    alignItems: 'center',
    paddingVertical: verticalScale(16),
    paddingLeft: horizontalScale(24),
    width: horizontalScale(
      (Dimensions.get('window').width - (24 / 2 + 24) * 2) / 2.2
    ),
    borderRadius: moderateScale(24),
    borderWidth: 1,
    borderColor: colors.greyColorsGrey200
  },
  img: {width: moderateScale(24), height: moderateScale(24)},
  text: {fontSize: moderateScale(16), paddingLeft: horizontalScale(23)},
  container: {
    justifyContent: 'space-between',
    paddingTop: verticalScale(8)
  }
})

export default styles
