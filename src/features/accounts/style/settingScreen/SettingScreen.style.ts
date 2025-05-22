import { colors } from "configs/theme"
import { horizontalScale, moderateScale, verticalScale } from "helper"
import { Platform, StyleSheet } from "react-native"

const scale = Platform.OS === 'android' ? 1 : 0.8 

export const SettingScreenStyles = StyleSheet.create({
  container: {backgroundColor: colors.greyColorsGrey50, flex:1},
  header: {backgroundColor: colors.white},
  subcontainerTop: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.white,
    justifyContent: 'space-between',
    paddingHorizontal: horizontalScale(24),
    paddingVertical: verticalScale(24)
  },
  text: {fontSize: moderateScale(16)},
  line: {borderWidth: 1, borderColor: colors.greyColorsGrey100},
  containerTxt: {
    paddingVertical: verticalScale(18),
    paddingLeft: horizontalScale(24)
  },
  switch: {transform: [{scaleX: scale}, {scaleY: scale}]}
})
