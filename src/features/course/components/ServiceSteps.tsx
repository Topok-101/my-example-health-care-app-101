import React from 'react'
import {View} from 'react-native'

import {SVGComponent, TextHealthCare} from 'components'

import {svgs} from 'assets/svg'

import {styles} from '../style/ServiceSteps.style'

const dataStep = [
  {
    id: 1,
    text: '$step1',
    icon: svgs.SVGSyringe
  },
  {
    id: 2,
    text: '$step2',
    icon: svgs.SVGPatient
  },
  {
    id: 3,
    text: '$step3',
    icon: svgs.SVGHospital
  },
  {
    id: 4,
    text: '$step4',
    icon: svgs.SVGMessage
  }
]

const ServiceSteps = () => {
  return (
    <View>
      <View style={styles.mgv15}>
        <TextHealthCare style={styles.text18Grey900} textType="bold">
          $stepTitle
        </TextHealthCare>
      </View>
      <View style={styles.container}>
        {dataStep.map((i, k) => {
          return (
            <View key={k} style={styles.listConatiner}>
              <View style={styles.mg6}>
                <SVGComponent
                  key={'icon'}
                  source={i.icon}
                  width={24}
                  height={24}
                />
              </View>

              <TextHealthCare
                key={'text'}
                style={styles.text12Grey900}
                fontType="jm">
                {i.text}
              </TextHealthCare>
            </View>
          )
        })}
      </View>
    </View>
  )
}

export default ServiceSteps
