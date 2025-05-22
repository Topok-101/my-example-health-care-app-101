import {Dimensions, StyleSheet} from 'react-native'

import {colors} from 'configs/theme'

import {horizontalScale, moderateScale, verticalScale} from 'helper'

const PAGE_WIDTH = Dimensions.get('window').width

export const styles = StyleSheet.create({
  title: {
    fontSize: moderateScale(20),
    color: colors.greyColorsGrey900,
    marginTop: verticalScale(23),
    marginLeft: horizontalScale(24)
  },
  carouselContainer: {
    marginHorizontal: horizontalScale(24),
  },
  subContainer: {
    paddingHorizontal: horizontalScale(34),
    paddingTop: verticalScale(26),
    paddingBottom: verticalScale(26),
    justifyContent: 'space-between',
    flexDirection: 'column',
    flex: 1
  },
  subContainerFirst: {
    marginTop: verticalScale(32),
    marginBottom: verticalScale(20),
    marginLeft: horizontalScale(23),
    marginRight: horizontalScale(17)
  },
  right: {marginRight: horizontalScale(20)},
  titleText: {
    fontSize: moderateScale(20),
    color: colors.greyColorsGrey900
  },
  titleTextFirst: {
    fontSize: moderateScale(16),
    color: colors.greyColorsGrey900
  },
  descText: {fontSize: moderateScale(12), color: colors.blue600},
  imageStyle: {
    borderRadius: moderateScale(16),
    width: horizontalScale(PAGE_WIDTH - (24 * 2)),
    height: verticalScale(227),
  },
  buttonConatiner: {
    width: horizontalScale(130),
    marginVertical: verticalScale(12),
  }
})
