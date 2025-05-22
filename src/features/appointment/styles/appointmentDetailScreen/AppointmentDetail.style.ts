import {StyleSheet} from 'react-native'

import {colors} from 'configs/theme'

import {horizontalScale, moderateScale, verticalScale} from 'helper'

const styles = StyleSheet.create({
  packageContainer: {
    flex: 1,
    backgroundColor: colors.white
  },
  imgClose: {
    width: horizontalScale(24),
    height: verticalScale(24)
  },
  bookNumberContainer: {
    marginBottom: verticalScale(8),
    marginHorizontal: horizontalScale(24)
  },
  appointmentDetailContainer: {marginHorizontal: horizontalScale(24)},
  cardContainer: {
    marginHorizontal: horizontalScale(12),
    width: horizontalScale(352),
    height: verticalScale(224)
  },
  cardImageContainer: {
    backgroundColor: colors.blue50,
    marginHorizontal: horizontalScale(12),
    borderWidth: 1
  },
  cardPackageContainer: {
    // marginBottom: verticalScale(16)
  },
  img: {width: moderateScale(24), height: moderateScale(24)},
  text: {fontSize: moderateScale(16), paddingLeft: horizontalScale(23)},
  container: {
    // paddingHorizontal: horizontalScale(12)
  },
  textAmountPeopleService: {
    fontSize: moderateScale(16),
    marginRight: horizontalScale(11)
  },
  textSignAmountPeopleService: {
    fontSize: moderateScale(16)
  },
  customBadgeLabelContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  badgeGroupContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: verticalScale(16)
  },
  inputContainer: {
    marginBottom: verticalScale(16)
  },
  textHeader: {
    fontSize: moderateScale(16),
    marginVertical: verticalScale(16)
  },
  footerContainer: {
    flex: 1,
    justifyContent: 'center'
  },
  footerButtonContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: verticalScale(8),
    marginBottom: verticalScale(16)
  },
  buttonCall: {
    paddingHorizontal: horizontalScale(59.61)
  },
  textFooterCondition: {
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: verticalScale(20)
  },
  marginRight8: {
    marginRight: horizontalScale(8)
  },
  colorGray500: {
    color: colors.greyColorsGrey500
  },
  colorBlue600: {
    color: colors.blue600
  },
  sectionContainer: {marginHorizontal: horizontalScale(15)},
  textAppointmentOrder: {marginBottom: verticalScale(8)},
  foreGroundContainer: {
    ...StyleSheet.absoluteFillObject
  }
})

export default styles
