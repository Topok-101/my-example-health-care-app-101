import React from 'react'
import {TouchableOpacity} from 'react-native'

import {TextHealthCare} from 'components'

import {colors} from 'configs/theme'

import {horizontalScale, moderateScale, verticalScale} from 'helper'

const DayCard: React.FC<{
  active?: boolean
  day?: string
  date?: string
  index: number
  callBack: (index: number, types: 'time' | 'date') => void
}> = ({active, day, date, callBack, index}): JSX.Element => {
  return (
    <TouchableOpacity
      onPress={() => callBack(index, 'date')}
      activeOpacity={0.5}
      style={{
        borderColor: active ? colors.blue600 : colors.greyColorsGrey200,
        backgroundColor: active ? colors.blue600 : colors.white,
        borderWidth: 1,
        paddingVertical: verticalScale(8),
        paddingHorizontal: horizontalScale(14),
        width: 56,
        height: 63,
        borderRadius: moderateScale(16),
        alignItems: 'center'
      }}>
      <TextHealthCare
        style={{color: colors.greyColorsGrey400, fontSize: moderateScale(12)}}>
        {day}
      </TextHealthCare>

      <TextHealthCare
        fontType="inter"
        style={{
          color: active ? colors.white : colors.greyColorsGrey900,
          fontSize: moderateScale(18)
        }}
        textType="medium">
        {date}
      </TextHealthCare>
    </TouchableOpacity>
  )
}

export default DayCard
