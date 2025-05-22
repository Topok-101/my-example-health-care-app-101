import React from 'react'
import {FlatList, ListRenderItem, View} from 'react-native'
import FastImage from 'react-native-fast-image'

import {ILoadingProps} from 'types/components/animeted-type'
import {IActivityItems} from 'types/features/activity'

import {
  Avartar,
  BadgeStatus,
  IconBounceIn,
  IconWithRounder,
  TextHealthCare
} from 'components'

import {
  skeletionLoadingContainerStyle,
  skeletionLoadingStyle
} from 'features/GlobalStyles'
import {LottieAnimatedView} from 'features/loading'

import {colors} from 'configs/theme'

import {horizontalScale, verticalScale} from 'helper'

import Images from 'assets/image/example'
import Icons from 'assets/image/icons'
import {lottie} from 'assets/lottie'

import {keyframes} from 'const'

import {ComingTabStyles} from '../style'

const MOCK = [
  {
    img: Images.Avatar,
    type: 'doctor',
    isActive: true,
    contactType: 'chat',
    name: 'นทพญ.ปวีณา ขำดำ',
    description: 'นัดหมายพูดคุย/ปรึกษา',
    date: '4 พฤศจิกายน 2565 · 10:00 น.'
  },
  {
    img: Images.ex1,
    type: 'clinic',
    isActive: true,
    name: 'BT LAB - Medical Clinic',
    description: 'นัดหมายเข้าตรวจ',
    date: '4 พฤศจิกายน 2565 · 10:00 น.'
  },
  {
    img: Images.Avatar,
    type: 'doctor',
    isActive: true,
    name: 'นทพญ.ปวีณา ขำดำ',
    description: 'นัดหมายเข้าตรวจ',
    contactType: 'video',
    date: '4 พฤศจิกายน 2565 · 10:00 น.'
  },
  {
    img: Images.Avatar,
    type: 'doctor',
    isActive: true,
    contactType: 'chat',
    name: 'นทพญ.ปวีณา ขำดำ',
    description: 'นัดหมายพูดคุย/ปรึกษา',
    date: '4 พฤศจิกายน 2565 · 10:00 น.'
  },
  {
    img: Images.ex1,
    type: 'clinic',
    isActive: true,
    name: 'BT LAB - Medical Clinic',
    description: 'นัดหมายเข้าตรวจ',
    date: '4 พฤศจิกายน 2565 · 10:00 น.'
  },
  {
    img: Images.Avatar,
    type: 'doctor',
    isActive: true,
    name: 'นทพญ.ปวีณา ขำดำ',
    description: 'นัดหมายเข้าตรวจ',
    contactType: 'video',
    date: '4 พฤศจิกายน 2565 · 10:00 น.'
  }
]

const ComingTab: React.FC<ILoadingProps> = ({loading}) => {
  const Items: ListRenderItem<IActivityItems> = ({item}) => {
    const {date, description, img, isActive, name, type, contactType} = item
    return (
      <>
        <View style={ComingTabStyles.subContainer}>
          <View style={ComingTabStyles.nameContainer}>
            {type === 'doctor' ? (
              <Avartar
                image={img}
                isActive={isActive}
                sizeImage={64}
                sizeActiveIn={12}
                sizeActiveOut={24}
              />
            ) : (
              <FastImage
                source={img}
                style={ComingTabStyles.imgClinic}
                resizeMode="contain"
              />
            )}
            <View style={ComingTabStyles.containerIntroduce}>
              <TextHealthCare textType="bold" style={ComingTabStyles.fontName}>
                {name}
              </TextHealthCare>
              <TextHealthCare style={ComingTabStyles.fontDescription}>
                {description}
              </TextHealthCare>
              <View style={ComingTabStyles.containerDate}>
                <IconBounceIn
                  image={Icons.calendarOutline}
                  width={16}
                  hight={16}
                  color={colors.greyColorsGrey400}
                />
                <TextHealthCare style={ComingTabStyles.date}>{date}</TextHealthCare>
              </View>
            </View>
          </View>
          <View>
            {type === 'doctor' && contactType === 'chat' ? (
              <BadgeStatus title="$chat" fontSize={12} height={24} width={46} />
            ) : type === 'doctor' && contactType === 'video' ? (
              <BadgeStatus
                title="$videoCall"
                fontSize={12}
                height={24}
                width={72}
                bgColor={colors.blue50}
                fontColor={colors.blue600}
              />
            ) : (
              <IconWithRounder source={Icons.map} iconColor={colors.blue600} />
            )}
          </View>
        </View>
        <View
          style={[
            ComingTabStyles.line,
            {
              borderColor: colors.greyColorsGrey100
            }
          ]}
        />
      </>
    )
  }

  return (
    <>
      {loading ? (
        <LottieAnimatedView
          exiting={keyframes.fadeOutSize}
          lottiePath={lottie.skeletonComingTab}
          lottieStyle={skeletionLoadingStyle}
          lottieContainer={skeletionLoadingContainerStyle({
            width: horizontalScale(328),
            height: verticalScale(306.44),
            marginHorizontal: horizontalScale(24)
          })}
        />
      ) : (
        <FlatList
          data={MOCK as []}
          style={ComingTabStyles.container}
          scrollEnabled={false}
          renderItem={Items}
        />
      )}
    </>
  )
}

export default ComingTab
