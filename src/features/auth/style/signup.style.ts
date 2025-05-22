import {StyleSheet} from 'react-native'

import {colors} from 'configs/theme'

import {horizontalScale, moderateScale, verticalScale} from 'helper'

export const signUpFormStyles = StyleSheet.create({
  sheetContentContainer: {
    flex: 1,
    alignItems: 'center'
  },
  signUpFormHeaderContainer: {
    marginBottom: horizontalScale(22)
  },
  signUpContainer: {
    display: 'flex',
    justifyContent: 'center',
    paddingHorizontal: horizontalScale(24),
    paddingVertical: verticalScale(24)
  },
  inputContainer: {
    paddingVertical: verticalScale(8),
    width: '100%'
  },
  smallInputContainer: {
    marginBottom: verticalScale(32)
  },
  buttonContainer: {
    // width: '100%',
    // alignItems: 'center',
    paddingVertical: verticalScale(28)
  },
  checkListContainer: {
    display: 'flex',
    paddingRight: horizontalScale(16)
  },
  checkContainer: {
    display: 'flex',
    flexDirection: 'row'
  },
  imageCheck: {
    width: verticalScale(24),
    height: horizontalScale(24)
  },
  textFooterContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center'
  },
  termAndAgreeContainer: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    flex: 1
  },
  errorTextContainer: {
    color: colors.red,
    flexWrap: 'wrap',
    marginTop: verticalScale(10),
    fontSize: moderateScale(12)
  }
})
export const bloodTypeListStyles = StyleSheet.create({
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: verticalScale(60)
  },
  title: {
    fontSize: moderateScale(16),
    marginBottom: verticalScale(20)
  },
  bloodTypeBadge: {
    backgroundColor: colors.greyColorsGrey50,
    marginVertical: verticalScale(10),
    marginHorizontal: horizontalScale(10),
    borderRadius: 16,
    width: verticalScale(64),
    height: horizontalScale(64),
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
  bloodTypeText: {
    fontSize: moderateScale(24)
  },
  badgeContainer: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap'
  }
})
export const selectGenderStyles = StyleSheet.create({
  selectGenderContainer: {
    display: 'flex',
    justifyContent: 'space-around',
    flexDirection: 'row'
  }
})

export const genderStyles = StyleSheet.create({
  genderContainer: {
    display: 'flex',
    alignItems: 'center'
  },
  genderCardView: {
    borderWidth: 2,
    borderRadius: 16,
    borderColor: colors.transparent
  },
  genderCardImage: {
    width: horizontalScale(128),
    height: verticalScale(164),
    borderRadius: 16
  },
  textGenderType: {
    paddingTop: verticalScale(8),

    fontSize: moderateScale(24)
  }
})
