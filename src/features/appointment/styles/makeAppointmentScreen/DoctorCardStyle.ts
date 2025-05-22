import {StyleSheet} from 'react-native'

import {colors} from 'configs/theme'

import {horizontalScale, moderateScale, verticalScale} from 'helper'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    borderRadius: 16,
    paddingVertical: verticalScale(10),
    paddingHorizontal: horizontalScale(10)
  },
  imageContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: horizontalScale(15)
  },
  image: {
    width: horizontalScale(64),
    height: verticalScale(64),
    borderRadius: 99
  },
  textContainer: {
    flex: 1
  },
  textNameDoctor: {
    fontSize: moderateScale(16),
    color: colors.greyColorsGrey900
  },
  textPosition: {
    fontSize: moderateScale(12),
    color: colors.blue600
  },
  textClinic: {
    fontSize: moderateScale(12),
    color: colors.greyColorsGrey400
  },
  checkboxContainer: {
    alignSelf: 'center'
  },
  checkedContainer: {
    backgroundColor: colors.blue50
  },
  underline: {
    borderBottomWidth: 1,
    borderBottomColor: colors.greyColorsGrey100,
    marginVertical: verticalScale(6),
    marginHorizontal: horizontalScale(9)
  }
})

export default styles
