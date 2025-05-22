import {StyleSheet} from 'react-native'

import {colors} from 'configs/theme'

import {horizontalScale, moderateScale, verticalScale} from 'helper'

const clinicDetailCardStyle = StyleSheet.create({
  container: {
    position: 'relative'
  },
  cardImageContainer: {
    marginLeft: -16,
    ...StyleSheet.absoluteFillObject
  },
  cardAppointmentImageContainer: {
    // marginLeft: -16
  },
  cardPackageContainer: {
    flex: 1,
    borderWidth: 1,
    borderColor: colors.greyColorsGrey200,
    borderRadius: 16,
    paddingHorizontal: horizontalScale(17),
    paddingVertical: verticalScale(24),
    // height: verticalScale(115),
    // marginTop: verticalScale(-48),
    backgroundColor: colors.white
  },
  headerContainer: {
    flexDirection: 'row'
  },
  badgeStatus: {
    paddingVertical: verticalScale(8),
    marginLeft: horizontalScale(12),
    paddingHorizontal: horizontalScale(16),
    backgroundColor: colors.greenOpacity,
    borderRadius: moderateScale(16),
    justifyContent: 'center',
    alignItems: 'center'
  },
  textStatus: {
    color: colors.green
  },
  leftHeaderContainer: {
    flex: 1
  },
  textCardPackageDetailContainer: {
    justifyContent: 'space-between'
  },
  textClinicTitle: {
    fontSize: moderateScale(24)
    // marginBottom: verticalScale(5)
    // lineHeight: verticalScale(32.4)
  },
  textBottomContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end'
  },
  textAddress: {
    color: colors.greyColorsGrey400,
    fontSize: moderateScale(12),
    marginRight: horizontalScale(15)
    // marginTop: verticalScale(6)
  },
  textDutyTime: {
    marginTop: verticalScale(9),
    color: colors.greyColorsGrey400,
    fontSize: moderateScale(14)
  },
  textPricePerContainer: {
    flex: 1
    // alignItems: 'flex-end',

    // flexDirection: 'row'
  },

  textPricePer: {},
  textSpecialOffer: {
    flex: 1,
    color: colors.green
  },
  line: {
    borderWidth: 0.75,
    borderColor: colors.greyColorsGrey300
  }
})

export {clinicDetailCardStyle}
