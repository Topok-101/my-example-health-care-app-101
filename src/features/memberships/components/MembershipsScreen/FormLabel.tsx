import React from 'react'
import {View} from 'react-native'

import {TextHealthCare} from 'components'

import {FormLabelstyles} from '../../style/MembershipsScreen'

const FormLabel: React.FC<{point: number}> = ({point}) => {
  return (
    <View style={FormLabelstyles.container}>
      <TextHealthCare style={FormLabelstyles.font16} textType="bold">
        $accumulatePoint
      </TextHealthCare>
      <View style={FormLabelstyles.subContainer}>
        <TextHealthCare
          style={[FormLabelstyles.right]}
          textType="bold"
          fontType="inter">
          {point}
          {' '}
          <TextHealthCare style={[FormLabelstyles.right]} textType="bold">$point</TextHealthCare>
          {' '}
          <TextHealthCare style={FormLabelstyles.lvlup} textType="bold">
            $accumulatePointLvlUp
          </TextHealthCare>
        </TextHealthCare>
      </View>
    </View>
  )
}

export default FormLabel
