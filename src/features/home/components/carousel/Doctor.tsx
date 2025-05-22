import {isEmpty} from 'lodash'
import React, {FC} from 'react'
import {Dimensions, TouchableOpacity, View} from 'react-native'
import Carousel from 'react-native-reanimated-carousel'
import {CarouselRenderItem} from 'react-native-reanimated-carousel/lib/typescript/types'
import {SharedElement} from 'react-navigation-shared-element'

import {DataTypeDoctor, IResponseDoctor} from 'types/services/doctor'

import {Avartar, TextHealthCare} from 'components'

import {
  skeletionLoadingContainerStyle,
  skeletionLoadingStyle
} from 'features/GlobalStyles'
import {styles} from 'features/home/style/carousel/Doctor.style'
import {LottieAnimatedView} from 'features/loading'

import {useNavigation} from '@react-navigation/native'

import {horizontalScale, moderateScale, verticalScale} from 'helper'

import Images from 'assets/image/example'
import {lottie} from 'assets/lottie'

import {keyframes, namesScreen} from 'const'

const PAGE_WIDTH = Dimensions.get('window').width
const idListLatestChat = `${namesScreen.ChatRoomScreen}_ListLatestChat`

const Doctor: FC<{data: IResponseDoctor; isLoading: boolean}> = ({
  data,
  isLoading
}) => {
  const {navigate} = useNavigation()

  const navigates = () => {
    navigate(
      namesScreen.ChatRoomScreen as never,
      {
        idShareElememt: idListLatestChat
      } as never
    )
  }

  const renderItemDoc: CarouselRenderItem<DataTypeDoctor> = ({item}) => {
    return (
      <TouchableOpacity
        style={styles.carouselContainer}
        activeOpacity={0.7}
        onPress={navigates}>
        <View style={styles.subContainer}>
          <View style={styles.right}>
            <SharedElement id={idListLatestChat}>
              <Avartar
                image={
                  isEmpty(item.imagepath)
                    ? Images.AvatarDefault
                    : {uri: item.imagepath}
                }
                sizeImage={moderateScale(50)}
              />
            </SharedElement>
          </View>
          <View style={styles.centerLeft}>
            <TextHealthCare
              textType="bold"
              style={styles.titleText}
              numberOfLines={1}
              lineBreakMode="tail">
              {item.fullname}
            </TextHealthCare>
            <TextHealthCare textType="semibold" style={styles.descText}>
              {item.occupation}
            </TextHealthCare>
          </View>
        </View>
      </TouchableOpacity>
    )
  }

  return isLoading ? (
    <LottieAnimatedView
      exiting={keyframes.fadeOutSize}
      lottieContainer={skeletionLoadingContainerStyle({
        width: horizontalScale(327),
        marginTop: verticalScale(24)
      })}
      lottieStyle={skeletionLoadingStyle}
      lottiePath={lottie.skeletonDoctor}
      autoplay
      loop
    />
  ) : !isEmpty(data?.data) ? (
    <View>
      <TextHealthCare textType="bold" style={styles.title}>
        $consultNow
      </TextHealthCare>
      <Carousel
        vertical={false}
        width={horizontalScale(265)}
        height={verticalScale(83 + 24)}
        style={{
          width: PAGE_WIDTH
        }}
        loop
        autoPlay
        autoPlayInterval={3000}
        data={data?.data as []}
        renderItem={renderItemDoc}
      />
    </View>
  ) : (
    <></>
  )
}

export default Doctor
