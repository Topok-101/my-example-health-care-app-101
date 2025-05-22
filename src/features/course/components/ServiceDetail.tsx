import React from 'react'
import {View} from 'react-native'

import {TextHealthCare} from 'components'

import {styles} from '../style/ServiceDetail.style'

const ServiceDetail = () => {
  return (
    <View>
      <View style={styles.mainConatiner}>
        <TextHealthCare style={styles.text18Grey900} textType="bold">
          $serviceDetailTitle
        </TextHealthCare>
      </View>
      <View style={styles.detailContainer}>
        <TextHealthCare
          style={styles.text12Grey900}
          textType="regular"
          fontType="jm">
          $serviceDetail
        </TextHealthCare>
      </View>
    </View>
  )
}

export default ServiceDetail
