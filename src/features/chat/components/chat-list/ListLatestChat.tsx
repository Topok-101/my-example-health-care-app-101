import React, {FC} from 'react'
import {FlatList, ListRenderItem, TouchableOpacity, View} from 'react-native'
import {Source} from 'react-native-fast-image'
import Reanimated, {FadeInDown} from 'react-native-reanimated'
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

import {ListLatestChatStyles} from '../../styles'

const idListLatestChat = `${names.ChatRoomScreen}_ListLatestChat`
const AnimatedView = Reanimated.createAnimatedComponent(View)

const ListLatestChat: FC<ILoadingProps> = ({loading}) => {
  const navigation = useNavigation()

  const MOCK = [
    {
      image: Images.doctor1,
      name: 'นทพญ.ปวีณา ขำดำ',
      department: 'นักเทคนิคการแพทย์',
      messeger: 'ยินดีมากครับ',
      time: '30 นาทีก่อน',
      active: true
    },
    {
      image: Images.doctor2,
      name: 'นทพญ.ปวีณา ขำดำ',
      department: 'นักเทคนิคการแพทย์',
      messeger: 'คุณ : ขอบคุณมากครับ',
      time: '10:00 น.',
      active: false
    },
    {
      image: Images.doctor3,
      name: 'นทพญ.ปวีณา ขำดำ',
      department: 'นักเทคนิคการแพทย์',
      messeger: 'คุณ : ขอบคุณมากครับ',
      time: 'เมื่อวาน',
      active: true
    },
    {
      image: Images.doctor1,
      name: 'นทพญ.ปวีณา ขำดำ',
      department: 'นักเทคนิคการแพทย์',
      messeger: 'คุณ : ขอบคุณมากครับ',
      time: '08/11/22',
      active: false
    }
  ]

  const onNavigate = () => {
    navigation.navigate(
      names.ChatRoomScreen as never,
      {idShareElememt: idListLatestChat} as never
    )
  }

  const ChatItems: ListRenderItem<{
    image: Source
    name: string
    department: string
    messeger: string
    time: string
    active: boolean
  }> = ({item, index}): JSX.Element => {
    return (
      <AnimatedView
        entering={FadeInDown.springify()
          .delay(250 * index)
          .duration(200 * index)}>
        <TouchableOpacity
          onPress={onNavigate}
          activeOpacity={0.5}
          style={ListLatestChatStyles.container}>
          <View style={ListLatestChatStyles.startContent}>
            <SharedElement id={idListLatestChat}>
              <Avartar
                image={item.image}
                sizeImage={64}
                sizeActiveIn={12}
                isActive={item.active}
                sizeActiveOut={24}
              />
            </SharedElement>
            <View style={ListLatestChatStyles.description}>
              <TextHealthCare textType="bold" style={ListLatestChatStyles.font16}>
                {item.name}
              </TextHealthCare>
              <TextHealthCare
                style={ListLatestChatStyles.colorblue600}
                textType="medium">
                {item.department}
              </TextHealthCare>
              <TextHealthCare
                style={ListLatestChatStyles.endContent}
                fontType="jm"
                numberOfLines={1}
                lineBreakMode="tail">
                {item.messeger}
              </TextHealthCare>
            </View>
          </View>

          <View style={ListLatestChatStyles.timeContainer}>
            <TextHealthCare style={ListLatestChatStyles.textTime}>
              {item.time}
            </TextHealthCare>
          </View>
        </TouchableOpacity>
        <View style={ListLatestChatStyles.line} />
      </AnimatedView>
    )
  }

  return (
    <View>
      <TextHealthCare style={ListLatestChatStyles.title} textType="medium">
        $latest
      </TextHealthCare>
      {loading ? (
        <LottieAnimatedView
          exiting={keyframes.fadeOutSize}
          lottiePath={lottie.skeletonListLatestChat}
          lottieStyle={skeletionLoadingStyle}
          lottieContainer={skeletionLoadingContainerStyle({
            width: horizontalScale(327),
            height: verticalScale(368),
            marginVertical: verticalScale(16)
          })}
        />
      ) : (
        <FlatList data={MOCK} scrollEnabled={false} renderItem={ChatItems} />
      )}
    </View>
  )
}

export default ListLatestChat
