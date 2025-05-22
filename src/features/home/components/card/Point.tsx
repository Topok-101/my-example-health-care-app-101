import {isEmpty} from 'lodash'
import React, {FC} from 'react'
import {TouchableOpacity, View} from 'react-native'

import {IResponseMember} from 'types/services/member'

import {BetterImage, TextHealthCare} from 'components'
import {BadgeStatus} from 'components/badge'
import {ProgressBar} from 'components/progress-bar'

import {
  skeletionLoadingContainerStyle,
  skeletionLoadingStyle
} from 'features/GlobalStyles'
import {styles} from 'features/home/style/card/Point.style'
import {LottieAnimatedView} from 'features/loading'

import {useNavigation} from '@react-navigation/native'

import {colors} from 'configs/theme'

import {horizontalScale, moderateScale, verticalScale} from 'helper'

import Background from 'assets/image/background'
import {lottie} from 'assets/lottie'

import {keyframes} from 'const'
import {names} from 'constants/name-screen'

const Point: FC<{data: IResponseMember; isLoading: boolean}> = ({
  isLoading,
  data
}) => {
  const {navigate} = useNavigation()

  const onNavigate = () => {
    navigate(names.MembershipsStack as never)
  }

  return isLoading ? (
    <LottieAnimatedView
      exiting={keyframes.fadeOutSize}
      lottieContainer={skeletionLoadingContainerStyle({
        width: horizontalScale(327),
        marginTop: verticalScale(16)
      })}
      lottieStyle={skeletionLoadingStyle}
      lottiePath={lottie.skeletonPoint}
      autoplay
      loop
    />
  ) : !isEmpty(data) ? (
    <TouchableOpacity
      style={styles.maxWidth}
      activeOpacity={0.5}
      onPress={onNavigate}>
      <View style={styles.conatiner}>
        <BetterImage
          style={styles.imageConatiner}
          resizeMode="cover"
          source={Background.bgPoint}>
          <View style={styles.secondConatiner}>
            <View>
              <View style={styles.row}>
                <View style={styles.marginRight6}>
                  <TextHealthCare textType="bold" style={styles.text16Grey900}>
                    $currentPoint
                  </TextHealthCare>
                </View>
                <View>
                  <View style={styles.rowCenter}>
                    <TextHealthCare textType="bold" style={styles.text16Blue600}>
                      {data.data.current_point}/
                    </TextHealthCare>
                    <TextHealthCare textType="bold" style={styles.text14Blue600}>
                      {data.data.maxpoint}
                    </TextHealthCare>
                  </View>
                </View>
              </View>
              <View style={[styles.remainingPointStyle]}>
                <View style={[styles.marginRight4]}>
                  <TextHealthCare
                    textType="semibold"
                    style={[
                      styles.text40Blue600,
                      {lineHeight: moderateScale(70)}
                    ]}>
                    {(data.data.maxpoint - data.data.current_point).toFixed(2)}
                  </TextHealthCare>
                </View>
                <View>
                  <TextHealthCare
                    textType="bold"
                    style={[
                      styles.text14Grey900,
                      {lineHeight: moderateScale(20)}
                    ]}>
                    $remainingText
                  </TextHealthCare>
                </View>
              </View>
            </View>
            <View style={[styles.marginRight8]}>
              <View style={[styles.center, {marginBottom: verticalScale(4)}]}>
                <TextHealthCare style={styles.text10Grey400}>
                  $userLevel
                </TextHealthCare>
              </View>
              <BadgeStatus
                title={`HealthCare\n${data.data.tier}`}
                fontSize={12}
                fontColor={colors.orange}
                bgColor={colors.blueGrey}
                TextType="regular"
                textAlign="center"
                width={86}
                height={43}
              />
            </View>
          </View>
          <View style={styles.progressContainer}>
            <ProgressBar
              widthPercentage={data.data.current_point}
              colorStart={colors.blue600}
              colorStop={colors.blue100}
            />
          </View>
        </BetterImage>
      </View>
    </TouchableOpacity>
  ) : (
    <></>
  )
}
export default Point
