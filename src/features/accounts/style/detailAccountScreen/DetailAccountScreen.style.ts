import {StyleSheet} from 'react-native'

import {colors} from 'configs/theme'

import {horizontalScale, moderateScale, verticalScale} from 'helper'

const styles = StyleSheet.create({
  header: {
    backgroundColor: colors.white
  },
  headerRight: {fontSize: moderateScale(16), color: colors.blue600},
  containerAvatar: {
    paddingTop: verticalScale(31),
    alignSelf: 'center'
  },
  container: {backgroundColor: colors.greyColorsGrey50},
  allContainer: {
    paddingHorizontal: horizontalScale(24),
    paddingTop: verticalScale(24)
  },
  btm: {paddingBottom: verticalScale(75)}
})

export default styles
