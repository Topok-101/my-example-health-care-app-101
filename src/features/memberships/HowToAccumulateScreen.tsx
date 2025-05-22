import React from 'react'
import {View} from 'react-native'

import {ClassicHeader, ListMenu, SVGComponent, TextHealthCare} from 'components'
import BackLeft from 'components/header/items/HeaderBackLeft'

import {colors} from 'configs/theme'

import Images from 'assets/image/icons'
import {svgs} from 'assets/svg'

import {HowToAccumulateScreenStyles} from './style/HowToAccumulateScreen/HowToAccumulateScreenStyles.style'

export default function HowToAccumulateScreen() {
  return (
    <View style={HowToAccumulateScreenStyles.container}>
      <ClassicHeader title="$accumulatePoints" headerLeft={<BackLeft />} />
      <View style={HowToAccumulateScreenStyles.containerImage}>
        <SVGComponent height={100} width={146} source={svgs.SVGLogoHealthCare} />
      </View>
      <View style={HowToAccumulateScreenStyles.containerText}>
        <TextHealthCare
          style={HowToAccumulateScreenStyles.textTop}
          textType="bold">
          $titleHowtoAccumulutes
        </TextHealthCare>
        <TextHealthCare style={HowToAccumulateScreenStyles.textMid} fontType="jm">
          $howToAccumulates
        </TextHealthCare>
        <TextHealthCare
          style={HowToAccumulateScreenStyles.textBottom}
          textType="light"
          fontType="jm">
          $conditionAccumulate
        </TextHealthCare>
      </View>
      <View style={HowToAccumulateScreenStyles.list}>
        <ListMenu
          title={'$learnMore'}
          img={Images.more}
          color={colors.blue600}
          // onPress={}
        />
      </View>
    </View>
  )
}
