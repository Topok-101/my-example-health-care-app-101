import React, {FC} from 'react'
import {View} from 'react-native'

import {IDisplayDateProps} from 'types/components'

import {JustImage, TextHealthCare} from 'components/typography'

import {colors} from 'configs/theme'

import Images from 'assets/image/icons'

import {displayDateStyles} from './DisplayStyle'

const DisplayDate: FC<IDisplayDateProps> = ({date, time, title}) => {
  return (
    <View style={displayDateStyles.container}>
      {title && (
        <TextHealthCare style={displayDateStyles.title}>{title}</TextHealthCare>
      )}
      <View style={displayDateStyles.dateContainer}>
        <JustImage
          source={Images.calendarBold}
          tintColor={colors.greyColorsGrey400}
          style={displayDateStyles.image}
        />
        <View style={displayDateStyles.displayTextContainer}>
          <TextHealthCare
            style={displayDateStyles.displayText}
            textType="semibold">
            {date}
          </TextHealthCare>
          <TextHealthCare style={displayDateStyles.dot} textType="semibold">
            ·
          </TextHealthCare>
          <TextHealthCare
            style={displayDateStyles.displayText}
            textType="semibold">
            {time}
          </TextHealthCare>
        </View>
      </View>
    </View>
  )
}

export default DisplayDate
