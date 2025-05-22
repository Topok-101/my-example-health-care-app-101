import React from 'react'

import {TextHealthCare} from 'components'

import {colors} from 'configs/theme'
import { moderateScale } from 'helper'

const TitleHistoryPoint: React.FC<{point: string}> = props => {
  const {point} = props
  return (
    <>
      <TextHealthCare style={{fontSize: moderateScale(18)}} textType="bold">
        $receiver{' '}
        <TextHealthCare style={{color: colors.blue600}} textType="bold">
          {point}
        </TextHealthCare>{' '}
        $point
      </TextHealthCare>
    </>
  )
}

export default TitleHistoryPoint
