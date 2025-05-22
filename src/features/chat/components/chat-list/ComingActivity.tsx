import React, {FC} from 'react'
import {TouchableOpacity, View} from 'react-native'

import {ILoadingProps} from 'types/components/animeted-type'

import {Avartar, TextHealthCare} from 'components'

import {
  skeletionLoadingContainerStyle,
  skeletionLoadingStyle
} from 'features/GlobalStyles'
import {ComingActivityStyles} from 'features/chat/styles'
import {LottieAnimatedView} from 'features/loading'

import {horizontalScale} from 'helper'

import Images from 'assets/image/example'
import {lottie} from 'assets/lottie'

import {keyframes} from 'const'

const ComingActivity: FC<ILoadingProps> = ({loading}) => {
  const MOCK = {name: 'ทนพ.ไกรวุฒิ แก้วมิตร', date: '4/11/65', time: '10:00 น.'}

  const CardItem = (): JSX.Element => {
    return (
      <View style={ComingActivityStyles.subContainer}>
        <View style={ComingActivityStyles.startContent}>
          <Avartar image={Images.doctor1} />
          <View style={ComingActivityStyles.startSubContent}>
            <TextHealthCare
              textType="medium"
              style={ComingActivityStyles.description}>
              $appointTalking
            </TextHealthCare>
            <TextHealthCare style={ComingActivityStyles.font16} textType={'bold'}>
              {MOCK.name}
            </TextHealthCare>
          </View>
        </View>

        <View style={ComingActivityStyles.endContent}>
          <TextHealthCare style={ComingActivityStyles.descriptionEnd}>
            {MOCK.date}
          </TextHealthCare>
          <TextHealthCare style={ComingActivityStyles.fontColor}>
            {MOCK.time}
          </TextHealthCare>
        </View>
      </View>
    )
  }

  return (
    <View style={ComingActivityStyles.container}>
      <TextHealthCare style={ComingActivityStyles.title}>$upcoming</TextHealthCare>
      <View style={ComingActivityStyles.border}>
        {loading ? (
          <LottieAnimatedView
            exiting={keyframes.fadeOutSize}
            lottiePath={lottie.skeletonComingActivity}
            lottieStyle={skeletionLoadingStyle}
            lottieContainer={skeletionLoadingContainerStyle({
              width: horizontalScale(327)
            })}
          />
        ) : (
          <TouchableOpacity
            activeOpacity={0.5}
            style={ComingActivityStyles.containerCard}>
            <CardItem />
          </TouchableOpacity>
        )}
      </View>
    </View>
  )
}

export default ComingActivity
