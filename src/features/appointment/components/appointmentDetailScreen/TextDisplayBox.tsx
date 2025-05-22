import React, {FC} from 'react'
import {View} from 'react-native'

import {IDisplayTextProps} from 'types/components'

import {TextHealthCare} from 'components/typography'

import {TextDisplayBoxStyle} from 'features/appointment/styles/appointmentDetailScreen'

const TextDisplayBox: FC<IDisplayTextProps> = ({label}) => {
  return (
    <View style={TextDisplayBoxStyle.container}>
      <TextHealthCare style={TextDisplayBoxStyle.displayText} textType="semibold">
        {label}
      </TextHealthCare>
    </View>
  )
}

export default TextDisplayBox
