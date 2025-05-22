import React, {FC} from 'react'
import {View} from 'react-native'

import {ICardPackageProps} from 'types/components'

import {TextHealthCare} from 'components'

import {moderateScale} from 'helper'

import {CardPackageStyle} from '../../styles/appointmentDetailScreen'

const CardPackage: FC<ICardPackageProps> = ({packageDetail}) => {
  return (
    <View style={CardPackageStyle.cardPackageContainer}>
      <TextHealthCare
        textType="bold"
        fontType="ibm"
        style={[
          {
            fontSize: moderateScale(24)
            // lineHeight: verticalScale(32.4)
          }
        ]}>
        {packageDetail.title}
      </TextHealthCare>
      <View style={CardPackageStyle.line} />
      <View style={CardPackageStyle.textPriceContainer}>
        <View style={CardPackageStyle.textPricePerContainer}>
          <TextHealthCare
            textType="semibold"
            fontType="inter"
            style={CardPackageStyle.textPrice}>
            {packageDetail.price}
          </TextHealthCare>
          <View>
            <TextHealthCare
              textType="medium"
              style={CardPackageStyle.textCurrency}>
              THB
            </TextHealthCare>
            <TextHealthCare
              textType="medium"
              style={CardPackageStyle.textPricePer}>
              / ท่าน
            </TextHealthCare>
          </View>
        </View>
        <TextHealthCare
          textType="semibold"
          style={CardPackageStyle.textSpecialOffer}>
          {packageDetail.specialOfferText}
        </TextHealthCare>
      </View>
    </View>
  )
}

export default CardPackage
