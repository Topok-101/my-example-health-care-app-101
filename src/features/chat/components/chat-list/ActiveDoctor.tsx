import React, {FC} from 'react'
import {FlatList, ListRenderItem, TouchableOpacity, View} from 'react-native'
import {Source} from 'react-native-fast-image'
import Reanimated, {FadeInRight} from 'react-native-reanimated'
import {SharedElement} from 'react-navigation-shared-element'

import {ILoadingProps} from 'types/components/animeted-type'

import {Avartar, TextHealthCare} from 'components'

import {
  skeletionLoadingContainerStyle,
  skeletionLoadingStyle
} from 'features/GlobalStyles'
import {LottieAnimatedView} from 'features/loading'

import {useNavigation} from '@react-navigation/native'

import {horizontalScale, verticalScale} from 'helper'

import Images from 'assets/image/example'
import {lottie} from 'assets/lottie'

import {keyframes} from 'const'
import {names} from 'constants/name-screen'

import {ActiveDoctorStyle} from '../../styles'

const idActiveDoctor = `${names.ChatRoomScreen}_ActiveDoctor`
const AnimatedView = Reanimated.createAnimatedComponent(View)

const ActiveDoctor: FC<ILoadingProps> = ({loading = false}) => {
  const navigation = useNavigation()

  const MOCK = [
    {
      name: 'นทพ.ไกรวุฒิ',
      image: Images.Avatar,
      active: true
    },
    {
      name: 'นทพญ.ปัจถมา',
      image: Images.AvatarU,
      active: true
    },
    {
      name: 'พญ.ยลดา',
      image: Images.doctor3,
      active: true
    },
    {
      name: 'นทพ.ไกรวุฒิ',
      image: Images.Avatar,
      active: true
    },
    {
      name: 'นทพ.ไกรวุฒิ',
      image: Images.Avatar,
      active: true
    }
  ]

  const onNavigate = () => {
    navigation.navigate(
      names.ChatRoomScreen as never,
      {idShareElememt: idActiveDoctor} as never
    )
  }

  const ItemDoctor: ListRenderItem<{
    name: string
    image: Source
    active: boolean
  }> = ({item, index}): JSX.Element => {
    return (
      <AnimatedView
        entering={FadeInRight.springify()
          .delay(150 * index)
          .duration(100 * index)}>
        <TouchableOpacity
          onPress={onNavigate}
          activeOpacity={0.5}
          style={ActiveDoctorStyle.contentContainer}>
          <SharedElement id={idActiveDoctor}>
            <Avartar
              image={item.image}
              sizeImage={64}
              isActive={item.active}
              sizeActiveOut={16}
              sizeActiveIn={8}
            />
          </SharedElement>
          <TextHealthCare
            fontType="jm"
            style={ActiveDoctorStyle.name}
            lineBreakMode={'tail'}
            numberOfLines={1}>
            {item.name}
          </TextHealthCare>
        </TouchableOpacity>
      </AnimatedView>
    )
  }

  return (
    <View>
      <TextHealthCare textType="medium" style={ActiveDoctorStyle.title}>
        $nowActiveDoctor
      </TextHealthCare>
      {loading ? (
        <LottieAnimatedView
          exiting={keyframes.fadeOutSize}
          lottieStyle={skeletionLoadingStyle}
          lottiePath={lottie.skeletonActiveDoctor}
          lottieContainer={skeletionLoadingContainerStyle({
            width: horizontalScale(328),
            height: verticalScale(86),
            marginBottom: verticalScale(22)
          })}
        />
      ) : (
        <FlatList
          horizontal
          initialNumToRender={4}
          showsHorizontalScrollIndicator={false}
          data={MOCK}
          renderItem={ItemDoctor}
        />
      )}
    </View>
  )
}

export default ActiveDoctor
