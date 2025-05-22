import {StyleSheet} from 'react-native'

import {colors} from 'configs/theme'

import {horizontalScale, moderateScale, verticalScale} from 'helper'

const styles = StyleSheet.create({
  cardPackageContainer: {
    flex: 1,
    borderWidth: 1,
    borderColor: colors.greyColorsGrey200,
    borderRadius: 16,
    paddingHorizontal: horizontalScale(16),
    paddingVertical: verticalScale(16),
    // height: verticalScale(165),
    // marginTop: verticalScale(-72),
    backgroundColor: colors.white
  },
  textCardPackageDetailContainer: {
    justifyContent: 'space-between'
  },
  textPriceContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end'
  },
  textPrice: {
    fontSize: moderateScale(32),
    marginRight: verticalScale(15),
    marginTop: verticalScale(12)
  },
  textPricePerContainer: {
    flex: 1,
    alignItems: 'flex-end',

    flexDirection: 'row'
  },
  textCurrency: {
    fontSize: moderateScale(14)
  },
  textPricePer: {},
  textSpecialOffer: {
    flex: 1,
    color: colors.green
  },
  line: {
    marginVertical: verticalScale(9),
    borderWidth: 0.75,
    borderColor: colors.greyColorsGrey300
  }
})

export default styles
